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
        t.projects.rahigo,
        t.projects.travel,
        t.projects.receptionist
    ];

    const project = projectsData.find(p => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Back Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary transition-colors mb-12 group"
                >
                    <span className="material-symbols-outlined !text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    {t.projects.caseStudyNav.backToProjects}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sticky Sidebar (Desktop) */}
                    <ProjectSidebar t={t} technologies={project.technologies} />

                    {/* Main Content Area */}
                    <div className="lg:col-span-9 space-y-24">
                        {/* Header & Intro */}
                        <section id="about" className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    {project.tag} • {project.type}
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
                                    {project.title}
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
                                    {project.description}
                                </p>
                            </div>

                            {/* Video Showcase (Loom Embed) */}
                            <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl">
                                {project.loom ? (
                                    <iframe
                                        src={project.loom}
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                        <div className="text-center">
                                            <span className="material-symbols-outlined !text-6xl mb-4 text-slate-300">video_library</span>
                                            <p className="font-bold uppercase tracking-widest text-xs">Video Demo Coming Soon</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Challenge & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                            <section id="challenge" className="space-y-6">
                                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center">
                                        <span className="material-symbols-outlined !text-xl">warning</span>
                                    </span>
                                    {t.projects.caseStudyNav.challenge}
                                </h2>
                                <p className="text-slate-600 leading-relaxed lg:text-lg">
                                    {project.challenge}
                                </p>
                            </section>

                            <section id="solution" className="space-y-6">
                                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                                        <span className="material-symbols-outlined !text-xl">lightbulb</span>
                                    </span>
                                    {t.projects.caseStudyNav.solution}
                                </h2>
                                <p className="text-slate-600 leading-relaxed lg:text-lg">
                                    {project.solution}
                                </p>
                            </section>
                        </div>

                        {/* Features Breakdown */}
                        <section id="features" className="space-y-12">
                            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-6">
                                {t.projects.caseStudyNav.features}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <span className="text-lg font-bold">{idx + 1}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Bento / Pinterest-style Media Gallery */}
                        <section id="media" className="space-y-12">
                            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-100 pb-6">
                                {t.projects.caseStudyNav.gallery}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                                {project.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm group ${idx === 0 ? "md:col-span-2 lg:row-span-2 lg:h-full" :
                                            idx === 1 ? "lg:row-span-1" :
                                                "lg:col-span-1"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Results & Impact */}
                        <section id="results" className="p-12 rounded-[3rem] bg-slate-900 text-white space-y-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700"></div>

                            <div className="relative space-y-6">
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                                    Final Outcome
                                </span>
                                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                                    {t.projects.caseStudyNav.results}
                                </h2>
                                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                                    {project.results}
                                </p>
                            </div>

                            <div className="relative pt-10 border-t border-white/10 flex flex-wrap gap-12">
                                <div className="space-y-1">
                                    <p className="text-3xl font-black text-primary">60%</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Efficiency Boost</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-3xl font-black text-primary">40%</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Conversion Increase</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-3xl font-black text-primary">24/7</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Monitoring</p>
                                </div>
                            </div>
                        </section>

                        {/* Tech Stack Mobile (Visible only on mobile) */}
                        <section id="tech" className="space-y-8">
                            <h2 className="text-2xl font-black text-slate-900 lg:hidden">
                                {t.projects.caseStudyNav.tech}
                            </h2>
                            <div className="flex flex-wrap gap-3 lg:hidden">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-tight"
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
