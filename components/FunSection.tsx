"use client";

import { useState } from "react";

interface StatusOption {
  icon: string;
  name: { en: string; hi: string; es: string; fr: string; ja: string };
  desc: { en: string; hi: string; es: string; fr: string; ja: string };
  color: string; // Tailwind text/border/bg color classes
  glow: string;  // Glow shadow color
  bgGlow: string; // Backdrop radial gradient color
}

export default function FunSection({ currentLang }: { currentLang: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const statuses: StatusOption[] = [
    {
      icon: "🟢",
      name: {
        en: "Available for SDE Roles",
        hi: "एसडीई भूमिकाओं के लिए उपलब्ध",
        es: "Disponible para Roles SDE",
        fr: "Disponible pour Rôles SDE",
        ja: "開発案件・フルスタック募集中"
      },
      desc: {
        en: "Actively looking for remote full-stack or backend SDE positions in product teams. Let's design something epic!",
        hi: "उत्पाद टीमों में रिमोट फुल-स्टैक या बैकएंड एसडीई पदों की तलाश में। आइए कुछ शानदार डिज़ाइन करें!",
        es: "Buscando activamente puestos remotos de desarrollo de software en equipos de producto. ¡Construyamos algo épico!",
        fr: "Recherche active de postes de SDE full-stack ou backend à distance. Construisons quelque chose d'épique !",
        ja: "プロダクト指向のチームで、フルスタックまたはバックエンドのリモート開発ポジションを募集中。最高のものを作りましょう！"
      },
      color: "text-emerald-400 border-emerald-500/25 bg-emerald-500/5",
      glow: "bg-emerald-400",
      bgGlow: "from-emerald-500/10 to-transparent"
    },
    {
      icon: "☕",
      name: {
        en: "Out for Kolkata Chai",
        hi: "कोलकाता की चाय पर",
        es: "Fuera por un Chai",
        fr: "En Pause Thé à Calcutta",
        ja: "コルカタの路地裏でチャイ休憩中"
      },
      desc: {
        en: "Chai Break: Explaining WebSocket bidding features to regional bus operators in local slang. Back in 15 mins!",
        hi: "चाय ब्रेक: स्थानीय बंगाली लहजे में क्षेत्रीय बस ऑपरेटरों को वेबसॉकेट बीडिंग मापदंडों के बारे में समझा रहा हूँ।",
        es: "Descanso para tomar Chai: Explicando ofertas WebSocket a operadores de autobuses regionales. ¡Vuelvo en 15 minutos!",
        fr: "Pause Thé : En train d'expliquer les enchères WebSocket aux autocaristes régionaux. De retour dans 15 minutes !",
        ja: "ローカルなベンガル語の表現を交えつつ、長距離バス会社のおじさん達にWebSocket入札の説明をしています。15分で戻ります！"
      },
      color: "text-amber-400 border-amber-500/25 bg-amber-500/5",
      glow: "bg-amber-400",
      bgGlow: "from-amber-500/10 to-transparent"
    },
    {
      icon: "🤖",
      name: {
        en: "Tuning Vector Databases",
        hi: "वेक्टर डेटाबेस ट्यूनिंग",
        es: "Ajustando Bases Vectoriales",
        fr: "Optimisation de l'IA",
        ja: "ベクトル類似度データベース調整中"
      },
      desc: {
        en: "Deep in AI prompt engineering. Successfully convinced the LLM to output clean JSON schemas instead of markdown prose.",
        hi: "एआई संकेत इंजीनियरिंग में व्यस्त। एआई मॉडल को मार्कडाउन गद्य ब्लॉक के बजाय साफ-सुथरी जेएसओएन सूची आउटपुट करने के लिए राजी कर लिया।",
        es: "Profundizando en ingeniería de prompts. Logré convencer al LLM de devolver esquemas JSON limpios en lugar de prosa markdown.",
        fr: "Optimisation des invites IA. J'ai réussi à convaincre l'IA de renvoyer du JSON propre plutôt que du texte markdown.",
        ja: "AIのプロンプトエンジニアリング中。マークダウン記法を使わずに、綺麗なJSONスキーマのみを出力するようLLMを調教することに成功。"
      },
      color: "text-purple-400 border-purple-500/25 bg-purple-500/5",
      glow: "bg-purple-400",
      bgGlow: "from-purple-500/10 to-transparent"
    },
    {
      icon: "🔴",
      name: {
        en: "Do Not Disturb (Code Mode)",
        hi: "परेशान न करें (कोडिंग मोड)",
        es: "No Molestar (Modo Código)",
        fr: "Ne Pas Déranger (Mode Code)",
        ja: "深夜のデバッグ（返信不可）"
      },
      desc: {
        en: "Strict TypeScript compiler is active. Debugging WebSocket auction concurrency bugs and Redis server timeouts.",
        hi: "सख्त टाइपस्क्रिप्ट संकलक सक्रिय है। वेबसॉकेट नीलामी समवर्ती बग और रेडिस सर्वर टाइमआउट को डीबग कर रहा हूँ।",
        es: "Compilador estricto de TypeScript activo. Depurando errores de concurrencia WebSocket y tiempos de espera en servidores Redis.",
        fr: "Mode TypeScript strict activé. Résolution d'erreurs de concurrence sur les enchères WebSocket et de déconnexions Redis.",
        ja: "TypeScriptの厳格モードで開発中。WebSocketの同時接続エラーとUpstash Redisの接続タイムアウトの原因を猛烈に追跡中。"
      },
      color: "text-rose-400 border-rose-500/25 bg-rose-500/5",
      glow: "bg-rose-400",
      bgGlow: "from-rose-500/10 to-transparent"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % statuses.length);
  };

  const currentLangCode = (currentLang || "en") as "en" | "hi" | "es" | "fr" | "ja";
  const activeStatus = statuses[activeIndex];
  const name = activeStatus.name[currentLangCode] || activeStatus.name.en;
  const desc = activeStatus.desc[currentLangCode] || activeStatus.desc.en;

  const btnText = {
    en: "Cycle Mode",
    hi: "मोड बदलें",
    es: "Cambiar Modo",
    fr: "Changer Mode",
    ja: "状態を切り替える"
  }[currentLangCode] || "Cycle Mode";

  const labelText = {
    en: "Telemetry Status Indicator",
    hi: "टेलीमेट्री स्थिति संकेतक",
    es: "Indicador de Telemetría",
    fr: "Indicateur de Télémétrie",
    ja: "稼働ステータスインジケーター"
  }[currentLangCode] || "Telemetry Status Indicator";

  return (
    <div className="p-4 rounded-xl bg-white/[0.015] border border-white/5 relative overflow-hidden transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-[680px] mx-auto group">
      
      {/* Dynamic colored background halo */}
      <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-28 h-28 bg-gradient-to-br ${activeStatus.bgGlow} blur-2xl rounded-full pointer-events-none transition-all duration-500`}></div>

      {/* Left Column: Visual Icon & Info */}
      <div className="flex items-start sm:items-center gap-3.5 relative z-10">
        
        {/* Pulsing Glowing Circle */}
        <div className="relative w-11 h-11 rounded-lg bg-white/[0.005] border border-white/5 flex items-center justify-center text-lg select-none shrink-0 shadow-inner group-hover:border-white/10 transition-all duration-300">
          {activeStatus.icon}
          {/* Pulsing indicator */}
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${activeStatus.glow} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${activeStatus.glow}`}></span>
          </span>
        </div>

        {/* Text descriptions */}
        <div className="space-y-0.5 max-w-[400px]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#808ca3] uppercase tracking-wider">
              {labelText}
            </span>
          </div>
          
          <h4 className="text-[13.5px] font-medium text-[#e8eaf0] transition-colors duration-300">
            {name}
          </h4>

          <p className="text-[12.5px] text-[#8892a4] font-light leading-[1.6] transition-all duration-300">
            "{desc}"
          </p>
        </div>
      </div>

      {/* Right Column: Interaction Button */}
      <button
        onClick={handleNext}
        className={`px-3.5 py-2 rounded-lg border font-mono text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-95 shrink-0 shadow-md ${activeStatus.color}`}
      >
        🔄 {btnText}
      </button>

    </div>
  );
}
