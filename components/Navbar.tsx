"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/i18n/LanguageContext";
import { Language } from "@/context/i18n/dictionary";

export default function Navbar() {
    const router = useRouter();
    const [capsule, setCapsule] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setCapsule(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const languages: { code: Language; label: string }[] = [
        { code: "en", label: "ENGLISH" },
        { code: "hi", label: "हिंदी" },
        { code: "es", label: "ESPAÑOL" },
        { code: "fr", label: "FRANÇAIS" },
        { code: "ja", label: "日本語" },
    ];

    return (
        <nav
            id="main-nav"
            className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-subtle flex items-center transition-all duration-500 ease-in-out ${capsule ? "nav-capsule" : "h-20"
                }`}
        >
            <div className="container mx-auto px-8 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold tracking-normal text-primary uppercase text-[13px] hidden sm:block font-sans group-hover:text-accent transition-colors">
                        Kaif Shaikh
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-600">
                    <Link href="/#work" className="hover:text-accent transition-colors">
                        {t.nav.work}
                    </Link>
                    <Link href="/#about" className="hover:text-accent transition-colors">
                        {t.nav.about}
                    </Link>
                    <Link href="/#projects" className="hover:text-accent transition-colors">
                        {t.nav.projects}
                    </Link>

                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            className="flex items-center gap-2 hover:text-accent transition-colors uppercase"
                            onClick={() => setLangOpen(!langOpen)}
                            aria-label="Select language"
                        >
                            <span className="material-symbols-outlined !text-lg">
                                language
                            </span>
                            <span>{language}</span>
                        </button>
                        {langOpen && (
                            <div className="absolute top-full right-0 mt-4 w-32 bg-white border border-border-subtle rounded-2xl shadow-xl overflow-hidden py-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`w-full text-left px-4 py-2 text-[10px] font-bold hover:bg-surface-light ${language === lang.code ? "text-accent bg-accent/5" : ""
                                            }`}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setLangOpen(false);
                                            router.refresh();
                                        }}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA */}
                <button
                    data-cal-link="kaifsk/30min"
                    data-cal-config='{"layout":"month_view"}'
                    className="px-6 py-3 bg-primary text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-accent transition-all shadow-lg hover:shadow-accent/20 font-sans cursor-pointer"
                >
                    {t.nav.cta}
                </button>
            </div>
        </nav>
    );
}
