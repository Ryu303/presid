"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { presidentsData } from '@/data/presidents';
import { ChevronDown, Beaker, CheckCircle } from 'lucide-react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [userDNA, setUserDNA] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const updateDNA = () => setUserDNA(localStorage.getItem("presitrack_dna"));
    updateDNA();
    window.addEventListener("dna_updated", updateDNA);
    return () => window.removeEventListener("dna_updated", updateDNA);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-300 dark:border-slate-700 bg-[#FDFCF8]/90 dark:bg-[#121212]/90 backdrop-blur-md font-sans">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4 md:gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/ppti_logo.png" alt="PPTI Logo" className="w-8 h-8 rounded-sm object-cover" />
          <span className="text-xl font-extrabold tracking-tight">PPTI</span>
        </Link>

        {/* Fixed boundary line (Left) */}
        <div className="w-[1px] h-5 bg-slate-300 dark:bg-slate-700 shrink-0" />

        {/* GNB Desktop & Mobile */}
        <nav className="flex-1 min-w-0 flex items-center gap-4 md:gap-6 h-full overflow-x-auto flex-nowrap pb-2 pt-1" 
             style={{ 
               maskImage: 'linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent), linear-gradient(black, black)', 
               WebkitMaskImage: 'linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent), linear-gradient(black, black)',
               maskSize: '100% calc(100% - 20px), 100% 20px',
               WebkitMaskSize: '100% calc(100% - 20px), 100% 20px',
               maskPosition: 'top left, bottom left',
               WebkitMaskPosition: 'top left, bottom left',
               maskRepeat: 'no-repeat, no-repeat',
               WebkitMaskRepeat: 'no-repeat, no-repeat'
             }}>
          <div className="w-4 shrink-0" /> {/* Spacer to absorb left mask fade */}
          
          <Link href="/test" className="shrink-0 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors flex items-center gap-1.5">
            <Beaker className="w-4 h-4" />
            PPTI 성향 테스트
          </Link>

          <div className="w-[1px] h-3.5 bg-slate-300 dark:bg-slate-700 shrink-0" />

          <Link href="/timeline" className="shrink-0 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors">
            정책 분야별
          </Link>

          <div className="w-[1px] h-3.5 bg-slate-300 dark:bg-slate-700 shrink-0" />

          <Link href="/test/types" className="shrink-0 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors">
            16가지 성향 보기
          </Link>

          <div className="w-[1px] h-3.5 bg-slate-300 dark:bg-slate-700 shrink-0" />

          {/* Mega Menu Trigger */}
          <div 
            className="h-full flex items-center relative group shrink-0"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors h-full">
              역대 대통령
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Mega Menu Dropdown */}
            {isMegaMenuOpen && (
              <div className="fixed md:absolute top-16 left-0 md:left-auto md:right-0 w-full md:w-[600px] bg-white dark:bg-[#1C1C1C] border-b md:border border-slate-300 dark:border-slate-700 shadow-2xl p-4 md:p-6 grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-4 rounded-none md:rounded-sm animate-in fade-in slide-in-from-top-2 duration-200 z-50 max-h-[80vh] overflow-y-auto">
                {presidentsData.map((president) => (
                  <Link 
                    key={president.id} 
                    href={`/presidents/${president.id}`}
                    className="flex flex-col group/item hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-sm transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover/item:text-slate-500 dark:group-hover/item:text-slate-400">{president.name}</span>
                    <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">{president.term}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="w-4 shrink-0" /> {/* Spacer to absorb right mask fade */}
        </nav>

        {/* Fixed boundary line (Right) */}
        <div className="w-[1px] h-5 bg-slate-300 dark:bg-slate-700 shrink-0" />

        <div className="flex items-center gap-4 shrink-0">
          {mounted && userDNA && (
            <Link href="/test/result" className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs font-bold px-2 py-1.5 md:px-3 md:py-1.5 border border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-sm hover:bg-indigo-100 dark:hover:bg-indigo-800/50 transition-colors shrink-0">
              <Beaker className="w-3 h-3 md:w-3.5 md:h-3.5" />
              <span className="hidden md:inline">내 DNA: </span>
              <span>{userDNA}</span>
            </Link>
          )}
          <Link href="#" className="hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <CheckCircle className="w-3.5 h-3.5" />
            데이터 기여
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold shrink-0"
            >
              {theme === "dark" ? "☀️ 라이트" : "🌙 다크"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
