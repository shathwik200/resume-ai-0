
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI resume builder work?",
      answer: "Our AI resume builder analyzes job descriptions and your experience to create a tailored resume. It suggests optimal content, formats your information professionally, and checks for ATS compatibility to increase your chances of getting an interview."
    },
    {
      question: "Is this service completely free?",
      answer: "Yes, our basic resume building service is completely free. You can create, edit, and download your resume without any cost. We also offer premium features for enhanced customization and AI assistance."
    },
    {
      question: "Will my resume pass ATS (Applicant Tracking Systems)?",
      answer: "Yes, all our templates are designed to be ATS-friendly. Additionally, our ATS Checker tool helps you optimize your content for specific job descriptions, increasing your chances of passing through automated screening systems."
    },
    {
      question: "Can I edit my resume after creating it?",
      answer: "Absolutely! You can edit your resume as many times as you want. Your draft is automatically saved in your browser, allowing you to make changes whenever needed."
    },
    {
      question: "How do I download my resume?",
      answer: "Once you've finished creating your resume, simply click the 'Export PDF' button in the resume builder interface. Your resume will be downloaded as a professional PDF document that you can share with employers."
    },
    {
      question: "Do I need to create an account?",
      answer: "No, you don't need to create an account to use our basic services. However, creating an account allows you to save multiple resumes, access them from any device, and enjoy additional features."
    },
    {
      question: "Can I create multiple versions of my resume?",
      answer: "Yes, we recommend creating tailored versions of your resume for different job applications. With our tools, you can easily create and manage multiple versions to target specific roles or industries."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-resume-secondary mb-2 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground mb-8 text-center">
              Find answers to the most common questions about our resume builder
            </p>
            
            <Accordion type="single" collapsible className="bg-white rounded-xl p-6 shadow-sm">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-resume-secondary font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 text-center">
              <h2 className="text-xl font-semibold text-resume-secondary mb-4">
                Still have questions?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Contact our support team and we'll be happy to help you out.
              </p>
              <Link to="/contact" className="text-resume-primary hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
