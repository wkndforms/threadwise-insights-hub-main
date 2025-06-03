import { Monitor, Brain, Zap, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HowItWorksSectionProps {
  openLeadForm: (source: string) => void;
}

export const HowItWorksSection = ({ openLeadForm }: HowItWorksSectionProps) => {
  const steps = [
    {
      number: "1",
      title: "Connect",
      subtitle: "Link your community platforms in seconds",
      description: "Connect Reddit, Discord, forums, and support channels. Our AI starts monitoring instantly.",
      icon: Monitor,
      color: "trupeer-purple",
      mockup: "Platform connection interface"
    },
    {
      number: "2", 
      title: "Analyze",
      subtitle: "AI identifies questions and expert matches",
      description: "Smart algorithms categorize questions and match them to your internal experts automatically.",
      icon: Brain,
      color: "trupeer-blue", 
      mockup: "AI analysis dashboard"
    },
    {
      number: "3",
      title: "Route",
      subtitle: "Experts get notified and respond fast",
      description: "Your team gets targeted alerts with context. Questions get answered, engagement soars.",
      icon: Zap,
      color: "trupeer-green",
      mockup: "Notification and response flow"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-trupeer-gray-50/50">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            How Forum Scout works
          </h2>
          <p className="text-xl text-trupeer-gray-600 leading-relaxed">
            Picture perfect forum monitoring in <span className="font-semibold text-trupeer-purple-600">1, 2 & 3</span>
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-12 lg:gap-20">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-6xl font-bold text-${step.color}-500 opacity-20`}>
                    {step.number}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-trupeer-gray-600 font-medium">
                      {step.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-trupeer-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {index === steps.length - 1 && (
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 hover:from-trupeer-purple-700 hover:to-trupeer-blue-700 text-white font-semibold px-6 py-3"
                      onClick={() => openLeadForm("how-it-works-cta")}
                    >
                      Get started now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Visual/Mockup */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-trupeer-gray-200">
                    {/* Mockup header */}
                    <div className="bg-trupeer-gray-50 px-4 py-3 border-b border-trupeer-gray-200 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-xs text-trupeer-gray-500">
                          Step {step.number}
                        </div>
                      </div>
                    </div>
                    
                    {/* Placeholder content */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-white to-trupeer-gray-50 flex items-center justify-center p-8">
                      <div className="text-center space-y-4">
                        <div className={`w-12 h-12 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-lg mx-auto flex items-center justify-center`}>
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-trupeer-gray-800">
                            Screenshot Needed
                          </h4>
                          <p className="text-sm text-trupeer-gray-600 max-w-xs">
                            {step.mockup}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -inset-4 bg-gradient-to-r from-${step.color}-500/10 to-${step.color}-600/10 rounded-3xl -z-10 blur-xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-trupeer-gray-200">
          <div className="space-y-4">
            <p className="text-trupeer-gray-600">
              Ready to transform your community engagement?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 hover:from-trupeer-purple-700 hover:to-trupeer-blue-700 text-white font-semibold px-8 py-3"
                onClick={() => openLeadForm("how-it-works-bottom-cta")}
              >
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-trupeer-gray-300 text-trupeer-gray-700 hover:bg-trupeer-gray-50 font-semibold px-8 py-3"
                asChild
              >
                <a href="/#demo" className="inline-flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  Watch demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 