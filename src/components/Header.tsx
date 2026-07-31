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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-300 dark:border-slate-700 bg-[#FDFCF8]/90 dark:bg-[#121212]/90 backdrop-blur-md font-sans">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 dark:bg-slate-200 rounded-sm flex items-center justify-center text-white dark:text-slate-900 font-bold text-sm">
            PT
          </div>
          <span className="text-xl font-extrabold tracking-tight">PresiTrack</span>
        </Link>

        {/* GNB Desktop */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {/* Mega Menu Trigger */}
          <div 
            className="h-full flex items-center relative group"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors h-full">
              역대 대통령
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Mega Menu Dropdown */}
            {isMegaMenuOpen && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-[#1C1C1C] border border-slate-300 dark:border-slate-700 shadow-2xl p-6 grid grid-cols-3 gap-x-8 gap-y-4 rounded-sm animate-in fade-in slide-in-from-top-2 duration-200">
                {presidentsData.map((president) => (
                  <Link 
                    key={president.id} 
                    href={`/presidents/${president.id}`}
                    className="flex flex-col group/item hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-sm transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    onClick={() => setIsMegaMenuOpen(false)}
                  >
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover/item:text-slate-500 dark:group-hover/item:text-slate-400">{president.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">{president.term}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/timeline" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors">
            정책 분야별
          </Link>
          <Link href="/test" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-400 transition-colors flex items-center gap-1.5">
            <Beaker className="w-4 h-4" />
            정책 DNA 테스트
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <CheckCircle className="w-3.5 h-3.5" />
            데이터 기여
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-bold"
            >
              {theme === "dark" ? "☀️ 라이트" : "🌙 다크"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
