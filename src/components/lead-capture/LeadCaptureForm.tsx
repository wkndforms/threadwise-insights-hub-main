import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
}

interface LeadCaptureFormProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  source?: string; // To track which button triggered the form
}

const commonFreeEmailDomains = [
  // Major Global Providers (and common aliases/country TLDs)
  "gmail.com", "googlemail.com", "gmail.co.uk", "gmail.de", "gmail.fr", "gmail.es", "gmail.it", "gmail.com.au", "gmail.com.br",
  "yahoo.com", "yahoo.co.uk", "yahoo.co.jp", "yahoo.de", "yahoo.fr", "yahoo.es", "yahoo.it", "yahoo.com.au", "yahoo.com.br", "ymail.com", "rocketmail.com",
  "hotmail.com", "outlook.com", "live.com", "msn.com", 
  "outlook.de", "outlook.fr", "outlook.es", "outlook.jp", "outlook.co.uk", "outlook.com.au", "live.co.uk", "live.de", "live.fr", "live.it",
  "aol.com", "aol.co.uk", "aol.de",
  "icloud.com", "me.com", "mac.com", // Apple
  
  // Other Widely Used Global/Regional Free Providers
  "mail.com", "gmx.com", "gmx.net", "gmx.de", "gmx.us", "gmx.co.uk",
  "yandex.com", "yandex.ru", "yandex.ua", "yandex.by", "yandex.kz",
  "zoho.com", "zohomail.com",
  "protonmail.com", "proton.me", "pm.me",
  "tutanota.com", "tutanota.de", "tuta.io",
  "mail.ru", "bk.ru", "list.ru", "inbox.ru",
  "seznam.cz",
  "wp.pl", "onet.pl", "o2.pl", "interia.pl",
  "nate.com", "daum.net", "naver.com", // Popular in South Korea
  "126.com", "163.com", "yeah.net", // Popular in China

  // Common Disposable/Temporary Email Domains
  "mailinator.com", "yopmail.com", "yopmail.fr", "yopmail.net", "jetable.org",
  "temp-mail.org", "tempmail.com", "tempail.com", "tempr.email", 
  "10minutemail.com", "10minutemail.co.za", "10minutemail.co.uk",
  "guerrillamail.com", "guerrillamail.biz", "guerrillamail.de", "grr.la", "sharklasers.com",
  "throwawaymail.com", "getnada.com", "mailnull.com", "spamgourmet.com",
  "trashmail.com", "trashmail.net", "trashmail.me", "mytemp.email", "tempmailo.com",
  "mailnesia.com", "dispostable.com", "moakt.com", "nwytg.com", "pokemail.net"
  
  // This list is not exhaustive. For more comprehensive blocking of disposable emails,
  // consider integrating a regularly updated list (e.g., from a public repository)
  // or using a specialized API service.
];

export const LeadCaptureForm = ({ isOpen, setIsOpen, source = "general" }: LeadCaptureFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState<string>("");

  const getformEndpoint = "https://getform.io/f/bgdlyyga"; // Your Getform endpoint

  const validateEmailDomain = (email: string): boolean => {
    if (!email || email.indexOf('@') === -1) {
      if (email && email.indexOf('@') === -1) {
        setEmailError("Invalid email address format.");
      } else if (!email) {
        setEmailError("Email address is required.");
      }
      return false;
    }

    const localPart = email.substring(0, email.lastIndexOf("@"));
    const domain = email.substring(email.lastIndexOf("@") + 1).toLowerCase();

    // Specific check for iitj.ac.in with numbers in the local part
    if (domain === "iitj.ac.in" && /\d/.test(localPart)) {
      setEmailError("Academic emails from iitj.ac.in containing numbers in the username are not accepted. Please provide a different email address.");
      return false;
    }

    // General check for common free, disposable, or specifically restricted domains
    if (commonFreeEmailDomains.includes(domain)) {
      setEmailError("Please use your official company email address. Emails from common free, disposable, or generally restricted academic providers are not accepted.");
      return false;
    }
    
    setEmailError(""); // Clear error if all checks pass
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "email") {
      validateEmailDomain(value);
    }
  };

  useEffect(() => {
    if (isOpen && formData.email) {
      validateEmailDomain(formData.email);
    }
  }, [formData.email, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmailDomain(formData.email)) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("source", source); // Include the source

    try {
      const response = await fetch(getformEndpoint, {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json", // Recommended by Getform for AJAX/Fetch
        },
      });

      if (response.ok) {
        // const result = await response.json(); // Optional: if Getform returns data you want to use
        // console.log("Form submitted successfully to Getform:", result);
        setIsSubmitted(true);
        
        // Reset form after successful submission & show toast
        // Keep delay for user to see success message before dialog closes
        setTimeout(() => {
          setIsOpen(false); 
          setIsSubmitted(false); // Reset for next form opening
          setFormData({ name: "", email: "", phone: "" }); // Clear form fields
          
          toast({
            title: "Thank you for your interest!",
            description: "Our team will contact you shortly.",
          });
        }, 2000); 
      } else {
        // const errorResult = await response.json(); // Optional: Getform might return error details
        // console.error("Error submitting to Getform:", response.status, response.statusText, errorResult);
        toast({
          title: "Submission Error",
          description: "Could not submit the form. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // console.error("Network or other error submitting to Getform:", error);
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      if (!isSubmitted) { 
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) {
        setIsSubmitted(false); 
        setFormData({ name: "", email: "", phone: "" });
        setIsSubmitting(false);
        setEmailError("");
      }
    }}>
      <DialogContent className="sm:max-w-lg">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Get Started with ForumScout</DialogTitle>
              <DialogDescription>
                Fill out the form below to get started with your free trial or to get in touch with our sales team.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  aria-describedby="email-error"
                />
                {emailError && (
                  <p id="email-error" className="text-sm text-red-600 mt-1">{emailError}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsOpen(false)} 
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-forumscout-purple to-forumscout-purple-dark hover:opacity-90"
                  disabled={isSubmitting || !!emailError}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-10 flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-primary/10 p-3 rounded-full w-fit">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Thank You!</h3>
            <p className="text-muted-foreground">
              We've received your information and will get back to you shortly.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};