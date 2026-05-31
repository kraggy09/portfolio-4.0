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
            <div className="sticky top-28 space-y-8 font-sans">
                <div className="relative p-5 rounded-2xl bg-[#111827]/60 backdrop-blur-md border border-white/5 shadow-2xl">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#808ca3] mb-5 px-3">
                        {t.projects.caseStudyNav.overview}
                    </h3>
                    <nav className="space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`group flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-all duration-300 rounded-lg ${
                                    activeSection === link.id
                                        ? "text-[#7eb8f7] bg-white/[0.03]"
                                        : "text-[#8892a4] hover:text-[#e8eaf0] hover:bg-white/5"
                                }`}
                            >
                                <span
                                    className={`w-1 h-1 rounded-full transition-all duration-300 ${
                                        activeSection === link.id
                                            ? "bg-[#7eb8f7] scale-125"
                                            : "bg-[#808ca3] scale-0 group-hover:scale-100"
                                    }`}
                                />
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="p-5">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#808ca3] mb-4 px-3">
                        {t.projects.caseStudyNav.tech}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 px-1">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-md text-[10px] font-mono text-[#8892a4] uppercase tracking-wide hover:border-[#7eb8f7]/30 hover:text-[#7eb8f7] transition-all cursor-default"
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
