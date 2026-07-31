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
  const [currentStep, setCurrentStep] = useState(0);
  
  const [scores, setScores] = useState<Scores>({
    M: 0, G: 0,
    A: 0, B: 0,
    W: 0, R: 0,
    O: 0, D: 0
  });

  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const question = quizQuestions[currentStep];

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

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const dna1 = newScores.M >= newScores.G ? "M" : "G";
      const dna2 = newScores.A >= newScores.B ? "A" : "B";
      const dna3 = newScores.W >= newScores.R ? "W" : "R";
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

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <header className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-xl font-extrabold tracking-tight flex items-center gap-2 text-slate-900 dark:text-white">
          <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-sm flex items-center justify-center text-white dark:text-slate-900 font-sans text-sm shadow-none transition-transform">PT</div>
          PresiTrack
        </Link>
        <div className="text-slate-600 dark:text-slate-400 font-bold text-xs border border-slate-300 dark:border-slate-700 px-4 py-1.5 rounded-sm tracking-widest">
          {currentStep + 1} / {quizQuestions.length}
        </div>
      </header>
      
      <section className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          {currentStep > 0 && (
            <button onClick={handleGoBack} className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              이전 문항
            </button>
          )}
          
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-none mb-12 overflow-hidden">
            <div 
              className="bg-slate-900 dark:bg-slate-300 h-full transition-all duration-300 ease-out"
              style={{ width: `${((currentStep) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>

          <div className="bg-white dark:bg-[#1C1C1C] rounded-sm p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm relative animate-in slide-in-from-bottom-2 fade-in duration-300" key={currentStep}>
            <div className="mb-8">
              <span className="text-slate-500 dark:text-slate-400 font-bold text-xs tracking-widest uppercase border-b border-slate-300 dark:border-slate-700 pb-1">
                Statement {currentStep + 1}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-12 leading-relaxed">
              &quot;{question.question}&quot;
            </h2>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleSelect(5)}
                className="w-full text-center px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all font-bold text-slate-800 dark:text-slate-200 rounded-sm"
              >
                매우 그렇다
              </button>
              <button
                onClick={() => handleSelect(4)}
                className="w-full text-center px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all font-bold text-slate-800 dark:text-slate-200 rounded-sm"
              >
                그렇다
              </button>
              <button
                onClick={() => handleSelect(3)}
                className="w-full text-center px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all font-bold text-slate-800 dark:text-slate-200 rounded-sm"
              >
                보통이다
              </button>
              <button
                onClick={() => handleSelect(2)}
                className="w-full text-center px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all font-bold text-slate-800 dark:text-slate-200 rounded-sm"
              >
                아니다
              </button>
              <button
                onClick={() => handleSelect(1)}
                className="w-full text-center px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all font-bold text-slate-800 dark:text-slate-200 rounded-sm"
              >
                매우 아니다
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
