import React from 'react';
import { PromiseResult } from '@/types/president';
import { Receipt } from 'lucide-react';

interface Props {
  promises: PromiseResult[];
}

const statusLabel: Record<PromiseResult['status'], { text: string; style: string }> = {
  achieved: { text: '달성', style: 'text-teal-700 dark:text-teal-400 border-teal-300 dark:border-teal-700' },
  partial:  { text: '부분달성', style: 'text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700' },
  failed:   { text: '미달성', style: 'text-rose-700 dark:text-rose-400 border-rose-300 dark:border-rose-700' },
  ongoing:  { text: '추진 중', style: 'text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-600' },
};

export default function PromiseVsResult({ promises }: Props) {
  return (
    <div className="bg-[#FDFCF8] dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-sans">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-300 dark:border-slate-700">
        <Receipt className="w-4 h-4 text-slate-600 shrink-0" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">공약 vs 결과 대조</h3>
      </div>
      <div className="grid grid-cols-12 px-5 py-2 border-b border-dashed border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-400">
        <span className="col-span-5">공약 내용</span>
        <span className="col-span-4">실제 결과</span>
        <span className="col-span-3 text-right">판정</span>
      </div>
      <div className="divide-y divide-dashed divide-slate-200 dark:divide-slate-700">
        {promises.map((p, idx) => {
          const s = statusLabel[p.status];
          return (
            <div key={idx} className="grid grid-cols-12 gap-2 px-5 py-3.5 items-start">
              <div className="col-span-5">
                <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-snug">{p.promise}</p>
                {p.target && <p className="text-xs text-slate-400 mt-1">목표: {p.target}</p>}
              </div>
              <div className="col-span-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">{p.result}</p>
                <p className="text-xs text-slate-400 mt-0.5">출체: {p.source}</p>
              </div>
              <div className="col-span-3 flex justify-end">
                <span className={`text-xs font-bold border px-2 py-0.5 ${s.style}`}>{s.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
