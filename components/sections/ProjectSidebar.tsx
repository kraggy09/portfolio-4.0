"use client";

import { useEffect, useState } from "react";
import { TranslationDict } from "@/context/i18n/dictionary";

interface ProjectSidebarProps {
    t: TranslationDict;
    technologies: string[];
}

export default function ProjectSidebar({ t, technologies }: ProjectSidebarProps) {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = ["about", "challenge", "solution", "features", "media", "results", "tech"];

        const observerOptions = {
            root: null,
            rootMargin: "-10% 0px -40% 0px", // More forgiving margins for detection
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { id: "about", label: "Intro" },
        { id: "challenge", label: t.projects.caseStudyNav.challenge },
        { id: "solution", label: t.projects.caseStudyNav.solution },
        { id: "features", label: t.projects.caseStudyNav.features },
        { id: "media", label: t.projects.caseStudyNav.gallery },
        { id: "results", label: t.projects.caseStudyNav.results },
        { id: "tech", label: t.projects.caseStudyNav.tech },
    ];

    return (
        <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-10">
                <div className="relative p-6 rounded-[2rem] bg-slate-50/50 backdrop-blur-sm border border-slate-100">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 px-4">
                        {t.projects.caseStudyNav.overview}
                    </h3>
                    <nav className="space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`group flex items-center gap-3 px-4 py-3 text-sm font-bold transition-all duration-300 rounded-xl ${activeSection === link.id
                                    ? "text-primary bg-white shadow-sm"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                                    }`}
                            >
                                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === link.id ? "bg-primary scale-100" : "bg-slate-300 scale-0 group-hover:scale-100"
                                    }`} />
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="p-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
                        {t.projects.caseStudyNav.tech}
                    </h3>
                    <div className="flex flex-wrap gap-2 px-2">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight shadow-sm hover:border-primary/20 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
