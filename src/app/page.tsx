"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, History, RotateCcw, Check, X } from "lucide-react";
import PersonaResultCard from "@/components/ui/PersonaResultCard";
import DnaIndicator from "@/components/quiz/DnaIndicator";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [dna, setDna] = useState<string | null>(null);
  const [teaserAnswered, setTeaserAnswered] = useState<boolean>(false);
  const [teaserChoice, setTeaserChoice] = useState<'agree' | 'disagree' | null>(null);

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

  const handleTeaserAnswer = (choice: 'agree' | 'disagree') => {
    setTeaserChoice(choice);
    setTeaserAnswered(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#111111] font-sans transition-colors duration-300 text-[#18181B] dark:text-[#F4F4F5] selection:bg-[#000000] selection:text-white dark:selection:bg-white dark:selection:text-[#000000]">

      <section className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* 모던 에디토리얼 감성을 위한 장식 선 */}
        <div className="absolute top-0 left-0 w-full border-t border-[#E4E4E7] dark:border-[#27272A]" />
        <div className="absolute bottom-0 left-0 w-full border-b border-[#E4E4E7] dark:border-[#27272A]" />
        
        {/* Hero Section */}
        <div className="text-center mb-16 relative z-10 animate-in slide-in-from-bottom-4 fade-in duration-700">
          <span className="inline-block mb-4 text-xs font-bold tracking-widest text-[#71717A] dark:text-[#A1A1AA] uppercase border-b border-[#E4E4E7] dark:border-[#3F3F46] pb-1">
            PresiTrack : Data-driven Archive
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#18181B] dark:text-[#F4F4F5] mb-6 tracking-tighter leading-tight break-keep">
            정책을 감정 없이,<br className="md:hidden" /> 데이터로 판단하다.
          </h1>
          <p className="text-[#71717A] dark:text-[#A1A1AA] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light break-keep">
            편견을 지우고, 감정을 배제하십시오.<br />
            오직 역사적 팩트와 데이터에 기반한 블라인드 정책 테스트로<br className="hidden md:block" /> 당신의 숨겨진 가치관(PPTI)을 확인하세요.
          </p>
        </div>

        {/* 메인 티저 UI 노출 */}
        <div className="w-full max-w-xl mb-16 relative z-10 animate-in zoom-in-95 fade-in duration-700 delay-150">
            {!teaserAnswered ? (
              <div className="bg-white dark:bg-[#1A1A1A] border border-[#E4E4E7] dark:border-[#27272A] p-8 md:p-10 rounded-sm shadow-sm">
                <div className="flex items-center justify-between mb-6 border-b border-[#E4E4E7] dark:border-[#27272A] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-[#F4F4F5] dark:bg-[#27272A] text-[#71717A] dark:text-[#D4D4D8] text-xs font-bold tracking-widest rounded-sm">
                      QUESTION 01
                    </span>
                    <span className="text-sm text-[#A1A1AA] font-serif italic hidden sm:inline-block">Blind Test Preview</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-sm tracking-tighter">
                    ✓ 1993 금융실명제 데이터 기반
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#18181B] dark:text-[#F4F4F5] mb-10 leading-relaxed break-keep">
                  "모임 회비를 걷을 때, 투명한 관리를 위해 반드시 '본인 실명' 통장으로만 입금하게 해야 한다."
                </h3>
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleTeaserAnswer('agree')}
                    className="flex-1 py-4 border border-[#E4E4E7] dark:border-[#3F3F46] hover:border-[#18181B] dark:hover:border-[#F4F4F5] text-[#18181B] dark:text-[#F4F4F5] hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] transition-all font-medium flex justify-center items-center gap-2 rounded-sm"
                  >
                    <Check className="w-4 h-4" /> 찬성
                  </button>
                  <button 
                    onClick={() => handleTeaserAnswer('disagree')}
                    className="flex-1 py-4 border border-[#E4E4E7] dark:border-[#3F3F46] hover:border-[#18181B] dark:hover:border-[#F4F4F5] text-[#18181B] dark:text-[#F4F4F5] hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] transition-all font-medium flex justify-center items-center gap-2 rounded-sm"
                  >
                    <X className="w-4 h-4" /> 반대
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#18181B] dark:bg-[#F4F4F5] text-[#F4F4F5] dark:text-[#18181B] p-8 md:p-10 rounded-sm shadow-lg text-center animate-in flip-in-y duration-700">
                <p className="font-serif italic text-[#A1A1AA] dark:text-[#71717A] mb-4">
                  당신이 {teaserChoice === 'agree' ? '찬성' : '반대'}한 이 정책은...
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 break-keep">
                  제14대 김영삼 대통령의<br className="hidden md:block" /> 금융실명제입니다.
                </h3>
                <p className="text-[#D4D4D8] dark:text-[#52525B] mb-8 font-light break-keep">
                  이름표를 떼면, 당신의 진짜 정치 성향이 드러납니다.<br />
                  편견 없는 당신의 진짜 성향을 더 알아보시겠습니까?
                </p>
                <Link 
                  href="/test" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFFFFF] dark:bg-[#000000] text-[#000000] dark:text-[#FFFFFF] font-bold rounded-sm text-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors w-full md:w-auto shadow-md"
                >
                  블라인드 테스트 시작하기 <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </div>

        {/* 하단 네비게이션 CTA (보조 CTA) */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl justify-center items-center relative z-10 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
          <Link 
            href="/timeline" 
            className="group flex items-center justify-center gap-2 px-6 py-3 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F4F4F5] transition-colors"
          >
            <History className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
            <span className="border-b border-transparent group-hover:border-current pb-0.5 font-medium">타임라인 탐색하기</span>
          </Link>
          
          {dna && (
            <Link 
              href={`/test/result?dna=${dna}`} 
              className="group flex items-center justify-center gap-2 px-6 py-3 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F4F4F5] transition-colors"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span className="border-b border-transparent group-hover:border-current pb-0.5 font-medium">내 결과 자세히 보기</span>
            </Link>
          )}
        </div>
        
        {dna && (
          <div className="mt-12 relative z-10 animate-in fade-in duration-700 delay-500">
            <button 
              onClick={() => {
                localStorage.removeItem("presitrack_dna");
                setDna(null);
                setTeaserAnswered(false);
                setTeaserChoice(null);
              }} 
              className="text-xs font-medium text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F4F4F5] flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              결과 초기화 및 다시 시작
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
