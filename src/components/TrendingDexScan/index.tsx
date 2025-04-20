import { ChevronRight, Triangle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ListTwo from '../ListTwo'

const TrendingDexScan = () => {
  return (
    <div className="bg-[#222531] rounded-2xl p-3.5 px-4 h-fit cursor-pointer shadow-[0_4px_24px_0_rgba(88,102,126,0.08),0_1px_2px_0_rgba(88,102,126,0.08)]">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-1">
        <h2 className="text-[14px] font-semibold">
          Trending on DexScan
        </h2>
        <ChevronRight className="w-4 mt-1 h-4 text-gray-400" />
      </div>
      <ListTwo />
    </div>
    <div className="mb-0.5">
      {[
        {
          rank: 1,
          name: "TRUMP",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/35336.png",
          subimage:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
          currency: "USDC",
          price: "$8.46",
          change: "10.50%",
        },
        {
          rank: 2,
          name: "Fartcoin",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/33597.png",
          subimage:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
          currency: "SOL",
          price: "$0.7893",
          change: "4.04%",
        },
        {
          rank: 3,
          name: "MANEKI",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/30912.png",
          subimage:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
          currency: "SOL",
          price: "$0.1806",
          change: "-5.12%",
        },
        {
          rank: 4,
          name: "Fartcoin",
          img: "https://s2.coinmarketcap.com/static/img/coins/64x64/33597.png",
          subimage:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
          currency: "USDC",
          price: "$0.7874",
          change: "4.10%",
        },
        {
          rank: 5,
          name: "Okintama",
          img: "https://pump.mypinata.cloud/ipfs/QmNY6Yn6R6dRsj1d6UzhJrNxjBqi1Vxrdvg5ZPYWmbp1wF",
          subimage:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
          currency: "SOL",
          price: "$0.003194",
          change: "5113%",
        },
      ].map((coin) => (
        <div
          key={coin.name}
          className="flex items-center justify-between py-[9.7px]"
        >
          <div className="flex items-center gap-2">
            <div className="text-gray-400">{coin.rank}</div>
            <div className="relative w-6 h-6">
              <Image
                src={coin.img}
                alt={coin.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <Image
                src={coin.subimage}
                alt={coin.name}
                width={12}
                height={12}
                className="absolute bottom-[-2px] right-[-2px] rounded-full"
              />
            </div>
            <span className="text-sm text-white font-semibold">
              {coin.name}
              <span className="text-xs text-gray-400">
                {" "}
                /{coin.currency}
              </span>
            </span>
          </div>
          <div className="flex flex-row items-center justify-between text-[13px] line-clamp-1 font-semibold tracking-wide">
            <div className="w-[80px] text-right mr-10">
              {coin.price}
            </div>
            <div
              className={
                coin.change.startsWith("-")
                  ? "text-[#ea3943]"
                  : "text-[#16c784]"
              }
            >
              <Triangle
                className={`w-2 h-2 inline-block mr-1 ${
                  coin.change.startsWith("-") ? "rotate-180" : ""
                }`}
                fill={
                  coin.change.startsWith("-") ? "#ea3943" : "#16c784"
                }
              />
              <span className="text-xs">{coin.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TrendingDexScan