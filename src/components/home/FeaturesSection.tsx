import { Brain, Target, Zap, BarChart3, Users, Lightbulb, ArrowRight, Sparkles } from "lucide-react";

// Custom SVG icon components
const CustomReportsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 7h10" />
    <path d="M7 12h10" />
    <path d="M7 17h10" />
  </svg>
);

const IntegrationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m8 6 4-4 4 4" />
    <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L3 22" />
    <path d="m15 22 5-5" />
  </svg>
);

export const FeaturesSection = () => {
  const primaryFeatures = [
    {
      icon: Brain,
      title: "Smart Routing",
      description: "Leverages LLM models to analyze question content and identify the right internal expert.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Effective Nudges",
      description: "Delivers clear, actionable notifications directly into existing workflows (Slack, Teams).",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Sustained Engagement",
      description: "Ensures consistent visibility and accountability, making forum support an ingrained habit.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const secondaryFeatures = [
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Identify documentation gaps and product improvement areas from real customer queries."
    },
    {
      icon: Users,
      title: "Thriving Community",
      description: "Foster collaboration and peer-to-peer learning with increased engagement."
    },
    {
      icon: Lightbulb,
      title: "Behavioral Science Core",
      description: "Built on proven 'Nudge Theory' principles for real, sustainable engagement."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-forumscout-purple/10 via-background to-forumscout-accent-blue/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-forumscout-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-forumscout-accent-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Hero-style header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-forumscout-purple/20 to-forumscout-accent-blue/20 border border-forumscout-purple/30 mb-6">
            <Sparkles className="h-5 w-5 text-forumscout-purple" />
            <span className="text-forumscout-purple font-semibold text-lg">The Solution</span>
            <Sparkles className="h-5 w-5 text-forumscout-purple" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-forumscout-purple via-forumscout-accent-blue to-forumscout-accent-green text-transparent bg-clip-text">
              From Manual Nudges
            </span>
            <br />
            <span className="text-foreground">to Automated Brilliance</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Forum Scout bridges the gap between your busy internal teams and your customers' needs. 
            <span className="text-forumscout-purple font-semibold"> Born from real-world challenges</span> and proven successes.
          </p>
        </div>

        {/* Primary Features - Large Cards */}
        <div className="grid gap-12 lg:gap-16 mb-20">
          {primaryFeatures.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} shadow-2xl`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-4xl font-bold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 text-forumscout-purple font-semibold text-lg group cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="flex-1 relative">
                <div className={`w-full h-80 rounded-3xl bg-gradient-to-br ${feature.color} opacity-20 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon className={`h-24 w-24 text-white/30`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Features - Horizontal List */}
        <div className="bg-card/50 backdrop-blur-sm border border-forumscout-purple/20 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Plus These Powerful Capabilities
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {secondaryFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-forumscout-purple/20 to-forumscout-accent-blue/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-forumscout-purple" />
                </div>
                
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
