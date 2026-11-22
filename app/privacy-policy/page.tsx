import LegalPage from "@/components/legal-page";
import { contactDetails, workshopDetails } from "@/lib/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({
    title: "Privacy Policy",
    description: "How JGOC Pty. Ltd. (ABN 50 692 960 704), trading as Newcastle Appliance Experts, handles information for appliance repair enquiries and service.",
    path: "/privacy-policy",
  }),
  robots: { index: false },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This policy explains how JGOC Pty. Ltd. (ABN 50 692 960 704), trading as Newcastle Appliance Experts, handles personal information when you contact us or arrange appliance service.</p>
      <section>
        <h2>Information you provide</h2>
        <p>We may receive your name, phone number, email address, suburb and service address, along with the appliance type, model, serial number and fault details. Repair registrations may also include purchase details, proof of purchase and a manufacturer or service reference number. You may send photos, videos or documents to help us assess the job.</p>
        <p>When you submit a repair enquiry or registration on our website, we receive your details and any photos or documents you upload through the form. Please share only what we need for the job.</p>
      </section>
      <section>
        <h2>How we use and share information</h2>
        <p>We use the details you send to respond to your enquiry, recommend the right service, arrange a workshop repair or home visit, and keep you updated. We also use them to prepare quotes, handle warranty requests and keep a record of the job. We may share relevant personal information with third-party partners, manufacturers and service providers, including providers of AI tools, to help us assess repairs, arrange service, process warranty claims and manage repair enquiries and jobs.</p>
        <p>We use Gmail to receive and manage service emails and attachments.</p>
      </section>
      <section>
        <h2>Website analytics and tracking</h2>
        <p>We currently do not use visitor analytics or advertising trackers on this website. Our website host may process technical information such as IP addresses, browser details and page requests to deliver and protect the site.</p>
      </section>
      <section>
        <h2>Promotions, newsletters and reviews</h2>
        <p>We may use your contact details to invite you to review your service. With your consent, we may also send promotions and newsletters. We may use email, SMS and third-party messaging or review platforms for these communications. You can opt out of marketing by using the unsubscribe instructions in the message.</p>
      </section>
      <section>
        <h2>How long we keep information</h2>
        <p>We retain customer emails and repair records for service history and follow-up. We currently have no fixed schedule for deleting these records.</p>
      </section>
      <section>
        <h2>Access, correction and complaints</h2>
        <p>To ask for access to or correction of your personal information, or to raise a privacy concern, email <a href={contactDetails.emailHref}>{contactDetails.email}</a> or call <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>. You can also write to us at {workshopDetails.address}. Include enough detail for us to identify your enquiry or repair job and respond.</p>
      </section>
    </LegalPage>
  );
}
