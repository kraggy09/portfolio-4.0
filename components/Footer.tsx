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
        <footer className="py-16 md:py-24 px-8 bg-white border-t border-border-subtle w-full relative overflow-hidden">
            {/* Background Engineering Flair (Subtle for Light Theme) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 font-sans">
                    {/* Identity Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-8 group cursor-default text-primary">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-11 h-11 transition-transform duration-500 group-hover:scale-110 relative z-10">
                                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <span className="font-bold tracking-tight uppercase text-sm">
                                Kaif Shaikh
                            </span>
                        </div>
                        <p className="text-slate-400 text-[10px] leading-relaxed font-mono uppercase tracking-[0.1em] max-w-[200px]">
                            {t.hero.tag}
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-6">
                            NAVIGATE
                        </span>
                        <ul className="flex flex-col gap-3 font-mono text-[10px] uppercase font-bold tracking-widest leading-none">
                            <li><a href="#work" className="text-slate-500 hover:text-accent transition-colors">.work()</a></li>
                            <li><a href="#projects" className="text-slate-500 hover:text-accent transition-colors">.projects()</a></li>
                            <li><Link href="/ai-agents" className="text-accent hover:underline transition-colors">.agentAccess()</Link></li>
                        </ul>
                    </div>

                    {/* Socials Section */}
                    <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-6">
                            CONNECT
                        </span>
                        <div className="flex flex-col gap-3">
                            <a href="https://linkedin.com/in/mkaifshaikh" target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-primary transition-all group">
                                <span className="material-symbols-outlined !text-sm group-hover:scale-110 transition-transform">share</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest font-mono">LinkedIn</span>
                            </a>
                            <a href="https://github.com/kraggy09" target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-primary transition-all group">
                                <span className="material-symbols-outlined !text-sm group-hover:scale-110 transition-transform">code</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest font-mono">GitHub</span>
                            </a>
                            <a href="https://twitter.com/kaifshaikh_2002" target="_blank" className="flex items-center gap-3 text-slate-500 hover:text-primary transition-all group">
                                <span className="material-symbols-outlined !text-sm group-hover:scale-110 transition-transform">campaign</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Twitter / X</span>
                            </a>
                        </div>
                    </div>

                    {/* Status Section */}
                    <div className="bg-surface-light p-6 rounded-3xl border border-border-subtle shadow-sm">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-4">
                            CURRENT STATUS
                        </span>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                                    {t.footer.status}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <span className="material-symbols-outlined !text-xs">location_on</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest font-mono">
                                    {t.footer.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[9px] font-bold text-slate-400 tracking-[0.4em] uppercase">
                        {t.footer.copyright}
                    </p>
                    <div className="flex items-center gap-8 text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 hover:text-accent transition-colors group"
                        >
                            <span>Back to Top</span>
                            <span className="material-symbols-outlined !text-xs group-hover:-translate-y-1 transition-transform">north</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
