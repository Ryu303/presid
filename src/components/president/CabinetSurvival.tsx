import React from 'react';
import { Users } from 'lucide-react';

interface CabinetSurvivalProps {
  risk?: {
    avgTenureMonths: number;
    initialDropoutRate: number;
  };
}

export default function CabinetSurvival({ risk }: CabinetSurvivalProps) {
  if (!risk) return null;

  return (
    <section className="w-full max-w-6xl mx-auto px-6 mb-16 font-sans">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-300 dark:border-slate-700 pb-4">
        <Users className="w-5 h-5 text-slate-800 dark:text-slate-300" />
        <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">내각 생존율 및 인사 리스크</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1C1C1C]">
          <div className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">장관 평균 재임 기간</div>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-mono font-bold text-slate-900 dark:text-white">{risk.avgTenureMonths}</span>
            <span className="text-lg text-slate-600 dark:text-slate-400 mb-1">개월</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            핵심 부처 장관들의 평균 재임 기간입니다. 재임 기간이 길수록 정책의 일관성이 높고, 짧을수록 국정 동력이 분산될 리스크가 높습니다.
          </p>
        </div>
        
        <div className="p-6 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1C1C1C]">
          <div className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">초기 내각 낙마율</div>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-mono font-bold text-slate-900 dark:text-white">{risk.initialDropoutRate}</span>
            <span className="text-lg text-slate-600 dark:text-slate-400 mb-1">%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 mb-4">
            <div className="bg-slate-800 dark:bg-slate-400 h-2" style={{ width: `${risk.initialDropoutRate}%` }}></div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            정부 출범 초기(첫 1년) 장관 후보자의 자진 사퇴 및 지명 철회 비율입니다. 수치가 높을수록 정권 초기의 인사 검증 리스크가 컸음을 의미합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
