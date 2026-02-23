"use client";

import { TranslationDict } from "@/context/i18n/dictionary";

interface AboutSectionProps {
    t: TranslationDict;
    language: string;
}

export default function AboutSection({ t }: AboutSectionProps) {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-accent font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            {t.nav.about}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                            {t.about.title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-lg text-charcoal leading-relaxed">
                                {t.about.content}
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-inner group">
                            {/* This replaces the need for a photo for now with a clean, techy visual placeholder */}
                            <div className="absolute inset-0 tech-pattern opacity-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-700">
                                    <span className="material-symbols-outlined !text-6xl opacity-40">code_blocks</span>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm">
                                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">Current Mood</p>
                                <p className="text-primary font-bold">Building something impactful</p>
                            </div>
                        </div>

                        {/* Floating decorative cards */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
