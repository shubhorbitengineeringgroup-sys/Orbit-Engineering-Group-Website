import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";
import faqIcon from "@/assets/icons/faq.png";
import getInTouchIcon from "@/assets/icons/get-in-touch.png";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What types of water treatment solutions do you offer?",
      answer: "Sync WaterTech offers a wide range of water treatment solutions to meet various needs, including: Water filtration systems: Remove impurities, contaminants, and suspended solids from water. Water softening systems: Reduce the hardness of water by removing calcium and magnesium ions. Disinfection systems: Eliminate harmful bacteria, viruses, and other microorganisms. Wastewater treatment systems: Treat wastewater to remove pollutants and contaminants before discharge."
    },
    {
      question: "How do your SCADA systems help optimise water distribution?",
      answer: "Our SCADA (Supervisory Control and Data Acquisition) systems provide real-time monitoring and control of water distribution networks. By collecting and analyzing data on water flow, pressure, and consumption, we can optimize operations, identify leaks, and improve efficiency."
    },
    {
      question: "Do you offer custom solutions to meet specific needs?",
      answer: "Yes, we specialise in providing customised solutions to meet the unique requirements of our clients. Our team of experts can work with you to design and implement a water treatment system that is tailored to your specific needs and budget."
    },
    {
      question: "How do you determine pricing for your products and services?",
      answer: "Our pricing is based on several factors, including the size of the project, the complexity of the system, and the specific requirements of the client. We strive to offer competitive pricing while providing high-quality products and services."
    },
    {
      question: "How can I contact your customer support team?",
      answer: "You can contact our customer support team by phone, email, or through our website contact form. Our team is available to assist you with any questions: "+
        "<a href=\"mailto:info@synctech.com\" class=\"text-primary underline\">info@synctech.com</a>"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-start justify-center space-x-3 mb-6">
            <img src={faqIcon} alt="Frequently Asked Questions" className="h-10 w-10 mt-2" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Frequently Asked</span>
              <br />
              <span className="text-primary">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our water treatment solutions, 
            technologies, and services. Can't find what you're looking for? Contact our team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover-lift border-0 shadow-water bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardHeader 
                className="cursor-pointer transition-smooth hover:bg-muted/50"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="pr-4 text-primary">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              
              {openItems.includes(index) && (
                <CardContent className="pt-0 animate-fade-in-up">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card border border-border rounded-3xl p-12 shadow-float">
          <h3 className="text-2xl font-bold mb-4">
            Need More <span className="text-primary">Info?</span>
          </h3>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={getInTouchIcon} alt="Get in Touch" className="h-8 w-8" />
            <h4 className="text-xl font-semibold">Get in Touch</h4>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We are always ready to help you and answer your questions
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;