"use client";

import { useState } from "react";

interface RouteData {
  name: string;
  type: string;
  stat: string;
  badge: string;
  metric: string;
  insight: string;
}

interface BarakahInteractiveProps {
  routes: RouteData[];
}

export default function BarakahInteractive({ routes }: BarakahInteractiveProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Material symbols bus icon SVG
  const BusIcon = () => (
    <svg 
      className="w-4 h-4 text-[#7eb8f7]" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M18 11H6V6h12v5zm2-8H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2v1h2v-1h12v1h2v-1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-12 13c-.83 0-1.5-.67-1.5-1.5S7.17 12 8 12s1.5.67 1.5 1.5S8.83 16 8 16zm8 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  );

  return (
    <div className="space-y-4 font-sans text-[#e8eaf0]">
      {/* Route Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {routes.map((route, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 relative cursor-pointer group ${
              activeIndex === idx
                ? "bg-[#7eb8f7]/5 border-[#7eb8f7]/30 shadow-[0_0_15px_rgba(126,184,247,0.03)]"
                : "bg-white/[0.005] border-white/5 hover:border-white/10 hover:bg-white/[0.015]"
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className={`text-[12px] font-mono uppercase tracking-widest ${activeIndex === idx ? "text-[#7eb8f7]" : "text-[#4a5568]"}`}>
                0{idx + 1}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[9px] font-mono text-[#8892a4]">
                {route.badge}
              </span>
            </div>

            <p className="text-[13.5px] font-medium text-[#e8eaf0] group-hover:text-[#7eb8f7] transition-colors">
              {route.name.split(" ↔ ")[1]}
            </p>
            <p className="text-[10px] text-[#4a5568] font-mono mt-1">{route.type}</p>
          </button>
        ))}
      </div>

      {/* Interactive Detail Box */}
      <div className="p-4 rounded-xl bg-white/[0.005] border border-white/5 relative overflow-hidden space-y-4 shadow-inner">
        
        {/* Animated Bus Track */}
        <div className="flex items-center justify-between gap-4 px-2 py-1 relative">
          <div className="text-[10px] font-mono text-[#4a5568] uppercase tracking-widest">KOLKATA</div>
          
          {/* Track Line with Dotted Border */}
          <div className="flex-grow h-[1px] border-t border-dashed border-white/10 relative">
            {/* Animated Bus container */}
            <div 
              className="absolute -top-[7px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                left: activeIndex === 0 ? "10%" : activeIndex === 1 ? "50%" : "85%",
                transform: "translateX(-50%)"
              }}
            >
              <div className="p-1 rounded-full bg-[#7eb8f7]/10 border border-[#7eb8f7]/20 flex items-center justify-center shadow-lg animate-bounce duration-1000">
                <BusIcon />
              </div>
            </div>
          </div>
          
          <div className="text-[10px] font-mono text-[#7eb8f7] uppercase tracking-widest whitespace-nowrap">
            {routes[activeIndex].name.split(" ↔ ")[1]}
          </div>
        </div>

        {/* Insight Breakdown Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3.5 border-t border-white/5">
          <div className="space-y-1">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#4a5568]">Traffic Capture Hack</span>
            <p className="text-[13px] text-[#8892a4] leading-[1.6] font-light">
              {routes[activeIndex].insight}
            </p>
          </div>
          
          <div className="flex items-center gap-6 sm:justify-end">
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#4a5568] block">SEO Traffic</span>
              <p className="text-[13px] font-mono text-[#7eb8f7] font-medium">{routes[activeIndex].stat}</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#4a5568] block">Validation Metric</span>
              <p className="text-[13px] font-mono text-[#7eb8f7] font-medium">{routes[activeIndex].metric}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
