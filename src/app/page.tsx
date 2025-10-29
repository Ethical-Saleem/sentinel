"use client"

import { useState, useEffect } from 'react';
import { MainHeader } from '../../components/main-header';
import { HeroSection } from '../../components/hero-section';
import { FeaturesSection } from '../../components/features-section';
import { TradeSection } from '../../components/trade-section';
import { FuturesSection } from '../../components/futures-section';
import { EarnSection } from '../../components/earn-section';
import { OTCSection } from '../../components/otc-section';
import { AppSection } from '../../components/app-section';
import { FAQSection } from '../../components/faq-section';
import { WhySection } from '../../components/why-section';
import { Footer } from '../../components/main-footer';

// Tailwind config colors (add to your tailwind.config.js)
// colors: {
//   primary: { DEFAULT: '#1e3a8a', light: '#3b82f6', dark: '#1e293b' },
//   secondary: { DEFAULT: '#0ea5e9', light: '#38bdf8', dark: '#0369a1' },
//   neutral: { DEFAULT: '#f8fafc', dark: '#0f172a' }
// }

type SectionType = 
  | "overview"
  | "features"
  | "trade"
  | "futures"
  | "earn"
  | "otc"
  | "app"
  | "faq"
  | "why"

export const StickyNav = ({ activeSection }: { activeSection: SectionType }) => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'trade', label: 'Trade' },
    { id: 'futures', label: 'Futures' },
    { id: 'earn', label: 'Earn' },
    { id: 'otc', label: 'OTC' },
    { id: 'app', label: 'Sentinel Pro App' },
    { id: 'faq', label: 'FAQ' },
    { id: 'why', label: 'Why Sentinel?' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:sticky top-16 bg-white shadow-sm z-40 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <nav className="flex items-center justify-center overflow-x-auto py-3 space-x-6 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`whitespace-nowrap text-sm font-medium transition-colors pb-2 border-b-2 ${
                activeSection === section.id
                  ? 'text-[#17232d] border-[#17232d]'
                  : 'text-[#4b5563] border-transparent hover:text-[#17232d]'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default function DarkwolfLanding() {
  const [activeSection, setActiveSection] = useState<SectionType>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionType[] = ['overview', 'features', 'trade', 'futures', 'earn', 'otc', 'app', 'faq', 'why'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <MainHeader />
      <main>
        <HeroSection />
        <StickyNav activeSection={activeSection} />
        <FeaturesSection />
        <TradeSection />
        <FuturesSection />
        <EarnSection />
        <OTCSection />
        <AppSection />
        <FAQSection />
        <WhySection />
      </main>
      <Footer />
    </div>
  );
}