import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  openLeadForm: (source: string) => void;
}

export const CtaSection = ({ openLeadForm }: CtaSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-threadwise-purple/10 to-transparent">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Ready to improve your forum response rates?
          </h2>
          <p className="text-muted-foreground md:text-lg mb-8 max-w-[600px]">
            Join hundreds of companies that use Threadwise to stay on top of customer questions and improve satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90"
              onClick={() => openLeadForm("footer-cta")}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => openLeadForm("footer-contact")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
