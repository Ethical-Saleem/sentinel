
'use client';

import { useState, useEffect } from 'react';

export default function CoinMarqueeWidget() {
  const [activeTab, setActiveTab] = useState('spot');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Coin IDs for different categories
  const coinCategories = {
    spot: '1,1027,825,1839,5426,52,74,2010,3408,5805,6636,3897,7083,1958,2,512,1831,5994,328,4687,3794,1975,2011,4943,7278,11840,4030,5864,8916,1321,3635,4172,2416', // BTC, ETH, USDT, BNB, SOL, XRP, DOGE, ADA, MATIC, AVAX, DOT, ATOM, UNI, TRX, LTC, XMR, BCH, ALGO, XLM, MANA, SAND, LINK, DAI, FTM, TON, APT, NEAR, OP, ARB, DASH, HBAR, EGLD, KAS
    margin: '1,1027,825,1839,5426,52,1975,2010,3408,5805,6636,3897,1958,512,1831,74,328,2011,5994,4687,1321,7083,1027,8916,3635,2416,4030,7278,11840', // Major trading pairs: BTC, ETH, USDT, BNB, SOL, XRP, LINK, ADA, MATIC, AVAX, DOT, ATOM, TRX, XMR, BCH, DOGE, XLM, DAI, ALGO, MANA, DASH, UNI, ETH, ARB, HBAR, KAS, NEAR, TON, APT
    staking: '1027,2010,5426,3408,5805,6636,3897,1839,1958,74,1831,5994,328,2011,4687,3794,4943,7278,11840,4030,5864,8916,3635,4172,2416,7129,8000,21794', // ETH, ADA, SOL, MATIC, AVAX, DOT, ATOM, BNB, TRX, DOGE, BCH, ALGO, XLM, DAI, MANA, SAND, FTM, TON, APT, NEAR, OP, ARB, HBAR, EGLD, KAS, OSMO, KAVA, GRT
  };

  useEffect(() => {
    // Load CoinMarketCap script
    const script = document.createElement('script');
    script.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      // Reinitialize widget when tab changes
      const widget = document.getElementById('coinmarketcap-widget-marquee');
      if (widget) {
        widget.setAttribute('coins', coinCategories[activeTab]);
      }
    }
  }, [activeTab, scriptLoaded]);

  const tabs = [
    { id: 'spot', label: 'Spot Trading', icon: '💱' },
    { id: 'margin', label: 'Margin Trading', icon: '📊' },
    { id: 'staking', label: 'Staking', icon: '🔒' },
  ];

  return (
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="max-w-md mx-auto rounded-lg p-2 mb-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 w-auto px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Widget Container */}
        <div className="shadow-2xl">
          <div className="p-4 overflow-hidden">
            <div
              id="coinmarketcap-widget-marquee"
              coins={coinCategories[activeTab]}
              currency="USD"
              theme="dark"
              transparent="false"
              show-symbol-logo="true"
            ></div>
            <div
              id="coinmarketcap-widget-marquee"
              coins={coinCategories[activeTab]}
              currency="USD"
              theme="dark"
              transparent="false"
              show-symbol-logo="true"
            ></div>
          </div>
        </div>
      </div>
  );
}