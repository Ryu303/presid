"use client";

import React, { useRef } from 'react';
import { presidentsData } from '@/data/presidents';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function Timeline({ selectedId, onSelect }: { selectedId: string, onSelect: (id: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Group by era for better UX on desktop
  const eras = [
    { name: "제1~3공화국", ids: ["rhee", "yun", "park-chung-hee"] },
    { name: "제4~5공화국", ids: ["choi", "chun"] },
    { name: "1987년 체제 이후", ids: ["roh-tae-woo", "kim-young-sam", "kim-dae-jung", "roh-moo-hyun", "lee-myung-bak", "park-geun-hye", "moon-jae-in", "yoon", "lee-jae-myung"] }
  ];

  return (
    <div className="flex flex-col gap-2 p-4 h-full bg-transparent border-r border-slate-300 dark:border-slate-700">
      <div className="hidden md:flex items-center gap-2 px-2 mt-4 mb-2">
        <h2 className="text-xl font-serif font-black text-slate-900 dark:text-slate-200">역대 정부 타임라인</h2>
      </div>

      {/* Mobile view: Horizontal scroll without grouping */}
      <div 
        ref={scrollRef}
        className="md:hidden flex overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {presidentsData.map((president) => (
          <button
            key={president.id}
            onClick={() => {
              onSelect(president.id);
              scrollRef.current?.scrollTo({ left: document.getElementById(`btn-${president.id}`)?.offsetLeft! - 20, behavior: 'smooth' });
            }}
            id={`btn-${president.id}`}
            className={cn(
              "snap-start shrink-0 text-left p-3 rounded-none transition-all border min-w-[140px]",
              selectedId === president.id
                ? "bg-slate-900 dark:bg-slate-200 border-slate-900 dark:border-slate-200 text-white dark:text-slate-900 shadow-none"
                : "bg-transparent border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400"
            )}
          >
            <div className="font-serif font-bold text-sm mb-1">{president.name} 정부</div>
            <div className="text-[10px] font-mono opacity-80">{president.term}</div>
          </button>
        ))}
      </div>

      {/* Desktop view: Vertical scroll with Era grouping */}
      <div className="hidden md:flex flex-col gap-6 overflow-y-auto pr-2 pb-10">
        {eras.map(era => {
          const eraPresidents = presidentsData.filter(p => era.ids.includes(p.id));
          if (eraPresidents.length === 0) return null;

          return (
            <div key={era.name}>
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider px-2 mb-3 flex items-center gap-1">
                <ChevronDown className="w-3 h-3" />
                {era.name}
              </h3>
              <div className="flex flex-col gap-2">
                {eraPresidents.map((president) => (
                  <button
                    key={president.id}
                    onClick={() => onSelect(president.id)}
                    className={cn(
                      "text-left p-4 rounded-sm transition-all border group relative overflow-hidden",
                      selectedId === president.id
                        ? "bg-slate-100 dark:bg-slate-800/50 border-slate-400 dark:border-slate-600 text-slate-900 dark:text-white shadow-none"
                        : "bg-transparent border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-900"
                    )}
                  >
                    {selectedId === president.id && (
                      <div className="absolute left-0 top-0 w-1.5 h-full bg-slate-900 dark:bg-slate-300 rounded-none"></div>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-serif font-bold text-base mb-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                          {president.name} 정부
                        </div>
                        <div className="text-xs font-mono opacity-70">{president.term}</div>
                      </div>
                      <ChevronRight className={cn("w-4 h-4 transition-transform", selectedId === president.id ? "text-slate-900 dark:text-white translate-x-1" : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0")} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
