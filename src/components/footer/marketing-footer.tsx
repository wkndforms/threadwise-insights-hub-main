import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";
import { useLeadCapture } from "@/hooks/use-lead-capture";
import { LeadCaptureForm } from "@/components/lead-capture/LeadCaptureForm";

export const MarketingFooter = () => {
  const { openLeadForm, isLeadFormOpen, setIsLeadFormOpen, leadSource } = useLeadCapture();

  return (
    <>
      <footer className="bg-background border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark inline-block text-transparent bg-clip-text">
                  ForumScout
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Helping organizations monitor and respond to forum activities with powerful analytics and automations.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      openLeadForm("footer-pricing"); 
                    }} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources - REMOVED ENTIRELY */}
            {/*
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/api" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link to="/changelog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            */}

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      openLeadForm("footer-contact"); 
                    }} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ForumScout. All rights reserved.
          </div>
        </div>
      </footer>
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        setIsOpen={setIsLeadFormOpen}
        source={leadSource || "footer"}
      />
    </>
  );
};
