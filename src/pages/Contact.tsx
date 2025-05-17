import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MapPin, 
  Phone
} from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Contact
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Get in Touch
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              Have questions or need assistance? We're here to help you get the most out of Threadwise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">
                Send us a message
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="mt-1"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      support@threadwise.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      123 Main Street, Suite 456
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Office Locations */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold tracking-tighter mb-4 text-center">
            Our Office Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Location 1 */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">New York</h3>
              <p className="text-muted-foreground">
                123 Main Street, Suite 456
                <br />
                New York, NY 10001
              </p>
            </div>

            {/* Location 2 */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">San Francisco</h3>
              <p className="text-muted-foreground">
                456 Market Street, Suite 789
                <br />
                San Francisco, CA 94105
              </p>
            </div>

            {/* Location 3 */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">London</h3>
              <p className="text-muted-foreground">
                789 Oxford Street, Floor 10
                <br />
                London, UK W1D 1BS
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
