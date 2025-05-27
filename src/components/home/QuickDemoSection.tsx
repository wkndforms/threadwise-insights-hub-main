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
      description: "Forum Scout spots an unanswered question",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "LLM analyzes content and finds the right expert",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      title: "Smart Nudge",
      description: "Expert gets notified in Slack with context",
      icon: ArrowRight,
      color: "from-orange-500 to-red-500"
    },
    {
      step: 4,
      title: "Quick Response",
      description: "Customer gets answer in hours, not days",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100/80 border border-blue-200/50 mb-6">
            <Play className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-lg">See It In Action</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
              Watch Forum Scout Work
            </span>
            <br />
            <span className="text-foreground">In Real Time</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            From unanswered question to expert response in <span className="font-bold text-blue-600">under 4 hours</span>
          </p>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => openLeadForm("demo-video")}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch 2-Minute Demo
          </Button>
        </div>

        {/* Demo Flow Visualization */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connecting line (except for last item) */}
                {index < demoSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/50" />
                  </div>
                )}
                
                <div className="text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mb-4 shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/5 to-slate-800/5 border border-blue-200/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
                Live Demo Preview
              </h3>
              
              {/* Mock interface */}
              <div className="bg-card border rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground ml-4">Forum Scout Dashboard</span>
                </div>
                
                <div className="space-y-4">
                  {/* Mock question */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium text-red-700">Unanswered Question Detected</span>
                      <Clock className="h-4 w-4 text-red-600 ml-auto" />
                    </div>
                    <p className="text-sm text-muted-foreground">"How do I integrate the API with React Native?"</p>
                  </div>
                  
                  {/* Mock analysis */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">AI Analysis Complete</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Matched to: Mobile Team → @sarah.dev (React Native expert)</p>
                  </div>
                  
                  {/* Mock notification */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Expert Notified via Slack</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Response received in 2.3 hours ✅</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Want to see the full workflow in action?
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-200 hover:bg-blue-50"
                  onClick={() => openLeadForm("request-demo")}
                >
                  Request Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 