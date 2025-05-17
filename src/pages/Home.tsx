
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CtaSection } from "@/components/home/CtaSection";
import { LeadCaptureForm } from "@/components/lead-capture/LeadCaptureForm";
import { useLeadCapture } from "@/hooks/use-lead-capture";

export default function Home() {
  const { isLeadFormOpen, setIsLeadFormOpen, leadSource } = useLeadCapture();
  
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
      <LeadCaptureForm 
        isOpen={isLeadFormOpen}
        setIsOpen={setIsLeadFormOpen}
        source={leadSource}
      />
    </>
  );
}
