import { ChevronRight, Triangle } from 'lucide-react'
import MarketGraphTwo from '../MarketGraphTwo'
import React from 'react'
import Image from 'next/image'
import List from '../List'

const TrendingCrypto = () => {
  return (
    
    <div className="bg-[#222531] rounded-2xl p-3 h-fit cursor-pointer shadow-[0_4px_24px_0_rgba(88,102,126,0.08),0_1px_2px_0_rgba(88,102,126,0.08)]">
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center gap-1">
        <h2 className="text-[14px] font-semibold mb-1">Trending Coins</h2>
        <ChevronRight className="w-4 mb-1 h-4 text-gray-400" />
      </div>
      <List />
    </div>
    <div className="mb-0.5">
      {[
        {
          rank: 1,
          name: "VOXEL",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/15678.png",
          price: "$0.04182",
          change: "91.68%",
          isPositive: true,
        },
        {
          rank: 2,
          name: "HIGH",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/11232.png",
          price: "$0.5201",
          change: "42.08%",
          isPositive: true,
        },
        {
          rank: 3,
          name: "MAVIA",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/28829.png",
          price: "$0.23",
          change: "31.70%",
          isPositive: true,
        },
        {
          rank: 4,
          name: "CORE",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/23254.png",
          price: "$0.6759",
          change: "16.83%",
          isPositive: true,
        },
        {
          rank: 5,
          name: "LUCE",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/33694.png",
          price: "$0.008793",
          change: "66.69%",
          isPositive: true,
        },
      ].map((coin) => (
        <div
          key={coin.name}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="text-gray-400 w-4 text-center text-[14px] flex items-center justify-center">{coin.rank}</div>
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
              <Image
                src={coin.img}
                alt={`${coin.name} logo`}
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-white font-semibold flex items-center">
              {coin.name}
            </span>
          </div>
          <div className="flex flex-row items-center justify-end w-[180px]">
            <div className="w-[86px] text-right mr-10 text-[13px] line-clamp-1 font-semibold tracking-wide flex items-center justify-end">
              {coin.price}
            </div>
            <div
              className={`w-[80px] text-right ${
                coin.isPositive ? "text-[#16c784]" : "text-[#ea3943]"
              } flex items-center justify-end`}
            >
              <div className="flex flex-col items-end">
                <MarketGraphTwo />
                <div className="flex items-center justify-end">
                  <Triangle
                    className={`w-2 h-2 inline-block mr-1 ${
                      !coin.isPositive && "rotate-180"
                    }`}
                    fill={coin.isPositive ? "#16c784" : "#ea3943"}
                  />
                  <span className="text-xs font-semibold">
                    {coin.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TrendingCrypto;