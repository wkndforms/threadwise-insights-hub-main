import { Search, Brain, Target, Bell, BarChart3, ArrowDown, CheckCircle } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Identify",
      description: "Forum Scout monitors your community for unanswered questions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Analyze",
      description: "Advanced LLMs dissect question content, topic, and sentiment.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Target,
      title: "Route",
      description: "Intelligently matches questions to the most relevant internal experts or teams.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bell,
      title: "Notify",
      description: "Delivers targeted, actionable 'nudges' in your team's preferred communication channels (e.g., Slack).",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Track",
      description: "Monitor response rates, resolution times, and engagement trends.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forumscout-accent-green/10 text-forumscout-accent-green text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Simple Setup, <span className="bg-gradient-to-r from-forumscout-purple to-forumscout-accent-blue text-transparent bg-clip-text">Powerful Results</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Forum Scout transforms your forum engagement with an intelligent, automated process that feels natural to your team.
          </p>
        </div>
        
        {/* Timeline Design */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-forumscout-purple via-forumscout-accent-blue to-forumscout-accent-green rounded-full opacity-30 hidden lg:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 lg:mb-24">
              {/* Step content */}
              <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
                
                {/* Icon side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    {/* Large gradient circle */}
                    <div className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br ${step.color} shadow-2xl flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                      <step.icon className="h-16 w-16 lg:h-20 lg:w-20 text-white relative z-10" />
                    </div>
                    
                    {/* Floating elements */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} opacity-60 animate-pulse`}></div>
                    <div className={`absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} opacity-40 animate-pulse delay-300`}></div>
                  </div>
                </div>
              </div>
              
              {/* Arrow connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-8 lg:mt-12">
                  <div className="bg-gradient-to-b from-forumscout-purple to-forumscout-accent-blue p-3 rounded-full shadow-lg">
                    <ArrowDown className="h-6 w-6 text-white animate-bounce" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-forumscout-purple/10 to-forumscout-accent-blue/10 border border-forumscout-purple/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to see it in action?
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the power of intelligent forum engagement firsthand.
            </p>
            <button className="bg-gradient-to-r from-forumscout-purple to-forumscout-accent-blue text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 