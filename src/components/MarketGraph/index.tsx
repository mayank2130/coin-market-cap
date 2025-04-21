"use client";

import { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface MarketGraphProps {
  color?: string;
  dataSet?: {value: number}[];
  height?: string;
}

export default function MarketGraph({ color = "#16c784", dataSet, height = "340%" }: MarketGraphProps) {
  const [data, setData] = useState<{value: number}[]>([]);
  
  useEffect(() => {
    // If dataSet is provided, use it, otherwise generate data
    if (dataSet) {
      setData(dataSet);
      return;
    }
    
    // Generate sample data with more realistic market fluctuations
    const generateData = () => {
      const points = 100;
      const result: {value: number}[] = [];
      let value = 1000;
      
      // Create different trend segments
      for (let i = 0; i < points; i++) {
        // More dramatic and varied changes
        let volatility;
        
        // Create different volatility segments
        if (i < 20) {
          volatility = 25; // Initial moderate volatility
        } else if (i < 35) {
          volatility = 45; // Higher volatility period
          if (i === 28) value -= 120; // Sharp drop
        } else if (i < 55) {
          volatility = 20; // Calmer period with slight recovery
          if (i === 40) value += 60; // Sharp rise
        } else if (i < 70) {
          volatility = 30; // Another volatile period
        } else if (i < 85) {
          volatility = 50; // High volatility near the end
          if (i === 75) value += 150; // Major spike
        } else {
          volatility = 35; // Settling volatility
        }
        
        // Apply random movement with the current volatility
        const change = (Math.random() * 2 - 1) * volatility;
        value = value + change;
        
        // Ensure value stays reasonable
        if (value < 700) value = 700 + Math.random() * 50;
        if (value > 1500) value = 1500 - Math.random() * 50;
        
        result.push({ value: Math.max(value, 0) });
      }
      
      return result;
    };
    
    setData(generateData());
  }, [dataSet]);
  
  return (
    <div className="h-10 pb-4">
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}