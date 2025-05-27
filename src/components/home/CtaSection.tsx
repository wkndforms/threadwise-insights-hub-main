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
            Ready to Revolutionize Your Forum Engagement?
          </h2>
          <p className="text-muted-foreground md:text-xl">
            See how Forum Scout can help your team answer more questions, faster, and build a more vibrant, supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark hover:opacity-90"
              onClick={() => openLeadForm("cta-request-demo")}
            >
              Request a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => openLeadForm("cta-contact-info")}
            >
              Contact Us for More Info
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <a href="/about" className="hover:text-foreground transition-colors">
              Explore the Original Research →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
