import { AlertTriangle, MessageSquareX, TrendingDown, Clock, Users, BarChart3 } from "lucide-react";

export const ProblemSection = () => {
  const painPoints = [
    {
      icon: MessageSquareX,
      title: "Frustrated Customers",
      description: "Questions sit unanswered for days",
      stat: "73%",
      statDescription: "abandon forums"
    },
    {
      icon: TrendingDown,
      title: "Lost Opportunities", 
      description: "Valuable feedback disappears",
      stat: "85%",
      statDescription: "insights never reach teams"
    },
    {
      icon: Clock,
      title: "Overwhelmed Teams",
      description: "Too busy to monitor forums",
      stat: "26h",
      statDescription: "average response time"
    },
    {
      icon: AlertTriangle,
      title: "Growing Backlog",
      description: "Questions pile up daily",
      stat: "54%",
      statDescription: "resolution rate"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-forumscout-primary-50 via-forumscout-neutral-50 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-forumscout-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-forumscout-neutral-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Mobile-optimized header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-forumscout-primary-100 border border-forumscout-primary-200 mb-4 md:mb-6">
            <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-forumscout-primary-600" />
            <span className="text-forumscout-primary-700 font-semibold text-sm md:text-lg">Sound Familiar?</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            <span className="text-forumscout-neutral-700">Drowning in</span>
            <br className="md:hidden" />
            <span className="text-forumscout-neutral-700"> Unanswered Questions?</span>
            <br />
            <span className="text-foreground">You're Not Alone.</span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-2">
            Important customer questions get buried. 
            <br className="hidden md:block" />
            <span className="text-forumscout-primary-600 font-semibold"> The cost? Lost trust and missed opportunities.</span>
          </p>
        </div>

        {/* Mobile-optimized grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-8 md:mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="group relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-forumscout-primary-500/10 to-forumscout-neutral-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-card border border-forumscout-neutral-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 min-h-[280px] md:min-h-[320px] flex flex-col justify-between">
                <div>
                  <div className="bg-forumscout-primary-100 text-forumscout-primary-600 p-3 md:p-4 rounded-2xl w-fit mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground leading-tight">
                    {point.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    {point.description}
                  </p>
                </div>
                
                {/* Statistics */}
                <div className="border-t border-forumscout-neutral-200 pt-4">
                  <div className="text-xl md:text-2xl font-bold text-forumscout-primary-600 mb-1">
                    {point.stat}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {point.statDescription}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-optimized impact statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-forumscout-primary-50 to-forumscout-neutral-50 border border-forumscout-primary-200 rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-forumscout-primary-600" />
              <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-forumscout-neutral-600" />
              <TrendingDown className="h-6 w-6 md:h-8 md:w-8 text-forumscout-primary-600" />
            </div>
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-foreground leading-tight">
              This isn't just metrics
            </h3>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              It's a <span className="font-bold text-forumscout-primary-600">customer satisfaction challenge</span> affecting your entire business. 
              <br className="hidden md:block" />
              Every unanswered question is a missed opportunity.
            </p>
            
            <div className="mt-6 md:mt-8 text-sm text-muted-foreground">
              <span className="font-semibold">The good news?</span> There's a better way. ↓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 