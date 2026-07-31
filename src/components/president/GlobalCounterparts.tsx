import React from 'react';
import { Globe } from 'lucide-react';

interface Counterpart {
  country: string;
  leader: string;
  term: string;
}

interface GlobalCounterpartsProps {
  presidentName: string;
  counterparts: Counterpart[];
}

export default function GlobalCounterparts({ presidentName, counterparts }: GlobalCounterpartsProps) {
  if (!counterparts || counterparts.length === 0) return null;

  return (
    <div className="mb-6 border border-slate-300 dark:border-slate-700 bg-transparent rounded-sm overflow-hidden">
      <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-2 border-b border-slate-300 dark:border-slate-700 flex items-center gap-2">
        <Globe className="w-4 h-4 text-slate-500 dark:text-slate-400" />
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          동시대 주요국 지도자 (Global Counterparts)
        </span>
      </div>
      <div className="p-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">대한민국:</span>
          <span className="text-slate-900 dark:text-white font-bold">{presidentName}</span>
        </div>
        
        {counterparts.map((cp, idx) => (
          <React.Fragment key={idx}>
            <div className="hidden sm:block text-slate-300 dark:text-slate-700">/</div>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 dark:text-slate-400">{cp.country}:</span>
              <span className="text-slate-900 dark:text-white font-bold">{cp.leader}</span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">({cp.term})</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
