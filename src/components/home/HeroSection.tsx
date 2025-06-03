import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  openLeadForm: (source: string) => void;
}

export const HeroSection = ({ openLeadForm }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-trupeer-purple-50/30 to-trupeer-blue-50/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-trupeer-purple-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-trupeer-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-6xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-trupeer-purple-100 border border-trupeer-purple-200 px-4 py-2 text-sm font-medium text-trupeer-purple-800 animate-fade-in">
            <Star className="h-4 w-4 fill-current" />
            Smart Forum Monitoring for Enterprise Teams
          </div>

          {/* Main Headlines - Trupeer style */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-none">
              <span className="block">Monitor forums</span>
              <span className="block bg-gradient-to-r from-trupeer-purple-600 via-trupeer-blue-600 to-trupeer-purple-600 bg-clip-text text-transparent bg-300% animate-gradient-shift">
                effortlessly
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-trupeer-gray-600 max-w-4xl leading-relaxed">
              Let AI turn your community questions into actionable insights. Route inquiries to experts and boost engagement with intelligent monitoring.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-scale-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-trupeer-purple-600 to-trupeer-blue-600 hover:from-trupeer-purple-700 hover:to-trupeer-blue-700 text-white font-semibold px-8 py-4 text-lg h-14 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => openLeadForm("hero-cta")}
            >
              Start monitoring for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-trupeer-gray-300 text-trupeer-gray-700 hover:bg-trupeer-gray-50 font-semibold px-8 py-4 text-lg h-14 bg-white/50 backdrop-blur-sm"
              asChild
            >
              <a href="/#demo" className="inline-flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch demo
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 text-sm text-trupeer-gray-600 animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-trupeer-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-trupeer-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span>Rated 4.9/5 by enterprise teams</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-trupeer-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-trupeer-green-500" />
              <span>Trusted by 10,000+ companies</span>
            </div>
          </div>

          {/* Visual Demo Preview */}
          <div className="pt-12 w-full max-w-5xl animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-trupeer-gray-200">
              {/* Browser mockup header */}
              <div className="bg-trupeer-gray-50 px-4 py-3 border-b border-trupeer-gray-200 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-white rounded-md px-4 py-1 text-sm text-trupeer-gray-600 border border-trupeer-gray-200 max-w-md mx-auto">
                    forumscout.ai/dashboard
                  </div>
                </div>
              </div>
              
              {/* Placeholder for product screenshot */}
              <div className="aspect-video bg-gradient-to-br from-trupeer-purple-50 to-trupeer-blue-50 flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-trupeer-purple-500 to-trupeer-blue-500 rounded-xl mx-auto flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-trupeer-gray-800">
                      Product Screenshot Needed
                    </h3>
                    <p className="text-trupeer-gray-600 text-sm max-w-md">
                      High-quality dashboard screenshot showing forum monitoring in action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
