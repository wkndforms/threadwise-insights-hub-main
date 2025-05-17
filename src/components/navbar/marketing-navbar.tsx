
import { useState } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LeadCaptureForm } from "../lead-capture/LeadCaptureForm";
import { useLeadCapture } from "@/hooks/use-lead-capture";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export const MarketingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLeadFormOpen, setIsLeadFormOpen, leadSource, openLeadForm } = useLeadCapture();

  // Function to handle navigation item clicks
  const handleNavClick = (path: string) => {
    // In a real app, we would use router navigation
    // For now, just close the mobile menu
    setIsOpen(false);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark inline-block text-transparent bg-clip-text">
                Threadwise
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              className="bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90"
              onClick={() => openLeadForm("navbar")}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
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
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => handleNavClick(item.path)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-border">
              <div className="space-y-2 px-3">
                <Button 
                  className="w-full justify-center bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90"
                  onClick={() => {
                    openLeadForm("navbar-mobile");
                    setIsOpen(false);
                  }}
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
