"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/context/i18n/LanguageContext";

export default function FloatingCTA() {
    const { t } = useLanguage();
    const fabRef = useRef<HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[60]">
            <button
                ref={fabRef as any}
                data-cal-link="kaifsk/30min"
                data-cal-config='{"layout":"month_view"}'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center bg-primary text-white p-2 rounded-full shadow-2xl transition-all duration-500 hover:pr-8 active:scale-95 cursor-pointer"
            >
                <div className="relative w-12 h-12 bg-accent rounded-full flex items-center justify-center overflow-hidden shrink-0">
                    <span className="material-symbols-outlined text-white relative z-10">
                        calendar_today
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap ${isHovered ? 'w-32 ml-4 opacity-100' : 'w-0 opacity-0'}`}
                >
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-left">
                        {t.nav.cta}
                    </span>
                </div>
            </button>
        </div>
    );
}
