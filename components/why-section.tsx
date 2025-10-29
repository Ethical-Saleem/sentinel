"use client";

import Image from "next/image";

export const WhySection = () => {
  return (
    <section id="why" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Experience the best with Sentinel Pro
          </h2>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1b2832] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-white mb-2">
                Deep liquidity
              </h3>
              <p className="text-[16px] text-white tracking-normal">
                Improve your trade execution experience with our deep liquidity
                and tight spreads. 88% of orders found all the liquidity they
                need on the top of book in 2024.
              </p>
              <div className="relative aspect-[16/9] mt-4">
                <Image
                  src="/images/liquidity-feature.webp"
                  alt="Deep liquidity"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-[#1b2832] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-white mb-2">
                Dedicated support
              </h3>
              <p className="text-[16px] text-white tracking-normal">
                Whether you’d like to{" "}
                <span className="text-[#2d9cff]">
                  live chat, call, or email us
                </span>{" "}
                we’re always here to resolve your issues quickly. We usually
                respond within 30 seconds.
              </p>
              <div className="relative aspect-[16/9] mt-4">
                <Image
                  src="/images/support-feature.webp"
                  alt="Deep liquidity"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-[#1b2832] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[18px] md:text-[24px] font-semibold text-white mb-2">
                Deep liquidity
              </h3>
              <p className="text-[16px] text-white tracking-normal">
                Improve your trade execution experience with our deep liquidity
                and tight spreads. 88% of orders found all the liquidity they
                need on the top of book in 2024.
              </p>
              <div className="relative aspect-[16/9] mt-4">
                <Image
                  src="/images/security-feature.webp"
                  alt="Deep liquidity"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[22px] lg:text-[28px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Join one of the most powerful and popular trading platforms in the
            crypto industry.
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row align-items-center justify-between mt-8">
          <div className="">
            <h5 className="text-[24px] md:text-[36px] text-white text-center font-semibold">
              9M+
            </h5>
            <p className="text-[16px] text-white text-center">
              Unique verified clients all time
            </p>
          </div>
          <div className="">
            <h5 className="text-[24px] md:text-[36px] text-white text-center font-semibold">
              $267B+
            </h5>
            <p className="text-[16px] text-white text-center">
              Trading volume last year
            </p>
          </div>
          <div className="">
            <h5 className="text-[24px] md:text-[36px] text-white text-center font-semibold">
              &lt;5mins
            </h5>
            <p className="text-[16px] text-white text-center">
              Average resolution time this year
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[22px] lg:text-[28px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Featured in
          </h2>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-8">
          <div className="relative w-32 h-16 md:w-32 md:h-16 flex-shrink-0">
            <Image
              src="/images/coindesk.webp"
              alt="Coindesk"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-32 h-16 md:w-32 md:h-16 flex-shrink-0">
            <Image
              src="/images/bloomberg.webp"
              alt="Coindesk"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-32 h-16 md:w-32 md:h-16 flex-shrink-0">
            <Image
              src="/images/cryptoslate.webp"
              alt="Coindesk"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-32 h-16 md:w-32 md:h-16 flex-shrink-0">
            <Image
              src="/images/cointelegraph.webp"
              alt="Coin Telegraph"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-32 h-16 md:w-32 md:h-16 flex-shrink-0">
            <Image
              src="/images/forbes.webp"
              alt="Forbes"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Ready to dive in?
          </h2>
          <p className="text-[18px] md:text-[24px] text-white text-pretty">
            Create a free account to unleash the power of Pro. It takes as
            little as 4 minutes to get started.
          </p>
        </div>
        <div className="relative w-full mx-auto aspect-[16/9]">
          <Image
            src="/images/dive-in.webp"
            alt="Hero"
            fill
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="py-6">
          <p className="text-white text-[12px] leading-tight">
            Reward rates are subject to change and compliance with Sentinel’s terms
            and conditions. These materials are for general information purposes
            only and are not investment advice or a recommendation or solicitation
            to buy, sell, stake or hold any cryptoasset or to engage in any
            specific trading strategy. Some crypto products and markets are
            unregulated, and you may not be protected by government compensation
            and/or regulatory protection schemes. The unpredictable nature of the
            cryptoasset markets can lead to loss of funds. Tax may be payable on
            any return and/or on any increase in the value of your cryptoassets
            and you should seek independent advice on your taxation position.{" "}
            <span className="text-[#2d9cff] font-medium">Margin, futures</span> and{" "}
            <span className="text-[#2d9cff] font-medium">opt-in rewards</span> are subject to
            certain geographic limitations and eligibility criteria. For more
            information, please see our{" "}
            <span className="text-[#2d9cff] font-medium">Terms of Service</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
