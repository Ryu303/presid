"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TestPage from "./test/page";
import { ArrowRight, History, RotateCcw } from "lucide-react";
import PersonaResultCard from "@/components/ui/PersonaResultCard";
import DnaIndicator from "@/components/quiz/DnaIndicator";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [dna, setDna] = useState<string | null>(null);

  useEffect(() => {
    const savedDna = localStorage.getItem("presitrack_dna");
    if (savedDna) setDna(savedDna);
    setMounted(true);
  }, []);

  if (!mounted) return null; // hydration 에러 방지

  const getPseudoScores = (dnaStr: string) => {
    const isM = dnaStr[0] === 'M';
    const isA = dnaStr[1] === 'A';
    const isW = dnaStr[2] === 'W';
    const isO = dnaStr[3] === 'O';
    
    return [
      { axisId: 'axis1', leftScore: isM ? 75 : 25, rightScore: isM ? 25 : 75 },
      { axisId: 'axis2', leftScore: isA ? 60 : 40, rightScore: isA ? 40 : 60 },
      { axisId: 'axis3', leftScore: isW ? 80 : 20, rightScore: isW ? 20 : 80 },
      { axisId: 'axis4', leftScore: isO ? 55 : 45, rightScore: isO ? 45 : 55 },
    ];
  };

  // 이미 DNA가 등록된 경우의 메인(홈) 화면
  return (
    <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 text-slate-900 dark:text-slate-100">


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

        {dna ? (
          <div className="mb-12 relative z-10 animate-in zoom-in-95 fade-in duration-700 delay-150">
            <div className="text-center mb-4">
              <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                나의 PPTI
              </span>
            </div>
            <PersonaResultCard dna={dna} />
            <div className="mt-8">
              <DnaIndicator scores={getPseudoScores(dna)} />
            </div>
          </div>
        ) : (
          <div className="mb-12 relative z-10 animate-in zoom-in-95 fade-in duration-700 delay-150 flex flex-col items-center">
            <div className="text-center mb-8">
              <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
                당신의 정치 성향은 무엇일까요?
              </span>
            </div>
            <Link href="/test" className="px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-sm text-lg shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
              PPTI 성향 테스트 시작하기
            </Link>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl justify-center relative z-10 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
          <Link href="/timeline" className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 dark:bg-[#1C1C1C] text-slate-900 dark:text-white font-bold rounded-sm hover:scale-[1.02] transition-transform shadow-sm">
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
