import { AlertTriangle, MessageSquareX, TrendingDown, Clock, Users, BarChart3 } from "lucide-react";

export const ProblemSection = () => {
  const painPoints = [
    {
      icon: MessageSquareX,
      title: "Frustrated Customers",
      description: "Questions sit unanswered for days, customers feel ignored",
      stat: "73% of users",
      statDescription: "abandon forums after no response"
    },
    {
      icon: TrendingDown,
      title: "Lost Opportunities",
      description: "Valuable feedback disappears into the void",
      stat: "85% of insights",
      statDescription: "never reach product teams"
    },
    {
      icon: Clock,
      title: "Overwhelmed Teams",
      description: "Internal experts too busy to monitor forums",
      stat: "26+ hours",
      statDescription: "average response time"
    },
    {
      icon: AlertTriangle,
      title: "Growing Backlog",
      description: "Unanswered questions pile up, creating a crisis",
      stat: "54% resolution",
      statDescription: "rate industry average"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50/30 via-slate-50/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100/60 border border-blue-200/40 mb-6">
            <AlertTriangle className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-lg">Does This Sound Familiar?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-slate-700">Drowning in Unanswered Questions?</span>
            <br />
            <span className="text-foreground">You're Not Alone.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Despite having talented teams, important customer questions get buried in forum chaos. 
            <span className="text-blue-600 font-semibold"> The cost? Customer trust and missed opportunities.</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="group relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/10 to-slate-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-card border border-slate-200/60 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-blue-100/70 text-blue-600 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {point.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {point.description}
                </p>
                
                {/* Statistics */}
                <div className="border-t border-slate-200/60 pt-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {point.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {point.statDescription}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/8 to-slate-500/8 border border-blue-200/40 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="h-8 w-8 text-blue-600" />
              <BarChart3 className="h-8 w-8 text-slate-600" />
              <TrendingDown className="h-8 w-8 text-blue-600" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              This isn't just an internal metric problem
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              It's a <span className="font-bold text-blue-600">customer satisfaction challenge</span> that affects your entire business. 
              Every unanswered question is a missed opportunity to build trust, gather insights, and strengthen your community.
            </p>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <span className="font-semibold">The good news?</span> There's a better way. ↓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 