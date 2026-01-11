"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Import Lucide icons

const faqs = [
  { 
    question: "How do I start investing on this platform?", 
    answer: "Getting started is easy! Sign up for a free account, complete your innovator or investor profile, and explore our AI-driven tools to track your portfolio or fund your first student venture." 
  },
  { 
    question: "How secure is my data and transactions?", 
    answer: "We use enterprise-grade encryption and secure infrastructure to ensure that all investment data and personal information are protected at all times." 
  },
  { 
    question: "Whats the difference between the Pro Plan and the Free Plan?", 
    answer: "The Free Plan allows basic tracking and discovery, while the Pro Plan unlocks advanced AI analytics, priority access to new student ventures, and detailed risk assessment reports." 
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-500/30 px-3 py-1 text-xs font-medium leading-5 text-emerald-400">
            FAQs
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                  isOpen ? "border-emerald-500/50 bg-emerald-500/5" : "border-emerald-500/20 bg-black"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left text-white transition hover:bg-emerald-500/10"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold">{faq.question}</span>
                  
                  {/* Icon Container with Rotation Effect */}
                  <div className="relative flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-emerald-400 transition-all" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400 transition-all" />
                    )}
                  </div>
                </button>
                
                {/* Answer with simple conditional rendering */}
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-gray-400 animate-in fade-in slide-in-from-top-1 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <p className="mt-10 text-center text-sm text-gray-400">
            Still have questions?{" "}
            <a href="#" className="font-medium text-emerald-400 hover:underline underline-offset-4">
                Contact
            </a>{" "}
            our support team.
        </p>
      </div>
    </section>
  );
}