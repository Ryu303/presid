"use client";

import React, { useState } from 'react';
import { Policy } from '@/types/policy';
import { Scale, AlertCircle, ThumbsUp, ThumbsDown, AlertTriangle, X, Info } from 'lucide-react';
import PolicyChart from './PolicyChart';
import LegislationTimeline from './LegislationTimeline';
import GlobalMetricComparison from './GlobalMetricComparison';
import CrossAnalysisPanel from './CrossAnalysisPanel';
import FactCheckModal from './FactCheckModal';
import { GlossaryText } from '../ui/GlossaryText';
import { PerspectiveGuard } from '../president/PerspectiveGuard';
import PolicyCostScanner from './PolicyCostScanner';
import PolicyArchitect from './PolicyArchitect';
import PolicyLineage from './PolicyLineage';
import LegislativeFriction from './LegislativeFriction';
import MediaFrameSnapshot from './MediaFrameSnapshot';

import { useEffect } from 'react';

export default function PolicyCard({ policy, presidentCoreDNA }: { policy: Policy, presidentCoreDNA?: string }) {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isDataInfoModalOpen, setIsDataInfoModalOpen] = useState(false);
  const [userDNA, setUserDNA] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("presitrack_dna");
    if (saved) setUserDNA(saved);
  }, []);

  const getAcceptanceProb = () => {
    if (!userDNA || !presidentCoreDNA) return null;
    const categoryAxisMap: Record<string, number> = {
      "경제/산업": 0,
      "부동산/주거": 0,
      "복지/노동": 1,
      "사회/문화": 2,
      "정치/행정": 2,
      "외교/안보": 3
    };
    
    const axisIndex = categoryAxisMap[policy.category] ?? 0;
    const userTrait = userDNA[axisIndex];
    const presidentTrait = presidentCoreDNA[axisIndex];
    
    // Hash function for pseudo-random deterministic number
    let hash = 0;
    for (let i = 0; i < policy.id.length; i++) {
      hash = ((hash << 5) - hash) + policy.id.charCodeAt(i);
      hash |= 0;
    }
    const noise = Math.abs(hash) % 15; // 0 ~ 14

    let prob = 50;
    if (userTrait === presidentTrait) {
      prob = 82 + noise; // 82% ~ 96%
    } else {
      prob = 12 + noise; // 12% ~ 26%
    }
    
    // Additional variance based on overall affinity
    let totalMatch = 0;
    for (let i = 0; i < 4; i++) {
      if (userDNA[i] === presidentCoreDNA[i]) totalMatch++;
    }
    prob += (totalMatch - 2) * 2; 

    return Math.min(Math.max(prob, 1), 99);
  };

  const acceptanceProb = getAcceptanceProb();

  return (
    <article className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-sm overflow-hidden flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-slate-300 dark:border-slate-700 bg-[#FDFCF8] dark:bg-slate-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-fit px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-none border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-300 bg-transparent">
              {policy.category}
            </span>
            {acceptanceProb !== null && (
              <span className={`w-fit px-3 py-1 text-xs font-bold rounded-sm border transition-colors ${
                acceptanceProb > 70 ? 'bg-teal-50 border-teal-200 text-teal-800 dark:bg-teal-900/30 dark:border-teal-800 dark:text-teal-300' : 
                acceptanceProb < 30 ? 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-300' : 
                'bg-slate-100 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
              }`}>
                내 수용 확률: {acceptanceProb}%
              </span>
            )}
          </div>
          
          <button 
            onClick={() => setIsDataInfoModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors bg-transparent px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-sm"
          >
            <Info className="w-3.5 h-3.5" />
            데이터 수집 기준 안내
          </button>
        </div>
        <h3 className="text-3xl md:text-4xl font-serif font-black text-slate-900 dark:text-slate-100 mb-6">{policy.title}</h3>
        
        <PolicyLineage lineage={policy.lineage} currentTitle={policy.title} />
        
        <PerspectiveGuard policy={policy} />
        
        {/* Context Section */}
        <div className="p-5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 border-l-4 border-l-slate-400 dark:border-l-slate-500 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-300 mb-2">시대적 맥락 (Context)</div>
            <p className="text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed font-serif">
              <GlossaryText text={policy.context.content} glossary={policy.glossary} />
              <span className="block mt-1 text-xs text-slate-500 font-medium">(출처: {policy.context.source})</span>
            </p>
            <PolicyArchitect personnel={policy.keyPersonnel} />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 xl:grid-cols-2 gap-10 bg-white dark:bg-slate-900">
        {/* Left Column: Facts & Indicators */}
        <div className="space-y-10">
          
          {/* Legislation Timeline */}
          <LegislationTimeline facts={policy.legislationFacts} glossary={policy.glossary} />
          
          {/* Legislative Friction */}
          <LegislativeFriction frictionIndex={policy.frictionIndex} />
          
          {/* Policy Cost Scanner */}
          <PolicyCostScanner fundingSource={policy.fundingSource} />

          {/* Global Metric Comparison */}
          <GlobalMetricComparison domestic={policy.indicators.domestic} global={policy.indicators.global} />
          
          {/* Chart if available */}
          {policy.chart && (
            <PolicyChart config={policy.chart} />
          )}
        </div>

        {/* Right Column: Pros & Cons */}
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Media Frame Snapshot */}
            <MediaFrameSnapshot snapshot={policy.mediaSnapshot} />

            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-300 dark:border-slate-700 mt-6">
              <Scale className="w-6 h-6 text-slate-800 dark:text-slate-300" />
              <h4 className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">정책 평가 (양론 대립)</h4>
            </div>
            
            <div className="grid gap-6 mb-8">
              <div className="p-6 bg-[#F2F5F0] dark:bg-teal-950/20 border border-[#C8D1C3] dark:border-teal-900/40 rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsUp className="w-6 h-6 text-teal-700 dark:text-teal-400" />
                  <h5 className="text-lg font-bold text-teal-900 dark:text-teal-300">긍정적 성과 (Pros)</h5>
                </div>
                <ul className="space-y-4">
                  {policy.pros.map((pro, idx) => (
                    <li key={idx} className="text-sm md:text-base text-slate-800 dark:text-slate-200 flex items-start gap-3 font-serif">
                      <span className="text-teal-700 dark:text-teal-500 font-bold mt-0.5">✓</span>
                      <span className="leading-relaxed">
                        <GlossaryText text={pro.content} glossary={policy.glossary} />
                        <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">(출처: {pro.source})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-[#F7F3F2] dark:bg-rose-950/20 border border-[#D9CDCB] dark:border-rose-900/40 rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsDown className="w-6 h-6 text-rose-700 dark:text-rose-400" />
                  <h5 className="text-lg font-bold text-rose-900 dark:text-rose-300">비판적 평가 (Cons)</h5>
                </div>
                <ul className="space-y-4">
                  {policy.cons.map((con, idx) => (
                    <li key={idx} className="text-sm md:text-base text-slate-800 dark:text-slate-200 flex items-start gap-3 font-serif">
                      <span className="text-rose-700 dark:text-rose-500 font-bold mt-0.5">×</span>
                      <span className="leading-relaxed">
                        <GlossaryText text={con.content} glossary={policy.glossary} />
                        <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">(출처: {con.source})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-300 dark:border-slate-700 flex justify-end">
            <button 
              onClick={() => setIsReportModalOpen(true)}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-medium transition-colors p-2 rounded-sm border border-transparent hover:border-slate-300 dark:hover:border-slate-600"
            >
              <AlertTriangle className="w-4 h-4" />
              내용 수정/편향 제보하기
            </button>
          </div>
        </div>
      </div>

      {/* Cross Analysis Panel - Placed below the grid so it spans full width */}
      {policy.crossAnalysis && (
        <div className="px-6 md:px-8 pb-8 bg-white dark:bg-slate-900">
          <CrossAnalysisPanel policyTitle={policy.title} crossAnalysis={policy.crossAnalysis} />
        </div>
      )}

      {/* FactCheck & Bias Report Modal */}
      <FactCheckModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
        policyTitle={policy.title} 
      />

      {/* Data Info Modal */}
      {isDataInfoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-sm w-full max-w-md shadow-2xl p-8 relative">
            <button 
              onClick={() => setIsDataInfoModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-300 dark:border-slate-700">
              <Info className="w-6 h-6 text-slate-800 dark:text-slate-300" />
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">데이터 수집 기준 안내</h3>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              <p>
                본 서비스(PresiTrack)는 특정 정부의 일방적인 발표 통계나 해석에만 의존하지 않기 위해 다음과 같은 엄격한 원칙을 따릅니다:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-indigo-600 dark:text-indigo-400">역사적 팩트 기반:</strong> 수치 이전의 확고한 팩트인 <strong>'법안 통과 및 제도 시행 날짜'</strong>를 최우선으로 배치합니다.
                </li>
                <li>
                  <strong className="text-indigo-600 dark:text-indigo-400">국제기구 교차 검증:</strong> 국내 기관 통계뿐만 아니라, <strong>World Bank, OECD, IMF</strong> 등의 글로벌 데이터를 함께 제공하여 객관성을 확보합니다.
                </li>
                <li>
                  <strong className="text-indigo-600 dark:text-indigo-400">양론 병기 원칙:</strong> 학계 논문(KCI 등) 및 다양한 스펙트럼의 언론 보도를 참조하여 긍정적 성과와 부작용을 같은 비중으로 다룹니다.
                </li>
              </ul>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setIsDataInfoModalOpen(false)}
                className="w-full py-3 rounded-sm bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors"
              >
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
