"use client";

import { useSearchParams } from "next/navigation";
import { presidentsData } from "@/data/presidents";
import { Share2, RefreshCw, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import PersonaResultCard from "@/components/ui/PersonaResultCard";

function ResultContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");
  
  const dna = searchParams.get("dna") || "MAWO";

  useEffect(() => {
    setUrl(window.location.href);
    if (dna) {
      localStorage.setItem("presitrack_dna", dna);
    }
  }, [dna]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  // Calculate match percentage for each president
  const presidentsWithMatch = presidentsData.map(p => {
    let matchCount = 0;
    const coreDNA = p.coreDNA || "";
    for (let i = 0; i < 4; i++) {
      if (dna[i] && coreDNA[i] && dna[i] === coreDNA[i]) matchCount++;
    }
    const matchPercent = coreDNA.length === 4 ? (matchCount / 4) * 100 : 0;
    return { ...p, matchPercent };
  }).sort((a, b) => b.matchPercent - a.matchPercent);

  // Get Top 3 and Bottom 1
  const topMatches = presidentsWithMatch.slice(0, 3);
  const bottomMatch = presidentsWithMatch[presidentsWithMatch.length - 1];

  const getGuideText = (percent: number) => {
    if (percent >= 75) return "당신의 가치관과 매우 높은 싱크로율을 보여줍니다. 이 시기의 굵직한 정책 결정들에 가장 깊이 공감하고 고개를 끄덕일 수 있을 것입니다.";
    if (percent === 50) return "어느 정도 결을 같이하지만, 사안에 따라 찬반이 엇갈릴 수 있습니다. 무조건적인 지지나 비판보다는 사안별로 냉정하게 평가할 수 있는 적당한 거리감입니다.";
    return "당신이 추구하는 방향과 거의 정반대의 궤적을 그렸습니다. 만약 당신이 당시 청와대 참모였다면, 대통령과 매번 치열하게 의견이 대립했을지도 모릅니다.";
  };
  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-6 animate-in slide-in-from-bottom-4 fade-in duration-500">
          분석 완료! 당신의 DNA는? 🎉
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          일상의 소소한 선택들이 모여 만들어진 당신만의 핵심 가치관입니다.
        </p>
      </div>

      <div className="flex justify-center mb-16 animate-in zoom-in-95 fade-in duration-700 delay-150">
        <PersonaResultCard dna={dna} />
      </div>

      <div className="max-w-2xl mx-auto mb-16 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-300">
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-sm p-6 text-center">
          <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            <span className="font-bold">안내 |</span> 어쩌면 당신이 평소에 지지하거나 비판하던 정치적 진영과, 
            실제 당신의 라이프스타일에 맞는 역대 정부는 다를 수 있습니다.<br className="hidden md:block" />
            선입견을 내려놓고 나와 가장 결이 맞는 정책의 궤적을 확인해보세요.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-8 text-center animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
          나와 가장 잘 맞는 역대 정부 Top 3
        </h2>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto mb-16 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
          {topMatches.map((p) => (
            <Link 
              key={p.id} 
              href={`/presidents/${p.id}`}
              className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-400 rounded-sm p-6 flex flex-col transition-transform hover:-translate-y-1 shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-slate-900 dark:text-white">{p.name} 정부</span>
                  <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-sm font-mono">{p.term}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-900 dark:bg-slate-300"
                      style={{ width: `${p.matchPercent}%` }}
                    />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{p.matchPercent}%</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-4 mt-2">
                {getGuideText(p.matchPercent)}
              </p>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-8 text-center mt-20 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-700">
          나와 가장 맞지 않는 정부
        </h2>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto animate-in slide-in-from-bottom-4 fade-in duration-700 delay-700">
          <Link 
            href={`/presidents/${bottomMatch.id}`}
            className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 rounded-sm p-6 flex flex-col transition-transform hover:-translate-y-1 shadow-sm opacity-80 hover:opacity-100"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-slate-900 dark:text-white">{bottomMatch.name} 정부</span>
                <span className="text-xs text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-sm font-mono">{bottomMatch.term}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-400 dark:bg-slate-600"
                    style={{ width: `${bottomMatch.matchPercent}%` }}
                  />
                </div>
                <span className="font-bold text-slate-500 dark:text-slate-400 text-sm">{bottomMatch.matchPercent}%</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800/50 pt-4 mt-2">
              {getGuideText(bottomMatch.matchPercent)}
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button 
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-none"
        >
          {copied ? <CheckCircle2 className="w-5 h-5 text-white dark:text-slate-900" /> : <Share2 className="w-5 h-5 text-slate-300 dark:text-slate-700" />}
          {copied ? "링크 복사 완료" : "결과 공유하기"}
        </button>
        <Link 
          href="/test"
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-none"
        >
          <RefreshCw className="w-5 h-5" />
          테스트 다시하기
        </Link>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 text-slate-900 dark:text-slate-100">
      <header className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-sm flex items-center justify-center text-white dark:text-slate-900 font-sans text-sm shadow-none transition-transform">PT</div>
          PresiTrack
        </Link>
      </header>
      
      <section className="flex-1 p-6 md:p-12">
        <Suspense fallback={<div className="text-center text-slate-500 py-20 font-bold">나의 DNA 분석 중...</div>}>
          <ResultContent />
        </Suspense>
      </section>
    </main>
  );
}
