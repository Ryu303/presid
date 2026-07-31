"use client";

import React from 'react';
import { PolicyFact, GlossaryTerm } from '@/types/policy';
import { BookOpen } from 'lucide-react';
import { GlossaryText } from '../ui/GlossaryText';

export default function LegislationTimeline({ facts, glossary }: { facts: PolicyFact[], glossary?: GlossaryTerm[] }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6 px-5 py-3.5 bg-slate-900 dark:bg-slate-100 rounded-sm shadow-md">
        <BookOpen className="w-6 h-6 text-white dark:text-slate-900" />
        <h4 className="text-xl font-serif font-bold text-white dark:text-slate-900 tracking-wide">법안 & 제도 팩트 궤적</h4>
      </div>
      <div className="space-y-4">
        {facts.map((fact, idx) => (
          <div key={idx} className="flex gap-4 group">
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-none border-2 border-slate-800 dark:border-slate-300 bg-white dark:bg-slate-900 mt-1.5 shrink-0" />
              {idx !== facts.length - 1 && (
                <div className="w-px h-full bg-slate-300 dark:bg-slate-700 mt-2" />
              )}
            </div>
            <div className="pb-4">
              <div className="text-slate-800 dark:text-slate-400 font-mono font-bold text-sm mb-1">{fact.date}</div>
              <div className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                <GlossaryText text={fact.description} glossary={glossary} />
                <span className="ml-2 text-xs text-slate-400 dark:text-slate-500 font-normal">(출처: {fact.source})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
