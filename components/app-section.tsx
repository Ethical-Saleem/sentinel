"use client";

import Image from "next/image";

export const AppSection = () => {
  return (
    <section id="app" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Sentinel Pro: Advanced Crypto Trading
          </h2>
          <p className="text-[18px] md:text-[20px] text-white text-pretty mb-4">
            The Kraken Pro mobile app delivers all the trading, funding, earn and security features you love about the Kraken exchange in a mobile-first design. Get access to the tools and alerts you need to trade on the go.
          </p>
          <button className="bg-[#17232d] text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#17232d] transition-colors sm:w-auto">
            Get the app
          </button>
        </div>
        <div className="relative w-full aspect-[16/9] mt-6">
          <Image
            src="/images/mobile-app-shots.webp"
            alt="Mobile Application Shots"
            fill
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};