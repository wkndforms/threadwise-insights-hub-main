import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CtaSection } from "@/components/home/CtaSection";
import { LeadCaptureForm } from "@/components/lead-capture/LeadCaptureForm";
import { useLeadCapture } from "@/hooks/use-lead-capture";

export default function Home() {
  const { isLeadFormOpen, setIsLeadFormOpen, leadSource, openLeadForm } = useLeadCapture();
  
  return (
    <>
      <HeroSection openLeadForm={openLeadForm} />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <CtaSection openLeadForm={openLeadForm} />
      <LeadCaptureForm 
        isOpen={isLeadFormOpen}
        setIsOpen={setIsLeadFormOpen}
        source={leadSource}
      />
    </>
  );
}
