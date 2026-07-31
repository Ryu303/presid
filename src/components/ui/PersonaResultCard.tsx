"use client";

import React from 'react';
import { getPersonaDetails, PT_CORE_DNA } from '@/utils/personaLogic';

interface PersonaResultCardProps {
  dna: PT_CORE_DNA;
  presidentName?: string;
}

export default function PersonaResultCard({ dna, presidentName }: PersonaResultCardProps) {
  const details = getPersonaDetails(dna);

  if (!details) return null;

  return (
    <div className="w-full max-w-md bg-[#FDFCF8] dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-sm overflow-hidden flex flex-col font-sans relative shadow-sm">
      <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#CBD5E1_2px,#CBD5E1_4px)] dark:bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#475569_2px,#475569_4px)]"></div>
      
      <div className="p-6 md:p-8 flex flex-col items-center text-center">
        {presidentName && (
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 border border-slate-300 dark:border-slate-700 px-3 py-1 bg-white dark:bg-slate-800">
            {presidentName}
          </div>
        )}
        
        <h2 className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-[0.2em] border-b border-slate-300 dark:border-slate-700 pb-2">
          [ My Policy DNA : {details.dna.split('').join('-')} ]
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 w-full">
          {details.letters.map((l, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-1">
                {l.letter}
              </span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                {l.name}
              </span>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3">
          {details.title}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-300 font-serif leading-relaxed">
          {details.subtitle}
        </p>
      </div>

      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-300 dark:border-slate-700 flex flex-wrap gap-2 justify-center">
        {details.letters.map((l, i) => (
          <span key={i} className="text-[10px] font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-2 py-1 text-slate-600 dark:text-slate-400 rounded-sm">
            {l.description}
          </span>
        ))}
      </div>
    </div>
  );
}
