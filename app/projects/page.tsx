import { cookies } from "next/headers";
import { translations, Language } from "@/context/i18n/dictionary";
import AllProjects from "@/components/sections/AllProjects";
import CTASection from "@/components/sections/CTASection";

export default async function ProjectsPage() {
    const cookieStore = await cookies();
    const language = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "en";
    const t = translations[language];

    return (
        <main className="pt-10">
            <AllProjects t={t} language={language} />
            <CTASection t={t} language={language} />
        </main>
    );
}
