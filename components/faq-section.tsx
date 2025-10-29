"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is Sentinel Pro different from Sentinel?',
      answer: 'Sentinel Pro is designed specifically for advanced traders. It consolidates all of our trading offerings along with our industry-leading staking services. Behind the scenes – it\'s the same orderbook, highly liquid markets, and world-class security that Kraken exchange is known for.'
    },
    {
      question: 'Is Sentinel Pro free to use?',
      answer: 'There are no changes to the Sentinel Pro fee structure on the new platform, and no hidden spreads. For more information on fees, please visit our Fee Schedule.'
    },
    {
      question: 'Who can sign up for Sentinel Pro?',
      answer: 'Sentinel Pro is available to anyone who is 18 or older, and living in a supported region. There are no additional requirements – if you use Sentine, you can use Kraken Pro!'
    },
    {
      question: 'How do I upgrade to Sentinel Pro?',
      answer: 'There’s no need to upgrade your account. Just sign in to start trading or create a new account.'
    },
    {
      question: 'How can I learn to use Sentinel Pro?',
      answer: 'Whether you’re a beginner or a pro, we have a wealth of educational and support resources that empower you to make the most of your crypto holdings and learn how Sentinel Pro can help you to reach your goals.'
    },
    {
      question: 'There’s something else I’d like to know',
      answer: 'Sentinel offers industry leading support through our Support Center and also offers 24/7 support by email, phone, or live chat.'
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