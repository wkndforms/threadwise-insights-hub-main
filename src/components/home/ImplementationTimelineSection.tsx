import { Clock, CheckCircle, Rocket, Users, Settings, BarChart3, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImplementationTimelineSectionProps {
  openLeadForm?: (source: string) => void;
}

export const ImplementationTimelineSection = ({ openLeadForm }: ImplementationTimelineSectionProps) => {
  const timelineSteps = [
    {
      day: "Day 1",
      title: "Quick Setup",
      description: "Connect your forums and configure basic settings",
      icon: Settings,
      duration: "2 hours",
      yourPart: "Provide forum URLs and team contacts",
      ourPart: "Configure AI models and integrations",
      color: "trupeer-purple"
    },
    {
      day: "Day 2-3",
      title: "Team Onboarding",
      description: "Train your team and customize workflows",
      icon: Users,
      duration: "1 day",
      yourPart: "Attend 30-min training session",
      ourPart: "Custom workflow setup and team training",
      color: "trupeer-blue"
    },
    {
      day: "Day 4-7",
      title: "Live Monitoring",
      description: "Forum Scout starts monitoring and routing questions",
      icon: Rocket,
      duration: "Immediate",
      yourPart: "Respond to nudges in Slack/Teams",
      ourPart: "24/7 monitoring and intelligent routing",
      color: "trupeer-green"
    },
    {
      day: "Day 14",
      title: "First Results",
      description: "See measurable improvements in response rates",
      icon: BarChart3,
      duration: "Ongoing",
      yourPart: "Review analytics and feedback",
      ourPart: "Optimization and performance reports",
      color: "trupeer-purple"
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
      icon: Shield,
      title: "Zero Risk",
      description: "30-day money-back guarantee"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-trupeer-gray-50/50">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-trupeer-green-100 border border-trupeer-green-200 px-4 py-2 text-sm font-medium text-trupeer-green-800">
            <Clock className="h-4 w-4 fill-current" />
            Implementation Timeline
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 bg-clip-text text-transparent">
              From Setup to Success
            </span>
            <br />
            <span className="text-gray-900">In Just 2 Weeks</span>
          </h2>
          
          <p className="text-xl text-trupeer-gray-600 leading-relaxed">
            See results faster than you thought possible. 
            <span className="font-semibold text-trupeer-green-600"> Most teams see 50%+ improvement</span> in the first week.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid gap-12 lg:gap-16">
            {timelineSteps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="bg-trupeer-gray-100 px-3 py-1 rounded-full text-sm font-medium text-trupeer-gray-700">
                      {step.day} • {step.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-lg text-trupeer-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Responsibility Cards */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-trupeer-blue-50 border border-trupeer-blue-200 rounded-xl p-4">
                      <h4 className="font-semibold text-trupeer-blue-700 mb-2">Your Part:</h4>
                      <p className="text-sm text-trupeer-blue-600">{step.yourPart}</p>
                    </div>
                    
                    <div className="bg-trupeer-green-50 border border-trupeer-green-200 rounded-xl p-4">
                      <h4 className="font-semibold text-trupeer-green-700 mb-2">We Handle:</h4>
                      <p className="text-sm text-trupeer-green-600">{step.ourPart}</p>
                    </div>
                  </div>
                </div>
                
                {/* Visual Element */}
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
                            {step.day}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content area */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-white to-trupeer-gray-50 flex items-center justify-center p-8">
                        <div className="text-center space-y-4">
                          <div className={`w-16 h-16 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-xl mx-auto flex items-center justify-center`}>
                            <step.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-trupeer-gray-800">
                              {step.title}
                            </h4>
                            <p className="text-sm text-trupeer-gray-600 max-w-xs">
                              Implementation step {index + 1} screenshot
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative glow */}
                    <div className={`absolute -inset-4 bg-gradient-to-r from-${step.color}-500/10 to-${step.color}-600/10 rounded-3xl -z-10 blur-xl`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-trupeer-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Implementation Guarantees
              </h3>
              <p className="text-trupeer-gray-600">
                We're so confident in our process, we guarantee your success
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-trupeer-green-500 to-trupeer-green-600 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <guarantee.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {guarantee.title}
                  </h4>
                  
                  <p className="text-trupeer-gray-600 leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Money-back guarantee */}
            <div className="text-center">
              <div className="bg-trupeer-green-50 border border-trupeer-green-200 rounded-xl p-6 max-w-2xl mx-auto mb-8">
                <h4 className="text-lg font-bold text-trupeer-green-800 mb-2">
                  Not seeing results in 14 days?
                </h4>
                <p className="text-trupeer-green-700">
                  We'll work with you until you do, or provide a full refund. That's our promise.
                </p>
              </div>
              
              {/* CTA */}
              {openLeadForm && (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 hover:from-trupeer-purple-700 hover:to-trupeer-blue-700 text-white font-semibold px-8 py-4"
                  onClick={() => openLeadForm("implementation-timeline-cta")}
                >
                  Start your implementation today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 