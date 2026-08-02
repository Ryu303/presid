"use client";

import React from 'react';
import { getPersonaDetails, PT_CORE_DNA } from '@/utils/personaLogic';

interface PersonaResultCardProps {
  dna: PT_CORE_DNA;
  presidentName?: string;
  variant?: "default" | "compact";
}

export default function PersonaResultCard({ dna, presidentName, variant = "default" }: PersonaResultCardProps) {
  const details = getPersonaDetails(dna);

  if (!details) return null;
  const isCompact = variant === "compact";

  return (
    <div className={`w-full mx-auto bg-[#FDFCF8] dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-sm overflow-hidden flex flex-col font-sans relative shadow-sm ${isCompact ? 'max-w-[320px]' : 'max-w-md'}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#CBD5E1_2px,#CBD5E1_4px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#475569_2px,#475569_4px)]"></div>
      
      <div className={`${isCompact ? 'p-4 md:p-5' : 'p-6 md:p-8'} flex flex-col items-center text-center`}>
        {presidentName && (
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 border border-slate-300 dark:border-slate-700 px-3 py-1 bg-white dark:bg-slate-800">
            {presidentName}
          </div>
        )}
        
        <h2 className="text-xs md:text-sm font-bold text-slate-500 mb-2 uppercase tracking-[0.2em] w-full mx-auto pb-2">
          [ {details.dna.split('').join('-')} ]
        </h2>

        <h3 className={`${isCompact ? 'text-3xl' : 'text-4xl md:text-5xl'} font-black text-slate-900 dark:text-white mb-6 tracking-tight`}>
          {details.nickname}
        </h3>

        <div className={`flex items-center justify-center ${isCompact ? 'gap-2 md:gap-3' : 'gap-4 md:gap-6'} mb-6 w-full`}>
          {details.letters.map((l, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className={`${isCompact ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'} font-serif font-black text-slate-900 dark:text-white mb-1`}>
                {l.letter}
              </span>
              <span className={`text-[8px] ${isCompact ? '' : 'md:text-[10px]'} font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider`}>
                {l.name}
              </span>
            </div>
          ))}
        </div>

        {!presidentName && (
          <p className={`text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-4 ${isCompact ? 'px-2' : ''}`}>
            {details.subtitle}
          </p>
        )}

        {!isCompact && !presidentName && details.story && (
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm w-full font-serif shadow-sm">
            {details.story}
          </p>
        )}
      </div>

      <div className={`${isCompact ? 'px-3 py-3' : 'px-6 py-4'} bg-slate-50 dark:bg-slate-800 border-t border-slate-300 dark:border-slate-700 flex flex-wrap gap-1.5 md:gap-2 justify-center`}>
        {details.letters.map((l, i) => (
          <span key={i} className="text-[10px] font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-2 py-1 text-slate-600 dark:text-slate-400 rounded-sm">
            {l.description}
          </span>
        ))}
      </div>

      {!isCompact && !presidentName && details.breakdown && (
        <div className="px-6 py-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest text-center border-b border-slate-200 dark:border-slate-800 pb-2">
            세부 성향 분석 (Deep Analysis)
          </h4>
          <ul className="space-y-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
            <li className="flex gap-2">
              <span className="font-bold text-slate-900 dark:text-white mt-0.5">[{details.dna[0]}]</span>
              <span>{details.breakdown.axis1}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900 dark:text-white mt-0.5">[{details.dna[1]}]</span>
              <span>{details.breakdown.axis2}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900 dark:text-white mt-0.5">[{details.dna[2]}]</span>
              <span>{details.breakdown.axis3}</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900 dark:text-white mt-0.5">[{details.dna[3]}]</span>
              <span>{details.breakdown.axis4}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
