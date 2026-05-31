"use client";

import React from "react";
import Link from "next/link";
import { TranslationDict, Language } from "@/context/i18n/dictionary";

interface ExperienceSectionProps {
    t: TranslationDict;
    language: Language;
}

export default function ExperienceSection({ t }: ExperienceSectionProps) {
    const experiences = [
        t.experience.haveit,
        t.experience.intervue,
    ];

    return (
        <section id="experience" className="py-20 px-4 md:px-6 bg-surface-light min-h-screen flex flex-col justify-center">
            <div className="container mx-auto">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-4">Career Timeline</p>
                        <h2 className="text-3xl md:text-6xl font-bold text-primary">
                            {t.experience.title} <br />
                            <span className="italic text-accent">{t.experience.titleAccent}</span>
                        </h2>
                    </div>
                    <Link
                        href="/experience"
                        className="group flex items-center gap-3 px-6 py-3 bg-white text-primary text-xs font-bold uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all shadow-sm border border-border-subtle"
                    >
                        {t.experience.viewMore}
                        <span className="material-symbols-outlined !text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="bento-card group flex flex-col justify-between h-full hover:-translate-y-2 transition-transform duration-500">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-primary">{exp.company}</h3>
                                    <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider">{exp.date}</span>
                                </div>
                                <h4 className="text-sm font-bold text-charcoal mb-4 tracking-wide uppercase">{exp.role}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8">{exp.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {exp.company === "Haveit" ? (
                                    <>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">Node.js</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">React.js</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">Awrika AI</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">LiveKit</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">WebRTC</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">MERN</span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
