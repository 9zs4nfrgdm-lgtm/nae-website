const email = "service@newcastleapplianceexperts.com.au";
export const workshopDetails = {
  streetAddress: "Unit 11, 5 Walker Street",
  locality: "Warners Bay",
  region: "NSW",
  address: "Unit 11, 5 Walker Street, Warners Bay NSW",
  hours: "Monday–Friday, 9:00 am–4:00 pm",
} as const;
export type RepairEnquiryDetails = {
  customerName: string;
  mobile: string;
  customerEmail: string;
  suburb: string;
  streetAddress?: string;
  applianceType: string;
  brand: string;
  modelNumber?: string;
  serialNumber?: string;
  productCode?: string;
  approximateAge?: string;
  errorCode?: string;
  faultDescription: string;
  faultStarted?: string;
  alreadyTried?: string;
};

export type DelonghiServiceRequestDetails = {
  customerName: string;
  mobile: string;
  customerEmail: string;
  suburb: string;
  streetAddress?: string;
  productType: string;
  modelNumber: string;
  serialNumber?: string;
  serviceType: string;
  faultDescription: string;
  purchaseDate?: string;
  purchasedFrom?: string;
  crmNumber?: string;
  errorCode?: string;
  otherInformation?: string;
};

export function createDelonghiServiceEmailHref(
  details: DelonghiServiceRequestDetails,
) {
  const subject = `De'Longhi Repair - ${details.modelNumber} - ${details.customerName}`;
  const section = (
    heading: string,
    fields: Array<[string, string | undefined]>,
  ) => {
    const populatedFields = fields
      .filter(([, value]) => value?.trim())
      .map(([label, value]) => `${label}:\n${value?.trim()}`);

    return [heading, ...populatedFields].join("\n\n");
  };
  const body = [
    section("CUSTOMER DETAILS", [
      ["Customer name", details.customerName],
      ["Mobile number", details.mobile],
      ["Email", details.customerEmail],
      ["Suburb", details.suburb],
      ["Street address", details.streetAddress],
    ]),
    section("PRODUCT DETAILS", [
      ["De'Longhi product type", details.productType],
      ["Model number", details.modelNumber],
      ["Serial number", details.serialNumber],
    ]),
    section("PURCHASE / WARRANTY DETAILS", [
      ["Repair type", details.serviceType],
      ["Date of purchase", details.purchaseDate],
      ["Purchased from", details.purchasedFrom],
      ["De'Longhi CRM number", details.crmNumber],
    ]),
    section("FAULT DETAILS", [
      ["Error code", details.errorCode],
      ["Detailed fault description", details.faultDescription],
      ["Other relevant information", details.otherInformation],
    ]),
    "Attachments: Please attach your proof of purchase, a clear photo of the model/serial label, and any other relevant photos or documents before sending.",
    `What happens next: As soon as you've sent this email to ${email}, you can drop your De’Longhi product off at ${workshopDetails.address}, ${workshopDetails.hours}. You do not need to call, make an appointment or wait for your job number before bringing it in. We'll email your confirmation and job number within a few hours during business hours, or the next business day if submitted outside business hours.`,
  ].join("\n\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function createRepairEnquiryEmailHref(details: RepairEnquiryDetails) {
  const subject = `Appliance Repair Enquiry - ${details.brand} ${details.applianceType}`;
  const fields: Array<[string, string | undefined]> = [
    ["Customer name", details.customerName],
    ["Phone", details.mobile],
    ["Email", details.customerEmail],
    ["Suburb", details.suburb],
    ["Street address", details.streetAddress],
    ["Appliance type", details.applianceType],
    ["Brand", details.brand],
    ["Model number", details.modelNumber],
    ["Serial number", details.serialNumber],
    ["Variant / PNC / product code", details.productCode],
    ["Approximate age", details.approximateAge],
    ["Error code", details.errorCode],
    ["Fault description", details.faultDescription],
    ["When the fault started", details.faultStarted],
    ["Anything already tried", details.alreadyTried],
  ];
  const body = [
    ...fields
      .filter(([, value]) => value?.trim())
      .map(([label, value]) => `${label}:\n${value?.trim()}`),
    "Photos: Before sending, please attach a clear photo of the model/serial label and any photos or videos that may help us prepare for the appropriate service.",
  ].join("\n\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const contactDetails = {
  phoneDisplay: "02 4095 9095",
  phoneHref: "tel:+61240959095",
  telephone: "+61240959095",
  email,
  emailHref: `mailto:${email}?subject=${encodeURIComponent(
    "Enquiry - Newcastle Appliance Experts",
  )}`,
} as const;
