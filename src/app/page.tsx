"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Library, ShieldCheck, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MacroChart from "@/components/timeline/MacroChart";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-transparent text-slate-900 dark:text-slate-200 flex flex-col font-sans transition-colors duration-300">


      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 uppercase tracking-widest text-slate-800 dark:text-slate-300 font-bold text-xs mb-8 rounded-sm">
          <ShieldCheck className="w-4 h-4" />
          가장 객관적인 정책 아카이브
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight tracking-tight max-w-4xl text-slate-900 dark:text-slate-50">
          감정이 아닌 <span className="italic">데이터와 역사적 팩트</span>로 <br className="hidden md:block"/>역대 정책을 직접 판단하세요
        </h1>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-12 leading-relaxed">
          PresiTrack은 특정 진영의 프레임에서 벗어나, 입법 팩트와 국제기구의 교차 검증을 통해 역대 대한민국 정부의 핵심 정책을 기록합니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <Link 
            href="/test"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-slate-200 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 rounded-sm font-bold transition-all shadow-none"
          >
            <Search className="w-5 h-5" />
            나의 정책 DNA 테스트 시작하기
          </Link>
          <Link 
            href="/timeline"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-sm font-bold transition-all"
          >
            <Library className="w-5 h-5" />
            역대 대통령 정책 둘러보기
          </Link>
        </div>
      </section>

      <MacroChart />

      <section className="px-6 py-24 bg-slate-50 dark:bg-[#1C1C1C]/30 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800/50 p-10 rounded-sm border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-sm flex items-center justify-center mb-6">
              <Library className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">한눈에 보는 아카이브</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              복잡한 정책의 역사를 이해하기 쉽게 정리했어요. 과거의 결정들이 지금 우리 일상에 어떤 영향을 주었는지 가볍게 살펴볼 수 있습니다.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800/50 p-10 rounded-sm border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-sm flex items-center justify-center mb-6">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">편견 없는 블라인드 테스트</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              정당이나 인물에 대한 선입견 없이, 순수하게 나의 라이프스타일과 가치관에 맞는 정책 성향을 재미있게 알아보세요.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/50 p-10 rounded-sm border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-sm flex items-center justify-center mb-6">
              <BarChart2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">데이터 기반의 담백한 기록</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              감정적인 평가는 배제하고, 여러 국제기구와 공신력 있는 데이터를 통해 있는 그대로의 담백한 팩트만 전달합니다.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 dark:text-slate-600 text-sm border-t border-slate-200 dark:border-slate-800">
        <p>© 2026 PresiTrack. Discover your policy DNA.</p>
      </footer>
    </main>
  );
}
