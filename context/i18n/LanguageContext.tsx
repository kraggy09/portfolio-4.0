"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationDict } from "./dictionary";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage?: Language }> = ({
    children,
    initialLanguage = "en"
}) => {
    const [language, setLanguageState] = useState<Language>(initialLanguage);

    useEffect(() => {
        // Sync with cookie if it exists and differs from current state
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(";").shift();
        };

        const savedLang = getCookie("NEXT_LOCALE") as Language;

        if (savedLang && ["en", "hi", "es", "fr", "ja"].includes(savedLang) && savedLang !== language) {
            setLanguageState(savedLang);
        }
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        // Set cookie for server-side detection (expires in 1 year)
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
