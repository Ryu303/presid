"use client";

import React, { useState } from 'react';
import { Indicator } from '@/types/policy';
import { TrendingUp, Globe2, Building2 } from 'lucide-react';

export default function GlobalMetricComparison({ domestic, global }: { domestic: Indicator[], global: Indicator[] }) {
  const [activeTab, setActiveTab] = useState<'global' | 'domestic'>('global');

  const metrics = activeTab === 'domestic' ? domestic : global;

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 px-5 py-3.5 bg-slate-900 dark:bg-slate-100 rounded-sm shadow-md">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-white dark:text-slate-900" />
          <h4 className="text-xl font-serif font-bold text-white dark:text-slate-900 tracking-wide">교차 검증 지표</h4>
        </div>
        
        {/* Tabs */}
        <div className="flex bg-slate-800 dark:bg-slate-200 rounded-sm p-1 shrink-0 w-fit">
          <button 
            onClick={() => setActiveTab('global')}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm font-bold rounded-sm transition-all ${activeTab === 'global' ? 'bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm' : 'text-slate-300 hover:text-white dark:text-slate-600 dark:hover:text-slate-900'}`}
          >
            <Globe2 className="w-4 h-4" />
            국제기구
          </button>
          <button 
            onClick={() => setActiveTab('domestic')}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm font-bold rounded-sm transition-all ${activeTab === 'domestic' ? 'bg-white text-slate-900 dark:bg-slate-900 dark:text-white shadow-sm' : 'text-slate-300 hover:text-white dark:text-slate-600 dark:hover:text-slate-900'}`}
          >
            <Building2 className="w-4 h-4" />
            국내통계
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        {metrics.map((indicator, idx) => (
          <div key={idx} className="p-4 rounded-sm bg-slate-50 dark:bg-slate-800/40 border border-slate-300 dark:border-slate-700/50 flex flex-col justify-center transition-all hover:bg-slate-100 dark:hover:bg-slate-800/60 shadow-none">
            <div className="flex justify-between items-start mb-2 gap-4">
              <div className="shrink-0 max-w-[40%]">
                <div className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">{indicator.name}</div>
              </div>
              <div className="text-base md:text-lg font-bold text-slate-900 dark:text-white text-right break-keep">{indicator.value}</div>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="px-2 py-0.5 rounded-none text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                {indicator.source}
              </span>
              {indicator.reportName && (
                <span className="text-xs text-slate-500 font-mono italic">
                  {indicator.reportName}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
