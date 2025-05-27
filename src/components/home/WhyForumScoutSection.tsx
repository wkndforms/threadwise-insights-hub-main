import { Brain, Zap, TrendingUp, Puzzle, BarChart3, Workflow } from "lucide-react";

export const WhyForumScoutSection = () => {
  const differentiators = [
    {
      icon: Brain,
      title: "Behavioral Science Core",
      description: "Built on proven 'Nudge Theory' principles for real engagement.",
      color: "text-forumscout-purple"
    },
    {
      icon: Zap,
      title: "AI-Powered Precision",
      description: "LLMs ensure the right expert sees the right question.",
      color: "text-forumscout-accent-blue"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Backed by a case study showing a >100% increase in answer rates.",
      color: "text-forumscout-accent-green"
    },
    {
      icon: Puzzle,
      title: "Sustainable & Scalable",
      description: "Automates a previously manual, time-consuming process.",
      color: "text-forumscout-accent-orange"
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Helps improve documentation and product based on real queries.",
      color: "text-forumscout-navy"
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Designed to fit into existing team workflows.",
      color: "text-forumscout-purple-dark"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
            More Than Automation. It's Intelligent Engagement.
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Forum Scout stands apart with its unique combination of AI technology and behavioral science.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className={`${item.color} mb-4`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 