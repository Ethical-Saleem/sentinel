'use client';

import Image from "next/image";

export const OTCSection = () => {
  return (
    <section id="otc" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Large crypto trades with Sentinel OTC
          </h2>
          <p className="text-[18px] md:text-[20px] text-white text-pretty mb-4">
            Execute orders of more than $50,000 off the open exchange with Kraken OTC, our premium trading service. Get 24/7 access to deep liquidity, minimal slippage, and competitive execution and settlement services.
          </p>
          <button className="bg-[#17232d] text-[#b6c2cc] px-4 py-3 rounded-lg font-semibold
               hover:bg-[#1e303e] hover:text-[#e2eaf0] transition-colors duration-200">
            Get started
          </button>
        </div>
        <div className="relative flex flex-col-reverse md:flex-col w-full rounded-lg md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 mb-8">
            <div className="transition-colors text-center">
              <Image
                src="/images/zap.svg"
                alt="Zap Icon"
                width={28}
                height={28}
                className="block md:hidden mb-4 mx-auto"
              />
              <h3 className={`text-[18px] md:text-[16px] font-semibold mb-1 text-white`}>Spot and derivatives chat trading</h3>
              <p className={`text-[14px] text-white leading-snug text-white`}>
                Chat securely with our trade desk for a personalized, high-touch service all the way from consultation through to trade execution.
              </p>
            </div>
            <div className="transition-colors text-center">
              <Image
                src="/images/chat.svg"
                alt="Chat Icon"
                width={28}
                height={28}
                className="block md:hidden mb-4 mx-auto"
              />
              <h3 className={`text-[18px] md:text-[16px] font-semibold mb-1 text-white`}>Trade RFq via OTC portal</h3>
              <p className={`text-[14px] text-white leading-snug text-white`}>
                Request live trade quotes, execute orders and settle instantly with our simple self-service request-for-quote (RFQ) feature in the OTC Portal.
              </p>
            </div>
          </div>
          <div className="relative w-full mb-12 md:-mb-16">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full translate-y-8"
              style={{ objectFit: "contain", objectPosition: 'initial' }}
            >
              <source src="/videos/spot-derivative-chat-trading.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};