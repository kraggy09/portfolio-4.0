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
      className="w-3.5 h-3.5 text-accent animate-pulse" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M18 11H6V6h12v5zm2-8H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2v1h2v-1h12v1h2v-1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-12 13c-.83 0-1.5-.67-1.5-1.5S7.17 12 8 12s1.5.67 1.5 1.5S8.83 16 8 16zm8 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  );

  return (
    <div className="space-y-3 font-sans text-text">
      {/* Route Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {routes.map((route, idx) => {
          const isSelected = activeIndex === idx;
          // Extract visual numbers/abbreviations for space-saving footer
          const displayStat = route.stat.replace("/mo organic search", "/mo").replace("/mo organic", "/mo").replace("/mo surge seasonal", " seasonal");
          const displayMetric = route.metric.replace(" Intent Score", "% Int.").replace(" fleet mapped", " Fleets").replace(" baseline data", " Base");
          
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`w-full text-left p-3 rounded-xl border transition-all duration-300 relative cursor-pointer group flex flex-col justify-between min-h-[96px] ${
                isSelected
                  ? "bg-accent/5 border-accent/30 shadow-[0_0_12px_rgba(126,184,247,0.02)]"
                  : "bg-tag-bg border-border hover:border-accent/15 hover:bg-tag-bg"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${isSelected ? "text-accent" : "text-dim"}`}>
                    0{idx + 1}
                  </span>
                  <span className="px-1.5 py-0.5 rounded-[4px] bg-bg border border-border text-[8.5px] font-mono text-muted">
                    {route.badge}
                  </span>
                </div>

                <p className="text-[13px] font-medium text-text group-hover:text-accent transition-colors">
                  {route.name.split(" ↔ ")[1]}
                </p>
              </div>

              <div className="mt-2 flex items-center justify-between gap-2 border-t border-border/40 pt-1.5">
                <span className="text-[9px] text-dim font-mono">{route.type}</span>
                <span className="text-[9px] font-mono text-accent font-medium whitespace-nowrap">
                  {displayStat} · {displayMetric}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Box */}
      <div className="p-3 rounded-xl bg-tag-bg/50 border border-border relative overflow-hidden flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 shadow-inner">
        {/* Animated Bus Track */}
        <div className="flex items-center justify-between gap-3 px-1 py-1 relative w-full sm:w-[170px] shrink-0 border-b sm:border-b-0 sm:border-r border-border pb-2.5 sm:pb-0 sm:pr-4 self-center">
          <div className="text-[9px] font-mono text-dim uppercase tracking-widest">KOL</div>
          
          {/* Track Line with Dotted Border */}
          <div className="flex-grow h-[1px] border-t border-dashed border-border relative mx-1 min-w-[50px]">
            <div 
              className="absolute -top-[5.5px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                left: activeIndex === 0 ? "15%" : activeIndex === 1 ? "50%" : "85%",
                transform: "translateX(-50%)"
              }}
            >
              <div className="p-0.5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shadow-lg">
                <BusIcon />
              </div>
            </div>
          </div>
          
          <div className="text-[9px] font-mono text-accent uppercase tracking-widest whitespace-nowrap">
            {routes[activeIndex].name.split(" ↔ ")[1].substring(0, 5).toUpperCase()}
          </div>
        </div>

        {/* Insight Breakdown Metrics */}
        <div className="flex-grow text-left flex flex-col justify-center py-0.5">
          <span className="text-[8.5px] font-mono uppercase tracking-widest text-accent/80 block mb-0.5">Traffic Capture Hack</span>
          <p className="text-[12px] text-muted leading-relaxed font-light">
            {routes[activeIndex].insight}
          </p>
        </div>
      </div>
    </div>
  );
}
