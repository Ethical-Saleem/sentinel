"use client";

import { ArrowUpDown, Wallet } from "lucide-react";
export const FuturesSection = () => {
  return (
    <section id="futures" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Flexible derivatives trading
          </h2>
          <p className="text-[18px] md:text-[20px] text-white text-pretty">
            Trade over 300 perpetual futures and fixed-maturity contracts with a wide range of collateral and payout options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1b2832] rounded-[16px] p-4">
            <ArrowUpDown className="h-[28px] w-[28px] mb-4 text-white" />
            <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">Long and Short positions</h2>
            <p className="text-[16px] text-white">
              Express a view on price changes by taking long or short positions
            </p>
          </div>
          <div className="bg-[#1b2832] rounded-[16px] p-4">
            <ArrowUpDown className="h-[28px] w-[28px] mb-4 text-white" />
            <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">Capital efficiency</h2>
            <p className="text-[16px] text-white">
              Trade with leverage, amplifying your buying or selling power.
            </p>
          </div>
          <div className="bg-[#1b2832] rounded-[16px] p-4">
            <Wallet className="h-[28px] w-[28px] mb-4 text-white" />
            <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">Competitive fees</h2>
            <p className="text-[16px] text-white">
              One of the most competitive fee structures in the industry with taker fees as low as 0.01%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};