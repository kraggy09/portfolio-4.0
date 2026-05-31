"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/context/i18n/LanguageContext";

export default function FloatingCTA() {
    const { t } = useLanguage();
    const fabRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[60]">
            <button
                ref={fabRef}
                data-cal-link="kaifsk/30min"
                data-cal-config='{"layout":"month_view"}'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center bg-black/90 border border-white/10 text-[#e8eaf0] p-1.5 rounded-full shadow-2xl backdrop-blur-md transition-all duration-500 hover:pr-6 hover:border-[#7eb8f7]/30 hover:shadow-[#7eb8f7]/5 active:scale-95 cursor-pointer"
            >
                <div className="relative w-10 h-10 bg-[#7eb8f7] text-black rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-md">
                    <span className="material-symbols-outlined text-black relative z-10 !text-[18px]">
                        calendar_today
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap ${
                        isHovered ? "w-28 ml-3 opacity-100" : "w-0 opacity-0"
                    }`}
                >
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-left text-[#7eb8f7] group-hover:text-white transition-colors">
                        {t.nav.cta}
                    </span>
                </div>
            </button>
        </div>
    );
}
