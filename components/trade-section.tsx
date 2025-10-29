"use client"

import { useState } from "react";
import Image from "next/image";
import CoinMarqueeWidget from "./coin-marquee";

interface TradeSection {
  id: string;
  title: string;
  content: string;
  videoUrl: string;
  imageUrl: string;
}

export const TradeSection = () => {
  const tradeSections: TradeSection[] = [
    {
      id: "opportunities",
      title: "Find opportunities",
      content: "Quickly browse markets by category; top gainers and losers, top traded and newly listed. Display your favorite markets so they're only one click away.",
      videoUrl: "/videos/trade-opportunities.webm",
      imageUrl: "/images/trade-opportunities.png"
    },
    {
      id: "trends",
      title: "Analyze trends",
      content: "Identify trades with full-featured charting, technical indicators and compare up to 4 markets at once. Monitor the action withlive order books and streaming trades.",
      videoUrl: "/videos/trade-trends.webm",
      imageUrl: "/images/analyze-trends.png"
    },
    {
      id: "manage",
      title: "Manage trades",
      content: "Utilize advance order types and instructions including stop loss, take profit, IOC, reduce-only and trigger options. Drag and modify orders directyly on the chart.",
      videoUrl: "/videos/manage-trade-trends.webm",
      imageUrl: "/images/manage-trades.png"
    }
  ]

  const [selectedSection, setSelectedSection] = useState<TradeSection>(tradeSections[0]);
  const [selectedTab, setSelectedTab] = useState<string>("spot");

  return (
    <section id="trade" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-8">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight max-w-md mx-auto">
            Confidently plan and execute trades
          </h2>
          <p className="text-[18px] md:text-[20px] text-white text-pretty">
            Sentinel Pro comes fully equipped with must-have advanced trading tools and features, addressing all your trading needs in one place.
          </p>
        </div>
        <div className="hidden md:block relative w-full rounded-lg p-12 bg-[#132027] overflow-hidden">
          <div className="grid grid-cols-3 gap-16 mb-8">
            {tradeSections.map((section) => {
              const isActive = selectedSection.id === section.id;

              return (
                <div onClick={() => setSelectedSection(section)} key={section.id} className="cursor-pointer transition-colors">
                  <h3 className={`text-[18px] md:text-[16px] font-semibold mb-1 ${isActive ? 'text-white' : 'text-[#9ca3af]'} `}>{section.title}</h3>
                  <p className={`text-[14px] leading-snug ${isActive ? 'text-white' : 'text-[#9ca3af]'}`}>{section.content}</p>
                </div>
              )
            })}
          </div>
          <div className="relative w-full -mb-16">
            <video
              key={selectedSection.id}
              autoPlay
              loop
              muted
              playsInline
              className="w-full translate-y-8"
              style={{ objectFit: "contain", objectPosition: 'initial' }}
            >
              <source src={selectedSection.videoUrl} type="video/webm" />
            </video>
          </div>
        </div>
        <div className="block md:hidden space-y-8">
          {tradeSections.map((section) => (
            <div key={section.id} className="rounded-lg md:p-6 w-full text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={section.imageUrl}
                  alt={section.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">
                {section.title}
              </h3>
              <p className="text-[14px] text-white leading-snug">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Open the door to 400+ assets
          </h2>
          <p className="text-[18px] md:text-[20px] text-white text-pretty">
            Trade, stake or invest across an ever-growing number of crypto assets stablecoins and fiat currencies.
          </p>
        </div>
        <CoinMarqueeWidget />
        <div className="w-full text-center">
          <button className="bg-[#17232D] text-[#FFFFFF] px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors sm:w-auto">
            Get started
          </button>
        </div>
      </div>
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="max-w-2xl mx-auto text-center mb-6">
          <span className="p-2 rounded-md bg-gray-900 text-white mb-3">
            New
          </span>
          <h2 className="text-[32px] lg:text-[48px] font-bold text-center text-white mb-4 leading-tight tracking-tight">
            Trade stocks on Sentinel Pro
          </h2>
          <p className="text-[18px] md:text-[20px] text-white text-pretty mb-4">
            US clients can now invest in over 11,000 stocks and ETFs – commission-free – directly on Sentinel Pro.<sup>5</sup>
          </p>
          <button className="bg-[#17232D] text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#17232D] transition-colors sm:w-auto">
            Learn more
          </button>
        </div>
        <div className="relative w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
            style={{ objectFit: "contain", objectPosition: 'initial' }}
          >
            <source src="/videos/pro-trade-rotating-card.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};