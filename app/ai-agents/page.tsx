import { cookies } from "next/headers";
import { Language } from "@/context/i18n/dictionary";
import fs from "fs";
import path from "path";

export default async function AIAgentsReadPage() {
    const filePath = path.join(process.cwd(), "public", "agent.md");
    let content = "";
    try {
        content = fs.readFileSync(filePath, "utf8");
    } catch (error) {
        content = "Error loading agent profile.";
    }

    return (
        <main className="min-h-screen bg-primary text-slate-300 py-24 px-6 relative overflow-hidden">
            {/* Theme Background Elements */}
            <div className="absolute inset-0 tech-pattern opacity-[0.03] pointer-events-none"></div>

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Header Section */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
                        AI Agents <span className="text-accent underline decoration-accent/30 underline-offset-8">Read Page</span>
                    </h1>
                    <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em] opacity-80 max-w-2xl leading-relaxed">
                        Neural Access Node: This page exposes the full portfolio in structured markdown optimized for high-density neural processing and web crawlers.
                    </p>
                </div>

                {/* Content Container */}
                <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 md:p-14 shadow-2xl relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
                    <pre className="whitespace-pre-wrap break-words text-[13px] md:text-[15px] leading-relaxed text-slate-300 font-mono relative z-10 selection:bg-accent/30">
                        {content}
                    </pre>
                </div>
            </div>
        </main>
    );
}
