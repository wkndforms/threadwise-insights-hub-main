import { MessageSquare, Bell, BarChart3, Settings } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <>
      {/* Steps Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              A simple process for better forum management
            </h2>
            <p className="text-muted-foreground md:text-lg mt-4">
              Threadwise makes it easy to monitor, track, and respond to forum activity. Here's how it works in a few simple steps.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Connect Your Forums</h3>
              <p className="text-muted-foreground">
                Easily integrate Threadwise with your existing forum platforms using our simple setup process.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Monitor Unanswered Questions</h3>
              <p className="text-muted-foreground">
                Our system automatically detects and tracks unanswered questions across all connected forums.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Receive Instant Alerts</h3>
              <p className="text-muted-foreground">
                Get notified via email, Slack, or other channels when new unanswered questions are detected.
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Respond Quickly</h3>
              <p className="text-muted-foreground">
                Use our dashboard to quickly respond to questions and improve customer satisfaction.
              </p>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4">
                5
              </div>
              <h3 className="text-xl font-bold mb-2">Analyze Performance</h3>
              <p className="text-muted-foreground">
                Track response rates and identify areas for improvement with our advanced analytics tools.
              </p>
            </div>
            {/* Step 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold mb-4">
                6
              </div>
              <h3 className="text-xl font-bold mb-2">Improve Engagement</h3>
              <p className="text-muted-foreground">
                Boost customer engagement and build a stronger community by staying on top of forum activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
              Integrations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Connect with your favorite tools
            </h2>
            <p className="text-muted-foreground md:text-lg mt-4">
              Threadwise seamlessly integrates with a variety of platforms to streamline your workflow.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Integration Cards */}
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Slack</h3>
              <p className="text-muted-foreground">
                Receive instant alerts in your Slack channels for new unanswered questions.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">
                Get notified via email when new unanswered questions are detected in your forums.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Microsoft Teams</h3>
              <p className="text-muted-foreground">
                Stay updated with forum activity directly in your Microsoft Teams workspace.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6 transition-all hover:shadow-md">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Zapier</h3>
              <p className="text-muted-foreground">
                Connect Threadwise with thousands of other apps using Zapier for custom workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; 