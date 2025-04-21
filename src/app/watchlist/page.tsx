"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  Columns3,
  Filter,
  Star,
  ChevronDown,
  Triangle,
  X
} from "lucide-react";
import Image from "next/image";
import MarketGraph from "@/components/MarketGraph";
import CompareGraph from "@/components/CompareGraph";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function WatchlistPage() {
  const [showCount, setShowCount] = useState<number | 'all'>(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [watchlistItems, setWatchlistItems] = useState<any[]>([]);
  const [selectedForCompare, setSelectedForCompare] = useState<number[]>([]);
  const [showCompareSection, setShowCompareSection] = useState(false);
  
  // Load watchlist from localStorage on component mount
  useEffect(() => {
    const savedWatchlist = localStorage.getItem('crypto-watchlist');
    if (savedWatchlist) {
      setWatchlistItems(JSON.parse(savedWatchlist));
    }
  }, []);
  
  // Logic to paginate the data
  const totalPages = showCount === 'all' ? 1 : Math.ceil(watchlistItems.length / (showCount as number));
  const displayedCryptos = showCount === 'all' 
    ? watchlistItems 
    : watchlistItems.slice(
        (currentPage - 1) * (showCount as number), 
        currentPage * (showCount as number)
      );
  
  // Function to remove item from watchlist
  const removeFromWatchlist = (coinId: number) => {
    const updatedWatchlist = watchlistItems.filter(coin => coin.id !== coinId);
    setWatchlistItems(updatedWatchlist);
    localStorage.setItem('crypto-watchlist', JSON.stringify(updatedWatchlist));
  };

  // Toggle selection for comparison
  const toggleCompareSelection = (coinId: number) => {
    if (selectedForCompare.includes(coinId)) {
      // Remove from selection
      setSelectedForCompare(selectedForCompare.filter(id => id !== coinId));
    } else {
      // Only allow up to 3 selections
      if (selectedForCompare.length < 3) {
        setSelectedForCompare([...selectedForCompare, coinId]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1421] text-white">
      {/* Header */}
      <Navbar />
      {/* Main content */}
      <main className="mx-auto px-4 py-6">
        <span className="text-[25px] font-bold mb-2 leading-[140%] font-[arial]">
        Create Your Crypto Watchlist Today
        </span>
        <p className="text-sm text-gray-400 font-semibold2 mb-7 mt-2 max-w-5xl">
        Select the crypto assets that you want to track and create your own watchlist and easily check whether your price targets have been hit. Assets can be added from both our main coin list and also from the 2M+ DEX pairs that we track.
          {watchlistItems.length === 0 && " Click the star icon on any cryptocurrency to add it to your watchlist."}
        </p>

        {/* Table view options */}
        <div className="flex items-center justify-between mb-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            {selectedForCompare.length > 0 && (
              <span className="text-sm text-[#3861fb] font-medium">
                {selectedForCompare.length} selected for comparison
              </span>
            )}
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
            {selectedForCompare.length > 0 ? (
              <button 
                onClick={() => setShowCompareSection(true)}
                className="text-xs font-bold bg-[#3861fb] hover:bg-[#2d4eca] text-white px-3.5 py-2 rounded-md flex items-center gap-1 cursor-pointer"
              >
                Compare Selected ({selectedForCompare.length})
              </button>
            ) : null}
          </div>
        </div>

        {/* Comparison Section */}
        {showCompareSection && (
          <div className="mb-6 mt-4 bg-[#171924] border border-[#222531] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Compare Cryptocurrencies</h2>
              <button 
                onClick={() => setShowCompareSection(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {watchlistItems
                .filter(coin => selectedForCompare.includes(coin.id))
                .map(coin => (
                  <div 
                    key={coin.id} 
                    className="flex items-center gap-2 bg-[#323546] px-3 py-1.5 rounded-md"
                  >
                    <Image
                      src={coin.image}
                      width={16}
                      height={16}
                      alt={coin.name}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">{coin.name}</span>
                    <button 
                      onClick={() => toggleCompareSelection(coin.id)}
                      className="text-gray-400 hover:text-white ml-1"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
            </div>
            
            <CompareGraph 
              cryptos={watchlistItems
                .filter(coin => selectedForCompare.includes(coin.id))
                .map(coin => ({
                  id: coin.id,
                  name: coin.name,
                  symbol: coin.symbol,
                  color: coin.id % 3 === 0 ? '#3861fb' : coin.id % 3 === 1 ? '#16c784' : '#ea3943'
                }))}
            />
          </div>
        )}

        {/* Cryptocurrency table */}
        <div className="">
          {watchlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-[#323546] rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Your watchlist is empty</h3>
              <p className="text-gray-400 max-w-md mb-6">
                Add cryptocurrencies to your watchlist by clicking on the star icon next to any cryptocurrency on the homepage.
              </p>
              <a href="/" className="bg-[#3861fb] text-white px-4 py-2 rounded-md text-sm font-medium">
                Go to Homepage
              </a>
            </div>
          ) : (
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-gray-900">
                <TableRow className="border-b border-gray-700 hover:bg-transparent">
                  {[
                    { label: "", align: "center" },
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
                    <TableCell className="py-[33px] px-1 text-center whitespace-nowrap">
                      <input 
                        type="checkbox" 
                        checked={selectedForCompare.includes(coin.id)}
                        onChange={() => toggleCompareSelection(coin.id)}
                        className="h-4 w-4 rounded-sm border-gray-600 bg-[#323546] text-[#3861fb] focus:ring-[#3861fb] cursor-pointer"
                        disabled={selectedForCompare.length >= 3 && !selectedForCompare.includes(coin.id)}
                      />
                    </TableCell>
                    <TableCell className="py-[33px] px-3.5 text-center whitespace-nowrap">
                      <Star 
                        className="w-3 h-3 text-yellow-400" 
                        fill="#EAB308" 
                        strokeWidth={2.5}
                        onClick={() => removeFromWatchlist(coin.id)}
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
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
          )}
        </div>
      </main>
    </div>
  );
} 