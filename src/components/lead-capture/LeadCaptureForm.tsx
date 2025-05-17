import { useState } from "react";
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

export const LeadCaptureForm = ({ isOpen, setIsOpen, source = "general" }: LeadCaptureFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getformEndpoint = "https://getform.io/f/bgdlyyga"; // Your Getform endpoint

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      // Only set isSubmitting to false here if not successful, 
      // otherwise, the success state handles UI changes.
      // If submission was successful, isSubmitted is true, and the form content changes.
      // If it failed, we want the user to be able to try again.
      if (!isSubmitted) { 
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      // If dialog is closed, reset submitted state to show form next time
      if (!open) {
        setIsSubmitted(false); 
        setFormData({ name: "", email: "", phone: "" }); // Clear form fields
        setIsSubmitting(false); // Ensure submit button is active
      }
    }}>
      <DialogContent className="sm:max-w-[425px]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Get Started with Threadwise</DialogTitle>
              <DialogDescription>
                Fill in your details below and our team will get in touch with you shortly.
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
                />
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
                  className="bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90"
                  disabled={isSubmitting}
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