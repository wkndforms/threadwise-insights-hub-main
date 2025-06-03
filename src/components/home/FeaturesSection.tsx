import { Brain, Target, Zap, BarChart3, Users, Shield, MessageSquare, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface FeaturesSectionProps {
  isMobile?: boolean;
}

export const FeaturesSection = ({ isMobile = false }: FeaturesSectionProps) => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Question Analysis",
      description: "Advanced AI analyzes question content, context, and sentiment to understand exactly what your community needs.",
      benefits: ["Automatic categorization", "Intent recognition", "Priority scoring"],
      color: "trupeer-purple"
    },
    {
      icon: Target,
      title: "Smart Expert Matching",
      description: "Intelligently routes questions to the perfect team member based on expertise, availability, and past performance.",
      benefits: ["Expert skill mapping", "Load balancing", "Response tracking"],
      color: "trupeer-blue"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get targeted alerts in Slack, Teams, or email with full context so your team can respond quickly and effectively.",
      benefits: ["Multi-platform alerts", "Context preservation", "Response templates"],
      color: "trupeer-green"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track response times, engagement rates, and community health with detailed analytics and actionable insights.",
      benefits: ["Real-time dashboards", "Trend analysis", "Custom reports"],
      color: "trupeer-purple"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 compliant with enterprise-grade security, SSO integration, and configurable access controls.",
      benefits: ["SOC2 & ISO27001", "SSO integration", "Role-based access"],
      color: "trupeer-blue"
    },
    {
      icon: MessageSquare,
      title: "Multi-Platform Support",
      description: "Monitor Reddit, Discord, community forums, support channels, and more from a single unified dashboard.",
      benefits: ["20+ integrations", "Unified inbox", "Cross-platform sync"],
      color: "trupeer-green"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-trupeer-gray-50/50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-trupeer-purple-100 border border-trupeer-purple-200 px-4 py-2 text-sm font-medium text-trupeer-purple-800">
            <CheckCircle className="h-4 w-4 fill-current" />
            AI Features that make you a Pro
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Powerful features that <span className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 bg-clip-text text-transparent">work seamlessly</span>
          </h2>
          
          <p className="text-xl text-trupeer-gray-600 leading-relaxed">
            Everything you need to transform your community engagement, without breaking a sweat
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-trupeer-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-trupeer-purple-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-trupeer-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Benefits list */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-trupeer-gray-600">
                      <CheckCircle className="h-4 w-4 text-trupeer-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover effect arrow */}
              <div className="flex items-center gap-2 text-trupeer-purple-600 font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-trupeer-gray-200">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to experience these features yourself?
            </h3>
            <p className="text-trupeer-gray-600">
              Join thousands of teams already using Forum Scout to revolutionize their community engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 hover:from-trupeer-purple-700 hover:to-trupeer-blue-700 text-white font-semibold px-8 py-4"
              >
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-trupeer-gray-300 text-trupeer-gray-700 hover:bg-trupeer-gray-50 font-semibold px-8 py-4"
              >
                View all features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
