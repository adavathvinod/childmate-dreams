import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What is the teacher-to-child ratio?',
      answer: 'We maintain a healthy 1:8 teacher-to-child ratio to ensure personalized attention for every child. For younger age groups (playgroup), the ratio is even better at 1:6.',
    },
    {
      question: 'What are the admission requirements?',
      answer: 'We accept children from 1.5 to 5.5 years of age. Required documents include birth certificate, Aadhar card (child & parent), 4 passport-size photos, and a filled admission form. A brief interaction with parents and child is part of our admission process.',
    },
    {
      question: 'Is the school AC-enabled and safe?',
      answer: 'Yes! All our classrooms are fully air-conditioned for comfort. We have 24/7 CCTV surveillance, trained staff, child-safe furniture, and secure entry/exit points with visitor management.',
    },
    {
      question: 'What curriculum do you follow?',
      answer: 'We follow our own specially designed curriculum that combines the best of play-way learning with academic fundamentals. It focuses on cognitive, social, emotional, and physical development through age-appropriate activities.',
    },
    {
      question: 'Do you provide transportation facility?',
      answer: 'Yes, we offer safe and comfortable transportation with GPS-enabled vehicles, trained drivers, and female attendants. Routes are designed to cover major areas around Kuntloor and Hayathnagar.',
    },
    {
      question: 'What are the school timings and holidays?',
      answer: 'School operates Monday to Friday from 9:00 AM to 3:30 PM, and Saturday from 9:00 AM to 12:30 PM. We follow the state government holiday calendar with additional holidays for major festivals.',
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="section-title">
            Common Questions
          </h2>
          <p className="section-subtitle">
            Find answers to frequently asked questions from parents.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border-none shadow-soft px-6 data-[state=open]:shadow-card transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pl-14">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
