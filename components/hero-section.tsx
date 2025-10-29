"use client";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <section 
      id="overview" 
      className="mt-16 rounded-3xl overflow-hidden mx-4"
      style={{
  background:
    'radial-gradient(95.83% 57.2% at 50% 102.33%, #2D9CFF 0%, #0D1A20 100%) #17232d',
}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0">
        <div className="text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-[36px] md:text-[58px] font-bold mb-3 leading-tight">
              Powerful. Customizable. Beautiful.
            </h1>
            <p className="text-[18px] md:text-[24px] mb-4 text-gray-300 max-w-3xl mx-auto">
              A decade of expertise, reimagined for the next generation of trading
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <button className="bg-white text-[#17232d] px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Sign up now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#17232d] transition-colors w-full sm:w-auto">
                Explore Pro
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-[1100px] mx-auto aspect-[16/9] -mb-12">
            <Image
              src="/images/hero-image.webp"
              alt="Hero"
              fill
              className="hidden md:block object-contain w-full h-auto max-w-[1100px]"
            />
            <Image
              src="/images/hero-mobile.webp"
              alt="Hero"
              fill
              className="block md:hidden object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};