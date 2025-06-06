import { useState } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LeadCaptureForm } from "../lead-capture/LeadCaptureForm";
import { useLeadCapture } from "@/hooks/use-lead-capture";
import { Link } from "react-router-dom";

// Updated nav items for most customer-relevant sections
const scrollNavItems = [
  { label: "Features", path: "/#features" },
  { label: "Demo", path: "/#demo" },
  { label: "Pricing", path: "/#pricing" },
  { label: "FAQ", path: "/#faq" },
];

const leadFormNavItems = [
  // Removed all blog/docs items to focus on core customer journey
];

export const MarketingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLeadFormOpen, setIsLeadFormOpen, leadSource, openLeadForm } = useLeadCapture();

  const handleScrollLinkClick = (path: string) => {
    setIsOpen(false); // Close mobile menu
    // Smooth scroll is handled by CSS, direct navigation for hash links
    window.location.href = path;
  };

  const handleLeadFormLinkClick = (source: string) => {
    openLeadForm(source);
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-forumscout-primary-600 to-forumscout-secondary-600 inline-block text-transparent bg-clip-text">
                ForumScout
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 lg:space-x-4">
              {scrollNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors min-h-[40px] flex items-center"
                  onClick={(e) => {
                    // e.preventDefault(); // Keep default for hash link navigation
                    handleScrollLinkClick(item.path);
                  }}
                >
                  {item.label}
                </a>
              ))}
              {leadFormNavItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors min-h-[40px] flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLeadFormLinkClick(item.source);
                  }}
                >
                  {item.label}
                </a>
              ))}
              {/* Contact link */}
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors min-h-[40px] flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  openLeadForm("navbar-contact");
                }}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              className="bg-gradient-to-r from-forumscout-primary-600 to-forumscout-secondary-600 hover:from-forumscout-primary-700 hover:to-forumscout-secondary-700 min-h-[40px]"
              onClick={() => openLeadForm('navbar-free-trial-desktop')}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none min-h-[44px] min-w-[44px]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden animate-fade-in bg-background border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {scrollNavItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="block px-4 py-3 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors min-h-[48px] flex items-center"
                onClick={(e) => {
                  // e.preventDefault();
                  handleScrollLinkClick(item.path);
                }}
              >
                {item.label}
              </a>
            ))}
            {leadFormNavItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block px-4 py-3 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors min-h-[48px] flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleLeadFormLinkClick(item.source);
                }}
              >
                {item.label}
              </a>
            ))}
            {/* Contact link for mobile */}
            <a
              href="#"
              className="block px-4 py-3 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors min-h-[48px] flex items-center"
              onClick={(e) => {
                e.preventDefault();
                openLeadForm("navbar-contact-mobile");
              }}
            >
              Contact
            </a>
            <div className="pt-4 pb-3 border-t border-border">
              <div className="px-4">
                <Button 
                  className="w-full justify-center bg-gradient-to-r from-forumscout-primary-600 to-forumscout-secondary-600 hover:from-forumscout-primary-700 hover:to-forumscout-secondary-700 min-h-[48px] text-base"
                  onClick={() => openLeadForm('navbar-free-trial-mobile')}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lead Capture Form */}
      <LeadCaptureForm 
        isOpen={isLeadFormOpen} 
        setIsOpen={setIsLeadFormOpen}
        source={leadSource}
      />
    </nav>
  );
};
