'use client'

import { useState } from 'react';
import { Search, X, TrendingUp, ExternalLink } from 'lucide-react';

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
}

const CryptoSearchModal = ({ isOpen, onClose }: CryptoModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches] = useState(['OFFICIAL TRUMP']);
  
  const trendingCrypto: CryptoItem[] = [
    {
      name: 'Voxies',
      symbol: 'VOXEL',
      number: '644',
      iconUrl: '/api/placeholder/28/28',
      marketCap: '$29.3M',
      volume24h: '$490.5M',
      price: '$0.1206',
      percentChange: 187.28
    },
    {
      name: 'WalletConnect Token',
      symbol: 'WCT',
      number: '341',
      iconUrl: '/api/placeholder/28/28',
      marketCap: '$89.7M',
      volume24h: '$589.8M',
      price: '$0.4817',
      percentChange: 30.64
    },
    {
      name: 'Treasure',
      symbol: 'MAGIC',
      number: '541',
      iconUrl: '/api/placeholder/28/28',
      marketCap: '$39.8M',
      volume24h: '$392.2M',
      price: '$0.1304',
      percentChange: 66.38
    },
    {
      name: 'NKN',
      symbol: 'NKN',
      number: '603',
      iconUrl: '/api/placeholder/28/28',
      marketCap: '$33.4M',
      volume24h: '$189.8M',
      price: '$0.04245',
      percentChange: 97.02
    }
  ];
  
  const trendingDexScan: CryptoItem[] = [
    {
      name: 'TRUMP/USDC',
      symbol: 'OFFICIAL TRUMP',
      iconUrl: '/api/placeholder/28/28',
      marketCap: '$1.6B',
      volume24h: '$85.2M',
      price: '$8.17',
      percentChange: -3.90,
      liquidity: '$331.5M',
      tokenId: '6p6xg...fGiPN'
    },
    {
      name: 'Fartcoin /SOL',
      symbol: 'Fartcoin',
      iconUrl: '/api/placeholder/28/28',
      marketCap: '$821.2M',
      volume24h: '$70.4M',
      price: '$0.8212',
      percentChange: 6.30,
      liquidity: '$8.3M',
      tokenId: '9BB6N...gpump'
    },
    {
      name: 'Fartcoin /USDC',
      symbol: 'Fartcoin',
      iconUrl: '/api/placeholder/28/28',
      marketCap: '$822.9M',
      volume24h: '$15.0M',
      price: '$0.8229',
      percentChange: 7.25,
      liquidity: '$1.4M',
      tokenId: '9BB6N...gpump'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#222531]/25 flex justify-center items-start pt-16 z-50 overflow-auto">
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
              <button onClick={() => setSearchTerm('')}>
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
            <h3 className="text-gray-400 text-sm flex items-center mb-2">
              <span>Trending Crypto</span>
              <TrendingUp size={16} className="ml-2 text-orange-500" />
            </h3>
            
            <div className="space-y-2">
              {trendingCrypto.map((crypto, index) => (
                <div 
                  key={index}
                  className="bg-[#2B2E3D] hover:bg-[#1E274F] rounded-lg p-3 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
                      {crypto.iconUrl ? (
                        <img src={crypto.iconUrl} alt={crypto.symbol} className="w-full h-full rounded-full" />
                      ) : (
                        crypto.symbol.charAt(0)
                      )}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="text-white font-medium">{crypto.name}</span>
                        <span className="ml-2 text-xs text-gray-500">#{crypto.number}</span>
                      </div>
                      <span className="text-sm text-gray-400">{crypto.symbol}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="text-white font-medium">{crypto.price}</div>
                    <div className={`text-sm ${crypto.percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {crypto.percentChange >= 0 ? '▲' : '▼'} {Math.abs(crypto.percentChange).toFixed(2)}%
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end mx-6">
                    <div className="text-sm text-gray-400">MCap: {crypto.marketCap}</div>
                    <div className="text-sm text-gray-400">Vol(24h): {crypto.volume24h}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trending on DexScan */}
          <div className="mt-6">
            <h3 className="text-gray-400 text-sm flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span>Trending on DexScan</span>
                <TrendingUp size={16} className="ml-2 text-orange-500" />
              </div>
              <span className="text-xs text-gray-500">Anyone can list assets on DEXes. DYOR.</span>
            </h3>
            
            <div className="space-y-2">
              {trendingDexScan.map((crypto, index) => (
                <div 
                  key={index}
                  className="bg-[#2B2E3D] hover:bg-[#1E274F] rounded-lg p-3 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full mr-3 flex items-center justify-center text-white">
                      {crypto.iconUrl ? (
                        <img src={crypto.iconUrl} alt={crypto.symbol} className="w-full h-full rounded-full" />
                      ) : (
                        crypto.symbol.charAt(0)
                      )}
                    </div>
                    <div>
                      <div className="text-white font-medium">{crypto.name}</div>
                      <span className="text-sm text-gray-400">{crypto.symbol}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 mr-1"></div>
                    <ExternalLink size={12} className="text-gray-400 mr-1" />
                    <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="text-white font-medium">{crypto.price}</div>
                    <div className={`text-sm ${crypto.percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {crypto.percentChange >= 0 ? '▲' : '▼'} {Math.abs(crypto.percentChange).toFixed(2)}%
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-400">MCap: {crypto.marketCap}</div>
                    <div className="text-sm text-gray-400">Vol(24h): {crypto.volume24h}</div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-400">Liq: {crypto.liquidity}</div>
                    <div className="text-sm text-gray-400">Token: {crypto.tokenId}</div>
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