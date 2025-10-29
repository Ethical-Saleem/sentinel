"use client";

import { useState, useEffect } from "react";

export default function CoinMarqueeWidget() {
  const [activeTab, setActiveTab] = useState<"spot" | "margin" | "staking">(
    "spot"
  );
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Coin IDs for different categories
  const coinCategories = {
    spot: [
      "bitcoin",
      "ethereum",
      "tether",
      "binancecoin",
      "solana",
      "ripple",
      "usd-coin",
      "cardano",
      "avalanche-2",
      "dogecoin",
      "tron",
      "polkadot",
      "polygon",
      "wrapped-bitcoin",
      "shiba-inu",
      "dai",
      "litecoin",
      "bitcoin-cash",
      "chainlink",
      "uniswap",
      "leo-token",
      "stellar",
      "okb",
      "monero",
      "ethereum-classic",
      "hedera-hashgraph",
      "bitcoin-cash-sv",
      "cosmos",
      "filecoin",
      "aptos",
      "arbitrum",
      "optimism",
      "near",
      "vechain",
      "internet-computer",
      "maker",
      "aave",
      "the-graph",
      "eos",
      "theta-token",
      "tether-gold",
      "flow",
      "axie-infinity",
      "sandbox",
      "decentraland",
      "tezos",
      "algorand",
      "elrond-egd-2",
      "fantom",
      "pancakeswap-token",
    ],
    margin: [
      "bitcoin",
      "ethereum",
      "binancecoin",
      "solana",
      "ripple",
      "cardano",
      "avalanche-2",
      "polkadot",
      "polygon",
      "litecoin",
      "bitcoin-cash",
      "chainlink",
      "uniswap",
      "stellar",
      "ethereum-classic",
      "filecoin",
      "monero",
      "cosmos",
      "aptos",
      "near",
      "arbitrum",
      "optimism",
      "maker",
      "aave",
      "vechain",
      "eos",
      "the-graph",
      "algorand",
      "tezos",
      "fantom",
      "pancakeswap-token",
      "axie-infinity",
      "hedera-hashgraph",
      "internet-computer",
      "theta-token",
      "flow",
      "elrond-egd-2",
      "sandbox",
      "decentraland",
      "gala",
      "injective-protocol",
      "render-token",
      "sei-network",
      "immutable-x",
      "stacks",
      "mantra-dao",
      "worldcoin-wld",
      "pendle",
      "flare-networks",
      "sui",
    ],
    staking: [
      "ethereum",
      "cardano",
      "solana",
      "polkadot",
      "avalanche-2",
      "polygon",
      "cosmos",
      "near",
      "algorand",
      "tezos",
      "kava",
      "flow",
      "harmony",
      "terra-luna-2",
      "osmosis",
      "fantom",
      "elrond-egd-2",
      "the-graph",
      "pancakeswap-token",
      "aave",
      "synthetix-network-token",
      "theta-token",
      "axie-infinity",
      "hedera-hashgraph",
      "celo",
      "icon",
      "zilliqa",
      "ontology",
      "waves",
      "qtum",
      "lisk",
      "kusama",
      "persistence",
      "akash-network",
      "band-protocol",
      "secret",
      "fetch-ai",
      "cartesi",
      "oasis-network",
      "ankr",
      "covalent",
      "matic-network",
      "livepeer",
      "nuls",
      "stratis",
      "energy-web-token",
      "skale",
      "casper-network",
      "nervos-network",
      "regen",
    ],
  };

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const coinIds = coinCategories[activeTab].join(",");
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
        );
        const data = await response.json();
        setCoins(data);
        console.log("Fetched coins:", data.length);
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
    const interval = setInterval(fetchCoins, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [activeTab]);

  const CoinCard = ({ coin }: { coin: any }) => {
    const priceChange = coin.price_change_percentage_24h || 0;
    const isPositive = priceChange >= 0;

    return (
      <div className="flex-shrink-0 bg-gray-800/50 flex flex-row items-center rounded-lg py-2.5 px-3 mx-2 h-[66px] border border-gray-700/50 hover:border-purple-500/50 transition-all">
        <div className="flex flex-col items-start justify-center gap-0.5">
          <div className="flex flex-row items-center gap-2">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-[20px] h-[20px] rounded-full"
            />
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold text-white text-[0.875rem]">
                {coin.symbol.toUpperCase()}
              </div>
              <div className="text-xs text-gray-400">{coin.name}</div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="text-[0.875rem] font-bold text-white">
              $
              {coin.current_price?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <div
              className={`text-[0.875rem] font-medium ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {isPositive ? "+" : "-"} {Math.abs(priceChange).toFixed(2)}%
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MarqueeRow = ({
    coins,
    duration,
  }: {
    coins: any[];
    duration: number;
  }) => {
    // Duplicate coins for seamless loop
    const duplicatedCoins = [...coins, ...coins, ...coins];

    return (
      <div className="relative overflow-hidden py-2">
        <div
          className="flex"
          style={{
            animation: `scroll ${duration}s linear infinite`,
          }}
        >
          {duplicatedCoins.map((coin, index) => (
            <CoinCard key={`${coin.id}-${index}`} coin={coin} />
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: "spot" as const, label: "Spot" },
    { id: "margin" as const, label: "Margin" },
    { id: "staking" as const, label: "Staking" },
  ];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto mt-4 px-4">
        <div className="max-w-xs mx-auto rounded-lg p-2 mb-6">
          <div className="flex bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 w-auto px-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gray-700 text-white shadow-lg scale-105"
                    : "text-gray-300 hover:bg-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="shadow-2xl rounded-lg overflow-hidden p-8">
          <div className="text-center text-gray-400">
            Loading market data...
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto mt-4">
        {/* Tabs */}
        <div className="max-w-xs mx-auto rounded-lg p-2 mb-6">
          <div className="flex bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 w-auto px-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gray-700 text-white shadow-lg scale-105"
                    : "text-gray-300 hover:bg-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Multiple Marquee Rows */}
        <div className="shadow-2xl rounded-lg overflow-hidden">
          <div className="py-4">
            <MarqueeRow coins={coins} duration={5} />
            <MarqueeRow coins={coins.slice().reverse()} duration={20} />
            <MarqueeRow coins={coins} duration={20} />
            <MarqueeRow coins={coins.slice().reverse()} duration={5} />
          </div>
        </div>
      </div>

      {/* Keyframes for scroll animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </>
  );
}
