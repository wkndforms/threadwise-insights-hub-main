import { TrendingUp, Clock, Target, Quote, Star, Users, BarChart3, ArrowRight, CheckCircle, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultsSectionProps {
  isMobile?: boolean;
  openLeadForm?: (source: string) => void;
}

export const ResultsSection = ({ isMobile = false, openLeadForm }: ResultsSectionProps) => {
  const metrics = [
    {
      icon: Target,
      value: "97%",
      label: "Questions Answered",
      subtitle: "Up from 46% with manual monitoring",
      color: "text-trupeer-green-500"
    },
    {
      icon: Clock,
      value: "4.2h",
      label: "Average Response Time",
      subtitle: "Down from 26 hours previously",
      color: "text-trupeer-blue-500"
    },
    {
      icon: TrendingUp,
      value: "110%",
      label: "Engagement Increase",
      subtitle: "More active community participation",
      color: "text-trupeer-purple-500"
    }
  ];

  const testimonials = [
    {
      quote: "Forum Scout transformed our community engagement. Response times dropped from days to hours, and our community satisfaction scores went through the roof.",
      author: "Sarah Chen",
      company: "Community Manager, TechCorp",
      rating: 5,
      priority: 1
    },
    {
      quote: "The AI routing is incredibly accurate. Questions get to the right person every time, and our team loves the Slack integration.",
      author: "Michael Rodriguez",
      company: "DevOps Lead, CloudScale",
      rating: 5,
      priority: 1
    },
    {
      quote: "We went from manually checking forums daily to having everything automated. It's like having a dedicated community manager working 24/7.",
      author: "Emily Johnson",
      company: "Product Manager, DataFlow",
      rating: 5,
      priority: 2
    }
  ];

  const displayedTestimonials = isMobile 
    ? testimonials.filter(testimonial => testimonial.priority === 1) 
    : testimonials;

  const companyLogos = [
    "TechCorp", "CloudScale", "DataFlow", "InnovateLabs", "NextGen", "FutureTech"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-trupeer-gray-50/50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-trupeer-green-100 border border-trupeer-green-200 px-4 py-2 text-sm font-medium text-trupeer-green-800">
            <CheckCircle className="h-4 w-4 fill-current" />
            Proven Results
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Trusted by <span className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 bg-clip-text text-transparent">10,000+ companies</span>
          </h2>
          
          <p className="text-xl text-trupeer-gray-600 leading-relaxed">
            See the dramatic improvements teams achieve with AI-powered forum monitoring
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white border border-trupeer-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-trupeer-gray-100 to-trupeer-gray-50 flex items-center justify-center mx-auto mb-6`}>
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
              </div>
              
              <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {metric.label}
              </h3>
              
              <p className="text-sm text-trupeer-gray-600">
                {metric.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Don't take our word for it
            </h3>
            <p className="text-trupeer-gray-600">
              Here's what teams are saying about their Forum Scout experience
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-trupeer-gray-200 rounded-2xl p-6 shadow-sm">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-trupeer-gray-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-trupeer-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-trupeer-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-trupeer-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-trupeer-gray-600 mb-8">
            Trusted by teams at companies like:
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-trupeer-gray-100 border border-trupeer-gray-200 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-trupeer-gray-700">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-trupeer-purple-50 to-trupeer-blue-50 border border-trupeer-purple-200 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-trupeer-purple-500 to-trupeer-blue-500 rounded-xl mx-auto flex items-center justify-center mb-6">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to see similar results?
            </h3>
            
            <p className="text-lg text-trupeer-gray-600">
              Join thousands of teams already using Forum Scout to transform their community engagement
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {openLeadForm && (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 hover:from-trupeer-purple-700 hover:to-trupeer-blue-700 text-white font-semibold px-8 py-4"
                  onClick={() => openLeadForm("results-cta")}
                >
                  Start your free trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-trupeer-gray-300 text-trupeer-gray-700 hover:bg-white font-semibold px-8 py-4"
              >
                View case studies
              </Button>
            </div>
            
            <p className="text-sm text-trupeer-gray-500">
              ✓ No credit card required • ✓ 14-day free trial • ✓ Setup in under 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 