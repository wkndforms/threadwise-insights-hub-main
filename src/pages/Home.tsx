import { HeroSection } from "@/components/home/HeroSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { QuickDemoSection } from "@/components/home/QuickDemoSection";
import { ResultsSection } from "@/components/home/ResultsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { ImplementationTimelineSection } from "@/components/home/ImplementationTimelineSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CtaSection } from "@/components/home/CtaSection";
import { LeadCaptureForm } from "@/components/lead-capture/LeadCaptureForm";
import { useLeadCapture } from "@/hooks/use-lead-capture";
import { useMobile } from "@/hooks/use-mobile";

export default function Home() {
  const { isLeadFormOpen, setIsLeadFormOpen, leadSource, openLeadForm } = useLeadCapture();
  const isMobile = useMobile();
  
  return (
    <>
      {/* Hero Section - Trupeer style */}
      <HeroSection openLeadForm={openLeadForm} />
      
      {/* Before/After Comparison - Trupeer signature */}
      <BeforeAfterSection openLeadForm={openLeadForm} />
      
      {/* How It Works - Trupeer 1,2,3 process */}
      <section id="how-it-works">
        <HowItWorksSection openLeadForm={openLeadForm} />
      </section>
      
      {/* Features showcase */}
      <section id="features">
        <FeaturesSection isMobile={isMobile} />
      </section>
      
      {/* Demo section */}
      <section id="demo">
        <QuickDemoSection openLeadForm={openLeadForm} />
      </section>
      
      {/* Results/Social proof */}
      <ResultsSection isMobile={isMobile} openLeadForm={openLeadForm} />
      
      {/* Pricing */}
      <section id="pricing">
        <PricingSection openLeadForm={openLeadForm} />
      </section>
      
      {/* Implementation Timeline - Hide on mobile */}
      {!isMobile && <ImplementationTimelineSection openLeadForm={openLeadForm} />}
      
      {/* FAQ */}
      <section id="faq">
        <FAQSection isMobile={isMobile} />
      </section>
      
      {/* Final CTA */}
      <CtaSection openLeadForm={openLeadForm} />
      
      {/* Lead capture modal */}
      <LeadCaptureForm 
        isOpen={isLeadFormOpen}
        setIsOpen={setIsLeadFormOpen}
        source={leadSource}
      />
    </>
  );
}
