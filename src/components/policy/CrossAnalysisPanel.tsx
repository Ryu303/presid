import React from 'react';
import { CrossAnalysis } from '@/types/policy';
import { Search, Scale } from 'lucide-react';

interface CrossAnalysisPanelProps {
  policyTitle: string;
  crossAnalysis: CrossAnalysis;
}

export default function CrossAnalysisPanel({ policyTitle, crossAnalysis }: CrossAnalysisPanelProps) {
  const { linkedEvent, interpretationGuide } = crossAnalysis;

  return (
    <div className="border-l-4 border-slate-800 dark:border-slate-400 bg-[#F4F4F5] dark:bg-slate-800/40 p-6 md:p-8 font-sans">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-300 dark:border-slate-600 pb-3">
        <Search className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 tracking-wide">
          정책 × 시대 배경 교차 해석
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Facts */}
        <div className="flex-1 space-y-4">
          <div>
            <span className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider">
              해당 정책
            </span>
            <p className="font-serif font-bold text-slate-900 dark:text-white text-base">
              {policyTitle}
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-xl font-light">×</span>
          </div>

          <div>
            <span className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider">
              당시 역사적 팩트
            </span>
            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-4 shadow-none">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-slate-900 dark:text-white">{linkedEvent.name}</span>
                <span className="text-xs text-slate-500 border border-slate-300 dark:border-slate-600 px-1.5 py-0.5">{linkedEvent.date}</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                {linkedEvent.description}
              </p>
              <div className="text-xs text-slate-500 text-right">
                출처: {linkedEvent.source}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interpretation Guide */}
        <div className="flex-1 lg:border-l lg:border-slate-300 lg:dark:border-slate-700 lg:pl-8">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              객관적 해석 가이드라인
            </span>
          </div>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 italic">
            "이 두 가지 사실을 결합할 경우, 다음과 같은 상반된 관점으로 해석될 여지가 공존합니다."
          </p>

          <ul className="space-y-4">
            <li className="relative pl-6">
              <span className="absolute left-0 top-1 w-2 h-2 rounded-none bg-slate-800 dark:bg-slate-300"></span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {interpretationGuide.viewpoint1}
              </p>
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-1 w-2 h-2 rounded-none bg-slate-800 dark:bg-slate-300"></span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {interpretationGuide.viewpoint2}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
