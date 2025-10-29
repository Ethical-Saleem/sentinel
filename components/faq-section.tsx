"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get started on Darkwolf?',
      answer: 'Getting started is easy. Simply sign up for an account, complete the verification process, and make your first deposit.'
    },
    {
      question: 'What are the trading fees?',
      answer: 'Our trading fees are competitive and tiered based on your 30-day trading volume. Maker fees start at 0.16% and taker fees at 0.26%.'
    },
    {
      question: 'Is my crypto safe on Darkwolf?',
      answer: 'Yes, we employ industry-leading security measures including cold storage, 2FA, and regular security audits to protect your assets.'
    },
    {
      question: 'Can I withdraw my funds anytime?',
      answer: 'Yes, you can withdraw your funds at any time. Withdrawals are typically processed within 24 hours.'
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Sentinel Pro FAQs
        </h2>
        <div className="">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 text-left flex items-center justify-between text-gray-500 hover:text-white group transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-3">
                  <p className="text-white">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};