import React from "react";
import { ChevronDown, Fuel, Triangle } from "lucide-react";

const index = () => {
  return (
    <div className="bg-[#0d1421] py-1.5 text-xs border-b border-[#222531]">
      <div className="mx-auto px-4 flex items-center gap-2.5 overflow-x-auto">
        {[
          { name: "Cryptos", value: "13.82M" },
          { name: "Exchanges", value: "812" },
          {
            name: "Market Cap",
            value: "$2.69T",
            change: { value: "0.90%", positive: true },
          },
          {
            name: "24h Vol",
            value: "$44.59B",
            change: { value: "28.61%", positive: false },
          },
          { name: "Dominance", value: "BTC: 62.9% ETH: 7.2%" },
          { name: "ETH Gas", value: "0.37 Gwei", icon: "fuel" },
          { name: "Fear & Greed", value: "32/100" },
        ].map((item) => (
          <div
            key={item.name}
            className="whitespace-nowrap flex flex-row items-center gap-1"
          >
            {item.icon === "fuel" && (
              <Fuel className="w-3.5 h-3.5 text-gray-500" />
            )}
            <span className="text-gray-400 font-semibold tracking-tight">
              {item.name}:
            </span>{" "}
            <span className="text-blue-500 font-semibold">{item.value}</span>
            {item.icon === "fuel" && (
              <ChevronDown className="w-2.5 h-2.5 text-blue-500" />
            )}
            {item.change && (
              <span
                className={`flex items-center flex-row gap-1 font-semibold ${
                  item.change.positive ? "text-[#16c784]" : "text-[#ea3943]"
                }`}
              >
                {item.change.positive ? (
                  <Triangle className="w-2 h-4 ml-1" fill="#16c784" />
                ) : (
                  <Triangle
                    className="w-2 h-4 rotate-180 ml-1"
                    fill="#ea3943"
                  />
                )}
                {item.change.value}
              </span>
            )}
          </div>
        ))}
        <div className="flex-grow"></div>
        <div className="flex items-center gap-2">
          <button className="bg-[#222531] text-xs font-semibold px-3 py-1.5 rounded-md flex flex-row items-center gap-1">
            <span className="py-0.5">Get listed</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <button className=" border border-[#222531] bg-[#222531] text-xs font-semibold px-3 py-1.5 rounded-md">
            <span className="py-0.5">API</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
