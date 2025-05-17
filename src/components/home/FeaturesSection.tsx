
import { MessageSquare, Bell, BarChart3, Shield } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

// Custom SVG icon components
const CustomReportsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 7h10" />
    <path d="M7 12h10" />
    <path d="M7 17h10" />
  </svg>
);

const IntegrationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m8 6 4-4 4 4" />
    <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L3 22" />
    <path d="m15 22 5-5" />
  </svg>
);

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Smart Forum Monitoring",
      description: "Automatically track unanswered questions across multiple forums and categories."
    },
    {
      icon: Bell,
      title: "Multi-channel Alerts",
      description: "Get notified via email, Slack, or Microsoft Teams when new unanswered questions are detected."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track response rates, popular topics, and customer engagement with detailed reports."
    },
    {
      icon: Shield,
      title: "Role-based Access",
      description: "Secure admin and customer dashboards with appropriate permissions for each user type."
    },
    {
      icon: CustomReportsIcon,
      title: "Customizable Reports",
      description: "Generate and export detailed reports on forum activity and team performance."
    },
    {
      icon: IntegrationIcon,
      title: "Integration Friendly",
      description: "Seamlessly connect with email services, Slack workspaces, and Microsoft Teams."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Everything you need to stay on top of forum activity
          </h2>
          <p className="text-muted-foreground md:text-lg mt-4">
            Threadwise provides powerful tools to monitor, analyze, and respond to forum activity across multiple platforms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
