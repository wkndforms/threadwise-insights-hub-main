import { Play, MessageSquare, ArrowRight, Zap, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickDemoSectionProps {
  openLeadForm: (source: string) => void;
}

export const QuickDemoSection = ({ openLeadForm }: QuickDemoSectionProps) => {
  const demoSteps = [
    {
      step: 1,
      title: "Question Detected",
      description: "AI spots unanswered questions",
      icon: MessageSquare,
      color: "from-forumscout-primary-500 to-forumscout-primary-600"
    },
    {
      step: 2,
      title: "Smart Routing",
      description: "Finds the right expert instantly",
      icon: Zap,
      color: "from-forumscout-secondary-500 to-forumscout-secondary-600"
    },
    {
      step: 3,
      title: "Quick Response",
      description: "Expert gets notified and responds",
      icon: CheckCircle,
      color: "from-forumscout-success-500 to-forumscout-success-600"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-forumscout-primary-50 via-background to-forumscout-secondary-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-forumscout-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-forumscout-secondary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Mobile-optimized header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-forumscout-success-100 border border-forumscout-success-200 mb-4 md:mb-6">
            <Play className="h-4 w-4 md:h-5 md:w-5 text-forumscout-success-600" />
            <span className="text-forumscout-success-700 font-semibold text-sm md:text-lg">See It In Action</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-forumscout-primary-600 via-forumscout-secondary-600 to-forumscout-primary-600 text-transparent bg-clip-text">
              How It Works
            </span>
            <br />
            <span className="text-foreground">In 3 Simple Steps</span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-2">
            Watch Forum Scout transform chaos into customer success
            <br className="hidden md:block" />
            <span className="font-bold text-forumscout-primary-600"> in under 24 hours</span>
          </p>
        </div>

        {/* Mobile-optimized demo steps */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto mb-8 md:mb-16">
          {demoSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting arrow for desktop only */}
              {index < demoSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-forumscout-primary-500 opacity-60" />
                </div>
              )}
              
              <div className="relative bg-white border-2 border-forumscout-neutral-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 min-h-[240px] md:min-h-[280px] flex flex-col justify-between">
                {/* Step number */}
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-forumscout-primary-600 to-forumscout-secondary-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold shadow-lg">
                  {step.step}
                </div>
                
                <div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-optimized CTA section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-forumscout-primary-50 to-forumscout-secondary-50 border border-forumscout-primary-200 rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Clock className="h-6 w-6 md:h-8 md:w-8 text-forumscout-primary-600" />
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-foreground leading-tight">
              Ready to See Results?
            </h3>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
              Join hundreds of teams already using Forum Scout.
              <br className="hidden md:block" />
              <span className="font-bold text-forumscout-success-600">Start your free trial today.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-forumscout-primary-600 to-forumscout-secondary-600 hover:from-forumscout-primary-700 hover:to-forumscout-secondary-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto min-h-[48px]"
                onClick={() => openLeadForm('demo-watch-demo')}
              >
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Watch Demo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-forumscout-primary-300 hover:border-forumscout-primary-400 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full sm:w-auto min-h-[48px]"
                onClick={() => openLeadForm('demo-learn-more')}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
            
            <div className="mt-6 md:mt-8 text-xs md:text-sm text-muted-foreground">
              <p>✓ No credit card required  ✓ Setup in minutes  ✓ Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 