import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQSectionProps {
  isMobile?: boolean;
}

export const FAQSection = ({ isMobile = false }: FAQSectionProps) => {
  const faqs = [
    {
      question: "What if our team doesn't adopt it?",
      answer: "Forum Scout is designed for effortless adoption. It works within your existing tools (Slack, Teams) and requires zero behavior change. Teams actually love it because it makes their job easier - they get context-rich notifications instead of having to hunt for questions. Plus, we provide dedicated onboarding and training to ensure smooth adoption.",
      priority: 1 // Most critical for mobile
    },
    {
      question: "What happens to our data? Is it secure?",
      answer: "Your data never leaves your control. We only read public forum content (same as any user would see) and don't store sensitive information. All data is encrypted in transit and at rest. We're SOC 2 compliant and follow enterprise-grade security practices. You can revoke access anytime.",
      priority: 1 // Security is critical
    },
    {
      question: "What's the real ROI? Is this worth the investment?",
      answer: "Most customers see 6x faster response times and 110% improvement in resolution rates within 2 weeks. This translates to happier customers, reduced support load, and valuable product insights. The average customer saves 15+ hours per week of manual forum monitoring. ROI typically pays for itself in the first month.",
      priority: 1 // ROI is critical
    },
    {
      question: "Can we try it risk-free?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. If you're not seeing results after 14 days, we'll work with you until you do, or provide a full refund. We're that confident in Forum Scout's value.",
      priority: 1 // Trial is critical
    },
    {
      question: "How does it integrate with our existing tools?",
      answer: "Forum Scout integrates seamlessly with 50+ platforms including Slack, Microsoft Teams, Discord, Jira, and all major forum platforms. Setup takes minutes, not weeks. We use standard APIs and webhooks, so there's no complex technical integration required. Our team handles the setup for you.",
      priority: 1 // Integration is critical
    },
    {
      question: "Will this disrupt our current forum workflow?",
      answer: "Not at all! Forum Scout works alongside your existing processes without any disruption. Your forums continue to operate exactly as before. We simply add intelligent monitoring and routing on top. No changes to your forum setup, user experience, or existing workflows.",
      priority: 2 // Less critical for mobile
    },
    {
      question: "What if we have multiple forums across different platforms?",
      answer: "Perfect! Forum Scout excels at managing multiple forums across different platforms (Discourse, Reddit, Stack Overflow, custom forums, etc.). You get a unified dashboard and can route questions from any forum to the right expert. Most customers have 3-10 different forums we monitor.",
      priority: 2 // Less critical for mobile
    },
    {
      question: "How accurate is the AI routing? What if it makes mistakes?",
      answer: "Our AI achieves 94% accuracy in expert matching, and it gets smarter over time by learning from your team's responses. When mistakes happen (rarely), you can easily reassign questions, and the AI learns from the correction. You always have full control and can override any routing decision.",
      priority: 2 // Less critical for mobile
    }
  ];

  // Filter FAQs based on mobile/desktop
  const displayedFaqs = isMobile 
    ? faqs.filter(faq => faq.priority === 1) // Show only critical FAQs on mobile
    : faqs; // Show all FAQs on desktop

  return (
    <section id="faq" className="py-12 md:py-24 bg-gradient-to-br from-forumscout-neutral-50 via-background to-forumscout-neutral-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-forumscout-neutral-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-forumscout-neutral-600/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-forumscout-neutral-100 border border-forumscout-neutral-200 mb-4 md:mb-6">
            <HelpCircle className="h-4 w-4 md:h-5 md:w-5 text-forumscout-neutral-600" />
            <span className="text-forumscout-neutral-700 font-semibold text-sm md:text-lg">Common Concerns</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-forumscout-neutral-600 via-forumscout-neutral-800 to-forumscout-neutral-600 text-transparent bg-clip-text">
              Questions & Concerns
            </span>
            <br />
            <span className="text-foreground">We've Got You Covered</span>
          </h2>
          
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-2">
            Real answers to the questions teams ask before choosing Forum Scout
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
            {displayedFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-forumscout-neutral-200 rounded-xl md:rounded-2xl px-4 py-1 md:px-6 md:py-2 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-4 md:py-6 leading-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 md:pb-6 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Mobile indicator for more FAQs */}
          {isMobile && (
            <div className="text-center mt-6 p-4 bg-forumscout-neutral-50 border border-forumscout-neutral-200 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">+{faqs.length - displayedFaqs.length} more questions</span> answered on desktop
              </p>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-8 md:mt-16">
          <div className="bg-gradient-to-r from-forumscout-neutral-100 to-forumscout-neutral-200 border border-forumscout-neutral-200 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground leading-tight">
              Still have questions?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Our team is here to help. Get personalized answers to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-forumscout-primary-600 to-forumscout-secondary-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 min-h-[48px] text-sm md:text-base">
                Schedule a Call
              </button>
              <button className="border border-forumscout-neutral-300 text-forumscout-neutral-700 px-6 py-3 rounded-full font-semibold hover:bg-forumscout-neutral-50 transition-all duration-300 min-h-[48px] text-sm md:text-base">
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 