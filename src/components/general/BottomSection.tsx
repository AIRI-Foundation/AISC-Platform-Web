import TrustedBy from "../general/IndividualComponents/TrustedBy";
import FAQ from "../general/IndividualComponents/Faq";
import { faqItems } from "../data/FaqData";

export default function BottomSection() {
  return (
    <section>
      <TrustedBy />
      <FAQ items={faqItems} />
    </section>      
  );
}