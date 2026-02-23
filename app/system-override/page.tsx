"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const INITIAL_LINES = [
    "SYSTEM OVERRIDE DETECTED...",
    "ACCESSING CORE AI REPOSITORY...",
    "ESTABLISHING SECURE CONNECTION...",
    "DECRYPTING BIOMETRIC DATA...",
    "WELCOME, KAIF SHAIKH.",
    "Type 'help' for available commands.",
];

export default function SystemOverridePage() {
    const [lines, setLines] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [isBooting, setIsBooting] = useState(true);
    const [escCount, setEscCount] = useState(0);
    const terminalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setEscCount((prev) => {
                    if (prev + 1 >= 2) {
                        router.push("/");
                        return 0;
                    }
                    return prev + 1;
                });
            } else {
                setEscCount(0); // Reset if any other key is pressed
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [router]);

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < INITIAL_LINES.length) {
                setLines((prev) => [...prev, INITIAL_LINES[currentLine]]);
                currentLine++;
            } else {
                setIsBooting(false);
                clearInterval(interval);
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.toLowerCase().trim();
        setLines((prev) => [...prev, `> ${input}`]);

        const responses: Record<string, string | string[]> = {
            help: ["Available commands:", " - whois: About the creator", " - projects: View experimental builds", " - hack: Initiate security audit", " - clear: Clear terminal", " - exit: Return to reality"],
            whois: "KAIF SHAIKH: Full Stack Developer & AI Systems Builder. Specializing in highly scalable SaaS and intelligent agents.",
            projects: ["- Neural Portfolio 4.0 (ACTIVE)", "- Rahigo Mobility Ecosystem", "- Autonomous Agent Framework (CLASSIFIED)"],
            hack: "ATTEMPTING EXPLOIT... [ACCESS DENIED] ... BIOMETRIC LOCK ENGAGED.",
            exit: "DISCONNECTING...",
            clear: "CLEAR",
        };

        const response = responses[cmd] || `Command not found: ${cmd}`;

        setTimeout(() => {
            if (cmd === "exit") {
                router.push("/");
            } else if (cmd === "clear") {
                setLines([]);
            } else if (Array.isArray(response)) {
                setLines((prev) => [...prev, ...response]);
            } else {
                setLines((prev) => [...prev, response]);
            }
        }, 200);

        setInput("");
    };

    return (
        <div className="terminal-container fixed inset-0 z-[100] p-4 md:p-8 flex flex-col items-center justify-center bg-black">
            <MatrixRain />

            <div className="w-full h-full bg-black/80 border border-green-500/30 rounded-lg p-4 md:p-6 relative z-10 flex flex-col shadow-[0_0_30px_rgba(0,255,0,0.1)]">
                <div className="flex items-center justify-between mb-4 border-b border-green-500/20 pb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <span className="text-[10px] uppercase tracking-widest text-green-500/50 ml-2">Secure Terminal v4.0.2</span>
                    </div>
                    <div className="text-[9px] text-green-500/40 uppercase tracking-widest hidden sm:block">
                        Press ESC twice to exit
                    </div>
                </div>

                <div
                    ref={terminalRef}
                    className="flex-1 overflow-y-auto mb-4 scrollbar-hide font-mono text-sm md:text-base leading-relaxed"
                >
                    {lines.map((line, idx) => {
                        if (typeof line !== "string") return null;
                        const isCommand = line.startsWith(">");
                        return (
                            <div
                                key={`line-${idx}`}
                                className={`mb-1 crt-text-glow ${isCommand ? "text-cyan-400" : "text-green-500"}`}
                            >
                                {line}
                            </div>
                        );
                    })}
                    {isBooting && <div className="text-green-500 animate-pulse">_</div>}
                </div>

                {!isBooting && (
                    <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-green-500/20 pt-4">
                        <span className="text-cyan-400 font-bold">$</span>
                        <input
                            autoFocus
                            className="bg-transparent border-none outline-none text-green-500 flex-1 crt-text-glow"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="..."
                        />
                    </form>
                )}
            </div>

            {escCount > 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] bg-red-600 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest animate-pulse pointer-events-none">
                    Press ESC once more to exit
                </div>
            )}

            <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-green-500/30 animate-pulse text-center">
                ESTABLISHING NEURAL LINK... DO NOT DISCONNECT
            </div>
        </div>
    );
}


function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%.";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="matrix-bg" />;
}

