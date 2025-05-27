import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Users, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  openLeadForm: (source: string) => void;
}

export const HeroSection = ({ openLeadForm }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Introducing Forum Scout
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl bg-gradient-to-r from-primary via-forumscout-purple to-forumscout-accent-blue text-transparent bg-clip-text leading-tight">
            Smart monitoring for your forums. Leave no question unanswered.
            </h1>
            <p className="text-muted-foreground text-base md:text-xl max-w-[600px] leading-relaxed">
              Forum Scout intelligently routes unanswered community questions to the right internal experts, fostering rapid responses and sky-high engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark hover:opacity-90 shadow-lg min-h-[48px]"
                onClick={() => openLeadForm("hero-cta")}
              >
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="min-h-[48px]"
                asChild
              >
                <a href="/#how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>
          <div className="relative lg:ml-auto animate-scale-in">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-tr from-forumscout-purple-light/30 to-forumscout-navy-light/20 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-xl border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  <div className="flex flex-col items-center text-center p-3 md:p-4 bg-card/50 rounded-lg">
                    <div className="bg-forumscout-accent-green/20 text-forumscout-accent-green p-2 md:p-3 rounded-full">
                      <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-forumscout-accent-green mt-2">97%</div>
                    <div className="text-xs text-muted-foreground">Resolution Rate</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 md:p-4 bg-card/50 rounded-lg">
                    <div className="bg-forumscout-accent-blue/20 text-forumscout-accent-blue p-2 md:p-3 rounded-full">
                      <Users className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-forumscout-accent-blue mt-2">4.2h</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 md:p-4 bg-card/50 rounded-lg">
                    <div className="bg-forumscout-accent-orange/20 text-forumscout-accent-orange p-2 md:p-3 rounded-full">
                      <TrendingUp className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-forumscout-accent-orange mt-2">110%+</div>
                    <div className="text-xs text-muted-foreground">Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
