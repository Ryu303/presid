import React from 'react';
import { Tag } from 'lucide-react';

interface Props {
  keywords: string[];
}

export default function SpeechKeywords({ keywords }: Props) {
  return (
    <div className="bg-[#FDFCF8] dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-sans h-full">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-300 dark:border-slate-700">
        <Tag className="w-4 h-4 text-slate-600 shrink-0" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">주요 연설 핵심 키워드</h3>
      </div>
      <div className="px-5 py-5">
        <p className="text-xs text-slate-400 mb-4 leading-relaxed">취임사 및 주요 국정 연설에서 반복 등장한 핵심 어휘 (빈도 순)</p>
        <div className="flex flex-wrap gap-2">
          {keywords.map((kw, idx) => (
            <span
              key={idx}
              className="inline-block border border-slate-400 dark:border-slate-600 text-slate-800 dark:text-slate-200 font-bold px-3 py-1.5 tracking-wide"
              style={{ fontSize: `${Math.max(0.75, 1.1 - idx * 0.05)}rem` }}
            >
              #{kw}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
