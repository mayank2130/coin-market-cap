"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Statsbar from "@/components/Statsbar";
import {
  Boxes,
  ChartNoAxesColumn,
  ChevronDown,
  ChevronRight,
  Columns3,
  Eye,
  Filter,
  Flame,
  Sprout,
  Star,
  Triangle,
  Ungroup,
} from "lucide-react";
import Image from "next/image";
import MarketGraph from "@/components/MarketGraph";
import TrendingCrypto from "@/components/TrendingCrypto";
import TrendingDexScan from "@/components/TrendingDexScan";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [showCount, setShowCount] = useState<number | 'all'>(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [watchlistIds, setWatchlistIds] = useState<number[]>([]);
  
  // Load watchlist IDs from localStorage on component mount
  useEffect(() => {
    const savedWatchlist = localStorage.getItem('crypto-watchlist');
    if (savedWatchlist) {
      const watchlistItems = JSON.parse(savedWatchlist);
      setWatchlistIds(watchlistItems.map((item: any) => item.id));
    }
  }, []);

  // Function to toggle watchlist item
  const toggleWatchlist = (coin: any) => {
    let updatedWatchlist = [];
    const savedWatchlist = localStorage.getItem('crypto-watchlist');
    
    if (savedWatchlist) {
      updatedWatchlist = JSON.parse(savedWatchlist);
    }
    
    // Check if coin is already in watchlist
    const coinIndex = updatedWatchlist.findIndex((item: any) => item.id === coin.id);
    
    if (coinIndex === -1) {
      // Add to watchlist
      updatedWatchlist.push(coin);
      setWatchlistIds([...watchlistIds, coin.id]);
    } else {
      // Remove from watchlist
      updatedWatchlist.splice(coinIndex, 1);
      setWatchlistIds(watchlistIds.filter(id => id !== coin.id));
    }
    
    localStorage.setItem('crypto-watchlist', JSON.stringify(updatedWatchlist));
  };

  // Full list of cryptocurrencies data
  const allCryptos = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$85,157.27",
      hr1: "-0.07%",
      hr24: "+0.67%",
      d7: "+0.10%",
      marketCap: "$1,690,675,937,737",
      volume: "$15,308,609,521",
      volumeCrypto: "179.81K BTC",
      circulatingSupply: "19.85M BTC",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      sparkline: "positive",
      buy: true,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$1,617.19",
      hr1: "-0.21%",
      hr24: "+1.47%",
      d7: "-1.78%",
      marketCap: "$195,201,049,604",
      volume: "$7,308,324,106",
      volumeCrypto: "4.52M ETH",
      circulatingSupply: "120.7M ETH",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      sparkline: "negative",
      buy: true,
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      price: "$0.9998",
      hr1: "+0.07%",
      hr24: "+0.00%",
      d7: "-0.00%",
      marketCap: "$144,622,635,837",
      volume: "$34,525,644,907",
      volumeCrypto: "34.53B USDT",
      circulatingSupply: "144.64B USDT",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
      sparkline: "neutral",
      buy: true,
    },
    {
      id: 4,
      name: "XRP",
      symbol: "XRP",
      price: "$2.08",
      hr1: "+0.18%",
      hr24: "+0.27%",
      d7: "-2.52%",
      marketCap: "$121,955,092,243",
      volume: "$1,539,671,391",
      volumeCrypto: "736.96M XRP",
      circulatingSupply: "58.39B XRP",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
      sparkline: "negative",
      buy: true,
    },
    {
      id: 5,
      name: "BNB",
      symbol: "BNB",
      price: "$590.80",
      hr1: "+0.20%",
      hr24: "-0.71%",
      d7: "-1.06%",
      marketCap: "$83,238,757,008",
      volume: "$1,253,682,658",
      volumeCrypto: "2.12M BNB",
      circulatingSupply: "140.89M BNB",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
      sparkline: "negative",
      buy: true,
    },
    {
      id: 6,
      name: "Solana",
      symbol: "SOL",
      price: "$138.55",
      hr1: "+0.03%",
      hr24: "+3.39%",
      d7: "+5.54%",
      marketCap: "$71,576,377,441",
      volume: "$2,520,159,962",
      volumeCrypto: "18.17M SOL",
      circulatingSupply: "516.59M SOL",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
      sparkline: "positive",
      buy: true,
    },
    {
      id: 7,
      name: "USDC",
      symbol: "USDC",
      price: "$0.9999",
      hr1: "+0.01%",
      hr24: "-0.00%",
      d7: "+0.02%",
      marketCap: "$60,899,183,859",
      volume: "$4,050,717,333",
      volumeCrypto: "4.05B USDC",
      circulatingSupply: "60.9B USDC",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
      sparkline: "neutral",
      buy: true,
    },
    {
      id: 8,
      name: "Dogecoin",
      symbol: "DOGE",
      price: "$0.1552",
      hr1: "-0.38%",
      hr24: "-1.67%",
      d7: "-6.68%",
      marketCap: "$23,128,178,953",
      volume: "$480,915,447",
      volumeCrypto: "3.06B DOGE",
      circulatingSupply: "148.92B DOGE",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
      sparkline: "negative",
      buy: true,
    },
    {
      id: 9,
      name: "TRON",
      symbol: "TRX",
      price: "$0.2444",
      hr1: "+0.34%",
      hr24: "+1.10%",
      d7: "-0.62%",
      marketCap: "$23,210,237,256",
      volume: "$373,058,239",
      volumeCrypto: "1.54B TRX",
      circulatingSupply: "94.94B TRX",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
      sparkline: "neutral",
      buy: true,
    },
    {
      id: 10,
      name: "Cardano",
      symbol: "ADA",
      price: "$0.6202",
      hr1: "-0.35%",
      hr24: "-1.12%",
      d7: "-5.16%",
      marketCap: "$21,889,517,662",
      volume: "$338,687,301",
      volumeCrypto: "542.02M ADA",
      circulatingSupply: "35.29B ADA",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
      sparkline: "negative",
      buy: true,
    },
    {
      id: 11,
      name: "UNUS SED LEO",
      symbol: "LEO",
      price: "$9.33",
      hr1: "+0.14%",
      hr24: "-0.27%",
      d7: "-0.91%",
      marketCap: "$8,620,002,430",
      volume: "$1,566,982",
      volumeCrypto: "167.85K LEO",
      circulatingSupply: "923.65M LEO",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/3957.png",
      sparkline: "negative",
      buy: true,
    },
    {
      id: 12,
      name: "Chainlink",
      symbol: "LINK",
      price: "$13.08",
      hr1: "+0.03%",
      hr24: "+2.25%",
      d7: "+0.31%",
      marketCap: "$8,598,458,945",
      volume: "$179,963,568",
      volumeCrypto: "13.77M LINK",
      circulatingSupply: "657.09M LINK",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
      sparkline: "positive",
      buy: true,
    },
    {
      id: 13,
      name: "Avalanche",
      symbol: "AVAX",
      price: "$19.60",
      hr1: "-0.24%",
      hr24: "+0.44%",
      d7: "-2.50%",
      marketCap: "$8,158,656,230",
      volume: "$174,755,352",
      volumeCrypto: "8.90M AVAX",
      circulatingSupply: "416.04M AVAX",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
      sparkline: "negative",
      buy: true,
    },
    {
      id: 14,
      name: "Stellar",
      symbol: "XLM",
      price: "$0.2430",
      hr1: "-0.26%",
      hr24: "-1.33%",
      d7: "-2.36%",
      marketCap: "$7,492,238,292",
      volume: "$69,737,737",
      volumeCrypto: "284.67M XLM",
      circulatingSupply: "30.82B XLM",
      image:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
      sparkline: "positive",
      buy: true,
    },
  ];
  
  // Logic to paginate the data
  const totalPages = showCount === 'all' ? 1 : Math.ceil(allCryptos.length / (showCount as number));
  const displayedCryptos = showCount === 'all' 
    ? allCryptos 
    : allCryptos.slice(
        (currentPage - 1) * (showCount as number), 
        currentPage * (showCount as number)
      );
  
  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#0d1421] text-white">
      {/* Header */}
      <Navbar />
      {/* Stats bar */}
      <Statsbar />
      {/* Main content */}
      <main className="mx-auto px-4 py-6">
        <span className="text-[25px] font-bold mb-2 leading-[140%] font-[arial]">
          Today&apos;s Cryptocurrency Prices by Market Cap
        </span>
        <p className="text-sm text-gray-400 font-semibold2 mb-7 mt-2">
          The global crypto market cap is{" "}
          <span className="font-bold">$2.68T</span>, a{" "}
          <span className="text-[#16c784] font-bold">
            <Triangle className="w-2 h-2 inline-block mr-1" fill="#16c784" />
            0.90%
          </span>{" "}
          increase over the last day.{" "}
          <a href="#" className="underline">
            Read More
          </a>
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {/* Trending Coins */}
          <TrendingCrypto />

          {/* Trending on DexScan */}
          <TrendingDexScan />

          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <div className="bg-[#222531] rounded-2xl p-3.5 px-[14px] h-fit cursor-pointer w-full shadow-[0_4px_24px_0_rgba(88,102,126,0.08),0_1px_2px_0_rgba(88,102,126,0.08)]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <h2 className="text-[14px] font-semibold">Market Cap</h2>
                    <ChevronRight className="w-4 mt-1 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="text-base font-bold">$2.69T</div>
                <div className="text-[#16c784] font-semibold text-xs">
                  <Triangle
                    className="w-2 h-2 inline-block mr-1"
                    fill="#16c784"
                  />
                  0.74%
                </div>
                <MarketGraph />
              </div>
              <div className="bg-[#222531] rounded-2xl p-3.5 px-[14px] h-fit cursor-pointer w-full shadow-[0_4px_24px_0_rgba(88,102,126,0.08),0_1px_2px_0_rgba(88,102,126,0.08)]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <h2 className="text-[14px] font-semibold">CMC 100</h2>
                    <ChevronRight className="w-4 mt-1 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="text-base font-bold">$163.25</div>
                <div className="text-[#16c784] font-semibold text-xs">
                  <Triangle
                    className="w-2 h-2 inline-block mr-1"
                    fill="#16c784"
                  />
                  0.85%
                </div>
                <MarketGraph />
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="bg-[#222531] rounded-2xl p-3.5 px-[14px] h-fit cursor-pointer w-full shadow-[0_4px_24px_0_rgba(88,102,126,0.08),0_1px_2px_0_rgba(88,102,126,0.08)]">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    <h2 className="text-[14px] font-semibold">Fear & Greed</h2>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="relative flex flex-col items-center justify-center mb-2">
                  <div
                    className="absolute flex flex-col items-center"
                    style={{ top: "39%" }}
                  >
                    <div className="text-xl font-bold">32</div>
                    <div className="text-xs tracking-tight text-gray-400">
                      Fear
                    </div>
                  </div>
                  <svg width="130" height="80" viewBox="0 0 130 80">
                    <path
                      d="M 12 71 A 53 53 0 0 1 18.91676873622339 44.82108107103576"
                      stroke="#EA3943"
                      stroke-width="6"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <path
                      d="M 23.008648902174897 38.66230631323281 A 53 53 0 0 1 44.46167391803855 22.141252965809464"
                      stroke="#EA8C00"
                      stroke-width="6"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <path
                      d="M 51.46137482940311 19.75836040396365 A 53 53 0 0 1 78.5386251705969 19.75836040396365"
                      stroke="#F3D42F"
                      stroke-width="6"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <path
                      d="M 85.53832608196146 22.14125296580947 A 53 53 0 0 1 106.99135109782512 38.662306313232826"
                      stroke="#93D900"
                      stroke-width="6"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <path
                      d="M 111.08323126377661 44.82108107103576 A 53 53 0 0 1 118 71"
                      stroke="#16C784"
                      stroke-width="6"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <path
                      d="M 12 71 A 53 53 0 0 1 18.91676873622339 44.82108107103576"
                      stroke="none"
                      stroke-width="6"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <path
                      d="M 23.008648902174897 38.66230631323281 A 53 53 0 0 1 36.60117986611317 26.250619948393208"
                      stroke="none"
                      stroke-width="6"
                      stroke-linecap="round"
                      fill="none"
                    ></path>
                    <circle
                      cx="36.60117986611317"
                      cy="26.250619948393208"
                      r="6"
                      fill="none"
                      stroke="var(--c-color-gray-100)"
                      stroke-width="2"
                    ></circle>
                    <circle
                      cx="36.60117986611317"
                      cy="26.250619948393208"
                      r="5"
                      fill="white"
                    ></circle>
                  </svg>
                </div>
              </div>

              <div className="bg-[#222531] rounded-2xl p-3.5 px-[14px] h-fit cursor-pointer w-full shadow-[0_4px_24px_0_rgba(88,102,126,0.08),0_1px_2px_0_rgba(88,102,126,0.08)]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <h2 className="text-[14px] font-semibold">
                      Altcoin Season
                    </h2>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="text-xl font-bold mt-3">
                  19{" "}
                  <span className="text-lg text-gray-500 font-light">/100</span>
                </div>
                <div className="flex flex-col gap-2 mt-1">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-400">Bitcoin</span>
                    <span className="text-xs text-gray-400">Altcoin</span>
                  </div>
                  <div className="flex justify-center items-center relative flex-col w-full h-[6px] mb-4">
                    <div className="w-full"></div>
                    <div className="relative w-full">
                      <div className="h-[6px] bg-transparent rounded-[3px] flex overflow-hidden">
                        <div className="bg-[#f68819] w-[40px] h-full rounded-l-[3px]"></div>
                        <div className="bg-[#fcdbba] h-full w-[44px]"></div>
                        <div className="bg-[#c1ccfd] h-full w-[44px]"></div>
                        <div className="bg-[#3156fa] w-[40px] h-full rounded-r-[3px]"></div>
                      </div>
                      <div className="absolute left-[23.37px] top-1/2 w-5 h-5 bg-white border-4 border-[#222531] rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_8px_32px_0_rgba(128,138,157,0.24),0_1px_2px_0_rgba(128,138,157,0.12)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-[#222531] rounded-2xl p-3.5 px-[14px] h-fit cursor-pointer w-full shadow-[0_4px_24px_0_rgba(88,102,126,0.08),0_1px_2px_0_rgba(88,102,126,0.08)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full overflow-hidden">
                  <Image
                    src="https://s2.coinmarketcap.com/static/cloud/img/icon/favicon.ico"
                    alt="Crypto Feed"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-white text-sm">
                    Crypto Feed News
                  </span>
                  <svg
                    className="h-4 w-4 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-gray-400 text-sm">· 18 hours</span>
                </div>
              </div>
              <div className="mb-2 text-sm">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-pink-500">🚀</span>
                  <span className="text-blue-400 hover:underline cursor-pointer">
                    #Solana
                  </span>
                  <span className="text-white">
                    Surges as On-Chain Activity Booms
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                    alt="SOL"
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  <span className="text-blue-400 hover:underline cursor-pointer">
                    $SOL
                  </span>
                  <span className="text-white">
                    is up 40% this month, hitting $135 as network...
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>13</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>340</span>
                </div>
              </div>
            </div>

            <div className="bg-[#222531] rounded-2xl p-3.5 px-[14px] h-fit cursor-pointer w-full shadow-[0_4px_24px_0_rgba(88,102,126,0.08),0_1px_2px_0_rgba(88,102,126,0.08)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-gray-800 rounded-full overflow-hidden">
                  <Image
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    alt="BH NEWS"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-white text-sm">BH NEWS</span>
                  <svg
                    className="h-4 w-4 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-gray-400 text-sm">· 9 hours</span>
                </div>
              </div>
              <div className="flex gap-3 mb-0.5">
                <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 mb-3">
                  <Image
                    src="https://academy-public.coinmarketcap.com/srd-optimized-uploads/029f6dfc642d454b8d8ac2d9a8dbe951.jpeg"
                    alt="Will China's Bitcoin Sales Sink Prices Further?"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-sm">
                  Will China&apos;s Bitcoin Sales Sink Prices Further?
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category tabs */}
        <div className="bg-[#0d1421] border-b border-gray-700 mb-3 flex-row flex">
          {[
            { name: "All Crypto", active: true, icon: null },
            { name: "NFTs", active: false, icon: null },
            { name: "Categories", active: false, icon: null },
            { name: "Token unlocks", active: false, icon: null },
            { name: "♻️ Rehypo", active: false, icon: null },
            { name: "Binance Alpha", active: false, icon: "orange" },
            { name: "Memes", active: false, icon: "orange" },
          ].map((tab, index) => (
            <button
              key={index}
              className={` text-sm p-3 px-4 cursor-pointer ${
                tab.active
                  ? "font-semibold bg-transparent text-white border-b-2 border-blue-500 relative"
                  : "text-gray-400 hover:text-white"
              } p-3 whitespace-nowrap ${
                tab.icon ? "flex items-center gap-1" : ""
              }`}
            >
              {tab.icon && (
                <span
                  className={`w-2 h-2 rounded-full bg-${tab.icon}-400`}
                ></span>
              )}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Table view options */}
        <div className="flex items-center justify-between mb-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-[#323546] rounded-md p-0.5">
              <button className="text-xs font-medium bg-[#222531] text-white px-4 py-1.5 rounded-md flex items-center gap-1">
                <Boxes className="w-4 h-4" />
                Coins
              </button>
              <button className="text-xs text-gray-400 hover:text-white px-3 py-1.5 flex items-center gap-1">
                <Ungroup className="w-4 h-4" />
                DexScan
              </button>
            </div>
            <div className="flex items-center gap-1 rounded-md p-0.5">
              {[
                {
                  label: "Top",
                  icon: <ChartNoAxesColumn className="w-4 h-4 text-blue-500" />,
                  active: true
                },
                {
                  label: "Categories",
                  icon: <Flame className="w-4 h-4 text-orange-500" />,
                  active: false
                },
                {
                  label: "New",
                  icon: <Sprout className="w-4 h-4 text-purple-500" />,
                  active: false
                },
                {
                  label: "Gainers",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <path
                        d="M20,8v2h6.5859L18,18.5859,13.707,14.293a.9994.9994,0,0,0-1.414,0L2,24.5859,3.4141,26,13,16.4141l4.293,4.2929a.9994.9994,0,0,0,1.414,0L28,11.4141V18h2V8Z"
                        fill="#12e23c"
                      />
                      <rect
                        id="transparent_rectangle"
                        width="32"
                        height="32"
                        fill="none"
                      />
                    </svg>
                  ),
                  active: false
                },
                {
                  label: "Most Visited",
                  icon: <Eye className="w-4 h-4 text-cyan-500" />,
                  active: false
                },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`text-sm cursor-pointer ${
                    item.active 
                      ? "bg-[#1E274F] text-white" 
                      : "text-gray-400 hover:text-white hover:bg-[#222531]"
                  } rounded-md px-3 py-2 flex items-center gap-1`}
                >
                  {item.icon}
                  <span className="text-xs">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs font-bold bg-[#323546] hover:bg-[#585e70] text-white px-3.5 py-2 rounded-md flex items-center gap-1 cursor-pointer">
              <Filter className="w-3.5 h-3.5 text-gray-400" />
              Filters
            </button>
            <button className="text-xs font-bold bg-[#323546] gap-1 text-white px-3.5 py-2 rounded-md flex items-center cursor-pointer">
              <Columns3 className="w-3.5 h-3.5 text-gray-400" />
              Columns
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-xs font-bold bg-[#323546] hover:border hover:border-gray-400 text-white px-3.5 py-2 rounded-md flex items-center gap-1 cursor-pointer">
                  {showCount === 'all' ? 'Show All' : `Show ${showCount}`}
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#323546] border-0 shadow-xl text-white min-w-0">
                <DropdownMenuItem 
                  className="px-4 py-2 text-xs hover:bg-[#3861fb] hover:text-white cursor-pointer"
                  onClick={() => {
                    setShowCount(10);
                    setCurrentPage(1);
                  }}
                >
                  Show 10
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="px-4 py-2 text-xs hover:bg-[#3861fb] hover:text-white cursor-pointer"
                  onClick={() => {
                    setShowCount('all');
                    setCurrentPage(1);
                  }}
                >
                  Show All
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Cryptocurrency table */}
        <div className="">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-gray-900">
              <TableRow className="border-b border-gray-700 hover:bg-transparent">
                {[
                  { label: "", align: "center" },
                  { label: "#", align: "center" },
                  { label: "Name", align: "left" },
                  { label: "", align: "center" },
                  { label: "Price", align: "right" },
                  { label: "1h %", align: "right" },
                  { label: "24h %", align: "right" },
                  { label: "7d %", align: "right" },
                  {
                    label: "Market Cap",
                    align: "right",
                    hasTooltip: true,
                    tooltip:
                      "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.\n\nMarket Cap = Current Price x Circulating Supply.\n\n",
                    bottomText: "Read More",
                  },
                  {
                    label: "Volume(24h)",
                    align: "right",
                    hasTooltip: true,
                    tooltip:
                      "A measure of how much of a cryptocurrency was traded in the last 24 hours.\n\n",
                    bottomText: "Read More",
                  },
                  {
                    label: "Circulating Supply",
                    align: "right",
                    hasTooltip: true,
                    tooltip:
                      "The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.\n\n",
                    bottomText: "Read More",
                  },
                  { label: "Last 7 Days", align: "right" },
                ].map((header, index) => (
                  <TableHead
                    key={index}
                    className={`py-3.5 cursor-pointer ${
                      header.label === "Price" ||
                      header.label === "1h %" ||
                      header.label === "24h %" ||
                      header.label === "7d %"
                        ? "px-0"
                        : "px-2"
                    } ${
                      header.label === "Last 7 Days" ? "pl-16" : ""
                    } text-xs font-bold text-white border-t border-gray-700 ${
                      header.align === "right"
                        ? "text-right"
                        : header.align === "center"
                        ? "text-center"
                        : "text-left"
                    } ${header.label === "Price" ? "pl-1" : ""} ${
                      header.label === "7d %" ? "pr-1" : ""
                    }`}
                  >
                    {header.label}
                    {header.hasTooltip && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex items-center justify-center ml-1 w-3.5 h-3.5 rounded-full bg-gray-500 text-[10px] cursor-pointer font-normal italic text-black">
                            i
                          </span>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          align="center"
                          sideOffset={6}
                          className="w-80 bg-[#222531] text-gray-400 border-none p-3 text-xs whitespace-pre-line [&>svg]:fill-[#323546]"
                        >
                          {header.tooltip}
                          <div className="text-blue-500 hover:text-blue-400 text-xs mt-2">
                            {header.bottomText}
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedCryptos.map((coin) => (
                <TableRow
                  key={coin.id}
                  className="border-b border-gray-700 hover:bg-[#222531] cursor-pointer"
                >
                  <TableCell className="py-[33px] px-3.5 text-center whitespace-nowrap">
                    <Star 
                      className={`w-3 h-3 ${watchlistIds.includes(coin.id) ? 'text-yellow-400' : 'text-gray-400'}`} 
                      fill={watchlistIds.includes(coin.id) ? "#EAB308" : "none"} 
                      strokeWidth={2.5} 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWatchlist(coin);
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                  </TableCell>
                  <TableCell className="py-4 px-3 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <span>{coin.id}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-2.5 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Image
                          src={coin.image}
                          width={24}
                          height={24}
                          alt={coin.name}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <div className="font-semibold text-white">
                          {coin.name}
                        </div>
                        <div className=" text-gray-400">{coin.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-5 text-center whitespace-nowrap">
                    {coin.buy && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="px-1 text-blue-400 border-[1.5px] border-blue-400 text-xs font-medium rounded-xl">
                            Buy
                          </button>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          align="center"
                          sideOffset={10}
                          className="w-80 bg-[#222531] text-white border-none p-5 text-xs rounded-md shadow-lg shadow-black"
                        >
                          <div className="text-gray-600 text-[10px] mb-2 font-semibold">
                            Sponsored
                          </div>
                          <div className="flex flex-col gap-2">
                            <button className="hover:bg-blue-500 text-blue-400 border-2 hover:border-blue-500 border-blue-400 hover:text-white px-4 py-2 rounded-md w-full text-[13px] font-semibold flex flex-row items-center justify-center gap-2">
                              <svg
                                fill="#e4ca21"
                                viewBox="0 0 24 24"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path d="m16.624 13.92 2.717 2.716-7.353 7.353-7.352-7.352 2.717-2.717 4.636 4.66 4.635-4.66zm4.637-4.636L24 12l-2.715 2.716L18.568 12l2.693-2.716zm-9.272 0 2.716 2.692-2.717 2.717L9.272 12l2.716-2.715zm-9.273 0L5.41 12l-2.692 2.692L0 12l2.716-2.716zM11.99.01l7.352 7.33-2.717 2.715-4.636-4.636-4.635 4.66-2.717-2.716L11.989.011z"></path>
                                </g>
                              </svg>
                              <span>Buy on Binance</span>
                            </button>
                            <button className="hover:bg-blue-500 text-blue-400 border-2 hover:border-blue-500 border-blue-400 hover:text-white px-4 py-2 rounded-md whitespace-nowrap text-[13px] w-full font-semibold flex flex-row items-center justify-center gap-2">
                              <Image
                                src="https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"
                                alt="Binance"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Buy on PanakeSwap v3 (BSC)
                            </button>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </TableCell>
                  <TableCell className="py-4 px-0 text-right font-medium whitespace-nowrap">
                    {coin.price}
                  </TableCell>
                  <TableCell
                    className={`py-4 px-0 text-right whitespace-nowrap ${
                      coin.hr1.startsWith("+")
                        ? "text-[#16c784]"
                        : coin.hr1.startsWith("-")
                        ? "text-[#ea3943]"
                        : "text-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-end">
                      {coin.hr1.startsWith("-") && (
                        <Triangle
                          className="w-2.5 h-2.5 inline-block mr-0 rotate-180"
                          fill="#ea3943"
                        />
                      )}
                      {coin.hr1.startsWith("+") && (
                        <Triangle
                          className="w-2.5 h-2.5 inline-block mr-0"
                          fill="#16c784"
                        />
                      )}
                      {coin.hr1.substring(1)}
                    </div>
                  </TableCell>
                  <TableCell
                    className={`py-4 px-0 text-right whitespace-nowrap ${
                      coin.hr24.startsWith("+")
                        ? "text-[#16c784]"
                        : coin.hr24.startsWith("-")
                        ? "text-[#ea3943]"
                        : "text-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-end">
                      {coin.hr24.startsWith("-") && (
                        <Triangle
                          className="w-2.5 h-2.5 inline-block mr-0 rotate-180"
                          fill="#ea3943"
                        />
                      )}
                      {coin.hr24.startsWith("+") && (
                        <Triangle
                          className="w-2.5 h-2.5 inline-block mr-0"
                          fill="#16c784"
                        />
                      )}
                      {coin.hr24.substring(1)}
                    </div>
                  </TableCell>
                  <TableCell
                    className={`py-4 px-0 text-right whitespace-nowrap pr-1 ${
                      coin.d7.startsWith("+")
                        ? "text-[#16c784]"
                        : coin.d7.startsWith("-")
                        ? "text-[#ea3943]"
                        : "text-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-end">
                      {coin.d7.startsWith("-") && (
                        <Triangle
                          className="w-2.5 h-2.5 inline-block mr-0 rotate-180"
                          fill="#ea3943"
                        />
                      )}
                      {coin.d7.startsWith("+") && (
                        <Triangle
                          className="w-2.5 h-2.5 inline-block mr-0"
                          fill="#16c784"
                        />
                      )}
                      {coin.d7.substring(1)}
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px -3 text-right whitespace-nowrap">
                    {coin.marketCap}
                  </TableCell>
                  <TableCell className="py-4 px-3 text-right whitespace-nowrap">
                    <div>{coin.volume}</div>
                    <div className="text-xs text-gray-400">
                      {coin.volumeCrypto}
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-3 text-right whitespace-nowrap">
                    {coin.circulatingSupply}
                  </TableCell>
                  <TableCell className="py-4 px-3 max-w-36 whitespace-nowrap">
                    <MarketGraph />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {totalPages > 1 && (
            <div className="mt-6 mb-8">
              <Pagination className="text-white">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }}
                      className="hover:bg-gray-700 text-white hover:text-white"
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        href="#" 
                        isActive={currentPage === i + 1}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                        className={currentPage === i + 1 
                          ? "bg-[#3861FB] text-white hover:bg-[#3861FB] hover:text-white border-none" 
                          : "hover:bg-gray-700 text-white hover:text-white border-none"}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) handlePageChange(currentPage + 1);
                      }}
                      className="hover:bg-gray-700 text-white hover:text-white"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
