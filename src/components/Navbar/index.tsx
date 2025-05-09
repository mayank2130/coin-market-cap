"use client";

import React, { Component, useState } from "react";
import {
  MenuIcon,
  QrCodeIcon,
  SearchIcon,
  BarChart2,
  ListFilter,
  Clock,
  TrendingUp,
  ChevronRight,
  Link,
} from "lucide-react";
import Image from "next/image";
import CryptoSearchModal from "../SearchModal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0d1421] border-b border-[#222531] ">
      <div className="px-4 py-4 flex items-center  justify-between">
        <div className="flex items-center gap-6">
          <a href="/">
            <svg
              width="168"
              height="29"
              href="/"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              id="cmc-logo-img"
              className="margin-top: -3px;"
              viewBox="0 0 168 29"
            >
              <path d="M28.442 14.445v-.056C28.414 6.466 22.032 0 14.221 0S0 6.466 0 14.445c0 7.98 6.381 14.433 14.221 14.433a13.978 13.978 0 0 0 9.66-3.866 1.309 1.309 0 0 0-1.766-1.933l-.028.028a11.5 11.5 0 0 1-16.572-.755l6.075-9.742v4.508c0 2.154.84 2.855 1.546 3.051.706.196 1.765.054 2.912-1.765l3.333-5.412c.089-.158.192-.308.306-.449v2.745c0 2.015.812 3.639 2.211 4.422a4.071 4.071 0 0 0 4.173-.167c1.616-1.049 2.484-2.886 2.371-5.098Zm-3.696 2.835a1.529 1.529 0 0 1-1.546.111c-.56-.335-.897-1.09-.897-2.126v-3.173c0-1.51-.588-2.603-1.595-2.881-1.709-.516-2.995 1.595-3.472 2.379l-3.015 4.842V10.47c-.028-1.371-.477-2.183-1.317-2.436-.56-.167-1.4-.082-2.211 1.15L3.946 19.989a11.971 11.971 0 0 1-1.371-5.544c0-6.523 5.234-11.814 11.646-11.814 6.412 0 11.646 5.291 11.646 11.814v.057c.067 1.258-.337 2.268-1.12 2.77v.008ZM48.263 9.518a1.407 1.407 0 0 1 .645 1.092 1.24 1.24 0 0 1-1.204 1.232 2.062 2.062 0 0 1-.449-.085 4.61 4.61 0 0 0-2.716-.922c-2.379 0-4.002 1.93-4.002 4.337s1.652 4.312 4.002 4.312a4.34 4.34 0 0 0 3.023-1.232c.206-.145.45-.223.701-.224a1.134 1.134 0 0 1 .99 1.709c-.097.17-.235.315-.402.42a6.647 6.647 0 1 1-4.283-11.758c1.318-.02 2.61.37 3.695 1.119ZM54.925 12.309a4.745 4.745 0 0 0-4.765 4.71 4.82 4.82 0 0 0 4.76 4.79c2.464 0 4.564-2.212 4.564-4.79 0-2.576-2.067-4.71-4.559-4.71Zm-.028 7.167c-1.175 0-2.155-1.064-2.155-2.436 0-1.427.98-2.296 2.155-2.296 1.093 0 2.015.897 2.015 2.296 0 1.4-.922 2.444-2.015 2.444v-.008ZM61.056 20.352v-6.608a1.29 1.29 0 0 1 1.289-1.314 1.306 1.306 0 0 1 1.289 1.314v6.608a1.306 1.306 0 0 1-1.289 1.315 1.328 1.328 0 0 1-1.289-1.315ZM60.86 9.938a1.505 1.505 0 0 1 1.485-1.547 1.528 1.528 0 0 1 1.51 1.547 1.497 1.497 0 0 1-2.994 0ZM68.559 16.77v3.582a1.289 1.289 0 1 1-2.578 0v-6.915a.994.994 0 1 1 1.988 0 3.738 3.738 0 0 1 2.835-1.12c2.577 0 3.724 1.932 3.724 4.144v3.891a1.289 1.289 0 1 1-2.578 0V16.77c0-1.121-.139-2.062-1.763-2.062-1.146 0-1.623.951-1.623 2.062h-.005ZM82.865 18.141a.835.835 0 0 1-.673-.338l-2.995-3.247v5.796a1.289 1.289 0 1 1-2.577 0V8.873a.546.546 0 0 1 .477-.335.9.9 0 0 1 .56.335l4.788 5.376a.624.624 0 0 0 .42.258.701.701 0 0 0 .42-.258l4.786-5.376a.843.843 0 0 1 .559-.335.49.49 0 0 1 .477.335v11.48a1.29 1.29 0 0 1-1.289 1.314 1.307 1.307 0 0 1-1.288-1.315v-5.796l-2.998 3.247a1.031 1.031 0 0 1-.67.338h.003ZM107.08 14.698h-.281c-1.623.082-1.93 1.008-1.93 2.062v3.582a1.29 1.29 0 0 1-1.289 1.289 1.29 1.29 0 0 1-1.288-1.29v-6.903a.997.997 0 0 1 .995-.995.996.996 0 0 1 .994.995c.951-.897 1.735-1.093 2.518-1.122h.258a1.207 1.207 0 0 1 1.175 1.204 1.18 1.18 0 0 1-1.147 1.178h-.005ZM117.018 19.736c.118.185.186.397.196.616a1.346 1.346 0 0 1-1.289 1.289c-.446 0-.84-.338-1.147-.73l-2.966-3.448v2.86a1.288 1.288 0 0 1-2.577 0V9.828a1.287 1.287 0 0 1 2.199-.911c.242.241.378.57.378.91v6.55l2.966-3.274c.307-.337.673-.7 1.119-.7a1.289 1.289 0 0 1 1.232 1.26 1.09 1.09 0 0 1-.168.587l-2.35 2.577 2.407 2.913v-.003ZM132.584 21.78h-.701c-1.959 0-3.108-.869-3.108-3.92v-3.162h-.67a1.19 1.19 0 1 1 0-2.382h.66V9.881a1.282 1.282 0 0 1 .789-1.214c.158-.066.328-.1.499-.1a1.311 1.311 0 0 1 1.289 1.314v2.428h1.062a1.185 1.185 0 0 1 1.149 1.203 1.222 1.222 0 0 1-1.149 1.178h-1.062v2.66c0 1.763.082 2.126.866 2.126h.366a1.152 1.152 0 0 1 1.147 1.15 1.174 1.174 0 0 1-1.147 1.147l.01.007ZM145.04 9.518a1.41 1.41 0 0 1 .644 1.092 1.239 1.239 0 0 1-1.204 1.232 2.135 2.135 0 0 1-.448-.085 4.597 4.597 0 0 0-2.714-.922c-2.381 0-4.005 1.93-4.005 4.337s1.652 4.312 4.005 4.312a4.34 4.34 0 0 0 3.023-1.232c.205-.144.449-.222.699-.224a1.143 1.143 0 0 1 .816.332 1.134 1.134 0 0 1 .176 1.378 1.184 1.184 0 0 1-.405.418 6.639 6.639 0 0 1-5.978 1.3 6.642 6.642 0 0 1-4.853-7.268 6.642 6.642 0 0 1 6.548-5.789 6.27 6.27 0 0 1 3.696 1.119ZM98.99 12.402a.982.982 0 0 0-.982 1.007l-.054.31a4.026 4.026 0 0 0-2.997-1.428c-2.518 0-4.337 2.126-4.337 4.7 0 2.575 1.79 4.789 4.198 4.789 1.008 0 2.603-.449 3.108-1.428l.057.307a.964.964 0 0 0 1.007.982 1.006 1.006 0 0 0 1.008-1.008v-7.216a1.03 1.03 0 0 0-1.008-1.015Zm-3.752 7.082c-1.147 0-2.044-1.09-2.044-2.436 0-1.345.923-2.32 2.044-2.32 1.12 0 2.129.923 2.129 2.32 0 1.397-.982 2.436-2.13 2.436ZM126.425 16.824c-.057-2.884-1.933-4.508-4.423-4.508-3.092 0-4.397 2.24-4.397 4.817 0 3.276 2.158 4.675 4.761 4.675.979 0 2.015-.141 2.798-.729a1.135 1.135 0 0 0 .56-.923 1.057 1.057 0 0 0-1.031-1.064c-.237.002-.469.07-.67.196a4.173 4.173 0 0 1-1.681.335c-.644 0-2.128-.258-2.128-1.791h5.2a1.031 1.031 0 0 0 1.011-1.008Zm-6.217-.65c0-1.09 1.15-1.453 1.848-1.453.699 0 1.848.363 1.876 1.453h-3.724ZM155.31 12.402a.984.984 0 0 0-.703.296.976.976 0 0 0-.277.711l-.056.31a4.02 4.02 0 0 0-2.995-1.428c-2.52 0-4.34 2.126-4.34 4.7 0 2.575 1.804 4.789 4.198 4.789 1.008 0 2.606-.449 3.108-1.428l.057.307a.974.974 0 0 0 .292.708.965.965 0 0 0 .716.274 1.01 1.01 0 0 0 .932-.622c.05-.122.076-.253.076-.386v-7.216a1.032 1.032 0 0 0-1.008-1.015Zm-3.753 7.082c-1.118 0-2.043-1.09-2.043-2.436 0-1.345.897-2.32 2.043-2.32 1.147 0 2.129.923 2.129 2.32 0 1.397-.974 2.436-2.123 2.436h-.006ZM163.657 12.309a4.14 4.14 0 0 0-3.023 1.232c0-.642-.42-1.119-.979-1.119a1.007 1.007 0 0 0-1.01 1.008v10.863a1.291 1.291 0 0 0 1.288 1.288 1.29 1.29 0 0 0 1.289-1.288v-3.268c.698.53 1.819.755 2.577.773 2.436 0 4.201-2.211 4.201-4.788 0-2.578-1.85-4.701-4.343-4.701Zm-.309 7.167c-1.147 0-2.126-1.03-2.126-2.435s.979-2.32 2.126-2.32c1.147 0 2.044.923 2.044 2.32 0 1.352-.894 2.443-2.044 2.443v-.008"></path>
            </svg>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="hover:text-[#3861fb]">
                    Cryptocurrencies
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="start"
                  sideOffset={20}
                  className="w-full max-w-7xl bg-[#222531] border-0 rounded-lg p-0 shadow-xl animate-in duration-300"
                >
                  <div className="flex flex-row gap-4 p-6">
                    <div className="flex flex-col gap-2 p-3.5 px-2.5">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">
                        Cryptocurrencies
                      </h3>
                      <div className="">
                        {[
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIconV3.svg",
                            color: "bg-blue-600",
                            text: "Ranking",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIconV3.svg",
                            color: "bg-orange-500",
                            text: "Categories",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIconV3.svg",
                            color: "bg-yellow-500",
                            text: "Historical Snapshots",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuTokenUnlocksIconV2.svg",
                            color: "bg-green-500",
                            text: "Token unlocks",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuYieldIconV2.svg",
                            color: "bg-blue-500",
                            text: "Yield",
                            href: "/",
                          },
                        ].map((item, index) => {
                          const Component = item.href ? "a" : "div";
                          return (
                            <Component
                              key={index}
                              href={item.href}
                              className="flex px-3 items-center gap-2 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                            >
                              <div className={` rounded-full p-1`}>
                                <Image
                                  src={item.icon}
                                  alt={item.text}
                                  width={32}
                                  height={32}
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm font-semibold">
                                {item.text}
                              </span>
                            </Component>
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-[1px] h-auto my-4 bg-gray-700"></div>
                    <div className="flex flex-col gap-2 p-3.5 px-2.5">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">
                        Leaderboards
                      </h3>
                      <div className="">
                        {[
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuTrendingIconV3.svg",
                            color: "bg-red-500",
                            text: "Trending",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuUpcomingIconV3.svg",
                            color: "bg-purple-500",
                            text: "Upcoming",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIconV3.svg",
                            color: "bg-blue-500",
                            text: "Recently Added",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIconV3.svg",
                            color: "bg-green-500",
                            text: "Gainers & Losers",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMostVisitedV3.svg",
                            color: "bg-cyan-500",
                            text: "Most Visited",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCommunitySentiment.svg",
                            color: "bg-blue-500",
                            text: "Community Sentiment",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuChainRankingV4.svg",
                            color: "bg-orange-500",
                            text: "Chain Ranking",
                            href: "/",
                          },
                        ].map((item, index) => {
                          const Component = item.href ? "a" : "div";
                          return (
                            <Component
                              key={index}
                              href={item.href}
                              className="flex px-3 items-center gap-3 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                            >
                              <div className={` rounded-full p-1`}>
                                <Image
                                  src={item.icon}
                                  alt={item.text}
                                  width={32}
                                  height={32}
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm font-semibold">
                                {item.text}
                              </span>
                            </Component>
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-[1px] h-auto my-4 bg-gray-700"></div>
                    <div className="flex flex-col gap-2 p-3.5 px-2.5">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">
                        Market Overview
                      </h3>
                      <div className="">
                        {[
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMarketOverviewIcon.svg",
                            color: "bg-purple-500",
                            text: "Market Overview",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCMC100Icon.svg",
                            color: "bg-blue-500",
                            text: "CoinMarketCap 100 Index",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuFearGreedIndexIcon.svg",
                            color: "bg-red-500",
                            text: "Fear and Greed Index",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAltcoinIndexIcon.svg",
                            color: "bg-blue-500",
                            text: "Altcoin Season Index",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuBitcoinDominance.svg",
                            color: "bg-orange-500",
                            text: "Bitcoin Dominance",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuBitcoinETFsIconV3.svg",
                            color: "bg-purple-500",
                            text: "Crypto ETFs",
                            href: "/",
                          },
                        ].map((item, index) => {
                          const Component = item.href ? "a" : "div";
                          return (
                            <Component
                              key={index}
                              href={item.href}
                              className="flex px-3 items-center gap-3 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                            >
                              <div className={` rounded-full p-1`}>
                                <Image
                                  src={item.icon}
                                  alt={item.text}
                                  width={32}
                                  height={32}
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm font-semibold">
                                {item.text}
                              </span>
                            </Component>
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-[1px] h-auto my-4 bg-gray-700"></div>
                    <div className="flex flex-col gap-2 p-3.5 px-2.5">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">
                        NFT
                      </h3>
                      <div className="">
                        {[
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTOverviewV3.svg",
                            color: "bg-blue-500",
                            text: "Overall NFT Stats",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuUpcomingSales.svg",
                            color: "bg-green-500",
                            text: "Upcoming Sales",
                            href: "/",
                          },
                        ].map((item, index) => {
                          const Component = item.href ? "a" : "div";
                          return (
                            <Component
                              key={index}
                              href={item.href}
                              className="flex px-3 items-center gap-3 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                            >
                              <div className={` rounded-full p-1`}>
                                <Image
                                  src={item.icon}
                                  alt={item.text}
                                  width={32}
                                  height={32}
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm font-semibold">
                                {item.text}
                              </span>
                            </Component>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="hover:text-[#3861fb]">
                    DexScan
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="center"
                  sideOffset={20}
                  className="w-full max-w-3xl bg-[#222531] border-0 rounded-lg p-0 shadow-sm animate-in duration-300 shadow-black"
                >
                  <div className="flex flex-col p-3.5">
                    {[
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/DexScanNewPairs.svg",
                        color: "bg-blue-500",
                        text: "New Pairs",
                        href: "/",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/DexScanTrendingPairs.svg",
                        color: "bg-blue-500",
                        text: "Trending Pairs",
                        href: "/",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/DexScanMemeExplorer.svg",
                        color: "bg-blue-500",
                        text: "Meme Explorer",
                        href: "/",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/DexScanGainersAndLosers.svg",
                        color: "bg-green-500",
                        text: "Gainers & Losers",
                        href: "/",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/DexScanCommunityVotes.svg",
                        color: "bg-blue-500",
                        text: "Community Votes",
                        href: "/  ",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/DexScanTopTraders.svg",
                        color: "bg-blue-500",
                        text: "Top Traders",
                        href: "/",
                      },
                    ].map((item, index) => {
                      const Component = item.href ? "a" : "div";
                      return (
                        <Component
                          key={index}
                          href={item.href}
                          className="flex px-3.5 items-center gap-3 text-white hover:bg-[#323546] p-2 rounded-lg font-semibold"
                        >
                          <div className={` rounded-full p-1`}>
                            <Image
                              src={item.icon}
                              alt={item.text}
                              width={32}
                              height={32}
                              className="text-white"
                            />
                          </div>
                          <span className="text-sm font-semibold">
                            {item.text}
                          </span>
                        </Component>
                      );
                    })}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="hover:text-[#3861fb]">
                    Exchanges
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="center"
                  sideOffset={20}
                  className="w-full max-w-3xl bg-[#222531] border-0 rounded-lg p-4 shadow-sm animate-in duration-300 shadow-black"
                >
                  <div className="flex flex-col p-3.5">
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">
                      Centralized Exchanges
                    </h3>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg",
                          color: "bg-blue-500",
                          text: "Spot",
                          href: "/",
                        },
                        {
                          icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg",
                          color: "bg-orange-500",
                          text: "Derivatives",
                          href: "/",
                        },
                      ].map((item, index) => {
                        const Component = item.href ? "a" : "div";
                        return (
                          <Component
                            key={index}
                            href={item.href}
                            className="flex px-3 items-center gap-3 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                          >
                            <div className={` rounded-full p-1`}>
                              <Image
                                src={item.icon}
                                alt={item.text}
                                width={32}
                                height={32}
                                className="text-white"
                              />
                            </div>
                            <span className="text-sm font-semibold">
                              {item.text}
                            </span>
                          </Component>
                        );
                      })}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-2 mt-5">
                      Decentralized Exchanges
                    </h3>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexSpotIcon.svg",
                          color: "bg-blue-500",
                          text: "Spot",
                          href: "/",
                        },
                        {
                          icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexDerivativesIcon.svg",
                          color: "bg-orange-500",
                          text: "Derivatives",
                          href: "/",
                        },
                      ].map((item, index) => {
                        const Component = item.href ? "a" : "div";
                        return (
                          <Component
                            key={index}
                            href={item.href}
                            className="flex px-3 items-center gap-3 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                          >
                            <div className={` rounded-full p-1`}>
                              <Image
                                src={item.icon}
                                alt={item.text}
                                width={32}
                                height={32}
                                className="text-white"
                              />
                            </div>
                            <span className="text-sm font-semibold">
                              {item.text}
                            </span>
                          </Component>
                        );
                      })}
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="hover:text-[#3861fb]">
                    Community
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="center"
                  sideOffset={20}
                  className="w-full max-w-3xl bg-[#222531] border-0 rounded-lg p-0 shadow-sm animate-in duration-300 shadow-black"
                >
                  <div className="flex flex-col p-3.5">
                    {[
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/feed.svg",
                        color: "bg-blue-500",
                        text: "Feeds",
                        href: "/",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/topics.svg",
                        color: "bg-blue-500",
                        text: "Topics",
                        href: "/",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/lives.svg",
                        color: "bg-blue-500",
                        text: "Lives",
                        href: "/",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/articles.svg",
                        color: "bg-green-500",
                        text: "Articles",
                        href: "/",
                      },
                      {
                        icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCommunitySentiment.svg",
                        color: "bg-blue-500",
                        text: "Sentiment",
                        href: "/",
                      },
                    ].map((item, index) => {
                      const Component = item.href ? "a" : "div";
                      return (
                        <Component
                          key={index}
                          href={item.href}
                          className="flex px-3 items-center gap-3 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                        >
             <div className={` rounded-full p-1`}>
                                <Image
                                  src={item.icon}
                                  alt={item.text}
                                  width={32}
                                  height={32}
                                  className="text-white"
                                />
                              </div>
                          <span className="text-sm font-semibold">
                            {item.text}
                          </span>
                        </Component>
                      );
                    })}
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="hover:text-[#3861fb]">
                    Products
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="center"
                  sideOffset={20}
                  className="w-full max-w-7xl bg-[#222531] border-0 rounded-lg p-0 shadow-xl animate-in duration-300"
                >
                  <div className="flex flex-row gap-4 p-6">
                    <div className="flex flex-col gap-2 p-3.5 px-2.5">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">
                        Products
                      </h3>
                      <div className="">
                        {[
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConverterIcon.svg",
                            color: "bg-blue-600",
                            text: "Converter",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg",
                            color: "bg-orange-500",
                            text: "Newsetter",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuExplorerIcon.svg",
                            color: "bg-yellow-500",
                            text: "CMC Labs",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuTelegramBotIcon.svg",
                            color: "bg-green-500",
                            text: "Telegram Bot",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAdvertiseIcon.svg",
                            color: "bg-blue-500",
                            text: "Advertise",
                            href: "/",
                          },
                        ].map((item, index) => {
                          const Component = item.href ? "a" : "div";
                          return (
                            <Component
                              key={index}
                              href={item.href}
                              className="flex px-3 items-center gap-2 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                            >
                              <div className={` rounded-full p-1`}>
                                <Image
                                  src={item.icon}
                                  alt={item.text}
                                  width={32}
                                  height={32}
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm font-semibold gap-2 flex flex-row items-center">
                                {item.text}
                                {item.text !== "Converter" && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="18px"
                                    width="18px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    id="sc-4c05d6ef-0 dMwnWW ext"
                                  >
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449"
                                        stroke="#646B80"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </svg>
                                )}
                              </span>
                            </Component>
                          );
                        })}
                        <div className="h-[1px] w-auto my-4 bg-gray-700"></div>
                        <div className="flex px-3 items-center gap-2 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold">
                          <div className={` rounded-full p-1`}>
                            <Image
                              src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCryptoApiIcon.dark.svg"
                              alt="Crypto API"
                              width={32}
                              height={32}
                              className="text-white"
                            />
                          </div>
                          <span className="text-sm font-semibold gap-2 flex flex-row items-center">
                            Crypto API
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="18px"
                              width="18px"
                              viewBox="0 0 24 24"
                              fill="none"
                              id="sc-4c05d6ef-0 dMwnWW ext"
                            >
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449"
                                  stroke="#646B80"
                                  strokeWidth="1.5"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </svg>
                          </span>
                        </div>
                        <div className="flex px-3 items-center gap-2 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold">
                          <div className={` rounded-full p-1`}>
                            <Image
                              src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuWidgetsIcon.dark.svg"
                              alt="Site Widgets"
                              width={32}
                              height={32}
                              className="text-white"
                            />
                          </div>
                          <span className="text-sm font-semibold gap-2 flex flex-row items-center">
                            Site Widgets
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[1px] h-auto my-4 bg-gray-700"></div>
                    <div className="flex flex-col gap-2 p-3.5 px-2.5">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">
                        Campaigns
                      </h3>
                      <div className="">
                        {[
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg",
                            color: "bg-cyan-500",
                            text: "Airdrops",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRewardsIcon.svg",
                            color: "bg-blue-500",
                            text: "Diamond Rewards",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEarnCryptoIcon.svg",
                            color: "bg-orange-500",
                            text: "Learn & Earn",
                            href: "/",
                          },
                        ].map((item, index) => {
                          const Component = item.href ? "a" : "div";
                          return (
                            <Component
                              key={index}
                              href={item.href}
                              className="flex px-3 items-center gap-3 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                            >
                              <div className={` rounded-full p-1`}>
                                <Image
                                  src={item.icon}
                                  alt={item.text}
                                  width={32}
                                  height={32}
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm font-semibold gap-2 flex flex-row items-center">
                                {item.text}
                                {item.text === "Learn & Earn" && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="18px"
                                    width="18px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    id="sc-4c05d6ef-0 dMwnWW ext"
                                  >
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449"
                                        stroke="#646B80"
                                        stroke-width="1.5"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </svg>
                                )}
                              </span>
                            </Component>
                          );
                        })}
                        <div className="h-[1px] w-auto my-4 bg-gray-700"></div>
                        <div className="flex px-3 items-center gap-2 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold">
                          <div className={` rounded-full p-1`}>
                            <Image
                              src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuICOIcon.svg"
                              alt="Crypto API"
                              width={32}
                              height={32}
                              className="text-white"
                            />
                          </div>
                          <span className="text-sm font-semibold gap-2 flex flex-row items-center">
                            ICO Calendar
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="18px"
                              width="18px"
                              viewBox="0 0 24 24"
                              fill="none"
                              id="sc-4c05d6ef-0 dMwnWW ext"
                            >
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449"
                                  stroke="#646B80"
                                  strokeWidth="1.5"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </svg>
                          </span>
                        </div>
                        <div className="flex px-3 items-center gap-2 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold">
                          <div className={` rounded-full p-1`}>
                            <Image
                              src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEvents2Icon.svg"
                              alt="Site Widgets"
                              width={32}
                              height={32}
                              className="text-white"
                            />
                          </div>
                          <span className="text-sm font-semibold gap-2 flex flex-row items-center">
                            Events Calendar
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[1px] h-auto my-4 bg-gray-700"></div>
                    <div className="flex flex-col gap-2 p-3.5 px-2.5">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">
                        Learn
                      </h3>
                      <div className="">
                        {[
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg",
                            color: "bg-purple-500",
                            text: "News",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAlexandriaIcon.svg",
                            color: "bg-blue-500",
                            text: "Academy",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCMCResearch.svg",
                            color: "bg-red-500",
                            text: "Research",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuVideosIcon.svg",
                            color: "bg-blue-500",
                            text: "Videos",
                            href: "/",
                          },
                          {
                            icon: "https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlossaryIcon.svg",
                            color: "bg-orange-500",
                            text: "Glossary",
                            href: "/",
                          },
                        ].map((item, index) => {
                          const Component = item.href ? "a" : "div";
                          return (
                            <Component
                              key={index}
                              href={item.href}
                              className="flex px-3.5 items-center gap-4 text-white hover:bg-[#323546] p-1 rounded-lg font-semibold"
                            >
                              <div className={` rounded-full p-1`}>
                                <Image
                                  src={item.icon}
                                  alt={item.text}
                                  width={32}
                                  height={32}
                                  className="text-white"
                                />
                              </div>
                              <span className="text-sm font-semibold gap-2 flex flex-row items-center">
                                {item.text}
                                {item.text !== "News" && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="18px"
                                    width="18px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    id="sc-4c05d6ef-0 dMwnWW ext"
                                  >
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.0002 7.99969L13.3335 2.6665M13.3335 2.6665H9.4547M13.3335 2.6665L13.3335 6.54518M6.54566 4.60614H3.85205C3.19749 4.60614 2.66687 5.13675 2.66687 5.79129V12.148C2.66687 12.8026 3.19749 13.3332 3.85205 13.3332H10.209C10.8635 13.3332 11.3941 12.8026 11.3941 12.148V9.45449"
                                        stroke="#646B80"
                                        stroke-width="1.5"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </svg>
                                )}
                              </span>
                            </Component>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 w-full justify-end">
          <div className="hidden md:flex items-center">
            <button className="text-[10px] sm:text-xs flex flex-row items-center font-semibold hover:bg-[#222531] rounded-md py-1 sm:py-1.5 px-1 sm:px-1.5 gap-0.5 sm:gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                width="16px"
                className="sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="#858CA2"
                id="sc-4c05d6ef-0 dMwnWW"
              >
                <path
                  d="M13.8182 2H13V11H22V10.1818C22 5.68182 18.3182 2 13.8182 2Z"
                  fill="#858CA2"
                ></path>
                <path
                  d="M11.35 5H10.5C5.825 5 2 8.825 2 13.5C2 18.175 5.825 22 10.5 22C15.175 22 19 18.175 19 13.5V12.65H11.35V5Z"
                  fill="#858CA2"
                ></path>
              </svg>
              Portfolio
            </button>
            <a
              href="/watchlist"
              className="text-[10px] sm:text-xs flex flex-row items-center font-semibold hover:bg-[#222531] rounded-md py-1 sm:py-1.5 px-1 sm:px-1.5 gap-0.5 sm:gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#858CA2"
                height="16px"
                width="16px"
                className="sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                id="sc-4c05d6ef-0 dMwnWW"
              >
                <path d="M21.288 8.9542L15.3871 8.05451L12.7512 2.44829C12.6745 2.31177 12.5653 2.19861 12.4342 2.11998C12.3031 2.04136 12.1547 2 12.0037 2C11.8527 2 11.7043 2.04136 11.5732 2.11998C11.442 2.19861 11.3328 2.31177 11.2561 2.44829L8.61526 8.05451L2.7143 8.9542C2.56041 8.9775 2.41581 9.04551 2.29684 9.15053C2.17786 9.25555 2.08927 9.3934 2.04106 9.54849C1.99286 9.70358 1.98697 9.86973 2.02406 10.0281C2.06115 10.1866 2.13975 10.3309 2.25095 10.4449L6.52188 14.8113L5.51436 20.978C5.4881 21.1388 5.50524 21.3041 5.56384 21.4552C5.62244 21.6063 5.72017 21.7372 5.84597 21.8331C5.97177 21.9289 6.12063 21.986 6.27571 21.9977C6.4308 22.0095 6.58592 21.9755 6.72355 21.8996L12.0012 18.9889L17.2788 21.8996C17.4164 21.9755 17.5715 22.0095 17.7266 21.9977C17.8817 21.986 18.0305 21.9289 18.1563 21.8331C18.2822 21.7372 18.3799 21.6063 18.4385 21.4552C18.4971 21.3041 18.5142 21.1388 18.488 20.978L17.4804 14.8113L21.7514 10.4449C21.8625 10.331 21.9412 10.1868 21.9783 10.0285C22.0155 9.87024 22.0098 9.7042 21.9617 9.54915C21.9137 9.39411 21.8254 9.25624 21.7066 9.1511C21.5878 9.04597 21.4434 8.97777 21.2897 8.9542H21.288Z"></path>
              </svg>
              Watchlist
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-1 sm:gap-2 bg-[#222531] rounded-md py-1 sm:py-1.5 px-2 sm:px-3 text-gray-400 hover:bg-[#2c3241] w-40 sm:w-60"
            >
              <SearchIcon className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
              <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground tracking-wide">
                Search
              </span>
              <div className="ml-auto px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs border-l bg-gray-500 items-center rounded-sm border-gray-600 text-white">
                /
              </div>
            </button>
            <button className="bg-[#323546] px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium">
              <QrCodeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
            </button>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button className="bg-[#3861fb] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium">
              Log In
            </button>
            <button className="flex items-center gap-1 sm:gap-2 border border-gray-500 rounded-2xl text-white px-0.5 sm:px-1 py-1 sm:py-1.5 text-xs sm:text-sm font-medium">
              <div className="">
                <MenuIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              </div>
              <div className="">
                <Image
                  loading="lazy"
                  decoding="async"
                  alt="avatar"
                  width={16}
                  height={16}
                  className="sm:w-5 sm:h-5"
                  src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default-avatar.png"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <CryptoSearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default index;
