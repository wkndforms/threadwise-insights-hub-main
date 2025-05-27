import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { QuickDemoSection } from "@/components/home/QuickDemoSection";
import { ResultsSection } from "@/components/home/ResultsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { ImplementationTimelineSection } from "@/components/home/ImplementationTimelineSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CtaSection } from "@/components/home/CtaSection";
import { LeadCaptureForm } from "@/components/lead-capture/LeadCaptureForm";
import { useLeadCapture } from "@/hooks/use-lead-capture";

export default function Home() {
  const { isLeadFormOpen, setIsLeadFormOpen, leadSource, openLeadForm } = useLeadCapture();
  
  return (
    <>
      <HeroSection openLeadForm={openLeadForm} />
      <ProblemSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="demo">
        <QuickDemoSection openLeadForm={openLeadForm} />
      </section>
      <ResultsSection />
      <section id="pricing">
        <PricingSection openLeadForm={openLeadForm} />
      </section>
      <ImplementationTimelineSection />
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
