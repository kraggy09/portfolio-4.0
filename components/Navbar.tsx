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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setCapsule(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close menu on navigation
    useEffect(() => {
        setIsMenuOpen(false);
    }, [router]);

    const languages: { code: Language; label: string }[] = [
        { code: "en", label: "ENGLISH" },
        { code: "hi", label: "हिंदी" },
        { code: "es", label: "ESPAÑOL" },
        { code: "fr", label: "FRANÇAIS" },
        { code: "ja", label: "日本語" },
    ];

    const navLinks = [
        { href: "/#work", label: t.nav.work },
        { href: "/#about", label: t.nav.about },
        { href: "/#projects", label: t.nav.projects },
    ];

    return (
        <>
            <nav
                id="main-nav"
                className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-subtle flex items-center transition-all duration-500 ease-in-out ${capsule ? "nav-capsule" : "h-20"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative">
                    {/* Logo */}
                    <div className="flex items-center gap-4 group cursor-default">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="font-bold tracking-normal text-primary uppercase text-[13px] hidden sm:block font-sans group-hover:text-accent transition-colors">
                                Kaif Shaikh
                            </span>
                        </Link>
                    </div>

                    {/* Main Navigation - Desktop */}
                    <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-600">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions - Always Visible */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-[11px] font-bold uppercase hover:text-accent transition-colors"
                                onClick={() => setLangOpen(!langOpen)}
                                aria-label="Select language"
                            >
                                <span className="material-symbols-outlined !text-lg">
                                    language
                                </span>
                                <span>{language}</span>
                            </button>
                            {langOpen && (
                                <div className="absolute top-full right-0 mt-4 w-32 bg-white border border-border-subtle rounded-2xl shadow-xl overflow-hidden py-2 z-[60]">
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

                        {/* Desktop CTA */}
                        <button
                            data-cal-link="kaifsk/30min"
                            data-cal-config='{"layout":"month_view"}'
                            className="hidden sm:block px-6 py-3 bg-primary text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-accent transition-all shadow-lg hover:shadow-accent/20 font-sans cursor-pointer"
                        >
                            {t.nav.cta}
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors z-[60] ${isMenuOpen ? "text-white" : "text-primary hover:text-accent"
                                }`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined !text-2xl font-bold">
                                {isMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-primary z-[55] lg:hidden flex flex-col transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
            >
                <div className="flex flex-col h-full pt-12 pb-12 px-8">
                    {/* Header in Menu: Branding + Explicit Close */}
                    <div className={`flex items-center justify-between mb-12 transition-all duration-700 delay-100 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Menu</span>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors group"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest">Close</span>
                            <span className="material-symbols-outlined !text-xl group-hover:rotate-90 transition-transform duration-300">close</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-8">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group flex items-center gap-4 text-4xl sm:text-5xl font-bold text-white transition-all duration-700 ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${200 + idx * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-accent text-sm font-light opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                                <span className="hover:text-accent transition-colors">{link.label}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <div className={`mb-8 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}>
                            <button
                                data-cal-link="kaifsk/30min"
                                data-cal-config='{"layout":"month_view"}'
                                className="w-full px-8 py-5 bg-white text-primary text-xs font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-accent hover:text-white transition-all shadow-2xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav.cta}
                            </button>
                        </div>

                        {/* Social / Info Footer */}
                        <div className={`flex justify-between items-center transition-all duration-700 delay-600 ${isMenuOpen ? "opacity-100" : "opacity-0"
                            }`}>
                            <div className="text-white/50 text-[10px] font-medium tracking-wider">
                                © {new Date().getFullYear()} KAIF SHAIKH
                            </div>
                            <div className="flex gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Available for work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
