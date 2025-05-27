import { Users, Code, HeadphonesIcon, MessageCircle } from "lucide-react";

export const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: Users,
      title: "Product Management Teams",
      description: "Turn forums into vital listening posts for feedback and sentiment.",
      color: "bg-forumscout-accent-blue/10 text-forumscout-accent-blue"
    },
    {
      icon: Code,
      title: "Engineering & Development Teams",
      description: "Easily share expertise and understand real-world usage.",
      color: "bg-forumscout-accent-green/10 text-forumscout-accent-green"
    },
    {
      icon: HeadphonesIcon,
      title: "Support Teams",
      description: "Augment support efforts and foster self-service.",
      color: "bg-forumscout-accent-orange/10 text-forumscout-accent-orange"
    },
    {
      icon: MessageCircle,
      title: "Community Managers",
      description: "Supercharge engagement and ensure no question is left behind.",
      color: "bg-forumscout-purple/10 text-forumscout-purple"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
            Empowering Teams to Connect and Resolve
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Forum Scout is designed for any organization with enterprise forums struggling with engagement.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`${audience.color} p-3 rounded-full w-fit mx-auto mb-4`}>
                <audience.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 