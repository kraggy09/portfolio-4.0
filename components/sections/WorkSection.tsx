"use client";

import React, { useState, useEffect } from "react";
import { TranslationDict, Language } from "@/context/i18n/dictionary";

interface WorkSectionProps {
    t: TranslationDict;
    language: Language;
}

export default function WorkSection({ t, language }: WorkSectionProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [resetToken, setResetToken] = useState(0); // For manual resets

    const workflowSteps = [
        t.work.aiWeights.workflow.step1,
        t.work.aiWeights.workflow.step2,
        t.work.aiWeights.workflow.step3,
    ];

    const codePreviews = [
        `// Step 01: Analyze
const signals = await market.observe();
const patterns = engine.recognize(signals);
console.log("Entropy check:", patterns.score);`,
        `// Step 02: Reason
const agents = [Researcher, Architect, Peer];
const consensus = await orchestrator.reason({
  goal: "Optimize Revenue Path",
  context: patterns
});`,
        `// Step 03: Execute
await production.deploy(consensus.plan);
notify.system("Workforce Integrated");
return { status: "SCALED" };`
    ];
    useEffect(() => {
        setProgress(0);
        const slideDuration = 5000;
        const stepInterval = 16;
        const increment = (stepInterval / slideDuration) * 100;
        let completed = false;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const nextProgress = prev + increment;

                if (nextProgress >= 100) {
                    if (!completed) {
                        completed = true;
                        // Move setCurrentStep outside of setProgress callback
                        setTimeout(() => {
                            setCurrentStep((prevStep) => (prevStep + 1) % 3);
                        }, 0);
                    }
                    return 0;
                }
                return nextProgress;
            });
        }, stepInterval);

        return () => clearInterval(timer);
    }, [currentStep, resetToken]);
    const handleStepManualSelect = (selectedIdx: number) => {
        if (selectedIdx === currentStep) {
            // Restart same step if clicked
            setResetToken(prev => prev + 1);
        } else {
            // Switch and reset for new step
            setCurrentStep(selectedIdx);
        }
    };

    return (
        <section id="work" className="py-20 px-6 bg-white min-h-screen flex flex-col justify-center">
            <div className="container mx-auto">
                <div className="mb-16">
                    <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-4">Core Competencies</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-primary">
                        {t.work.title} <br />
                        <span className="italic text-accent">{t.work.titleAccent}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Full Stack Card */}
                    <div className="bento-card md:col-span-2 lg:row-span-2 flex flex-col justify-between group h-[660px] md:h-auto">
                        <div>
                            <h3 className="text-3xl font-bold text-primary mb-4">{t.work.saas.title}</h3>
                            <p className="text-charcoal text-base leading-relaxed max-w-sm">{t.work.saas.description}</p>
                        </div>
                        <div className="mt-8 relative h-72 bg-surface-light border border-border-subtle rounded-t-[2rem] overflow-hidden shadow-inner transition-transform group-hover:scale-[1.03]">
                            <div className="h-8 bg-slate-200/50 flex items-center px-4 gap-2">
                                <div className="w-2 h-2 rounded-full bg-slate-400/50"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-400/50"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-400/50"></div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-lg bg-accent/20"></div>
                                    </div>
                                    <div className="h-4 w-40 bg-slate-200 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="h-20 bg-white border border-border-subtle rounded-2xl shadow-sm"></div>
                                    <div className="h-20 bg-white border border-border-subtle rounded-2xl shadow-sm"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2.5 w-full bg-slate-200 rounded-full"></div>
                                    <div className="h-2.5 w-3/4 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Integrated Workflow Card */}
                    <div className="bento-card lg:p-10 md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between group h-full">
                        <div>
                            <div className="flex justify-between items-start mb-10">
                                <h3 className="text-3xl font-bold text-primary leading-tight">{t.work.aiWeights.title}</h3>
                                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-accent/10 shrink-0">
                                    <span className="material-symbols-outlined !text-3xl">psychology</span>
                                </div>
                            </div>

                            <div className="min-h-[120px] mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-accent font-mono text-[10px] font-bold uppercase tracking-[0.2em]">Step 0{currentStep + 1}</span>
                                    <div className="h-[1px] flex-1 bg-slate-100"></div>
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3 transition-opacity duration-300">
                                    {workflowSteps[currentStep].title}
                                </h4>
                                <p className="text-charcoal text-[13px] leading-relaxed transition-opacity duration-300">
                                    {workflowSteps[currentStep].description}
                                </p>
                            </div>

                            {/* Dynamic Code Preview Section */}
                            <div className="bg-slate-900 rounded-[1.5rem] p-6 mb-10 relative overflow-hidden group/code shadow-xl h-44 flex flex-col">
                                <div className="flex items-center gap-2 mb-4 opacity-40">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                                </div>
                                <pre className="font-mono text-[10px] text-slate-300 leading-relaxed whitespace-pre-wrap">
                                    {codePreviews[currentStep]}
                                </pre>
                            </div>
                        </div>

                        {/* Visual Step Stepper */}
                        <div className="flex items-center gap-4 mt-auto pt-2">
                            <div className="flex gap-3 w-full">
                                {[0, 1, 2].map((idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleStepManualSelect(idx)}
                                        className="flex-1 group/btn relative"
                                    >
                                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden mb-3">
                                            <div
                                                className={`h-full bg-accent ${progress === 0 ? '' : 'transition-all duration-[16ms] ease-linear'}`}
                                                style={{
                                                    width: currentStep === idx ? `${progress}%` : currentStep > idx ? '100%' : '0%'
                                                }}
                                            ></div>
                                        </div>
                                        <span className={`text-[9px] font-mono font-bold tracking-[0.2em] transition-colors ${currentStep === idx ? 'text-accent' : 'text-slate-400 group-hover/btn:text-primary'}`}>
                                            0{idx + 1}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Frontend Card */}
                    <div className="bento-card flex flex-col justify-between group">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-4">{t.work.frontend.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{t.work.frontend.description}</p>
                        </div>
                        <div className="relative flex items-end justify-center h-40 overflow-hidden">
                            <div className="w-24 h-24 border-2 border-accent rounded-2xl flex items-center justify-center translate-y-8 group-hover:translate-y-4 transition-transform duration-500 shadow-sm bg-white">
                                <div className="w-14 h-2 bg-accent/20 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* AI Automation Card */}
                    <div className="bento-card flex flex-col items-center justify-center text-center group overflow-hidden">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-surface-light border border-border-subtle flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-sm">
                            <span className="material-symbols-outlined text-accent !text-3xl">settings_suggest</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">AI Automation</h3>
                        <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">Scaling Efficiency</p>
                        <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000 grayscale">
                            <span className="material-symbols-outlined text-[120px]">precision_manufacturing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
