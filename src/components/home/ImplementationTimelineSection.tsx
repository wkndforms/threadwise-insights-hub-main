import { Clock, CheckCircle, Rocket, Users, Settings, BarChart3 } from "lucide-react";

export const ImplementationTimelineSection = () => {
  const timelineSteps = [
    {
      day: "Day 1",
      title: "Quick Setup",
      description: "Connect your forums and configure basic settings",
      icon: Settings,
      duration: "2 hours",
      yourPart: "Provide forum URLs and team contacts",
      ourPart: "Configure AI models and integrations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      day: "Day 2-3",
      title: "Team Onboarding",
      description: "Train your team and customize workflows",
      icon: Users,
      duration: "1 day",
      yourPart: "Attend 30-min training session",
      ourPart: "Custom workflow setup and team training",
      color: "from-purple-500 to-pink-500"
    },
    {
      day: "Day 4-7",
      title: "Live Monitoring",
      description: "Forum Scout starts monitoring and routing questions",
      icon: Rocket,
      duration: "Immediate",
      yourPart: "Respond to nudges in Slack/Teams",
      ourPart: "24/7 monitoring and intelligent routing",
      color: "from-green-500 to-emerald-500"
    },
    {
      day: "Day 14",
      title: "First Results",
      description: "See measurable improvements in response rates",
      icon: BarChart3,
      duration: "Ongoing",
      yourPart: "Review analytics and feedback",
      ourPart: "Optimization and performance reports",
      color: "from-orange-500 to-red-500"
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: "24-Hour Setup",
      description: "From signup to first question routed"
    },
    {
      icon: CheckCircle,
      title: "7-Day Results",
      description: "Measurable improvement in response times"
    },
    {
      icon: Rocket,
      title: "Zero Downtime",
      description: "No disruption to your existing forums"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50/30 via-background to-blue-50/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-100/80 border border-green-200/50 mb-6">
            <Clock className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-semibold text-lg">Implementation Timeline</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-600 text-transparent bg-clip-text">
              From Setup to Success
            </span>
            <br />
            <span className="text-foreground">In Just 2 Weeks</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            See results faster than you thought possible. <span className="font-bold text-green-600">Most teams see 50%+ improvement</span> in the first week.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid gap-8 md:gap-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting line (except for last item) */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-32 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-muted-foreground/30 to-transparent"></div>
                )}
                
                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm font-medium mb-4">
                      <Clock className="h-4 w-4" />
                      {step.day}
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50/50 border border-blue-200/50 rounded-xl p-4">
                        <h4 className="font-semibold text-blue-700 mb-2">Your Part:</h4>
                        <p className="text-sm text-blue-600">{step.yourPart}</p>
                      </div>
                      
                      <div className="bg-green-50/50 border border-green-200/50 rounded-xl p-4">
                        <h4 className="font-semibold text-green-700 mb-2">We Handle:</h4>
                        <p className="text-sm text-green-600">{step.ourPart}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative">
                      <div className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br ${step.color} shadow-2xl flex items-center justify-center relative overflow-hidden group hover:scale-110 transition-transform duration-300`}>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                        <step.icon className="h-16 w-16 md:h-20 md:w-20 text-white relative z-10" />
                      </div>
                      
                      {/* Duration badge */}
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-card border border-muted-foreground/20 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Our Implementation Guarantees
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <guarantee.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-foreground">
                    {guarantee.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-green-100/80 border border-green-200/50 rounded-2xl p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-bold text-green-800 mb-2">
                  Not seeing results in 14 days?
                </h4>
                <p className="text-green-700">
                  We'll work with you until you do, or provide a full refund. That's our promise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 