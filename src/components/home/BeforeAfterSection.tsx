import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Clock, TrendingDown, TrendingUp, Users, Target } from "lucide-react";

interface BeforeAfterSectionProps {
  openLeadForm: (source: string) => void;
}

export const BeforeAfterSection = ({ openLeadForm }: BeforeAfterSectionProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  const scenarios = {
    before: {
      title: "Without Forum Scout",
      subtitle: "Manual monitoring, missed opportunities",
      stats: [
        { icon: MessageCircle, value: "47%", label: "Questions go unanswered", color: "text-red-500" },
        { icon: Clock, value: "2.3 days", label: "Average response time", color: "text-red-500" },
        { icon: TrendingDown, value: "23%", label: "Community engagement", color: "text-red-500" }
      ],
      description: "Teams struggle to monitor multiple platforms, questions slip through the cracks, and community engagement suffers from slow responses.",
      mockupTitle: "Screenshot Needed: Manual Forum Monitoring",
      mockupDescription: "Show cluttered dashboard with missed notifications"
    },
    after: {
      title: "With Forum Scout",
      subtitle: "AI-powered monitoring, instant routing",
      stats: [
        { icon: Target, value: "97%", label: "Questions answered", color: "text-trupeer-green-500" },
        { icon: Clock, value: "4.2 hours", label: "Average response time", color: "text-trupeer-green-500" },
        { icon: TrendingUp, value: "110%", label: "Community engagement", color: "text-trupeer-green-500" }
      ],
      description: "AI automatically monitors all platforms, routes questions to the right experts, and your community thrives with fast, helpful responses.",
      mockupTitle: "Screenshot Needed: Forum Scout Dashboard", 
      mockupDescription: "Show clean, organized dashboard with smart routing"
    }
  };

  const currentScenario = scenarios[activeTab];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            The transformation is <span className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 bg-clip-text text-transparent">remarkable</span>
          </h2>
          <p className="text-xl text-trupeer-gray-600 leading-relaxed">
            See the dramatic difference Forum Scout makes to your community engagement
          </p>
        </div>

        {/* Before/After Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-trupeer-gray-100 p-1 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'before'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-trupeer-gray-600 hover:text-gray-900'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'after'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-trupeer-gray-600 hover:text-gray-900'
              }`}
            >
              After
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Stats and info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {currentScenario.title}
              </h3>
              <p className="text-xl text-trupeer-gray-600">
                {currentScenario.subtitle}
              </p>
              <p className="text-trupeer-gray-600 leading-relaxed text-lg">
                {currentScenario.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentScenario.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-trupeer-gray-50 border border-trupeer-gray-200 rounded-xl p-6 text-center space-y-3"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${
                    activeTab === 'before' ? 'bg-red-100' : 'bg-trupeer-green-100'
                  }`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-trupeer-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {activeTab === 'after' && (
              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 hover:from-trupeer-purple-700 hover:to-trupeer-blue-700 text-white font-semibold px-8 py-4"
                  onClick={() => openLeadForm("before-after-cta")}
                >
                  See these results for yourself
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>

          {/* Right side - Visual mockup */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-trupeer-gray-200">
              {/* Browser header */}
              <div className="bg-trupeer-gray-50 px-4 py-3 border-b border-trupeer-gray-200 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-white rounded-md px-4 py-1 text-sm text-trupeer-gray-600 border border-trupeer-gray-200 max-w-md mx-auto">
                    {activeTab === 'before' ? 'Traditional monitoring' : 'forumscout.ai/dashboard'}
                  </div>
                </div>
              </div>
              
              {/* Content area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-trupeer-gray-50 to-white flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-xl mx-auto flex items-center justify-center ${
                    activeTab === 'before' 
                      ? 'bg-gradient-to-r from-red-500 to-red-600' 
                      : 'bg-gradient-to-r from-trupeer-purple-500 to-trupeer-blue-500'
                  }`}>
                    {activeTab === 'before' ? (
                      <TrendingDown className="h-8 w-8 text-white" />
                    ) : (
                      <TrendingUp className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-trupeer-gray-800">
                      {currentScenario.mockupTitle}
                    </h4>
                    <p className="text-trupeer-gray-600 text-sm max-w-md">
                      {currentScenario.mockupDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className={`absolute -inset-4 rounded-3xl -z-10 blur-xl ${
              activeTab === 'before' 
                ? 'bg-gradient-to-r from-red-500/10 to-red-600/10'
                : 'bg-gradient-to-r from-trupeer-purple-500/10 to-trupeer-blue-500/10'
            }`}></div>
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="mt-16 pt-12 border-t border-trupeer-gray-200 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-trupeer-purple-100 border-2 border-white rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-trupeer-purple-600" />
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed">
              "Forum Scout transformed our community engagement. Response times dropped from days to hours, and our community satisfaction scores went through the roof."
            </blockquote>
            <div className="space-y-1">
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-trupeer-gray-600">Community Manager, TechCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 