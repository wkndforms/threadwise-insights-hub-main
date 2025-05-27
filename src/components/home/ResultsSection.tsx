import { TrendingUp, Clock, Heart, Quote, CheckCircle, Star, Zap, Users, BarChart3, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ResultsSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "97%",
      label: "Resolution Rate",
      subtitle: "Up from 46% - Over 110% Increase!",
      color: "text-forumscout-accent-green"
    },
    {
      icon: Clock,
      value: "4.2h",
      label: "Average Response Time",
      subtitle: "Down from 26 hours - Over 6x Faster!",
      color: "text-forumscout-accent-blue"
    },
    {
      icon: Heart,
      value: "↗",
      label: "Boosted CSAT",
      subtitle: "Happier customers, more confident in your platform",
      color: "text-forumscout-accent-orange"
    }
  ];

  const testimonials = [
    {
      quote: "I've never seen a product team so responsive on forums. It makes me confident in standardizing on your platform.",
      author: "Senior Consultant",
      company: "Enterprise Client",
      rating: 5
    },
    {
      quote: "What's truly compelling... is its sophisticated blend of AI with a deep understanding of human behavior.",
      author: "Salil Taneja",
      company: "Director — Engineering, Adobe",
      rating: 5
    },
    {
      quote: "Forum Scout' project brilliantly demonstrates the essence of Nudge theory... achieving remarkable engagement.",
      author: "Venkat Ram Reddy",
      company: "Professor, IIT Jodhpur",
      rating: 5
    }
  ];

  const transformationSteps = [
    {
      phase: "Before",
      title: "Silent Forums",
      description: "Questions go unanswered, customers feel ignored",
      icon: "😔",
      metrics: ["46% Resolution", "26h Response Time", "Low CSAT"],
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      phase: "During",
      title: "Forum Scout Activation",
      description: "AI-powered routing and intelligent nudges kick in",
      icon: "⚡",
      metrics: ["Smart Analysis", "Expert Routing", "Team Nudges"],
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      phase: "After",
      title: "Thriving Community",
      description: "Rapid responses, happy customers, engaged teams",
      icon: "🚀",
      metrics: ["97% Resolution", "4.2h Response", "High CSAT"],
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const benefits = [
    {
      category: "Customer Impact",
      items: [
        { text: "Faster response times", impact: "6x improvement" },
        { text: "Higher satisfaction scores", impact: "Measurable boost" },
        { text: "Reduced frustration", impact: "Immediate relief" }
      ],
      icon: Heart,
      color: "text-red-500"
    },
    {
      category: "Team Efficiency",
      items: [
        { text: "Automated question routing", impact: "Zero manual work" },
        { text: "Smart expert matching", impact: "Right person, right time" },
        { text: "Workflow integration", impact: "Seamless adoption" }
      ],
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      category: "Business Growth",
      items: [
        { text: "Community engagement", impact: "110% increase" },
        { text: "Product insights", impact: "Data-driven decisions" },
        { text: "Support cost reduction", impact: "Proactive resolution" }
      ],
      icon: TrendingUp,
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-forumscout-purple/5 to-forumscout-accent-blue/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
            The Impact: Numbers Don't Lie
          </h2>
          <p className="text-muted-foreground md:text-lg">
            See the transformation: Real results, real fast.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 bg-card border rounded-xl">
              <div className={`${metric.color} mb-4 flex justify-center`}>
                <metric.icon className="h-8 w-8" />
              </div>
              <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-forumscout-purple via-forumscout-accent-blue to-forumscout-accent-green text-transparent bg-clip-text mb-4">
              What People Are Saying
            </h3>
            <p className="text-lg text-muted-foreground">
              Real feedback from real users who've experienced the transformation
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-forumscout-purple via-forumscout-accent-blue to-forumscout-accent-green rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-card border-0 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Quote icon with gradient background */}
                  <div className="bg-gradient-to-br from-forumscout-purple to-forumscout-accent-blue p-3 rounded-full w-fit mb-6">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Star rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground mb-6 text-lg leading-relaxed font-medium italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-forumscout-purple font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transform Your Forum Experience - New Design */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-forumscout-accent-orange/20 to-forumscout-purple/20 border border-forumscout-accent-orange/30 mb-6">
              <Sparkles className="h-5 w-5 text-forumscout-accent-orange" />
              <span className="text-forumscout-purple font-semibold text-lg">Transformation Journey</span>
              <Sparkles className="h-5 w-5 text-forumscout-accent-orange" />
            </div>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-forumscout-accent-orange via-forumscout-purple to-forumscout-accent-blue text-transparent bg-clip-text mb-6">
              Transform Your Forum Experience
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch your community evolve from silent to thriving in three powerful phases
            </p>
          </div>

          {/* Transformation Timeline */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {transformationSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connecting arrow (except for last item) */}
                {index < transformationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowUpRight className="h-8 w-8 text-forumscout-purple opacity-60" />
                  </div>
                )}
                
                <div className={`relative bg-gradient-to-br ${step.color} border border-white/20 rounded-3xl p-8 h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                  {/* Phase badge */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-forumscout-purple to-forumscout-accent-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {step.phase}
                  </div>
                  
                  {/* Large emoji icon */}
                  <div className="text-6xl mb-6 text-center">
                    {step.icon}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-4 text-center">
                    {step.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Metrics list */}
                  <div className="space-y-2">
                    {step.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center justify-center gap-2 text-sm font-medium">
                        <CheckCircle className="h-4 w-4 text-forumscout-accent-green" />
                        <span className="text-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Dashboard - Redesigned */}
          <div className="bg-gradient-to-br from-white to-slate-50/50 border-2 border-blue-200/40 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100/80 border border-blue-200/50 mb-6">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <span className="text-blue-700 font-semibold text-lg">Measurable Results</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Complete Success Metrics
              </h4>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track every improvement across your entire forum ecosystem
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-white border border-slate-200/60 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    {/* Category header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/40`}>
                        <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-foreground">
                          {benefit.category}
                        </h5>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    {/* Benefit items */}
                    <div className="space-y-4">
                      {benefit.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="group/item">
                          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-200/40">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-3"></div>
                            <div className="flex-1">
                              <div className="font-semibold text-foreground mb-1">
                                {item.text}
                              </div>
                              <div className={`text-sm font-bold ${benefit.color} bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full inline-block`}>
                                {item.impact}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-12 pt-8 border-t border-slate-200/60">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to see these results in your own forums?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  onClick={() => {/* Add your lead form trigger here */}}
                >
                  Start Free Trial
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-300 hover:border-blue-400 px-8 py-3"
                  onClick={() => {/* Add your demo trigger here */}}
                >
                  See Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 