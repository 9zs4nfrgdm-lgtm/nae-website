const email = "service@newcastleapplianceexperts.com.au";
export const workshopDetails = {
  streetAddress: "Unit 11, 5 Walker Street",
  locality: "Warners Bay",
  region: "NSW",
  address: "Unit 11, 5 Walker Street, Warners Bay NSW",
  hours: "Monday–Friday, 9:00 am–4:00 pm",
} as const;
export const contactDetails = {
  phoneDisplay: "02 4095 9095",
  phoneHref: "tel:+61240959095",
  telephone: "+61240959095",
  email,
  emailHref: `mailto:${email}?subject=${encodeURIComponent(
    "Enquiry - Newcastle Appliance Experts",
  )}`,
} as const;
