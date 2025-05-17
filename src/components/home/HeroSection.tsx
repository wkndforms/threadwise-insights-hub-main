import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  openLeadForm: (source: string) => void;
}

export const HeroSection = ({ openLeadForm }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Introducing Threadwise
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Never miss an unanswered forum question again
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[600px]">
              Smart monitoring for your forums that alerts you about unanswered questions and helps you improve response rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90"
                onClick={() => openLeadForm("hero-cta")}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
              >
                <Link to="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:ml-auto animate-scale-in">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-tr from-threadwise-purple-light/30 to-threadwise-navy-light/20 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/10">
                <div className="rounded-lg bg-card shadow-lg p-4 mb-4">
                  <div className="h-2 w-1/2 bg-primary/20 rounded-full mb-2"></div>
                  <div className="flex items-center mt-3">
                    <div className="bg-threadwise-accent-green/20 text-threadwise-accent-green p-1 rounded-full">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div className="ml-2 h-2 w-12 bg-primary/20 rounded-full"></div>
                    <div className="ml-auto h-2 w-20 bg-primary/10 rounded-full"></div>
                  </div>
                </div>
                <div className="rounded-lg bg-card shadow-lg p-4 mb-4">
                  <div className="h-2 w-3/4 bg-primary/20 rounded-full mb-2"></div>
                  <div className="flex items-center mt-3">
                    <div className="bg-threadwise-accent-blue/20 text-threadwise-accent-blue p-1 rounded-full">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div className="ml-2 h-2 w-16 bg-primary/20 rounded-full"></div>
                    <div className="ml-auto h-2 w-12 bg-primary/10 rounded-full"></div>
                  </div>
                </div>
                <div className="rounded-lg bg-card shadow-lg p-4">
                  <div className="h-2 w-2/3 bg-primary/20 rounded-full mb-2"></div>
                  <div className="flex items-center mt-3">
                    <div className="bg-threadwise-accent-orange/20 text-threadwise-accent-orange p-1 rounded-full">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div className="ml-2 h-2 w-10 bg-primary/20 rounded-full"></div>
                    <div className="ml-auto h-2 w-16 bg-primary/10 rounded-full"></div>
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
