import { cookies } from "next/headers";
import { translations, Language } from "@/context/i18n/dictionary";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import CalComEmbed from "@/components/CalComEmbed";
import { LanguageProvider } from "@/context/i18n/LanguageContext";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaifsk.com"),
  title: {
    default: "Kaif Shaikh | Full Stack Developer & AI Systems Builder",
    template: "%s | Kaif Shaikh"
  },
  description:
    "Official portfolio of Kaif Shaikh. Expert in building scalable SaaS products, AI-integrated marketplaces, and high-performance intelligent systems with Next.js and Node.js.",
  keywords: [
    "Kaif Shaikh",
    "Kaif Shaikh Developer",
    "Full Stack Developer Mumbai",
    "AI Systems Builder",
    "Scalable SaaS Architecture",
    "Next.js Expert",
    "React Native Developer",
    "Rahigo Founder",
    "Software Engineering Portfolio",
  ],
  authors: [{ name: "Kaif Shaikh", url: "https://www.kaifsk.com" }],
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
    title: "Kaif Shaikh | Full Stack Developer & AI Systems Builder",
    description:
      "Building scalable digital products that combine full-stack engineering with intelligent automation.",
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
    title: "Kaif Shaikh | Full Stack Developer & AI Systems Builder",
    description:
      "Full-stack engineer specializing in AI-integrated workflows and scalable SaaS platforms.",
    creator: "@kaifshaikh_2002",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
    <html lang={initialLang} className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <LanguageProvider initialLanguage={initialLang}>
          <div className="relative min-h-screen flex flex-col overflow-x-hidden">
            <CalComEmbed />
            <Navbar />
            <main className="flex-grow">
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
