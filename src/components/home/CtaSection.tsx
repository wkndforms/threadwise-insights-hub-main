import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  openLeadForm: (source: string) => void;
}

export function CtaSection({ openLeadForm }: CtaSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-forumscout-purple/10 to-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Never Miss an Unanswered Question Again
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Join hundreds of companies that use ForumScout to stay on top of customer questions and improve satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark hover:opacity-90"
              onClick={() => openLeadForm("cta-free-trial")}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => openLeadForm("cta-contact-sales")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
