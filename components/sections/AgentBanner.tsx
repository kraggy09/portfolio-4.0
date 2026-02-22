"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { TranslationDict, Language } from "@/context/i18n/dictionary";

interface AgentBannerProps {
    isIntegrated?: boolean;
    t: TranslationDict;
    language: Language;
}

export default function AgentBanner({ isIntegrated = false, t, language }: AgentBannerProps) {
    const originalText = t.banner.cta;
    const [displayText, setDisplayText] = useState(originalText);
    const chars = "ABCDEF0123456789$#@";
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Update display text when language changes
    useEffect(() => {
        setDisplayText(t.banner.cta);
    }, [t.banner.cta]);

    const startScramble = () => {
        let iteration = 0;
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) return originalText[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("")
            );

            if (iteration >= originalText.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }
            iteration += 1 / 3;
        }, 30);
    };

    const stopScramble = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(originalText);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className={`container mx-auto px-6 ${isIntegrated ? 'mb-0' : 'mb-10'}`}>
            <div className="bg-primary/95 backdrop-blur-md text-white rounded-3xl border border-white/10 p-3 md:py-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl relative overflow-hidden group">
                {/* Visual Engineering Accents */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5"></div>

                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 select-none pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 select-none pointer-events-none"></div>

                <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-white/5 shadow-inner transition-colors duration-500 group-hover:border-accent/20">
                        <span className="material-symbols-outlined text-accent !text-xl animate-pulse">
                            smart_toy
                        </span>
                    </div>
                    <div className="font-mono tracking-tight">
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-slate-500 text-[9px] uppercase font-bold tracking-widest">
                                {t.banner.tag}
                            </span>
                        </div>
                        <span className="text-slate-200 text-sm font-medium">
                            {t.banner.prompt}
                        </span>
                    </div>
                </div>

                <Link
                    href="/ai-agents"
                    id="agent-btn"
                    onMouseEnter={startScramble}
                    onMouseLeave={stopScramble}
                    className="flex items-center gap-3 px-6 py-2.5 bg-white/5 hover:bg-accent border border-white/10 rounded-xl transition-all duration-500 group/btn relative z-10 w-full md:w-auto justify-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/5 to-accent/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white relative z-10">
                        {displayText}
                    </span>
                    <span className="material-symbols-outlined !text-xs text-accent group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all relative z-10">
                        terminal
                    </span>
                </Link>
            </div>
        </div>
    );
}
