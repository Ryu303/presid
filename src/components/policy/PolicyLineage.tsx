import React from 'react';
import { ArrowDown } from 'lucide-react';

interface PolicyLineageProps {
  lineage?: { prev?: string; next?: string };
  currentTitle: string;
}

export default function PolicyLineage({ lineage, currentTitle }: PolicyLineageProps) {
  if (!lineage || (!lineage.prev && !lineage.next)) return null;

  return (
    <div className="mt-4 mb-6 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center font-sans">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
        🔗 정책 계보도 (Policy Lineage)
      </div>
      
      <div className="flex flex-col items-center text-sm font-medium">
        {lineage.prev && (
          <>
            <div className="px-3 py-1.5 border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400">
              {lineage.prev}
            </div>
            <div className="h-6 border-l border-dashed border-slate-400 dark:border-slate-600 my-1"></div>
            <ArrowDown className="w-4 h-4 text-slate-400 dark:text-slate-600 mb-1" />
          </>
        )}
        
        <div className="px-3 py-1.5 border-2 border-slate-800 dark:border-slate-200 bg-white dark:bg-slate-800 font-bold text-slate-900 dark:text-white shadow-sm text-center">
          {currentTitle}
        </div>
        
        {lineage.next && (
          <>
            <ArrowDown className="w-4 h-4 text-slate-400 dark:text-slate-600 mt-1" />
            <div className="h-6 border-l border-dashed border-slate-400 dark:border-slate-600 my-1"></div>
            <div className="px-3 py-1.5 border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400">
              {lineage.next}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
