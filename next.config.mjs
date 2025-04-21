/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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