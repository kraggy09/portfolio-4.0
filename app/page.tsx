import { cookies } from "next/headers";
import { translations, Language } from "@/context/i18n/dictionary";
import HeroSection from "@/components/sections/HeroSection";
import AgentBanner from "@/components/sections/AgentBanner";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CTASection from "@/components/sections/CTASection";

export default async function Home() {
  const cookieStore = await cookies();
  const language = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "en";
  const t = translations[language];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kaif Shaikh",
    "jobTitle": "Full Stack Developer & AI Systems Builder",
    "url": "https://www.kaifsk.com",
    "image": "https://www.kaifsk.com/og-image.png",
    "sameAs": [
      "https://github.com/kraggy09",
      "https://linkedin.com/in/mkaifshaikh",
      "https://twitter.com/kaifshaikh_2002",
      "https://www.instagram.com/kaifshaikh_2002/"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "AI Systems Architecture",
      "Next.js",
      "SaaS Development",
      "Marketplace Engineering",
      "Node.js",
      "React Native",
      "Cloud Infrastructure"
    ],
    "description": "Kaif Shaikh is a software developer specializing in building scalable SaaS products, AI-integrated marketplaces, and high-performance intelligent systems.",
    "worksFor": {
      "@type": "Organization",
      "name": "Rahigo"
    }
  };

  return (
    <main className="">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection t={t} />
      <AgentBanner t={t} language={language} />
      <WorkSection t={t} language={language} />
      <ProjectsSection t={t} language={language} />
      <CTASection t={t} language={language} />
    </main>
  );
}
