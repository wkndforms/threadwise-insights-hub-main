import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What if our team doesn't adopt it?",
      answer: "Forum Scout is designed for effortless adoption. It works within your existing tools (Slack, Teams) and requires zero behavior change. Teams actually love it because it makes their job easier - they get context-rich notifications instead of having to hunt for questions. Plus, we provide dedicated onboarding and training to ensure smooth adoption."
    },
    {
      question: "How does it integrate with our existing tools?",
      answer: "Forum Scout integrates seamlessly with 50+ platforms including Slack, Microsoft Teams, Discord, Jira, and all major forum platforms. Setup takes minutes, not weeks. We use standard APIs and webhooks, so there's no complex technical integration required. Our team handles the setup for you."
    },
    {
      question: "What happens to our data? Is it secure?",
      answer: "Your data never leaves your control. We only read public forum content (same as any user would see) and don't store sensitive information. All data is encrypted in transit and at rest. We're SOC 2 compliant and follow enterprise-grade security practices. You can revoke access anytime."
    },
    {
      question: "Will this disrupt our current forum workflow?",
      answer: "Not at all! Forum Scout works alongside your existing processes without any disruption. Your forums continue to operate exactly as before. We simply add intelligent monitoring and routing on top. No changes to your forum setup, user experience, or existing workflows."
    },
    {
      question: "What if we have multiple forums across different platforms?",
      answer: "Perfect! Forum Scout excels at managing multiple forums across different platforms (Discourse, Reddit, Stack Overflow, custom forums, etc.). You get a unified dashboard and can route questions from any forum to the right expert. Most customers have 3-10 different forums we monitor."
    },
    {
      question: "How accurate is the AI routing? What if it makes mistakes?",
      answer: "Our AI achieves 94% accuracy in expert matching, and it gets smarter over time by learning from your team's responses. When mistakes happen (rarely), you can easily reassign questions, and the AI learns from the correction. You always have full control and can override any routing decision."
    },
    {
      question: "What's the real ROI? Is this worth the investment?",
      answer: "Most customers see 6x faster response times and 110% improvement in resolution rates within 2 weeks. This translates to happier customers, reduced support load, and valuable product insights. The average customer saves 15+ hours per week of manual forum monitoring. ROI typically pays for itself in the first month."
    },
    {
      question: "Can we try it risk-free?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. If you're not seeing results after 14 days, we'll work with you until you do, or provide a full refund. We're that confident in Forum Scout's value."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-slate-50/30 via-background to-slate-50/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-slate-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-slate-600/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100/80 border border-slate-200/50 mb-6">
            <HelpCircle className="h-5 w-5 text-slate-600" />
            <span className="text-slate-700 font-semibold text-lg">Common Concerns</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 text-transparent bg-clip-text">
              Questions & Concerns
            </span>
            <br />
            <span className="text-foreground">We've Got You Covered</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Real answers to the questions teams ask before choosing Forum Scout
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-slate-200/50 rounded-2xl px-6 py-2 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-100/50 to-slate-200/30 border border-slate-200/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get personalized answers to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
              <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300">
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 