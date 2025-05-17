import { Button } from "@/components/ui/button";
import { useLeadCapture } from "@/hooks/use-lead-capture";
import { LeadCaptureForm } from "@/components/lead-capture/LeadCaptureForm";

export default function Blog() {
  const { openLeadForm, isLeadFormOpen, setIsLeadFormOpen, leadSource } = useLeadCapture();
  const pageName = "Blog";
  const pageTitle = "Our Blog";

  return (
    <>
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 mx-auto max-w-[800px]">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              {pageName}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              {pageTitle}
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px] pt-2">
              The content of the {pageName.toLowerCase()} is exclusively available to ThreadWise customers.
            </p>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mt-1">
              Please sign up for a free trial or contact us to learn more about becoming a customer and gaining access.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-threadwise-purple to-threadwise-purple-dark hover:opacity-90"
                onClick={() => openLeadForm(`blog-placeholder-cta`)}
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => openLeadForm(`blog-placeholder-contact`)}
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