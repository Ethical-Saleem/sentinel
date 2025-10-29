"use client";

import { useState, useMemo } from "react";
import { TrendingUp, Rocket, Search, ChevronDown } from "lucide-react";

const COINS = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", apy: 0.1, price: 67500, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_btc.webp" },
  { id: "eth", name: "Ethereum", symbol: "ETH", apy: 4.5, price: 3200, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_eth.webp" },
  { id: "sol", name: "Solana", symbol: "SOL", apy: 7.2, price: 180, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_sol.webp" },
  { id: "ada", name: "Cardano", symbol: "ADA", apy: 5.8, price: 0.65, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_ada.webp" },
  { id: "dot", name: "Polkadot", symbol: "DOT", apy: 14.5, price: 8.5, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_dot.webp" },
  { id: "matic", name: "Polygon", symbol: "MATIC", apy: 6.3, price: 0.85, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_matic.webp" },
  { id: "atom", name: "Cosmos", symbol: "ATOM", apy: 19.2, price: 12.5, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_atom.webp" },
  { id: "avax", name: "Avalanche", symbol: "AVAX", apy: 8.7, price: 38, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_avax.webp" },
  { id: "near", name: "NEAR Protocol", symbol: "NEAR", apy: 10.5, price: 6.2, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_near.webp" },
  { id: "algo", name: "Algorand", symbol: "ALGO", apy: 5.5, price: 0.28, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_algo.webp" },
  { id: "xtz", name: "Tezos", symbol: "XTZ", apy: 6.1, price: 1.15, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_xtz.webp" },
  { id: "kava", name: "Kava", symbol: "KAVA", apy: 24.0, price: 0.95, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_kava.webp" },
  { id: "flow", name: "Flow", symbol: "FLOW", apy: 7.8, price: 1.2, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_flow.webp" },
  { id: "one", name: "Harmony", symbol: "ONE", apy: 9.5, price: 0.023, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_one.webp" },
  { id: "luna", name: "Terra", symbol: "LUNA", apy: 12.3, price: 0.85, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_luna.webp" },
  { id: "osmo", name: "Osmosis", symbol: "OSMO", apy: 18.5, price: 1.35, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_osmo.webp" },
  { id: "ftm", name: "Fantom", symbol: "FTM", apy: 5.2, price: 0.72, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_ftm.webp" },
  { id: "egld", name: "MultiversX", symbol: "EGLD", apy: 11.8, price: 45, icon: "https://assets.kraken.com/marketing/web/icons-uni-webp/s_egld.webp" },
];

const DURATION_OPTIONS = [
  { value: 1, label: "1 month", shortLabel: "1 M" },
  { value: 12, label: "12 months", shortLabel: "12 M" },
  { value: 24, label: "24 months", shortLabel: "24 M" },
  { value: 36, label: "36 months", shortLabel: "36 M" },
];

export const EarnSection = () => {
  const [selectedCoin, setSelectedCoin] = useState(COINS[0]);
  const [amount, setAmount] = useState(100);
  const [duration, setDuration] = useState(12);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredDuration, setHoveredDuration] = useState(null);

  const filteredCoins = useMemo(() => {
    return COINS.filter(coin =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const coinAmount = amount / selectedCoin.price;

  const calculateRewards = (months) => {
    const monthlyRate = selectedCoin.apy / 100 / 12;
    return amount * Math.pow(1 + monthlyRate, months);
  };

  const calculateCoinAmount = (months) => {
    return coinAmount * (1 + (selectedCoin.apy / 100) * (months / 12));
  };

  const displayDuration = hoveredDuration !== null ? hoveredDuration : duration;
  const finalValue = calculateRewards(displayDuration);
  const finalCoinAmount = calculateCoinAmount(displayDuration);

  // Calculate curve intensity based on APY
  const curveIntensity = Math.min(selectedCoin.apy / 24, 1); // Normalize to max 24% APY

  return (
    <section id="earn" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-4 leading-tight tracking-tight">
            Make your assets work for you
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/80">
            Earn up to 24% APY. With a wide range of supported assets, you can
            receive rewards up to twice a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-[#1b2832] rounded-lg p-6">
              <TrendingUp className="h-7 w-7 mb-4 text-white" />
              <h3 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">
                Calculate your rewards
              </h3>
              <p className="text-[16px] text-white/70">
                Portfolio growth charts over time, based on different staking
                scenarios and the effect of compounding rewards.
              </p>
            </div>
            <div className="bg-[#1b2832] rounded-lg p-6">
              <Rocket className="h-7 w-7 mb-4 text-white" />
              <h3 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">
                Manage your portfolio
              </h3>
              <p className="text-[16px] text-white/70">
                Clear trackers for your rewards and staking balance with one
                consolidated view.
              </p>
            </div>
            <div className="bg-[#1b2832] rounded-lg p-6">
              <TrendingUp className="h-7 w-7 mb-4 text-white" />
              <h3 className="text-[18px] md:text-[20px] mb-2 text-white font-semibold">
                Unstake at any time
              </h3>
              <p className="text-[16px] text-white/70">
                Unstaking is possible upon request. We don't apply any lock-up
                periods unless it's required by the network itself.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-[#1b2832] rounded-lg p-6">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Coin Selector */}
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-[#0f1a22] hover:bg-[#162530] rounded-xl p-4 flex items-center justify-between text-white transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img src={selectedCoin.icon} alt={selectedCoin.symbol} className="w-8 h-8 rounded-full" />
                        <div className="text-left">
                          <div className="font-semibold">{selectedCoin.symbol}</div>
                          <div className="text-sm text-green-400">{selectedCoin.apy}% APY</div>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setSearchQuery("");
                          }}
                        />
                        <div className="absolute z-50 top-full mt-2 w-full bg-[#0f1a22] rounded-xl border border-white/10 shadow-xl max-h-96 overflow-hidden">
                          <div className="p-3 border-b border-white/10">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                              <input
                                type="text"
                                placeholder="Search coins..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#1b2832] rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#8A61FF]"
                              />
                            </div>
                          </div>
                          <div className="overflow-y-auto max-h-80">
                            {filteredCoins.map((coin) => (
                              <button
                                key={coin.id}
                                onClick={() => {
                                  setSelectedCoin(coin);
                                  setIsDropdownOpen(false);
                                  setSearchQuery("");
                                }}
                                className="w-full p-3 hover:bg-[#1b2832] flex items-center gap-3 text-white transition-colors"
                              >
                                <img src={coin.icon} alt={coin.symbol} className="w-8 h-8 rounded-full" />
                                <div className="flex-1 text-left">
                                  <div className="font-semibold">{coin.symbol}</div>
                                  <div className="text-sm text-white/60">{coin.name}</div>
                                </div>
                                <div className="text-sm text-green-400">{coin.apy}% APY</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Amount Input */}
                  <div className="relative">
                    <label className="absolute left-4 top-2 text-xs text-white/60">Amount</label>
                    <div className="relative">
                      <span className="absolute left-4 bottom-3 text-white/60">$</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                        className="w-full bg-[#0f1a22] rounded-xl pl-7 pr-4 pt-7 pb-3 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-[#8A61FF]"
                      />
                    </div>
                    <div className="absolute right-2 top-2 flex gap-1">
                      {[100, 500, 1000].map((val) => (
                        <button
                          key={val}
                          onClick={() => setAmount(val)}
                          className="bg-[#2D9CFF] hover:bg-[#17232d] text-white text-xs px-2 py-1 rounded transition-colors"
                        >
                          ${val}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Coin Amount */}
                  <div className="relative">
                    <label className="absolute left-4 top-2 text-xs text-white/60">{selectedCoin.symbol}</label>
                    <input
                      type="text"
                      value={coinAmount.toFixed(8)}
                      readOnly
                      className="w-full bg-[#0f1a22] rounded-xl px-4 pt-7 pb-3 text-white font-semibold"
                    />
                  </div>
                </div>

                {/* Chart */}
                <div className="relative">
                  <div className="absolute left-6 top-6 z-10">
                    <div className="text-white/60 text-sm mb-2">
                      In {displayDuration} {displayDuration === 1 ? 'month' : 'months'}, you would have
                    </div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-4 h-4 bg-[#2D9CFF] rounded"></div>
                      <div className="text-2xl font-bold text-white">
                        {finalValue.toFixed(2)} <span className="text-white/40 text-base">USD</span>
                      </div>
                    </div>
                    <div className="text-white/40 text-sm">
                      Based on today's {selectedCoin.symbol} price
                    </div>
                  </div>

                  <div className="relative h-[464px]">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full bg-[#0f1a22] rounded-lg">
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8a85ff" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#8a85ff" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      <path
                        d={`M0,${99 - curveIntensity * 30} Q${80 - curveIntensity * 10},${100 - curveIntensity * 40} 100,${0 + curveIntensity * 5} L108,100 Q80,103 0,99 Z`}
                        fill="url(#gradient)"
                        stroke="none"
                      />
                      <path
                        d={`M0,${99 - curveIntensity * 30} Q${80 - curveIntensity * 10},${100 - curveIntensity * 40} 100,${0 + curveIntensity * 5}`}
                        fill="none"
                        stroke="#2D9CFF"
                        strokeWidth="0.15"
                      />
                    </svg>
                  </div>
                </div>

                {/* Duration Selector with Tooltip */}
                <div className="relative">
                  {hoveredDuration !== null && (
                    <>
                      <div 
                        className="absolute bottom-full w-px bg-white/20 transition-all"
                        style={{
                          left: `${(DURATION_OPTIONS.findIndex(opt => opt.value === hoveredDuration) / (DURATION_OPTIONS.length - 1)) * 100}%`,
                          height: '80px',
                        }}
                      />
                      <div 
                        className="absolute bottom-full -translate-x-1/2 mb-20 bg-white/5 backdrop-blur-xl rounded-xl p-3 shadow-xl border border-white/10 transition-all"
                        style={{
                          left: `${(DURATION_OPTIONS.findIndex(opt => opt.value === hoveredDuration) / (DURATION_OPTIONS.length - 1)) * 100}%`,
                        }}
                      >
                        <div className="text-white font-semibold text-sm mb-1">
                          {hoveredDuration} {hoveredDuration === 1 ? 'month' : 'months'}
                        </div>
                        <div className="text-white/70 text-xs">
                          {finalCoinAmount.toFixed(8)} {selectedCoin.symbol}
                        </div>
                        <div className="text-white/70 text-xs">
                          Equals {finalValue.toFixed(2)} USD
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div className="flex justify-between gap-2">
                    {DURATION_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setDuration(option.value)}
                        onMouseEnter={() => setHoveredDuration(option.value)}
                        onMouseLeave={() => setHoveredDuration(null)}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          duration === option.value
                            ? 'bg-[#2D9CFF] text-white'
                            : 'bg-[#0f1a22] text-white/60 hover:bg-[#162530]'
                        }`}
                      >
                        <span className="hidden sm:inline">{option.label}</span>
                        <span className="sm:hidden">{option.shortLabel}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}