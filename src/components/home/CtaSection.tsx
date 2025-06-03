import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  openLeadForm: (source: string) => void;
}

export function CtaSection({ openLeadForm }: CtaSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-forumscout-purple/10 to-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl leading-tight">
            Ready to Revolutionize Your Forum Engagement?
          </h2>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed px-2">
            See how Forum Scout can help your team answer more questions, faster, and build a more vibrant, supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark hover:opacity-90 min-h-[48px] text-sm md:text-base"
              onClick={() => openLeadForm("cta-request-demo")}
            >
              Request a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="min-h-[48px] text-sm md:text-base"
              onClick={() => openLeadForm("cta-contact-info")}
            >
              Contact Us for More Info
            </Button>
          </div>
          <div className="text-xs md:text-sm text-muted-foreground pt-2">
            <a href="/about" className="hover:text-foreground transition-colors">
              Explore the Original Research →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
