import { TranslationDict, Language } from "@/context/i18n/dictionary";

interface ProjectsSectionProps {
    t: TranslationDict;
    language: Language;
}

export default function ProjectsSection({ t, language }: ProjectsSectionProps) {

    const projects = [
        {
            title: t.projects.rahigo.title,
            description: t.projects.rahigo.description,
            tag: t.projects.rahigo.tag,
            type: t.projects.rahigo.type,
            code: `// Marketplace Logic - Real-time Bidding
async function processBids(offerId) {
  const bids = await db.offers.find({ offerId });
  const sorted = bids.sort((a, b) => b.score - a.score);
  return sorted[0]; // The best match for the user
}`,
            links: [
                { label: t.projects.liveDemo, url: "#" },
                { label: t.projects.github, url: "#" }
            ],
            icon: "schema"
        },
        {
            title: t.projects.travel.title,
            description: t.projects.travel.description,
            tag: t.projects.travel.tag,
            type: t.projects.travel.type,
            code: `// Automation - Trip Estimator
function calculateTrip(route) {
  const distance = maps.getDist(route);
  const cost = distance * rate.perKm;
  return { cost, eta: distance / avgSpeed };
}`,
            links: [
                { label: t.projects.liveDemo, url: "#" },
                { label: t.projects.github, url: "#" }
            ],
            icon: "flight_takeoff"
        },
        {
            title: t.projects.receptionist.title,
            description: t.projects.receptionist.description,
            tag: t.projects.receptionist.tag,
            type: t.projects.receptionist.type,
            code: `// NLP - Intent Recognition
async function routeCall(audioStream) {
  const transcript = await whisper.transcribe(audioStream);
  const intent = await llm.classify(transcript);
  return operator.transfer(intent.department);
}`,
            links: [
                { label: t.projects.liveDemo, url: "#" },
                { label: t.projects.github, url: "#" }
            ],
            icon: "support_agent"
        }
    ];

    return (
        <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-surface-light">
            <div className="container mx-auto">
                <div className="mb-16 md:mb-24 text-center">
                    <p className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-4">Case Studies</p>
                    <h2 className="text-3xl md:text-6xl font-bold text-primary">
                        {t.projects.title} <br />
                        <span className="italic text-accent">{t.projects.titleAccent}</span>
                    </h2>
                </div>

                <div className="space-y-24 md:space-y-40">
                    {projects.map((project, index) => (
                        <div key={index} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center project-card p-2 md:p-4 rounded-3xl md:rounded-5xl hover:bg-white/50 transition-colors duration-500">
                            <div className="lg:col-span-6 order-2 lg:order-1">
                                <div className="inline-flex gap-3 mb-8">
                                    <span className="text-xs font-bold text-accent uppercase tracking-widest px-4 py-2 bg-accent/10 rounded-full">{project.tag}</span>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 py-2 bg-slate-200/50 rounded-full">{project.type}</span>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-bold text-primary mb-8">{project.title}</h3>
                                <p className="text-charcoal mb-10 text-base md:text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-6 md:gap-10 border-t border-border-subtle pt-10">
                                    {project.links.map((link, lIdx) => (
                                        <a key={lIdx} className={`flex items-center gap-3 text-sm font-bold ${lIdx === 0 ? 'text-primary hover:text-accent' : 'text-slate-400 hover:text-primary'} transition-colors`} href={link.url}>
                                            {link.label} {lIdx === 0 && <span className="material-symbols-outlined !text-lg">arrow_outward</span>}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-6 order-1 lg:order-2">
                                <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-2xl overflow-hidden relative border border-slate-800">
                                    <div className="mb-6 flex items-center justify-between text-xs font-mono text-slate-500">
                                        <span>Architecture v2.4</span>
                                        <span className="text-accent flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>ACTIVE
                                        </span>
                                    </div>
                                    <div className="bg-[#020617] border border-white/5 p-4 md:p-8 rounded-2xl font-mono text-xs leading-loose text-slate-300">
                                        <pre className="whitespace-pre-wrap">{project.code}</pre>
                                    </div>
                                    <div className="absolute -right-12 -bottom-12 opacity-10">
                                        <span className="material-symbols-outlined text-[120px] md:text-[200px] text-white">{project.icon}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
