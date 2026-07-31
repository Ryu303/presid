"use client";

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea, ReferenceLine } from 'recharts';
import { useRouter } from 'next/navigation';
import { macroTimelineData, presidentEras } from '@/data/macroData';
import { BarChart3 } from 'lucide-react';

type MetricType = 'gdpGrowth' | 'inflation' | 'unemployment';
type RealWorldMetricType = 'yearsToBuyApt' | 'bigMacIndex';
type ViewMode = 'macro' | 'realWorld';

const macroLabels: Record<MetricType, string> = {
  gdpGrowth: 'GDP 성장률 (%)',
  inflation: '물가 상승률 (%)',
  unemployment: '실업률 (%)'
};

const realWorldLabels: Record<RealWorldMetricType, string> = {
  yearsToBuyApt: '아파트 구매 소요 기간 (년)',
  bigMacIndex: '빅맥 지수 ($)'
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const metricName = payload[0].dataKey as string;
    const isMacro = metricName in macroLabels;
    const labelText = isMacro ? macroLabels[metricName as MetricType] : realWorldLabels[metricName as RealWorldMetricType];
    const unit = isMacro ? '%' : metricName === 'bigMacIndex' ? '$' : '년';
    
    return (
      <div className="bg-[#FDFCF8] dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-none p-3 shadow-md font-sans">
        <p className="text-slate-900 dark:text-white font-bold mb-2 pb-2 border-b border-slate-200 dark:border-slate-700">
          {label}년 <span className="text-sm font-normal text-slate-500 dark:text-slate-400">({data.president})</span>
        </p>
        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium">
          {labelText}: <span className="font-bold ml-1">{payload[0].value}{unit}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function MacroChart() {
  const [viewMode, setViewMode] = useState<ViewMode>('macro');
  const [metric, setMetric] = useState<string>('gdpGrowth');
  const router = useRouter();

  const handleEraClick = (id: string) => {
    router.push(`/timeline?presidentId=${id}`);
  };

  const handleModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    setMetric(mode === 'macro' ? 'gdpGrowth' : 'yearsToBuyApt');
  };

  const currentLabels = viewMode === 'macro' ? macroLabels : realWorldLabels;

  return (
    <section className="w-full max-w-6xl mx-auto px-6 mb-16 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-slate-300 dark:border-slate-700 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-sm border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => handleModeChange('macro')}
                className={`px-4 py-1.5 text-sm font-bold transition-colors rounded-sm ${viewMode === 'macro' ? 'bg-white dark:bg-slate-600 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
              >
                📊 거시 경제 지표
              </button>
              <button
                onClick={() => handleModeChange('realWorld')}
                className={`px-4 py-1.5 text-sm font-bold transition-colors rounded-sm ${viewMode === 'realWorld' ? 'bg-white dark:bg-slate-600 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}`}
              >
                🛒 실생활 체감 지표
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-slate-800 dark:text-slate-300" />
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              {viewMode === 'macro' ? '거시 경제 통합 타임라인' : '실생활 체감 지표 변동 추이'}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            역대 정부별 주요 {viewMode === 'macro' ? '경제 지표' : '체감 지표'}의 흐름을 확인하고 특정 임기 구간을 클릭하여 상세 정책을 탐색하세요.
          </p>
        </div>
        
        <div className="flex border border-slate-300 dark:border-slate-600 rounded-none shrink-0 w-fit overflow-hidden mt-4 md:mt-0">
          {Object.keys(currentLabels).map(key => (
            <button
              key={key}
              onClick={() => setMetric(key)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                metric === key 
                  ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' 
                  : 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {currentLabels[key as keyof typeof currentLabels]}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[400px] border border-slate-300 dark:border-slate-700 bg-[#FDFCF8] dark:bg-[#1C1C1C] p-4 pt-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={macroTimelineData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#CBD5E1" strokeOpacity={0.5} />
            <XAxis 
              dataKey="year" 
              tick={{ fontSize: 12, fill: '#64748B' }}
              tickMargin={10}
              axisLine={{ stroke: '#94A3B8' }}
              tickLine={{ stroke: '#94A3B8' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#64748B' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {presidentEras.map((era) => (
              <React.Fragment key={era.id}>
                <ReferenceArea
                  x1={era.startYear}
                  x2={era.endYear}
                  fill={era.colorType === 'light' ? 'transparent' : '#E2E8F0'} // slate-200 for light mode
                  fillOpacity={0.4}
                  className="cursor-pointer transition-opacity hover:opacity-80 dark:fill-[#334155]" // slate-700 for dark mode
                  onClick={() => handleEraClick(era.id)}
                  label={{ position: 'insideTop', value: era.name, fill: '#94A3B8', fontSize: 12, className: 'font-sans font-medium' }}
                />
                {/* Visual boundary for transition years */}
                {era.startYear > 1980 && (
                  <ReferenceLine 
                    x={era.startYear} 
                    stroke="#94A3B8" 
                    strokeDasharray="3 3" 
                    strokeOpacity={0.5} 
                  />
                )}
              </React.Fragment>
            ))}
            
            <Line
              type="monotone"
              dataKey={metric}
              stroke="#1E293B" // slate-800
              strokeWidth={2}
              dot={{ r: 2, fill: '#1E293B', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#0F172A', stroke: '#FDFCF8', strokeWidth: 2 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
