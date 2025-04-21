"use client";

import { useState } from "react";
import { Search, X, TrendingUp, ExternalLink, ChevronRight, TriangleRight, Triangle } from "lucide-react";

interface CryptoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CryptoItem {
  name: string;
  symbol: string;
  number?: string;
  iconUrl?: string;
  price: string;
  marketCap: string;
  volume24h: string;
  percentChange: number;
  tokenId?: string;
  liquidity?: string;
  conUrl?: string;
}

const CryptoSearchModal = ({ isOpen, onClose }: CryptoModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches] = useState(["OFFICIAL TRUMP"]);

  const trendingCrypto: CryptoItem[] = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      number: "1",
      iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      marketCap: "$1.7T",
      volume24h: "$26.2B",
      price: "$86790.2",
      percentChange: 3.22,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      number: "2",
      iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      marketCap: "$196.0B",
      volume24h: "$10.4B",
      price: "$1623.78",
      percentChange: 3.05,
    },
    {
      name: "XRP",
      symbol: "XRP",
      number: "3",
      iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
      marketCap: "$123.5B",
      volume24h: "$2.3B",
      price: "$2.11",
      percentChange: 3.42,
    },
    {
      name: "Solana",
      symbol: "SOL",
      number: "4",
      iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
      marketCap: "$71.8B",
      volume24h: "$3.1B",
      price: "$138.94",
      percentChange: 1.05,
    },
  ];

  const trendingDexScan: CryptoItem[] = [
    {
      name: "TRUMP/USDC",
      symbol: "OFFICIAL TRUMP",
      iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/35336.png",
      marketCap: "$1.6B",
      volume24h: "$85.2M",
      price: "$8.17",
      percentChange: -3.9,
      conUrl: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/9882.png",
      liquidity: "$331.5M",
      tokenId: "6p6xg...fGiPN",
    },
    {
      name: "Fartcoin /SOL",
      symbol: "Fartcoin",
      iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/33597.png",
      marketCap: "$821.2M",
      volume24h: "$70.4M",
      price: "$0.8212",
      percentChange: 6.3,
      conUrl: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/1426.png",
      liquidity: "$8.3M",
      tokenId: "9BB6N...gpump",
    },
    {
      name: "Fartcoin /USDC",
      symbol: "Fartcoin",
      iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/33597.png",
      marketCap: "$822.9M",
      volume24h: "$15.0M",
      price: "$0.8229",
      percentChange: 7.25,
      conUrl: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/1342.png",
      liquidity: "$1.4M",
      tokenId: "9BB6N...gpump",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#222531]/50 flex justify-center items-start pt-16 z-50 overflow-auto">
      <div className="w-full max-w-4xl bg-[#222531] rounded-lg shadow-xl border border-gray-700/50 overflow-hidden">
        <div className="p-4 relative">
          <div className="flex items-center">
            <Search className="text-gray-400 mr-3" size={14} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search coin, pair, NFT, contract address, exchange, or post"
              className="bg-transparent text-sm flex-1 text-white outline-none"
            />
            {searchTerm && (
              <button className="cursor-pointer" onClick={() => setSearchTerm("")}>
                <X className="text-gray-400" size={18} />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>

          {/* Recent Searches */}
          <div className="mt-4">
            <h3 className="text-gray-400 text-sm mb-2">Recent Searches</h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#2B2E3D] rounded-full px-3 py-1 text-white"
                >
                  <div className="w-5 h-5 bg-gray-400 rounded-full mr-2"></div>
                  <span>{search}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Crypto */}
          <div className="mt-6">
            <h3 className="text-orange-600 text-sm flex items-center mb-2">
              <span className="text-gray-400 pr-1">Trending Crypto</span>
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                id="sc-65e7f566-0 eyXrOz c-i TrendingList_trending-icon__SlYO_"
                color=""
              >
                <path
                  d="M11.8802 7.40001C10.7002 5.38668 10.6668 4.00668 10.6668 4.00001C10.6668 3.70668 10.4735 3.44668 10.1935 3.36001C9.9135 3.27334 9.60683 3.38668 9.44683 3.62668L8.99349 4.30001C8.34683 2.30668 7.0935 1.47334 7.02683 1.43334C6.82016 1.30001 6.56016 1.29334 6.34683 1.40668C6.13349 1.52668 6.00016 1.74668 6.00016 1.99334C6.00016 4.57334 5.24683 5.69334 4.52016 6.77334C3.94016 7.64001 3.3335 8.53334 3.3335 9.99334C3.3335 12.5667 5.42683 14.66 8.00016 14.66C10.5735 14.66 12.6668 12.5667 12.6668 9.99334C12.6668 8.88668 12.2468 8.02668 11.8802 7.39334V7.40001ZM8.00016 13.0867C7.5735 12.6 7.3335 11.98 7.3335 11.3267C7.3335 10.6733 7.5735 10.0533 8.00016 9.56668C8.42683 10.0533 8.66683 10.6733 8.66683 11.3267C8.66683 11.98 8.42683 12.6 8.00016 13.0867ZM9.6935 12.8533C9.8935 12.3733 10.0002 11.86 10.0002 11.3333C10.0002 10.08 9.42016 8.91334 8.40683 8.14001C8.16683 7.95334 7.8335 7.95334 7.5935 8.14001C6.58016 8.92001 6.00016 10.08 6.00016 11.3333C6.00016 11.8667 6.1135 12.38 6.30683 12.8533C5.32683 12.2733 4.66683 11.2133 4.66683 10C4.66683 8.94668 5.06683 8.35334 5.62683 7.52668C6.2335 6.62001 6.96016 5.54001 7.2335 3.62001C7.5735 4.18001 7.90016 4.98001 8.00683 6.07334C8.0335 6.35334 8.2335 6.58668 8.50683 6.65334C8.78016 6.72001 9.06683 6.60668 9.22016 6.37334L9.66016 5.71334C9.86016 6.36001 10.1935 7.16668 10.7268 8.08001C11.0268 8.59334 11.3335 9.22001 11.3335 10.0067C11.3335 11.2267 10.6668 12.28 9.6935 12.86V12.8533Z"
                  fill="currentColor"
                ></path>
              </svg>
            </h3>

            <div className="space-y-2">
              {trendingCrypto.map((crypto, index) => (
                <div
                  key={index}
                  className="bg-[#2B2E3D] hover:bg-[#1E274F] rounded-lg p-1 px-2 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center w-32">
                    <div className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
                      {crypto.iconUrl ? (
                        <img
                          src={crypto.iconUrl}
                          alt={crypto.symbol}
                          className="w-full h-full rounded-full"
                        />
                      ) : (
                        crypto.symbol.charAt(0)
                      )}
                    </div>
                    <div className="flex flex-col py-2 -mt-1">
                      <div className="flex items-center">
                        <span className="text-white font-medium text-sm">
                          {crypto.name}
                        </span>
                        <span className="ml-2 text-xs text-gray-500">
                          #{crypto.number}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 font-semibold">
                        {crypto.symbol}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col w-36">
                    <div className="text-xs text-gray-400">
                      MCap:{" "}
                      <span className="text-white font-medium text-xs">
                        {crypto.marketCap}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Vol(24h):{" "}
                      <span className="text-white font-medium text-xs">
                        {crypto.volume24h}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-white font-medium text-sm">
                      {crypto.price}
                    </div>
                    <div
                      className={`text-xs ${
                        crypto.percentChange >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {crypto.percentChange >= 0 ? "▲" : "▼"}{" "}
                      {Math.abs(crypto.percentChange).toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending on DexScan */}
          <div className="mt-6">
            <h3 className="text-orange-600 text-sm flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-gray-400 pr-1">Trending on DexScan</span>
                <svg
                  viewBox="0 0 16 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  id="sc-65e7f566-0 eyXrOz c-i TrendingList_trending-icon__SlYO_"
                  color=""
                >
                  <path
                    d="M11.8802 7.40001C10.7002 5.38668 10.6668 4.00668 10.6668 4.00001C10.6668 3.70668 10.4735 3.44668 10.1935 3.36001C9.9135 3.27334 9.60683 3.38668 9.44683 3.62668L8.99349 4.30001C8.34683 2.30668 7.0935 1.47334 7.02683 1.43334C6.82016 1.30001 6.56016 1.29334 6.34683 1.40668C6.13349 1.52668 6.00016 1.74668 6.00016 1.99334C6.00016 4.57334 5.24683 5.69334 4.52016 6.77334C3.94016 7.64001 3.3335 8.53334 3.3335 9.99334C3.3335 12.5667 5.42683 14.66 8.00016 14.66C10.5735 14.66 12.6668 12.5667 12.6668 9.99334C12.6668 8.88668 12.2468 8.02668 11.8802 7.39334V7.40001ZM8.00016 13.0867C7.5735 12.6 7.3335 11.98 7.3335 11.3267C7.3335 10.6733 7.5735 10.0533 8.00016 9.56668C8.42683 10.0533 8.66683 10.6733 8.66683 11.3267C8.66683 11.98 8.42683 12.6 8.00016 13.0867ZM9.6935 12.8533C9.8935 12.3733 10.0002 11.86 10.0002 11.3333C10.0002 10.08 9.42016 8.91334 8.40683 8.14001C8.16683 7.95334 7.8335 7.95334 7.5935 8.14001C6.58016 8.92001 6.00016 10.08 6.00016 11.3333C6.00016 11.8667 6.1135 12.38 6.30683 12.8533C5.32683 12.2733 4.66683 11.2133 4.66683 10C4.66683 8.94668 5.06683 8.35334 5.62683 7.52668C6.2335 6.62001 6.96016 5.54001 7.2335 3.62001C7.5735 4.18001 7.90016 4.98001 8.00683 6.07334C8.0335 6.35334 8.2335 6.58668 8.50683 6.65334C8.78016 6.72001 9.06683 6.60668 9.22016 6.37334L9.66016 5.71334C9.86016 6.36001 10.1935 7.16668 10.7268 8.08001C11.0268 8.59334 11.3335 9.22001 11.3335 10.0067C11.3335 11.2267 10.6668 12.28 9.6935 12.86V12.8533Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span className="text-xs text-gray-500">
                Anyone can list assets on DEXes. DYOR.
              </span>
            </h3>

            <div className="space-y-2">
              {trendingDexScan.map((crypto, index) => (
                <div
                  key={index}
                  className="bg-[#2B2E3D] hover:bg-[#1E274F] rounded-lg p-1 flex items-center justify-between cursor-pointer px-2"
                >
                  <div className="flex items-center w-40">
                    <div className="w-6 h-6 bg-gray-500 rounded-full mr-3 flex items-center justify-center text-white">
                      {crypto.iconUrl ? (
                        <img
                          src={crypto.iconUrl}
                          alt={crypto.symbol}
                          className="w-full h-full rounded-full"
                        />
                      ) : (
                        crypto.symbol.charAt(0)
                      )}
                    </div>
                    <div className="flex flex-col -mt-1">
                      <div className="text-white font-medium text-sm">
                        {crypto.name}
                      </div>
                      <span className="text-xs text-gray-400">
                        {crypto.symbol}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center w-16 justify-center">
                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" alt="DexScan" className="w-6 h-6 rounded-full mr-1" />
                    <Triangle size={7} className="text-gray-400 mr-1 rotate-90" fill="currentColor"/>
                    <img src={crypto.conUrl} alt={crypto.symbol} className="w-6 h-6 rounded-full" />
                  </div>

                  <div className="flex flex-col items-start w-28">
                    <div className="text-xs text-gray-400">
                      MCap: <span className="text-white font-medium">{crypto.marketCap}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Vol(24h): <span className="text-white font-medium">{crypto.volume24h}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start w-32">
                    <div className="text-xs text-gray-400">
                      Liq: <span className="text-white font-medium">{crypto.liquidity}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Token: <span className="text-white font-medium">{crypto.tokenId}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end w-16">
                    <div className="text-white font-medium">{crypto.price}</div>
                    <div
                      className={`text-xs ${
                        crypto.percentChange >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {crypto.percentChange >= 0 ? "▲" : "▼"}{" "}
                      {Math.abs(crypto.percentChange).toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoSearchModal;
