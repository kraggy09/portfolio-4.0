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
                        <p className="text-[#808ca3] text-[10px] font-mono uppercase tracking-[0.1em]">
                            {t.hero?.tag || "Full Stack Developer"}
                        </p>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <span className="text-[10px] font-medium text-[#808ca3] uppercase tracking-[0.2em] block mb-3">
                            Connect
                        </span>
                        <div className="flex flex-col gap-2">
                            <a href="https://linkedin.com/in/mkaifshaikh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#8892a4] hover:text-[#7eb8f7] transition-all group text-[13px]">
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                <span className="font-mono text-[11px] tracking-wide">LinkedIn</span>
                            </a>
                            <a href="https://github.com/kraggy09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#8892a4] hover:text-[#7eb8f7] transition-all group text-[13px]">
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span className="font-mono text-[11px] tracking-wide">GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Status Section */}
                    <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl shadow-sm">
                        <span className="text-[10px] font-medium text-[#808ca3] uppercase tracking-[0.2em] block mb-2.5">
                            Status
                        </span>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[12px] font-medium text-[#e8eaf0] tracking-wide">
                                    {t.footer?.status || "Available for projects"}
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5 text-[#808ca3]">
                                <span className="material-symbols-outlined !text-xs">location_on</span>
                                <span className="text-[10px] font-mono tracking-wider uppercase">
                                    {t.footer?.location || "Kolkata, India"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] font-medium text-[#808ca3] tracking-widest uppercase">
                        {t.footer?.copyright || `© ${new Date().getFullYear()} KAIF SHAIKH`}
                    </p>
                    <div className="flex items-center gap-6 text-[10px] font-medium text-[#808ca3] tracking-wider uppercase">
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
