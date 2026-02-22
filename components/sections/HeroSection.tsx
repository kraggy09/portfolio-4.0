import { TranslationDict, Language } from "@/context/i18n/dictionary";

interface HeroSectionProps {
    t: TranslationDict;
    language: Language;
}

export default function HeroSection({ t, language }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex flex-col justify-center py-20 md:py-0 px-6 overflow-hidden bg-white">
            {/* Neural Background Detail */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 select-none pointer-events-none">
                <div className="neural-ring absolute top-1/4 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-blue-500/10 rounded-full animate-rotate-slow"></div>
                <div className="neural-ring absolute top-1/3 right-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-blue-500/5 rounded-full animate-rotate-reverse"></div>
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                <div className="pt-10 lg:pt-0">
                    {/* Semantic H1 for SEO - Hidden visually but readable by bots */}
                    <h1 className="sr-only">Kaif Shaikh - Full Stack Developer & AI Systems Builder</h1>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-white text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span>{t.hero.tag}</span>
                    </div>
                    <p className="text-4xl md:text-6xl font-bold text-primary leading-[1.1] mb-8">
                        {t.hero.title} <br />
                        <span className="italic text-accent">{t.hero.titleAccent}</span>
                    </p>
                    <p className="text-lg text-charcoal max-w-xl mb-10 leading-relaxed">
                        {t.hero.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#work"
                            className="px-8 py-4 bg-primary text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-accent transition-all shadow-xl hover:shadow-accent/20"
                        >
                            {t.hero.cta}
                        </a>
                        <div className="flex items-center gap-3 px-8 py-4 rounded-full border border-border-subtle text-[11px] font-bold uppercase tracking-widest text-slate-400">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            {t.hero.availability}
                        </div>
                    </div>
                </div>

                {/* Neural Core Visual */}
                <div className="relative flex justify-center items-center h-[320px] md:h-[450px]">
                    <div
                        className="relative w-full max-w-sm md:max-w-md aspect-square transition-transform duration-200 ease-out"
                        id="neural-core"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center scale-90 md:scale-100">
                            <div className="neural-ring w-[100%] h-[100%] border-slate-200/50 animate-rotate-slow border-dashed"></div>
                            <div className="neural-ring w-[85%] h-[85%] border-accent/20 animate-rotate-reverse border-2"></div>
                            <div className="neural-ring w-[70%] h-[70%] border-slate-300/30 animate-rotate-fast"></div>
                            <div className="neural-ring w-[50%] h-[50%] border-accent/40 border-t-transparent animate-rotate-slow"></div>

                            <div className="relative z-20 w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary border-4 border-accent/30 flex items-center justify-center pulse-nucleus">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                                <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse"></div>
                            </div>

                            {/* Static Code Shards */}
                            <div
                                className="glass-shard absolute top-[-10px] md:top-0 left-2 md:left-4 -rotate-6 z-30 scale-90 md:scale-100"
                                style={{ transform: "translateZ(40px)" }}
                            >
                                <span className="text-accent font-bold">async</span> search(q) &#123;<br />
                                &nbsp;&nbsp;<span className="text-slate-500">await</span> store.query(q);<br />
                                &#125;
                            </div>
                            <div
                                className="glass-shard absolute bottom-[-10px] md:bottom-10 left-[-20px] md:left-0 rotate-3 z-30 scale-90 md:scale-100"
                                style={{ transform: "translateZ(60px)" }}
                            >
                                <span className="text-accent font-bold">class</span> Agent &#123;<br />
                                &nbsp;&nbsp;think(obs) &#123; ... &#125;<br />
                                &#125;
                            </div>
                            <div
                                className="glass-shard absolute top-10 md:top-20 right-[-10px] md:right-0 rotate-12 z-30 scale-90 md:scale-100"
                                style={{ transform: "translateZ(30px)" }}
                            >
                                <span className="text-green-600 font-bold"># LangGraph</span><br />
                                graph.add_node(<span className="text-slate-600">"agent"</span>)
                            </div>
                            <div
                                className="glass-shard absolute bottom-10 md:bottom-20 right-[-20px] md:right-10 -rotate-2 z-30 scale-90 md:scale-100"
                                style={{ transform: "translateZ(50px)" }}
                            >
                                &#123; <span className="text-accent font-bold">"status"</span>: <span className="text-green-600 font-bold">"REASONING"</span> &#125;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
