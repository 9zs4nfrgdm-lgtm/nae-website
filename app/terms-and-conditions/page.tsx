import LegalPage from "@/components/legal-page";
import { contactDetails, workshopDetails } from "@/lib/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({
    title: "Terms & Conditions",
    description: "Service terms for Newcastle Appliance Experts workshop and on-site appliance repairs.",
    path: "/terms-and-conditions",
  }),
  robots: { index: false },
};

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions">
      <section>
        <h2>Enquiries, drop-offs and on-site visits</h2>
        <p>JGOC Pty. Ltd. (ABN 50 692 960 704), trading as Newcastle Appliance Experts, provides appliance assessment and repair services in Newcastle and Lake Macquarie, NSW. An enquiry or online registration starts the intake process. Service arrangements and any charges are confirmed for the job.</p>
        <p>If your repair registration directs you to workshop drop-off, you can bring the appliance to {workshopDetails.address}, {workshopDetails.hours}. You can drop it off before receiving your job number. Assessment takes place after check-in. For other appliances, contact us to confirm whether workshop service or an on-site visit is suitable. For an on-site visit, please provide safe access to the appliance at the agreed time.</p>
      </section>
      <section>
        <h2>Assessment, quotes and approval</h2>
        <p>All prices shown include GST. Small-appliance inspections at our workshop start at $90. This includes the first 30 minutes of work on your appliance, including diagnosis and any repair we can complete in that time. If more time is needed, we charge $30 for each additional 15-minute block.</p>
        <p>In-home repairs start at $185. This covers most standard repairs. More involved jobs, such as replacing a rear tub, bearings or a compressor, or carrying out a deep clean, cost more. Parts are charged separately for both workshop and in-home repairs.</p>
        <p>Symptoms and error codes help us prepare. An inspection may be needed to identify the fault and confirm repair options. For paid work, we will tell you the workshop assessment fee or on-site call-out fee and what it covers before you agree. We will explain whether the fee is credited toward an approved repair and what you would owe if you decline the repair or it cannot proceed. At workshop drop-off, we may be able to give you a rough estimate and ask if you would like us to proceed. Otherwise, we will contact you with a quote after inspecting your appliance and wait for your approval before starting the repair. If the work or price changes from what you approved, we will contact you for approval before proceeding.</p>
        <p>If you need to cancel or reschedule, please contact us as soon as possible.</p>
      </section>
      <section>
        <h2>Refurbished parts and saved data</h2>
        <p>If a new part is no longer available from the manufacturer, we may offer a refurbished part. We will tell you if the proposed part is refurbished and get your approval before fitting it.</p>
        <p>Repairing a smart appliance may require a reset. A repair or reset may erase data stored on the appliance, such as saved settings, profiles or Wi-Fi details. If your appliance lets you back up your settings or data, please do so before the repair.</p>
        <p>When a written repair notice is required, we will give it to you before accepting the appliance for repair. For workshop repairs, we provide it with the intake paperwork or with the quote if you initially bring the appliance in for assessment only. For in-home repairs, we provide it with the quote or booking confirmation before you agree to proceed.</p>
      </section>
      <section>
        <h2>Payments</h2>
        <p>For workshop jobs, the inspection fee is payable upfront. If we need to order parts for your repair, payment for those parts is due before we place the order. Any remaining balance is due when you collect the appliance.</p>
        <p>For in-home jobs, payment is due at the end of the visit. If we need to order parts, payment for those parts is due before we place the order.</p>
      </section>
      <section>
        <h2>Turnaround and collection</h2>
        <p>We assess most appliances within three business days of checking them in at the workshop. If the fault comes and goes, we may need more time to reproduce it.</p>
        <p>We keep a wide range of parts in stock. When we send your quote, we will tell you how long we expect the repair to take based on the work involved and whether the parts are available.</p>
        <p>We will contact you when your appliance is ready to collect. We will hold your appliance for at least three months after completing the repair. If you need more time or someone else will collect it for you, please get in touch so we can make arrangements.</p>
        <p>If you decline the repair or we find that the appliance cannot be repaired, the agreed inspection fee is still payable. You can collect the appliance or give us permission to recycle it. If you decline the repair and do not ask us to recycle the appliance, we will hold it for at least three months from the date you decline. If we cannot repair it and you do not ask us to recycle it, we will hold it for at least three months from when we let you know it is ready to collect.</p>
        <p>If your appliance remains uncollected, we may sell or otherwise dispose of it only as permitted by the <em>Uncollected Goods Act 1995</em> (NSW), after giving any required notice and allowing the applicable collection period.</p>
      </section>
      <section>
        <h2>Warranty and Australian Consumer Law</h2>
        <p>For paid repairs, we offer a 30-day warranty on our repair labour and a 12-month warranty on most parts we supply and fit. Both warranties start when you collect the appliance after a workshop repair or when we complete an in-home repair. Refurbished parts usually come with the same 12-month parts warranty. The labour and parts warranties cover defects in the work performed or the parts supplied.</p>
        <p>These warranties do not apply to an assessment where no fault was found and no repair was carried out. They do not cover faults caused by normal wear and tear, misuse, lack of maintenance or damage from vermin. To make a warranty claim, please get in touch and tell us what has happened. If you have your job number, please include it so we can find your repair record. If we confirm that the fault is covered, we will fix it and cover the cost of the parts, labour or both, depending on what the warranty covers.</p>
        <p>For workshop warranty claims, please contact us before bringing the appliance back. You arrange the return to our workshop. For a covered in-home repair, we will arrange and cover the cost of the return visit. Any rights you have under the Australian Consumer Law, including rights relating to reasonable return costs, still apply.</p>
        <p>For a manufacturer warranty assessment, include your proof of purchase and any manufacturer or service reference number you have. When we handle a repair under a manufacturer’s warranty, that manufacturer’s warranty terms govern the claim and take precedence over these terms to the extent they conflict. Your rights and remedies under the Australian Consumer Law still apply. If paid work is proposed, the applicable charges will be explained before you decide whether to proceed.</p>
        <p>Nothing in these terms limits any rights or remedies that cannot be excluded under the Australian Consumer Law. Where the consumer guarantees apply, services must be provided with due care and skill, be fit for a disclosed purpose where applicable, and be supplied within a reasonable time if no time is agreed.</p>
      </section>
      <section>
        <h2>Questions and service concerns</h2>
        <p>Contact <a href={contactDetails.emailHref}>{contactDetails.email}</a> or call <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>. If you have a job number, include it so we can find your service record.</p>
      </section>
    </LegalPage>
  );
}
