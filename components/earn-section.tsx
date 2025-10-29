"use client";

import { TrendingUp, Rocket } from "lucide-react";
export const EarnSection = () => {
  return (
    <section id="earn" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Make your assets work for you
          </h2>
          <p className="text-[18px] md:text-[20px] text-white text-pretty">
            Earn up to 24% APY. With a wide range of supported assets, you can receive rewards up to twice a week.
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4 space-y-3">
            <div className="bg-[#1b2832] rounded-lg p-4">
              <TrendingUp className="h-[28px] w-[28px] mb-4 text-white" />
              <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">Calculate your rewards</h2>
              <p className="text-[16px] text-white">
                Portfolio growth charts over time, based on different staking scenarios and the effect of compounding rewards.
              </p>
            </div>
            <div className="bg-[#1b2832] rounded-lg p-4">
              <Rocket className="h-[28px] w-[28px] mb-4 text-white" />
              <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">Manage your portfolio</h2>
              <p className="text-[16px] text-white">
                Clear trackers for your rewards and staking balance with one consolidated view.
              </p>
            </div>
            <div className="bg-[#1b2832] rounded-lg p-4">
              <TrendingUp className="h-[28px] w-[28px] mb-4 text-white" />
              <h2 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">Unstake at any time</h2>
              <p className="text-[16px] text-white">
                Unstaking is possible upon request. We don’t apply any lock-up periods unless it’s required by the network itself’
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8"></div>
        </div>
      </div>
    </section>
  );
};