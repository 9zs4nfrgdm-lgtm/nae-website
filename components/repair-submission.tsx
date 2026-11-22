"use client";

import { useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { attachmentHelp, attachmentTypes, maxAttachments, maxAttachmentBytes } from "@/lib/repair-submission";

export function AttachmentInput() {
  return (
    <label className="mt-4 block text-sm font-semibold text-slate-200">
      Upload photos or documents (optional)
      <input className="mt-2 block w-full rounded-lg border border-slate-600 p-2 file:mr-3 file:rounded file:border-0 file:bg-slate-200 file:px-3 file:py-2 file:text-slate-950" type="file" name="attachments" multiple accept=".jpg,.jpeg,.png,.webp,.pdf" aria-describedby="attachment-help" />
      <span id="attachment-help" className="mt-2 block font-normal text-slate-300">{attachmentHelp}</span>
    </label>
  );
}

const subscribeToHydration = () => () => {};
const clientIsReady = () => true;
const serverIsReady = () => false;

export function useRepairSubmission(kind: "repair" | "manufacturer", successMessage: string, onSuccess?: () => void) {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const ready = useSyncExternalStore(subscribeToHydration, clientIsReady, serverIsReady);
  const inFlight = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready || inFlight.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const files = data.getAll("attachments").filter((value): value is File => value instanceof File && value.name !== "");
    setSent(false);
    if (files.length > maxAttachments || files.reduce((total, file) => total + file.size, 0) > maxAttachmentBytes) {
      setMessage(attachmentHelp);
      return;
    }
    if (files.some((file) => !attachmentTypes.includes(file.type) || !file.size)) {
      setMessage("Please choose non-empty JPG, PNG, WebP or PDF files.");
      return;
    }

    // FormData includes an empty part when no file is selected.
    data.delete("attachments");
    for (const file of files) data.append("attachments", file);
    data.set("kind", kind);
    inFlight.current = true;
    setPending(true);
    setMessage("");
    try {
      const response = await fetch("/api/repair-submissions", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        setMessage(result.message || "We couldn't send your request. Please try again or call us.");
        return;
      }
      form.reset();
      onSuccess?.();
      setSent(true);
      setMessage(successMessage);
    } catch {
      setMessage("We couldn't send your request. Please try again or call us.");
    } finally {
      inFlight.current = false;
      setPending(false);
    }
  }

  return { handleSubmit, message, pending, sent, ready };
}
