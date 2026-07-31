"use client";
import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import { ApprovalRating } from '@/types/president';
import { TrendingUp } from 'lucide-react';

interface Props {
  ratings: ApprovalRating[];
  presidentName: string;
}

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  if (!payload.isHighlight) return null;
  return <circle cx={cx} cy={cy} r={5} fill="#1E293B" stroke="#FDFCF8" strokeWidth={2} />;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload as ApprovalRating;
    return (
      <div className="bg-[#FDFCF8] dark:bg-slate-900 border border-slate-300 dark:border-slate-700 p-3 text-xs font-sans max-w-[200px]">
        <p className="font-bold text-slate-900 dark:text-white mb-1">{d.date} — {d.rating}%</p>
        {d.event && <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{d.event}</p>}
      </div>
    );
  }
  return null;
};

export default function ApprovalRatingSparkline({ ratings }: Props) {
  const max = Math.max(...ratings.map(r => r.rating));
  const min = Math.min(...ratings.map(r => r.rating));

  return (
    <div className="bg-[#FDFCF8] dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-sans h-full">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-300 dark:border-slate-700">
        <TrendingUp className="w-4 h-4 text-slate-600 shrink-0" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">임기 내 지지율 추이</h3>
      </div>
      <div className="px-5 pt-4 pb-2">
        <div className="flex justify-between text-xs text-slate-400 mb-3">
          <span>최고: <strong className="text-slate-700 dark:text-slate-300">{max}%</strong></span>
          <span>최저: <strong className="text-slate-700 dark:text-slate-300">{min}%</strong></span>
          <span className="text-slate-300 dark:text-slate-600">출체: 한국갤럽</span>
        </div>
        <div className="h-[120px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ratings} margin={{ top: 8, right: 8, left: -32, bottom: 0 }}>
              <YAxis domain={[0, 100]} hide />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#1E293B"
                strokeWidth={1.5}
                dot={<CustomDot />}
                activeDot={{ r: 4, fill: '#1E293B', stroke: '#FDFCF8', strokeWidth: 2 }}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-400 mt-1">● 변곡점(최고·최저) 마우스 오버 시 당시 사건 확인</p>
      </div>
    </div>
  );
}
