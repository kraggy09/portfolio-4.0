"use client";

import { TranslationDict, Language } from "@/context/i18n/dictionary";
import Link from "next/link";

interface FeaturedProjectProps {
    t: TranslationDict;
    language: Language;
}

export default function FeaturedProject({ t, language }: FeaturedProjectProps) {
    const project = {
        title: t.projects.rahigo.title,
        description: t.projects.rahigo.description,
        tag: t.projects.rahigo.tag,
        type: t.projects.rahigo.type,
        image: "/projects/rahigo.png",
        links: {
            caseStudy: `/projects/${t.projects.rahigo.id}`,
            liveDemo: "#",
            github: "#"
        }
    };

    return (
        <section id="projects" className="py-12 md:py-20 bg-surface-light">
            <div className="container mx-auto px-4 md:px-8">
                {/* Compact Header with Integrated CTA */}
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div>
                        <p className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-2">Featured Project</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary">
                            {t.projects.title} <span className="italic text-accent">{t.projects.titleAccent}</span>
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="group/btn flex items-center gap-3 text-primary hover:text-accent transition-all duration-300"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{t.nav.projects}</span>
                        <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center group-hover/btn:border-accent group-hover/btn:bg-accent/5 transition-all">
                            <span className="material-symbols-outlined !text-lg group-hover/btn:translate-x-1 transition-transform">east</span>
                        </div>
                    </Link>
                </div>

                {/* Compact Bento Card */}
                <div className="group overflow-hidden rounded-[2.5rem] border border-border-subtle bg-white shadow-sm hover:shadow-xl transition-all duration-500 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 items-stretch">

                        {/* Text Content - Focused and Tight */}
                        <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
                            <div className="flex gap-2 mb-6">
                                <span className="text-[9px] font-bold text-accent uppercase tracking-widest px-3 py-1 bg-accent/5 rounded-full border border-accent/10">{project.tag}</span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-3 py-1 bg-slate-50 rounded-full">{project.type}</span>
                            </div>

                            <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6 transition-colors duration-500 group-hover:text-accent">
                                {project.title}
                            </h3>

                            <p className="text-charcoal text-sm md:text-base leading-relaxed mb-8 opacity-80 font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border-subtle mt-auto">
                                <a
                                    href={project.links.caseStudy}
                                    className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
                                >
                                    {t.projects.caseStudy}
                                    <span className="material-symbols-outlined !text-base">arrow_forward</span>
                                </a>
                                {project.links.liveDemo && (
                                    <a
                                        href={project.links.liveDemo}
                                        className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined !text-sm">open_in_new</span>
                                        {t.projects.liveDemo}
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5"
                                    >
                                        <span className="material-symbols-outlined !text-sm">code</span>
                                        {t.projects.github}
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Visual Panel - Fixed Aspect Ratio and Object Cover */}
                        <div className="lg:col-span-7 relative overflow-hidden order-1 lg:order-2 bg-slate-100 border-b lg:border-b-0 lg:border-l border-border-subtle min-h-[300px] lg:min-h-full">
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
