import React from 'react';

interface LegislativeFrictionProps {
  frictionIndex?: {
    veto: number;
    filibusterHours: number;
    strikeDays: number;
  };
}

export default function LegislativeFriction({ frictionIndex }: LegislativeFrictionProps) {
  if (!frictionIndex) return null;

  return (
    <div className="mt-4 p-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1C1C1C] font-sans">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
        ⚠️ 입법 마찰 지수 (Legislative Friction)
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">대통령 거부권(Veto) 행사</span>
          <span className="text-sm font-bold font-mono">{frictionIndex.veto}회</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2">
          <div className="bg-slate-800 dark:bg-slate-400 h-2" style={{ width: `${Math.min(frictionIndex.veto * 10, 100)}%` }}></div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">국회 필리버스터 시간</span>
          <span className="text-sm font-bold font-mono">{frictionIndex.filibusterHours}시간</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2">
          <div className="bg-slate-600 dark:bg-slate-500 h-2" style={{ width: `${Math.min((frictionIndex.filibusterHours / 100) * 100, 100)}%` }}></div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">장외 투쟁 및 파업 일수</span>
          <span className="text-sm font-bold font-mono">{frictionIndex.strikeDays}일</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2">
          <div className="bg-slate-400 dark:bg-slate-600 h-2" style={{ width: `${Math.min((frictionIndex.strikeDays / 50) * 100, 100)}%` }}></div>
        </div>
      </div>
    </div>
  );
}
