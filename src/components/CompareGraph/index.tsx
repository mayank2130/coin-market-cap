"use client";

import { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer, Legend, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

interface CompareGraphProps {
  cryptos: Array<{
    id: number;
    name: string;
    symbol: string;
    color: string;
  }>;
  className?: string;
}

// Define a type that can handle the specific structure needed
interface DataPoint {
  name: string;
  [cryptoSymbol: string]: string | number;
}

export default function CompareGraph({ cryptos, className }: CompareGraphProps) {
  const [data, setData] = useState<DataPoint[]>([]);
  const [timeRange, setTimeRange] = useState<'1D' | '7D' | '1M' | '1Y' | 'ALL'>('1D');
  
  useEffect(() => {
    if (!cryptos || cryptos.length === 0) return;
    
    // Generate sample data for comparison
    const generateData = () => {
      // Adjust number of points based on time range
      let points = 30;
      switch (timeRange) {
        case '1D': points = 24; break; // Hourly for 1 day
        case '7D': points = 7 * 24; break; // Hourly for 7 days
        case '1M': points = 30; break; // Daily for 1 month
        case '1Y': points = 52; break; // Weekly for 1 year
        case 'ALL': points = 60; break; // Monthly for 5 years
      }
      
      const result: DataPoint[] = [];
      
      // Initialize starting values for each crypto
      const initialValues: Record<string, number> = {};
      cryptos.forEach(crypto => {
        // Random starting value between 800 and 1200
        initialValues[crypto.symbol] = 800 + Math.random() * 400;
      });
      
      // Generate time labels based on selected range
      const generateTimeLabel = (i: number): string => {
        switch (timeRange) {
          case '1D':
            return `${i % 24}:00`;
          case '7D':
            return `Day ${Math.floor(i / 24) + 1} ${i % 24}:00`;
          case '1M':
            return `Day ${i + 1}`;
          case '1Y':
            return `Week ${i + 1}`;
          case 'ALL':
            return `Month ${i + 1}`;
          default:
            return `Point ${i + 1}`;
        }
      };
      
      // Generate data points for each time point
      for (let i = 0; i < points; i++) {
        const pointData: DataPoint = { 
          name: generateTimeLabel(i)
        };
        
        // For each crypto, calculate the next value
        cryptos.forEach(crypto => {
          const symbol = crypto.symbol;
          // Type assertion to number since we know these will be numbers
          const prevValue = i === 0 
            ? initialValues[symbol] 
            : result[i - 1][symbol] as number;
          
          // Volatility patterns differ by time range
          let volatility = 0;
          
          // Adjust volatility based on time range and crypto
          if (timeRange === '1D') {
            // Lower volatility for intraday
            volatility = symbol === 'BTC' ? 50 : symbol === 'ETH' ? 60 : 80;
          } else if (timeRange === '7D') {
            // Medium volatility for weekly
            volatility = symbol === 'BTC' ? 100 : symbol === 'ETH' ? 120 : 160;
          } else {
            // Higher volatility for longer periods
            volatility = symbol === 'BTC' ? 200 : symbol === 'ETH' ? 250 : 300;
          }
          
          // Scale volatility down by applying a multiplier
          volatility *= 0.5;
          
          // Add some special events based on time points
          if (i % 7 === 0) volatility *= 1.5; // More volatile every 7th point
          
          // Calculate random change with the crypto's volatility pattern
          let change;
          // Add trend bias for each crypto
          const trend = symbol === 'BTC' ? 0.1 : symbol === 'ETH' ? 0.05 : -0.02;
          
          // Add more natural looking price movement
          if (i > 0 && i < points - 1) {
            // Create smoother transitions between extreme moves
            const previousChange = (result[i-1][symbol] as number) - 
              (i > 1 ? (result[i-2][symbol] as number) : initialValues[symbol]);
            
            // Mean reversion - after a big move, tend to move less dramatically or in opposite direction
            const meanReversionFactor = -0.3;
            const momentumFactor = 0.2;
            
            // Base change calculation
            change = (Math.random() - 0.5 + trend) * volatility;
            
            // Add some mean reversion and momentum
            change += previousChange * (previousChange > 0 ? meanReversionFactor : momentumFactor);
          } else {
            change = (Math.random() - 0.5 + trend) * volatility;
          }
          
          let newValue = prevValue + change;
          
          // Keep values positive and within reasonable range
          if (newValue < 500) newValue = 500 + Math.random() * 100;
          if (newValue > 90000) newValue = 90000 - Math.random() * 1000;
          
          pointData[symbol] = Math.round(newValue * 100) / 100; // Round to 2 decimal places
        });
        
        result.push(pointData);
      }
      
      return result;
    };
    
    setData(generateData());
  }, [cryptos, timeRange]);
  
  return (
    <div className={`w-full h-full rounded-lg p-4 ${className || 'bg-[#0d1421]'}`}>
      {cryptos.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 dark:text-gray-400">Select cryptocurrencies to compare</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-white">Price Comparison</h3>
            <div className="flex gap-1 bg-[#222531] rounded-md p-1">
              {(['1D', '7D', '1M', '1Y', 'ALL'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`py-1 px-3 text-xs font-medium rounded-md ${
                    timeRange === range 
                      ? 'bg-[#3861fb] text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full h-[400px] relative">
            {/* Price display in top right */}
            <div className="absolute top-0 right-0 bg-[#16c784] text-white px-2 py-1 text-xs rounded-sm z-10">
              {cryptos.length > 0 && data.length > 0 && (
                <span>
                  ${Math.round(data[data.length - 1][cryptos[0].symbol] as number).toLocaleString()}
                </span>
              )}
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={data} 
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#323546" />
                <XAxis 
                  dataKey="name" 
                  stroke="#666" 
                  tick={{ fill: '#666' }}
                  tickFormatter={(value) => {
                    // Format x-axis labels based on time range
                    if (timeRange === '1D' || timeRange === '7D') {
                      if (typeof value === 'string' && value.includes(':')) {
                        const parts = value.split(' ');
                        return parts[parts.length - 1];
                      }
                    }
                    return value;
                  }}
                />
                <YAxis 
                  stroke="#666" 
                  tick={{ fill: '#666' }}
                  domain={['auto', 'auto']}
                  tickFormatter={(value) => `${Math.round(value / 1000)}K`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#323546', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  labelStyle={{ color: 'white' }}
                  itemStyle={{ color: 'white' }}
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
                />
                <Legend wrapperStyle={{ color: 'white' }} />
                {cryptos.map((crypto) => (
                  <Line
                    key={crypto.id}
                    type="monotone"
                    dataKey={crypto.symbol}
                    name={`${crypto.name} (${crypto.symbol})`}
                    stroke={crypto.color}
                    dot={false}
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
} 