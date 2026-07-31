"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TestPage from "./test/page";
import { ArrowRight, History, RotateCcw } from "lucide-react";
import PersonaResultCard from "@/components/ui/PersonaResultCard";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [dna, setDna] = useState<string | null>(null);

  useEffect(() => {
    const savedDna = localStorage.getItem("presitrack_dna");
    if (savedDna) setDna(savedDna);
    setMounted(true);
  }, []);

  if (!mounted) return null; // hydration 에러 방지

  // 등록된 DNA가 없으면 최초 1회 퀴즈(TestPage) 화면을 렌더링
  if (!dna) {
    return <TestPage />;
  }

  // 이미 DNA가 등록된 경우의 메인(홈) 화면
  return (
    <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 text-slate-900 dark:text-slate-100">
      <header className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-sm flex items-center justify-center text-white dark:text-slate-900 font-sans text-sm shadow-none transition-transform">PT</div>
          PresiTrack
        </Link>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* 아름다운 배경 글로우 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-12 relative z-10 animate-in slide-in-from-bottom-4 fade-in duration-700">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            대한민국 정치 아카이브
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            환영합니다! 역대 대통령의 정책과 발자취를 당신의 가치관과 비교하며 탐색해보세요.
          </p>
        </div>

        <div className="mb-12 relative z-10 animate-in zoom-in-95 fade-in duration-700 delay-150">
          <div className="text-center mb-4">
            <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
              나의 정치 DNA
            </span>
          </div>
          <PersonaResultCard dna={dna} />
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl justify-center relative z-10 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
          <Link href="/timeline" className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-sm hover:scale-[1.02] transition-transform shadow-lg">
            <History className="w-5 h-5" />
            타임라인 탐색하기
          </Link>
          <Link href={`/test/result?dna=${dna}`} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-sm hover:scale-[1.02] transition-transform shadow-sm">
            <ArrowRight className="w-5 h-5" />
            내 결과 자세히 보기
          </Link>
        </div>
        
        <div className="mt-12 relative z-10 animate-in fade-in duration-700 delay-500">
          <button 
            onClick={() => {
              localStorage.removeItem("presitrack_dna");
              setDna(null);
            }} 
            className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 transition-colors border-b border-transparent hover:border-current pb-0.5"
          >
            <RotateCcw className="w-4 h-4" />
            결과 초기화 및 다시 테스트하기
          </button>
        </div>
      </section>
    </main>
  );
}
