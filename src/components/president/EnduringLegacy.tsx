import React from 'react';
import { EnduringLegacy } from '@/types/president';
import { Landmark } from 'lucide-react';

interface Props {
  legacies: EnduringLegacy[];
}

export default function EnduringLegacySection({ legacies }: Props) {
  return (
    <div className="bg-[#FDFCF8] dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-sans h-full">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-300 dark:border-slate-700">
        <Landmark className="w-4 h-4 text-slate-600 shrink-0" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">국가 시스템 유산</h3>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p className="text-xs text-slate-400 leading-relaxed">정권 교체 이후에도 현재까지 핵심적으로 작동 중인 제도적·물리적 유산</p>
        {legacies.map((l, idx) => (
          <div key={idx} className="border-l-2 border-slate-400 dark:border-slate-500 pl-4">
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">{l.title}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{l.description}</p>
            <p className="text-xs text-slate-400 mt-1">출체: {l.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
