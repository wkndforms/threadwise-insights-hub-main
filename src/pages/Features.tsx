import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  BarChart3, 
  Bell, 
  MessageSquare, 
  Shield, 
  Zap,
  CalendarClock,
  Users,
  Globe
} from "lucide-react";
import { useLeadCapture } from "@/hooks/use-lead-capture";
import { LeadCaptureForm } from "@/components/lead-capture/LeadCaptureForm";

export default function Features() {
  const { openLeadForm, isLeadFormOpen, setIsLeadFormOpen, leadSource } = useLeadCapture();

  return (
    <>
      {/* Features Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mx-auto max-w-[800px]">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Features
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Powerful tools to manage your forum activity
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              Discover all the ways Threadwise helps you monitor, analyze, and improve your forum engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Forum Monitoring</h3>
              <p className="text-muted-foreground">
                Automatically track unanswered questions across multiple forums and categories.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-channel Alerts</h3>
              <p className="text-muted-foreground">
                Get notified via email, Slack, or Microsoft Teams when new unanswered questions are detected.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Track response rates, popular topics, and customer engagement with detailed reports.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Role-based Access</h3>
              <p className="text-muted-foreground">
                Secure admin and customer dashboards with appropriate permissions for each user type.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customizable Reports</h3>
              <p className="text-muted-foreground">
                Generate and export detailed reports on forum activity and team performance.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <path d="m8 6 4-4 4 4" />
                  <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L3 22" />
                  <path d="m15 22 5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integration Friendly</h3>
              <p className="text-muted-foreground">
                Seamlessly connect with email services, Slack workspaces, and Microsoft Teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 items-center">
            {/* Detail 1 */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-threadwise-accent-green/10 text-threadwise-accent-green text-sm font-medium mb-2">
                Real-time Monitoring
              </div>
              <h2 className="text-2xl font-bold tracking-tighter">
                Stay updated with instant forum activity tracking
              </h2>
              <p className="text-muted-foreground">
                Get real-time updates on new posts, unanswered questions, and trending topics.
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-threadwise-accent-green" />
                  <span>Instant notifications for critical events</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-threadwise-accent-green" />
                  <span>Customizable alerts to fit your needs</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400"
                alt="Real-time Monitoring"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Detail 2 */}
            <div className="relative">
              <img
                src="https://placehold.co/600x400"
                alt="Advanced Analytics"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-threadwise-accent-blue/10 text-threadwise-accent-blue text-sm font-medium mb-2">
                Advanced Analytics
              </div>
              <h2 className="text-2xl font-bold tracking-tighter">
                Unlock insights with detailed forum analytics
              </h2>
              <p className="text-muted-foreground">
                Analyze trends, measure engagement, and optimize your forum strategy.
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-threadwise-accent-blue" />
                  <span>Track key metrics like response time and user activity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-threadwise-accent-blue" />
                  <span>Generate custom reports to share with your team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-threadwise-purple/10 to-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center text-center max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready to supercharge your forum management?
            </h2>
            <p className="text-muted-foreground md:text-lg mb-8 max-w-[600px]">
              Explore Threadwise and see how it can transform your community engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90"
                onClick={() => openLeadForm("features-cta")}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => openLeadForm("features-contact-sales")}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        setIsOpen={setIsLeadFormOpen}
        source={leadSource}
      />
    </>
  );
}
