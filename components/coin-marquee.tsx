'use client';

import { useState, useEffect } from 'react';

export default function CoinMarqueeWidget() {
  const [activeTab, setActiveTab] = useState<'spot' | 'margin' | 'staking'>('spot');
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const coinCategories = {
    spot: '1,1027,825,1839,5426,52,74,2010,3408,5805,6636,3897,7083,1958,2,512,1831,5994,328,4687,3794,1975,2011,4943,7278,11840,4030,5864,8916,1321,3635,4172,2416',
    margin: '1,1027,825,1839,5426,52,1975,2010,3408,5805,6636,3897,1958,512,1831,74,328,2011,5994,4687,1321,7083,1027,8916,3635,2416,4030,7278,11840',
    staking: '1027,2010,5426,3408,5805,6636,3897,1839,1958,74,1831,5994,328,2011,4687,3794,4943,7278,11840,4030,5864,8916,3635,4172,2416,7129,8000,21794',
  };

  useEffect(() => {
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
    if (!scriptLoaded) return;

    // Remove old widget if it exists
    const oldWidget = document.getElementById('coinmarketcap-widget-marquee');
    if (oldWidget && oldWidget.parentNode) {
      oldWidget.parentNode.removeChild(oldWidget);
    }

    // Create a new widget container
    const widget = document.createElement('div');
    widget.id = 'coinmarketcap-widget-marquee';
    widget.setAttribute('coins', coinCategories[activeTab]);
    widget.setAttribute('currency', 'USD');
    widget.setAttribute('theme', 'dark');
    widget.setAttribute('transparent', 'false');
    widget.setAttribute('show-symbol-logo', 'true');

    document.getElementById('cmc-container')?.appendChild(widget);

    // Force re-run of the CMC script
    const newScript = document.createElement('script');
    newScript.src = 'https://files.coinmarketcap.com/static/widget/coinMarquee.js';
    newScript.async = true;
    document.body.appendChild(newScript);

    return () => {
      newScript.remove();
    };
  }, [activeTab, scriptLoaded]);

  const tabs = [
    { id: 'spot', label: 'Spot' },
    { id: 'margin', label: 'Margin' },
    { id: 'staking', label: 'Staking' },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-4">
      {/* Tabs */}
      <div className="max-w-xs mx-auto rounded-lg p-2 mb-6">
        <div className="flex bg-gray-800 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 w-auto px-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gray-700 to-purple-600 text-white shadow-lg scale-105'
                  : 'text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Widget Container */}
      <div className="shadow-2xl">
        <div className="p-4 overflow-hidden" id="cmc-container"></div>
      </div>
    </div>
  );
}
