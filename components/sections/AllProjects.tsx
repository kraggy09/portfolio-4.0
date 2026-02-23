"use client";

import { TranslationDict, Language } from "@/context/i18n/dictionary";

interface AllProjectsProps {
    t: TranslationDict;
    language: Language;
}

export default function AllProjects({ t, language }: AllProjectsProps) {
    const projects = [
        {
            title: t.projects.rahigo.title,
            description: t.projects.rahigo.description,
            tag: t.projects.rahigo.tag,
            type: t.projects.rahigo.type,
            image: "/projects/rahigo.png",
            links: {
                caseStudy: "#",
                liveDemo: "#",
                github: "#"
            }
        },
        {
            title: t.projects.travel.title,
            description: t.projects.travel.description,
            tag: t.projects.travel.tag,
            type: t.projects.travel.type,
            image: "/projects/travel.png",
            links: {
                caseStudy: "#",
                liveDemo: "#",
                github: "#"
            }
        },
        {
            title: t.projects.receptionist.title,
            description: t.projects.receptionist.description,
            tag: t.projects.receptionist.tag,
            type: t.projects.receptionist.type,
            image: "/projects/receptionist.png",
            links: {
                caseStudy: `/projects/${t.projects.receptionist.id}`,
                liveDemo: null, // Example of optional link
                github: "#"
            }
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4">Innovation Lab</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6">
                        The <span className="italic serif text-accent">Projects</span> Archive
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group flex flex-col bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                            {/* Card Visual - Fixed Aspect Ratio and Object Cover */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="text-[8px] font-bold text-white uppercase tracking-widest px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content - Compact */}
                            <div className="p-6 md:p-8 md:pt-10 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{project.type}</p>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-200/60 flex flex-wrap items-center gap-4">
                                    <a
                                        href={project.links.caseStudy}
                                        className="text-[10px] font-bold tracking-widest uppercase text-primary hover:text-accent flex items-center gap-1.5 transition-colors"
                                    >
                                        {t.projects.caseStudy}
                                        <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                                    </a>
                                    {project.links.liveDemo && (
                                        <a
                                            href={project.links.liveDemo}
                                            className="text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-primary transition-colors"
                                        >
                                            {t.projects.liveDemo}
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            className="text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-primary transition-colors"
                                        >
                                            {t.projects.github}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
