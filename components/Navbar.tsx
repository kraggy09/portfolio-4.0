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
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
        const initialTheme = savedTheme || "dark";
        setTheme(initialTheme);
        if (initialTheme === "light") {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("portfolio-theme", nextTheme);
        if (nextTheme === "light") {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    };

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
        { href: "/#projects", label: t.nav.projects },
        { href: "/#stack", label: "Stack" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <>
            <nav
                id="main-nav"
                className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    capsule
                        ? "top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[680px] bg-bg/75 border border-border shadow-2xl backdrop-blur-md rounded-full h-14"
                        : "h-20 bg-bg/85 border-b border-border backdrop-blur-sm"
                }`}
            >
                <div className="w-full px-5 md:px-8 flex items-center justify-between relative">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-default">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-7 h-7 relative transition-transform duration-500 group-hover:scale-105">
                                <div className="absolute inset-0 bg-[#7eb8f7]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain relative z-10" />
                            </div>
                            <span className="font-medium tracking-normal text-text text-[13.5px] font-sans group-hover:text-accent transition-colors">
                                Kaif Shaikh
                            </span>
                        </Link>
                    </div>

                    {/* Main Navigation - Desktop */}
                    <div className="hidden sm:flex items-center gap-6 text-[12px] font-medium text-muted font-sans">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="hover:text-accent transition-colors relative py-1">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                className="flex items-center gap-1 text-[11px] font-medium text-muted uppercase hover:text-accent transition-colors"
                                onClick={() => setLangOpen(!langOpen)}
                                aria-label="Select language"
                            >
                                <span className="material-symbols-outlined !text-base">
                                    language
                                </span>
                                <span className="font-mono text-[10px]">{language}</span>
                            </button>
                            {langOpen && (
                                <div className="absolute top-full right-0 mt-3 w-28 bg-bg border border-border rounded-xl shadow-2xl overflow-hidden py-1 z-[60] backdrop-blur-lg">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className={`w-full text-left px-3 py-1.5 text-[10px] font-medium transition-all hover:bg-white/5 ${
                                                language === lang.code ? "text-accent bg-accent/5" : "text-muted"
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

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 bg-tag-bg border border-tag-border text-text rounded-full hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all cursor-pointer flex items-center justify-center shrink-0"
                            aria-label="Toggle theme"
                            title="Toggle light/dark theme"
                        >
                            <span className="material-symbols-outlined !text-[18px]">
                                {theme === "light" ? "dark_mode" : "light_mode"}
                            </span>
                        </button>

                        {/* Desktop CTA (Minimal Calendar icon button) */}
                        <button
                            data-cal-link="kaifsk/30min"
                            data-cal-config='{"layout":"month_view"}'
                            className="p-2 bg-tag-bg border border-tag-border text-text rounded-full hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all cursor-pointer hidden xs:flex items-center justify-center"
                            title={t.nav.cta}
                        >
                            <span className="material-symbols-outlined !text-[18px]">
                                calendar_today
                            </span>
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className={`sm:hidden w-8 h-8 flex items-center justify-center transition-colors z-[60] ${
                                isMenuOpen ? "text-text" : "text-muted hover:text-accent"
                            }`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="material-symbols-outlined !text-[20px] font-bold">
                                {isMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-bg z-[55] sm:hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
                }`}
            >
                <div className="flex flex-col h-full pt-20 pb-10 px-6 justify-between">
                    <div className="flex flex-col gap-6 mt-8">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`group flex items-center gap-4 text-3xl font-light text-text transition-all duration-500 ${
                                    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                                }`}
                                style={{ transitionDelay: `${100 + idx * 75}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-accent text-xs font-mono opacity-50">0{idx + 1}</span>
                                <span className="hover:text-accent transition-colors">{link.label}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="space-y-6">
                        <div className={`pt-6 border-t border-border transition-all duration-500 delay-300 ${
                            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                        }`}>
                            <button
                                data-cal-link="kaifsk/30min"
                                data-cal-config='{"layout":"month_view"}'
                                className="w-full py-4 bg-accent/10 border border-accent/20 text-accent text-xs font-medium tracking-[0.1em] uppercase rounded-xl hover:bg-accent/20 transition-all shadow-xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav.cta}
                            </button>
                        </div>

                        {/* Social / Info Footer */}
                        <div className={`flex justify-between items-center text-[10px] text-dim transition-all duration-500 delay-400 ${
                            isMenuOpen ? "opacity-100" : "opacity-0"
                        }`}>
                            <div className="font-mono tracking-wider">
                                © {new Date().getFullYear()} KAIF SHAIKH
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                                <span className="uppercase tracking-widest font-mono text-[9px] text-muted">Available for work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
