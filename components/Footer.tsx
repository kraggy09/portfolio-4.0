"use client";

import { TranslationDict, Language } from "@/context/i18n/dictionary";
import Link from "next/link";

interface FooterProps {
    t: TranslationDict;
    language: Language;
}

export default function Footer({ t, language }: FooterProps) {
    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 px-6 bg-transparent border-t border-white/5 w-full relative overflow-hidden font-sans">
            {/* Background Flair */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7eb8f7]/10 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#7eb8f7]/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[680px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 text-[13px]">
                    {/* Identity Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4 group cursor-default text-[#e8eaf0]">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#7eb8f7]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-6 h-6 transition-transform duration-500 group-hover:scale-105 relative z-10">
                                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <span className="font-medium tracking-tight text-[13.5px]">
                                Kaif Shaikh
                            </span>
                        </div>
                        <p className="text-[#4a5568] text-[10px] font-mono uppercase tracking-[0.1em]">
                            {t.hero?.tag || "Full Stack Developer"}
                        </p>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <span className="text-[10px] font-medium text-[#4a5568] uppercase tracking-[0.2em] block mb-3">
                            Connect
                        </span>
                        <div className="flex flex-col gap-2">
                            <a href="https://linkedin.com/in/mkaifshaikh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#8892a4] hover:text-[#7eb8f7] transition-all group text-[13px]">
                                <span className="material-symbols-outlined !text-sm group-hover:translate-x-0.5 transition-transform">share</span>
                                <span className="font-mono text-[11px] tracking-wide">LinkedIn</span>
                            </a>
                            <a href="https://github.com/kraggy09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#8892a4] hover:text-[#7eb8f7] transition-all group text-[13px]">
                                <span className="material-symbols-outlined !text-sm group-hover:translate-x-0.5 transition-transform">code</span>
                                <span className="font-mono text-[11px] tracking-wide">GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Status Section */}
                    <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-medium text-[#4a5568] uppercase tracking-[0.2em] block mb-2.5">
                            Status
                        </span>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[12px] font-medium text-[#e8eaf0] tracking-wide">
                                    {t.footer?.status || "Available for projects"}
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5 text-[#4a5568]">
                                <span className="material-symbols-outlined !text-xs">location_on</span>
                                <span className="text-[10px] font-mono tracking-wider uppercase">
                                    {t.footer?.location || "Kolkata, India"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] font-medium text-[#4a5568] tracking-widest uppercase">
                        {t.footer?.copyright || `© ${new Date().getFullYear()} KAIF SHAIKH`}
                    </p>
                    <div className="flex items-center gap-6 text-[10px] font-medium text-[#4a5568] tracking-wider uppercase">
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-1.5 hover:text-[#7eb8f7] transition-colors group"
                        >
                            <span>Back to Top</span>
                            <span className="material-symbols-outlined !text-[11px] group-hover:-translate-y-0.5 transition-transform">north</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
