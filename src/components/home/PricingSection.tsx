import { Check, Star, Zap, Crown, ArrowRight, Users, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  openLeadForm: (source: string) => void;
}

export const PricingSection = ({ openLeadForm }: PricingSectionProps) => {
  const benefits = [
    {
      icon: Star,
      title: "14-Day Free Trial",
      description: "Full access, no credit card required",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Personal Onboarding",
      description: "Setup assistance and team training",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Setup in 24 Hours",
      description: "From signup to first question routed",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-slate-50/30 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Mobile-optimized header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-green-100/80 border border-green-200/50 mb-4 md:mb-6">
            <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
            <span className="text-green-700 font-semibold text-sm md:text-lg">No Risk, All Reward</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
              Start Your Free Trial
            </span>
            <br />
            <span className="text-foreground">Today</span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6 md:mb-8 px-2">
            Experience Forum Scout risk-free for <span className="font-bold text-green-600">14 days</span>. 
            <br className="hidden md:block" />
            Our team creates a <span className="font-bold text-blue-600">custom plan</span> that fits your needs.
          </p>
        </div>

        {/* Mobile-optimized main CTA */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-white to-slate-50/50 border-2 border-blue-200/50 rounded-3xl p-6 md:p-8 lg:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl mb-6 md:mb-8">
                <Zap className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                Ready to Transform Your Forums?
              </h3>
              
              <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of teams using Forum Scout to turn chaos into customer success. 
                <br className="hidden md:block" />
                See results in 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto min-h-[48px]"
                  onClick={() => openLeadForm('pricing-free-trial')}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 hover:border-blue-400 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full sm:w-auto min-h-[48px]"
                  onClick={() => openLeadForm('pricing-demo')}
                >
                  <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Schedule Demo
                </Button>
              </div>
              
              <div className="mt-6 md:mt-8 text-xs md:text-sm text-muted-foreground">
                <p>✓ No credit card required  ✓ Full feature access  ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-optimized benefits grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="relative bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 min-h-[200px] md:min-h-[240px] flex flex-col justify-between">
                <div>
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-optimized pricing consultation */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
              Custom Pricing for Every Team
            </h3>
            
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3 mb-6 md:mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Small Teams</div>
                <p className="text-sm md:text-base text-muted-foreground">Perfect for startups</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">Enterprise</div>
                <p className="text-sm md:text-base text-muted-foreground">Scalable solutions</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">Custom</div>
                <p className="text-sm md:text-base text-muted-foreground">Tailored plans</p>
              </div>
            </div>
            
            <div className="bg-blue-50/50 border border-blue-200/40 rounded-xl p-4 md:p-6">
              <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                <h4 className="text-base md:text-lg font-semibold text-blue-900">Pricing Consultation</h4>
              </div>
              <p className="text-sm md:text-base text-blue-700 mb-3 md:mb-4 leading-relaxed">
                Our sales team creates a plan that fits your budget and requirements. 
                Get transparent pricing based on your actual needs.
              </p>
              <p className="text-xs md:text-sm text-blue-600 font-medium">
                Schedule a call during your free trial to discuss pricing options
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 