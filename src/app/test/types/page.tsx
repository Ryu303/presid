"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAllDnas } from '@/utils/personaLogic';
import PersonaResultCard from '@/components/ui/PersonaResultCard';
import { ArrowLeft, Dna, CheckCircle2 } from 'lucide-react';

export default function AllTypesPage() {
  const dnas = getAllDnas();
  const router = useRouter();

  const handleSetPersona = (dna: string) => {
    localStorage.setItem("presitrack_dna", dna);
    window.dispatchEvent(new Event("dna_updated"));
    router.push(`/test/result?dna=${dna}`);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">

      
      <section className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 fade-in duration-500">
          <Link href="/test" className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            테스트로 돌아가기
          </Link>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-3">
            16가지 PPTI 유형 <Dna className="w-8 h-8 md:w-10 md:h-10 text-indigo-600 dark:text-indigo-400" />
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            당신의 가치관과 꼭 닮은 성향은 무엇일까요? 서로 다른 16개의 유니크한 PPTI 캐릭터들을 모두 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {dnas.map((dna, i) => (
            <div 
              key={dna} 
              className="flex flex-col items-center gap-4 animate-in zoom-in-95 fade-in duration-700"
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
            >
              <PersonaResultCard dna={dna as any} variant="compact" />
              <button 
                onClick={() => handleSetPersona(dna)}
                className="w-full max-w-[320px] flex items-center justify-center gap-2 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                내 성향으로 적용하기
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
