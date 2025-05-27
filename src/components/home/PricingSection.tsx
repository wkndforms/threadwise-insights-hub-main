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
      description: "Full access to all features, no credit card required",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Dedicated Onboarding",
      description: "Personal setup assistance and team training included",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Flexible Plans",
      description: "Custom pricing based on your team size and needs",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-slate-50/30 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-100/80 border border-green-200/50 mb-6">
            <Check className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-semibold text-lg">No Risk, All Reward</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
              Start Your Free Trial
            </span>
            <br />
            <span className="text-foreground">Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            Experience Forum Scout risk-free for <span className="font-bold text-green-600">14 days</span>. 
            Our team will work with you to create a <span className="font-bold text-blue-600">custom plan</span> that fits your needs and budget.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-white to-slate-50/50 border-2 border-blue-200/50 rounded-3xl p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl mb-8">
                <Zap className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Forums?
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of teams already using Forum Scout to turn forum chaos into customer success. 
                Start your free trial and see results in 24 hours.
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => openLeadForm('pricing-free-trial')}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 hover:border-blue-400 px-8 py-4 text-lg"
                  onClick={() => openLeadForm('pricing-demo')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-muted-foreground">
                <p>✓ No credit card required  ✓ Full feature access  ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="relative bg-white border border-slate-200/60 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Consultation */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Custom Pricing for Every Team
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Small Teams</div>
                <p className="text-muted-foreground">Perfect for startups and growing companies</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Enterprise</div>
                <p className="text-muted-foreground">Scalable solutions for large organizations</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Custom</div>
                <p className="text-muted-foreground">Tailored plans for unique requirements</p>
              </div>
            </div>
            
            <div className="bg-blue-50/50 border border-blue-200/40 rounded-xl p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-blue-900">Pricing Consultation</h4>
              </div>
              <p className="text-blue-700 mb-4">
                Our sales team will work with you to create a plan that fits your budget and requirements. 
                Get transparent pricing based on your actual needs.
              </p>
              <p className="text-sm text-blue-600 font-medium">
                Schedule a call during your free trial to discuss pricing options
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 