"use client";

import { TranslationDict, Language } from "@/context/i18n/dictionary";

interface CTASectionProps {
    t: TranslationDict;
    language: Language;
}

export default function CTASection({ t, language }: CTASectionProps) {

    return (
        <section id="contact" className="py-20 px-4 md:px-6 bg-white border-t border-border-subtle relative overflow-hidden">
            {/* Mesh Gradient Background Fragments */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 md:translate-x-1/2 animate-gentle-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-400/10 rounded-full blur-[60px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 animate-gentle-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="container mx-auto relative z-10">
                <div className="w-full rounded-[2rem] md:rounded-[4rem] px-6 py-12 md:p-20 relative overflow-hidden border border-white/20 shadow-2xl bg-slate-900/5 backdrop-blur-md">
                    {/* Inner Content Glass Container */}
                    <div className="absolute inset-0 bg-primary/95 z-0"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold text-accent uppercase tracking-[0.15em] md:tracking-[0.3em] mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                            {language === 'en' ? 'Ready to start building?' : language === 'hi' ? 'बनाने के लिए तैयार?' : language === 'es' ? '¿Listo para construir?' : language === 'fr' ? 'Prêt à construire ?' : '構築の準備はできましたか？'}
                        </div>

                        <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-white">
                            {t.cta.title} <br />
                            <span className="italic font-serif text-accent drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">{t.cta.titleAccent}</span>
                        </h2>

                        <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-12 leading-relaxed px-4 md:px-0">
                            {t.cta.description}
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full md:w-auto">
                            <a
                                className="group relative w-full md:w-auto px-10 py-5 bg-white text-primary font-bold text-xs tracking-widest rounded-full hover:bg-accent hover:text-white transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] overflow-hidden text-center"
                                href="mailto:kaifshaikh.dev@gmail.com"
                            >
                                <span className="relative z-10">{t.cta.button}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </a>

                            <button
                                data-cal-link="kaifsk/30min"
                                data-cal-config='{"layout":"month_view"}'
                                className="group flex items-center justify-center gap-3 text-[11px] md:text-sm font-bold tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer"
                            >
                                {language === 'en' ? 'Schedule a Call' : language === 'hi' ? 'कॉल शेड्यूल करें' : language === 'es' ? 'AGENDAR LLAMADA' : language === 'fr' ? 'PLANIFIER UN APPEL' : '通話を予約'}
                                <span className="material-symbols-outlined !text-lg group-hover:translate-x-2 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
