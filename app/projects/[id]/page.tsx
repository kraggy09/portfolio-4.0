import { cookies } from "next/headers";
import { translations, Language } from "@/context/i18n/dictionary";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectSidebar from "@/components/sections/ProjectSidebar";

interface ProjectPageProps {
    params: {
        id: string;
    };
}

export default async function ProjectCaseStudy({ params }: ProjectPageProps) {
    const resolvedParams = await params;
    const cookieStore = await cookies();
    const language = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "en";
    const t = translations[language];

    // Find the project in the dictionary
    const projectsData = [
        t.projects.receptionist,
        t.projects.rahigo,
        t.projects.travel,
        t.projects.invosync
    ];

    const project = projectsData.find(p => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0b0f1a] text-[#e8eaf0] pt-24 pb-20 font-sans premium-glow-container animate-fade-in-up">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Back Link */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#8892a4] hover:text-[#7eb8f7] transition-all mb-10 group"
                >
                    <span className="material-symbols-outlined !text-[18px] group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
                    {t.projects.caseStudyNav.backToProjects}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Sticky Sidebar (Desktop) */}
                    <ProjectSidebar t={t} technologies={project.technologies} />

                    {/* Main Content Area */}
                    <div className="lg:col-span-9 space-y-16">
                        {/* Header & Intro */}
                        <section id="about" className="space-y-6">
                            <div className="space-y-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-widest text-[#7eb8f7] bg-[#7eb8f7]/10 border border-[#7eb8f7]/25 w-max">
                                    {project.tag} • {project.type}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-light text-[#e8eaf0] leading-[1.2]">
                                    {project.title}
                                </h1>
                                <p className="text-[16px] text-[#8892a4] leading-[1.75] font-light max-w-3xl">
                                    {project.description}
                                </p>
                            </div>

                            {/* Video Showcase (Loom Embed) */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#111827] border border-white/5 shadow-2xl">
                                {project.loom && !project.loom.includes("placeholder") ? (
                                    <iframe
                                        src={project.loom}
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full border-0"
                                    ></iframe>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-[#4a5568]">
                                        <div className="text-center">
                                            <span className="material-symbols-outlined !text-4xl mb-2 text-[#4a5568]">video_library</span>
                                            <p className="font-mono uppercase tracking-widest text-[9px]">Video Demo Coming Soon</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Challenge & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
                            <section id="challenge" className="space-y-4">
                                <h2 className="text-[18px] font-medium text-[#e8eaf0] flex items-center gap-2">
                                    <span className="w-6 h-6 rounded bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined !text-sm">warning</span>
                                    </span>
                                    {t.projects.caseStudyNav.challenge}
                                </h2>
                                <p className="text-[#8892a4] text-[14px] leading-[1.75] font-light">
                                    {project.challenge}
                                </p>
                            </section>

                            <section id="solution" className="space-y-4">
                                <h2 className="text-[18px] font-medium text-[#e8eaf0] flex items-center gap-2">
                                    <span className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined !text-sm">lightbulb</span>
                                    </span>
                                    {t.projects.caseStudyNav.solution}
                                </h2>
                                <p className="text-[#8892a4] text-[14px] leading-[1.75] font-light">
                                    {project.solution}
                                </p>
                            </section>
                        </div>

                        {/* Features Breakdown */}
                        <section id="features" className="space-y-8 pt-10 border-t border-white/5">
                            <h2 className="text-[20px] font-medium text-[#e8eaf0]">
                                {t.projects.caseStudyNav.features}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-[#7eb8f7]/20 transition-all duration-300 group">
                                        <div className="w-8 h-8 rounded-lg bg-[#7eb8f7]/10 flex items-center justify-center text-[#7eb8f7] font-mono text-[12px] font-medium mb-4 group-hover:scale-105 transition-transform">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-[15px] font-medium text-[#e8eaf0] mb-2">{feature.title}</h3>
                                        <p className="text-[#8892a4] text-[13px] leading-[1.7] font-light">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Bento / Pinterest-style Media Gallery */}
                        <section id="media" className="space-y-8 pt-10 border-t border-white/5">
                            <h2 className="text-[20px] font-medium text-[#e8eaf0]">
                                {t.projects.caseStudyNav.gallery}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[240px]">
                                {project.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative overflow-hidden rounded-2xl border border-white/5 shadow-sm group ${
                                            idx === 0 ? "md:col-span-2 lg:row-span-2 lg:h-full" : ""
                                        }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Results & Impact */}
                        <section id="results" className="p-8 md:p-10 rounded-2xl bg-white/[0.015] border border-white/5 text-white space-y-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7eb8f7]/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#7eb8f7]/10 transition-colors duration-700 pointer-events-none"></div>

                            <div className="relative space-y-4">
                                <span className="text-[9px] font-mono tracking-widest uppercase text-[#7eb8f7] bg-[#7eb8f7]/10 px-2 py-0.5 rounded border border-[#7eb8f7]/25 w-max block">
                                    Final Outcome
                                </span>
                                <h2 className="text-[20px] font-light leading-tight text-[#e8eaf0]">
                                    {t.projects.caseStudyNav.results}
                                </h2>
                                <p className="text-[14px] text-[#8892a4] leading-[1.75] font-light max-w-2xl">
                                    {project.results}
                                </p>
                            </div>

                            <div className="relative pt-6 border-t border-white/5 flex flex-wrap gap-10">
                                <div className="space-y-0.5">
                                    <p className="text-[22px] font-mono text-[#7eb8f7] font-medium">60%</p>
                                    <p className="text-[9px] font-mono uppercase tracking-widest text-[#4a5568]">Efficiency Boost</p>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[22px] font-mono text-[#7eb8f7] font-medium">40%</p>
                                    <p className="text-[9px] font-mono uppercase tracking-widest text-[#4a5568]">Conversion Increase</p>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[22px] font-mono text-[#7eb8f7] font-medium">24/7</p>
                                    <p className="text-[9px] font-mono uppercase tracking-widest text-[#4a5568]">Active Monitoring</p>
                                </div>
                            </div>
                        </section>

                        {/* Tech Stack Mobile (Visible only on mobile) */}
                        <section id="tech" className="space-y-6 pt-10 border-t border-white/5 lg:hidden">
                            <h2 className="text-[18px] font-medium text-[#e8eaf0]">
                                {t.projects.caseStudyNav.tech}
                            </h2>
                            <div className="flex flex-wrap gap-1.5">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-md text-[10px] font-mono text-[#8892a4] uppercase tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
