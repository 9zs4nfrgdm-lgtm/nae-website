import { contactDetails } from "../../lib/contact";
import { attachmentHelp, attachmentTypes, maxAttachmentBytes, maxAttachments } from "../../lib/repair-submission";

type Context = {
  request: Request;
  env: { RESEND_API_KEY?: string; REPAIR_FROM_EMAIL?: string };
};

const commonFields = {
  customerName: "Name", mobile: "Mobile", email: "Email", suburb: "Suburb",
  streetAddress: "Street address", modelNumber: "Model", serialNumber: "Serial number",
  faultDescription: "Fault description", errorCode: "Error code",
};
const forms = {
  repair: {
    subject: "Website repair enquiry",
    fields: { ...commonFields, applianceType: "Appliance type", brand: "Brand", productCode: "Product code", approximateAge: "Approximate age", faultStarted: "When the fault started", alreadyTried: "Already tried" },
    required: ["customerName", "mobile", "email", "suburb", "faultDescription", "applianceType", "brand"],
  },
  manufacturer: {
    subject: "Website De’Longhi repair registration",
    fields: { ...commonFields, productType: "Product type", serviceType: "Repair type", purchaseDate: "Date of purchase", purchasedFrom: "Purchased from", crmNumber: "CRM number", otherInformation: "Other information" },
    required: ["customerName", "mobile", "email", "suburb", "faultDescription", "productType", "modelNumber", "serviceType"],
  },
};

function failure(message: string, status: number) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

function signatureMatches(bytes: Uint8Array, type: string) {
  const startsWith = (signature: number[], offset = 0) => signature.every((byte, index) => bytes[offset + index] === byte);
  switch (type) {
    case "image/jpeg": return startsWith([255, 216, 255]);
    case "image/png": return startsWith([137, 80, 78, 71, 13, 10, 26, 10]);
    case "image/webp": return startsWith([82, 73, 70, 70]) && startsWith([87, 69, 66, 80], 8);
    case "application/pdf": return startsWith([37, 80, 68, 70, 45]);
    default: return false;
  }
}

const extensions: Record<string, string> = {
  "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "application/pdf": "pdf",
};

export async function onRequestPost({ request, env }: Context) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return failure("Please submit from the website.", 403);
  }
  if (!env.RESEND_API_KEY || !env.REPAIR_FROM_EMAIL) {
    return failure("Online delivery is unavailable. Please call us to arrange a repair.", 503);
  }
  const contentLength = request.headers.get("content-length");
  const length = contentLength === null ? null : Number(contentLength);
  if (length !== null && (!Number.isSafeInteger(length) || length < 1 || length > maxAttachmentBytes + 128 * 1024)) {
    return failure(attachmentHelp, 413);
  }
  if (!request.headers.get("content-type")?.startsWith("multipart/form-data;") || !request.body) {
    return failure("Please submit the form with your repair details.", 400);
  }

  let data: FormData;
  try {
    let received = 0;
    const body = request.body.pipeThrough(new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        received += chunk.byteLength;
        if (received > maxAttachmentBytes + 128 * 1024) controller.error("Body too large");
        else controller.enqueue(chunk);
      },
    }));
    data = await new Response(body, { headers: { "content-type": request.headers.get("content-type")! } }).formData();
  } catch {
    return failure("We couldn't read your submission. Check the files and try again.", 400);
  }
  const kind = data.get("kind");
  if (kind !== "repair" && kind !== "manufacturer") return failure("Unknown repair form.", 400);

  const { fields, required, subject } = forms[kind];
  const values = new Map<string, string>();
  for (const name of Object.keys(fields)) {
    const value = data.get(name);
    if (value === null) continue;
    if (typeof value !== "string" || value.length > 5000) return failure("One of your answers is too long or invalid.", 400);
    values.set(name, value.trim());
  }
  const email = values.get("email") ?? "";
  if (data.get("consent") !== "on" || required.some((name) => !values.get(name)) ||
      email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return failure("Please complete the required fields and check your email address.", 400);
  }

  const files = data.getAll("attachments").filter((value) => typeof value === "string" || value.name !== "");
  if (files.length > maxAttachments || files.reduce((total, file) => total + (typeof file === "string" ? 0 : file.size), 0) > maxAttachmentBytes) {
    return failure(attachmentHelp, 413);
  }

  const attachments = [];
  for (const file of files) {
    if (typeof file === "string" || !file.size || !attachmentTypes.includes(file.type)) return failure(attachmentHelp, 400);
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (!signatureMatches(bytes, file.type)) return failure("One of your files does not match its file type.", 400);

    const chunks: string[] = [];
    for (let offset = 0; offset < bytes.length; offset += 8192) {
      chunks.push(String.fromCharCode(...bytes.subarray(offset, offset + 8192)));
    }
    attachments.push({ filename: `attachment-${attachments.length + 1}.${extensions[file.type]}`, content: btoa(chunks.join("")) });
  }

  const text = Object.entries(fields).filter(([name]) => values.get(name))
    .map(([name, label]) => `${label}: ${values.get(name)}`).join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: env.REPAIR_FROM_EMAIL, to: [contactDetails.email], reply_to: email, subject, text, attachments }),
      signal: AbortSignal.timeout(15000),
    });
    if (response.ok) return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    // Delivery could not be confirmed.
  }
  return failure("We couldn't confirm delivery. Please try again or call us.", 502);
}
