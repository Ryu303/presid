"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/data/quizQuestions";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Scores = {
  M: number; G: number;
  A: number; B: number;
  W: number; R: number;
  O: number; D: number;
};

type HistoryEntry = {
  trait: keyof Scores;
  points: number;
};

export default function TestPage() {
  const router = useRouter();
  const [testMode, setTestMode] = useState<'simple' | 'full' | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  const [scores, setScores] = useState<Scores>({
    M: 0, G: 0,
    A: 0, B: 0,
    W: 0, R: 0,
    O: 0, D: 0
  });

  const [history, setHistory] = useState<HistoryEntry[]>([]);

  // 간단 검사: 각 축별 첫 6문항 (id가 qX_1 ~ qX_6 인 것들만 필터링)
  const activeQuestions = testMode === 'simple' 
    ? quizQuestions.filter(q => parseInt(q.id.split('_')[1]) <= 6) 
    : quizQuestions;

  const question = activeQuestions[currentStep];

  const handleSelectMode = (mode: 'simple' | 'full') => {
    setTestMode(mode);
    setCurrentStep(0);
    setScores({ M: 0, G: 0, A: 0, B: 0, W: 0, R: 0, O: 0, D: 0 });
    setHistory([]);
  };

  const handleSelect = (scale: number) => {
    let trait: keyof Scores = question.leanYes as keyof Scores;
    let points = 0;

    if (scale === 5) { trait = question.leanYes as keyof Scores; points = 2; }
    else if (scale === 4) { trait = question.leanYes as keyof Scores; points = 1; }
    else if (scale === 3) { trait = question.leanYes as keyof Scores; points = 0; }
    else if (scale === 2) { trait = question.leanNo as keyof Scores; points = 1; }
    else if (scale === 1) { trait = question.leanNo as keyof Scores; points = 2; }

    const newScores = { ...scores, [trait]: scores[trait] + points };
    setScores(newScores);
    setHistory([...history, { trait, points }]);

    if (currentStep < activeQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const dna1 = newScores.M >= newScores.G ? "M" : "G";
      const dna2 = newScores.A >= newScores.B ? "A" : "B";
      const dna3 = newScores.W >= newScores.R ? "W" : "R";
      const dna4 = newScores.O >= newScores.D ? "O" : "D";
      const finalDNA = `${dna1}${dna2}${dna3}${dna4}`;
      // 퀴즈를 직접 끝까지 푼 경우에만 기기에 저장
      localStorage.setItem("presitrack_dna", finalDNA);
      window.dispatchEvent(new Event("dna_updated"));
      
      router.push(`/test/result?dna=${finalDNA}`);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 0) {
      const lastAction = history[history.length - 1];
      if (lastAction) {
        setScores({ ...scores, [lastAction.trait]: scores[lastAction.trait] - lastAction.points });
        setHistory(history.slice(0, -1));
      }
      setCurrentStep(currentStep - 1);
    }
  };

  if (testMode === null) {
    // ... (keep test mode UI unchanged)
    return (
      <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 items-center justify-center p-6">
        <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Link href="/" className="inline-flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            홈으로 돌아가기
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-serif font-black mb-4 tracking-tight">검사 유형 선택</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">현재 본인의 상황에 맞는 테스트 버전을 선택해 주세요.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
              onClick={() => handleSelectMode('simple')}
              className="text-left bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 p-8 rounded-sm hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">간단 검사</h3>
                <span className="text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1 rounded-full">약 3분 소요</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-bold mb-4">핵심 24문항</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                바쁘신 분들을 위해 4가지 핵심 가치관을 빠르게 진단합니다. 직관적인 질문들로 내 정치 성향의 큰 그림을 확인해 보세요.
              </p>
            </button>
            
            <button 
              onClick={() => handleSelectMode('full')}
              className="text-left bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 p-8 rounded-sm hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-bl-full -z-10 transition-transform group-hover:scale-150" />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">정밀 검사</h3>
                <span className="text-xs font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 px-3 py-1 rounded-full">약 7분 소요</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-bold mb-4">심층 48문항 (추천)</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                다양한 딜레마 상황과 정책 이슈를 통해 내면의 숨겨진 가치관까지 더욱 세밀하고 정확하게 분석합니다.
              </p>
            </button>
          </div>
        </div>
      </main>
    );
  }

  const likertOptions = [
    { value: 5, label: "매우 그렇다", colorClass: "hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400" },
    { value: 4, label: "그렇다", colorClass: "hover:border-teal-400 hover:bg-teal-50/40 dark:hover:bg-teal-900/10 hover:text-teal-600 dark:hover:text-teal-300" },
    { value: 3, label: "보통이다", colorClass: "hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300" },
    { value: 2, label: "아니다", colorClass: "hover:border-rose-400 hover:bg-rose-50/40 dark:hover:bg-rose-900/10 hover:text-rose-600 dark:hover:text-rose-300" },
    { value: 1, label: "매우 아니다", colorClass: "hover:border-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-700 dark:hover:text-rose-400" }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <div className="w-full flex justify-end p-4 md:px-8 absolute top-0 right-0 z-10">
        <div className="text-slate-600 dark:text-slate-400 font-bold text-xs border border-slate-300 dark:border-slate-700 px-4 py-1.5 rounded-full tracking-widest bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm shadow-sm">
          {currentStep + 1} / {activeQuestions.length}
        </div>
      </div>
      
      <section className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 relative">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-200/50 dark:bg-slate-800/30 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="w-full max-w-2xl relative z-10">
          {currentStep > 0 && (
            <button onClick={handleGoBack} className="flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-4 md:mb-6 px-2">
              <ArrowLeft className="w-4 h-4" />
              이전 문항
            </button>
          )}
          
          <div className="w-full bg-slate-200/50 dark:bg-slate-800/50 h-1.5 rounded-full mb-8 md:mb-10 overflow-hidden shadow-inner">
            <div 
              className="bg-slate-900 dark:bg-slate-300 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep) / activeQuestions.length) * 100}%` }}
            ></div>
          </div>

          <div className="bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-200/80 dark:border-slate-700/80 shadow-xl relative animate-in slide-in-from-bottom-4 fade-in duration-500" key={currentStep}>
            
            {/* Watermark Quote Icon */}
            <div className="absolute top-8 left-8 text-8xl text-slate-100 dark:text-slate-800/50 font-serif leading-none select-none pointer-events-none -z-10">
              &ldquo;
            </div>

            <div className="mb-6 flex justify-center">
              <span className="text-slate-400 dark:text-slate-500 font-bold text-xs tracking-[0.2em] uppercase border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800/50">
                Statement {currentStep + 1}
              </span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mb-10 md:mb-12 leading-[1.8] tracking-tight text-center break-keep text-balance relative z-10 px-4 md:px-8">
              {question.question}
            </h2>
            
            <div className="flex flex-col gap-3 max-w-lg mx-auto">
              {likertOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-center px-6 py-4 bg-white dark:bg-[#222] border-2 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] ${opt.colorClass}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
