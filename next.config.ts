import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "s2.coinmarketcap.com",
      "pump.mypinata.cloud",
      "academy-public.coinmarketcap.com",
      "pancakeswap.finance",
    ],
  },
};

export default nextConfig;
