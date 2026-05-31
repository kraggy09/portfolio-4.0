import { cookies } from "next/headers";
import { translations, Language } from "@/context/i18n/dictionary";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import CalComEmbed from "@/components/CalComEmbed";
import { LanguageProvider } from "@/context/i18n/LanguageContext";
import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaifsk.com"),
  title: {
    default: " Kaif Shaikh | Full Stack Engineer & Founder",
    template: "%s |  Kaif Shaikh"
  },
  description:
    "Official portfolio of  Kaif Shaikh. Co-founder & CEO of Rahigo Mobility. Expert in building end-to-end full-stack architectures, real-time marketplaces, and scalable SaaS.",
  keywords: [
    "Kaif Shaikh",
    "Kaif Shaikh",
    "Kaif Shaikh Developer",
    "Full Stack Developer Mumbai",
    "AI Systems Builder",
    "Scalable SaaS Architecture",
    "Next.js Expert",
    "React Native Developer",
    "Rahigo Founder",
    "Scalable SaaS Architect",
    "Next.js Developer",
    "Node.js developer",
  ],
  authors: [{ name: " Kaif Shaikh", url: "https://www.kaifsk.com" }],
  creator: "Kaif Shaikh",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: " Kaif Shaikh | Full Stack Engineer & Founder",
    description:
      "Co-founder & CEO of Rahigo Mobility. Full-stack developer building robust, production-ready backend and Web applications.",
    url: "https://www.kaifsk.com",
    siteName: "Kaif Shaikh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaif Shaikh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaif Shaikh | Full Stack Engineer & Founder",
    description:
      "Co-founder & CEO of Rahigo Mobility. Full-stack engineer specializing in robust backends and end-to-end web architectures.",
    creator: "@kaifshaikh_2002",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLang = (cookieStore.get("NEXT_LOCALE")?.value as Language) || "en";
  const t = translations[initialLang] || translations.en;

  return (
    <html lang={initialLang} className="scroll-smooth bg-black">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmMono.variable} antialiased font-sans bg-black text-[#e8eaf0] selection:bg-[#7eb8f7]/20 selection:text-[#7eb8f7]`}
      >
        <LanguageProvider initialLanguage={initialLang}>
          <div className="relative min-h-screen flex flex-col">
            <CalComEmbed />
            <Navbar />
            <main className="flex-grow pt-24">
              {children}
            </main>
            <Footer t={t} language={initialLang} />
          </div>
          <FloatingCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
