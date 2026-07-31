"use client";

import React, { useState } from 'react';
import { Policy } from '@/types/policy';
import { Scale, AlertCircle, ThumbsUp, ThumbsDown, AlertTriangle, X, Info, Target, Smile, Zap, Droplets, HelpCircle } from 'lucide-react';
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
    else setUserDNA("MAWO"); // Fallback for users who haven't taken the test
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

    // Calculate probability first
    let prob = 50;
    const isMatch = userTrait === presidentTrait;
    
    if (isMatch) {
      prob = 75 + noise; // 75 ~ 89
    } else {
      prob = 10 + noise; // 10 ~ 24
    }
    
    // Additional variance based on overall affinity
    let totalMatch = 0;
    for (let i = 0; i < 4; i++) {
      if (userDNA[i] === presidentCoreDNA[i]) totalMatch++;
    }
    prob += (totalMatch - 2) * 5; 
    prob = Math.min(Math.max(prob, 1), 99);

    const getReasonText = (cat: string, isMatch: boolean, pTitle: string, prob: number) => {
      const [a0, a1, a2, a3] = userDNA.split(''); // M/G, A/B, W/R, O/D
      const titleStr = `<${pTitle}>`;
      
      let baseDesc = "";
      if (isMatch) {
        if (cat === "경제/산업") {
          if (a0==='M' && a1==='A') baseDesc = `시장 자율과 효율적 집중 투자를 중시하는 귀하의 관점과 ${titleStr}의 방향성이`;
          else if (a0==='M' && a1==='B') baseDesc = `시장 자율을 중시하되 분배의 균형을 고려하는 귀하의 관점과 ${titleStr}의 방향성이`;
          else if (a0==='G' && a1==='A') baseDesc = `공공 개입을 통한 국가 차원의 성과 창출을 중시하는 귀하의 관점과 ${titleStr}의 방향성이`;
          else if (a0==='G' && a1==='B') baseDesc = `공공 개입과 경제적 평등을 최우선으로 하는 귀하의 관점과 ${titleStr}의 방향성이`;
        }
        else if (cat === "부동산/주거") {
          if (a0==='M' && a2==='W') baseDesc = `자산권 존중과 실용적인 규제 완화를 지향하는 귀하의 관점과 ${titleStr}의 목표가`;
          else if (a0==='M' && a2==='R') baseDesc = `자산권 존중과 안정적인 시장 질서를 지향하는 귀하의 관점과 ${titleStr}의 목표가`;
          else if (a0==='G' && a2==='W') baseDesc = `투기 억제와 파격적인 주거권 보장을 지지하는 귀하의 관점과 ${titleStr}의 목표가`;
          else if (a0==='G' && a2==='R') baseDesc = `투기 억제와 전통적인 공공 주거 안정을 지지하는 귀하의 관점과 ${titleStr}의 목표가`;
        }
        else if (cat === "복지/노동") {
          if (a1==='A' && a0==='M') baseDesc = `능력주의 보상과 시장 중심의 성장을 우선하는 귀하의 가치관과 ${titleStr}의 취지가`;
          else if (a1==='A' && a0==='G') baseDesc = `능력주의 보상과 국가 주도의 성장을 우선하는 귀하의 가치관과 ${titleStr}의 취지가`;
          else if (a1==='B' && a0==='M') baseDesc = `보편적 복지와 시장 자율의 조화를 중시하는 귀하의 가치관과 ${titleStr}의 취지가`;
          else if (a1==='B' && a0==='G') baseDesc = `보편적 복지와 강력한 국가 안전망을 중시하는 귀하의 가치관과 ${titleStr}의 취지가`;
        }
        else if (cat === "사회/문화") {
          if (a2==='W' && a3==='O') baseDesc = `파격적 사회 개혁과 공동체의 결속을 지지하는 귀하의 성향과 ${titleStr}이(가)`;
          else if (a2==='W' && a3==='D') baseDesc = `파격적 사회 개혁과 개인의 실리를 중시하는 귀하의 성향과 ${titleStr}이(가)`;
          else if (a2==='R' && a3==='O') baseDesc = `전통적 규범과 공동체의 결속을 중시하는 귀하의 성향과 ${titleStr}이(가)`;
          else if (a2==='R' && a3==='D') baseDesc = `전통적 규범과 개인의 실리를 중시하는 귀하의 성향과 ${titleStr}이(가)`;
        }
        else if (cat === "정치/행정") {
          if (a2==='W' && a1==='A') baseDesc = `기득권 타파와 성과 중심의 직접 민주주의를 지향하는 귀하의 정치관과 ${titleStr}의 핵심이`;
          else if (a2==='W' && a1==='B') baseDesc = `기득권 타파와 평등한 직접 민주주의를 지향하는 귀하의 정치관과 ${titleStr}의 핵심이`;
          else if (a2==='R' && a1==='A') baseDesc = `체계적 관료 시스템과 엘리트 중심의 효율적 행정을 신뢰하는 귀하의 정치관과 ${titleStr}의 핵심이`;
          else if (a2==='R' && a1==='B') baseDesc = `체계적 관료 시스템과 안정적인 행정을 신뢰하는 귀하의 정치관과 ${titleStr}의 핵심이`;
        }
        else if (cat === "외교/안보") {
          if (a3==='O' && a2==='R') baseDesc = `강력한 가치 동맹과 전통적 안보 원칙을 중시하는 귀하의 외교관과 ${titleStr}이(가)`;
          else if (a3==='O' && a2==='W') baseDesc = `강력한 가치 동맹과 진보적 안보 원칙을 중시하는 귀하의 외교관과 ${titleStr}이(가)`;
          else if (a3==='D' && a2==='R') baseDesc = `실리적 균형 외교와 안정적인 자주성을 중시하는 귀하의 외교관과 ${titleStr}이(가)`;
          else if (a3==='D' && a2==='W') baseDesc = `실리적 균형 외교와 유연한 자주성을 중시하는 귀하의 외교관과 ${titleStr}이(가)`;
        }
        
        if (!baseDesc) baseDesc = `귀하의 주요 가치관과 ${titleStr}의 방향성이`;

        if (prob >= 95) return { text: `${baseDesc} 매우 높은 수준으로 부합합니다.`, iconClass: "text-teal-700 dark:text-teal-300", IconComponent: Target };
        if (prob >= 85) return { text: `${baseDesc} 상당 부분 일치합니다.`, iconClass: "text-teal-600 dark:text-teal-400", IconComponent: Target };
        if (prob >= 75) return { text: `${baseDesc} 전반적으로 부합하는 편입니다.`, iconClass: "text-teal-500 dark:text-teal-400", IconComponent: ThumbsUp };
        if (prob >= 65) return { text: `${baseDesc} 어느 정도 공감할 수 있는 요소가 있습니다.`, iconClass: "text-teal-400 dark:text-teal-500", IconComponent: ThumbsUp };
        return { text: `${baseDesc} 부분적인 이견이 존재할 수 있습니다.`, iconClass: "text-slate-500 dark:text-slate-400", IconComponent: Smile };
      } else {
        if (cat === "경제/산업") {
          if (a0==='M' && a1==='A') baseDesc = `시장 자율과 효율적 성장을 중시하는 귀하의 관점과 달리, ${titleStr}은(는) 국가 개입 지향적 성격이 강해`;
          else if (a0==='M' && a1==='B') baseDesc = `시장 자율과 분배의 조화를 중시하는 귀하의 관점과 달리, ${titleStr}은(는) 강력한 국가 주도형 성격이 강해`;
          else if (a0==='G' && a1==='A') baseDesc = `국가 주도의 효율적 성장을 중시하는 귀하의 관점과 달리, ${titleStr}은(는) 철저한 시장 논리에 치우쳐 있어`;
          else if (a0==='G' && a1==='B') baseDesc = `국가 개입과 경제적 평등을 중시하는 귀하의 관점과 달리, ${titleStr}은(는) 대기업 및 시장 논리에 치우쳐 있어`;
        }
        else if (cat === "부동산/주거") {
          if (a0==='M' && a2==='W') baseDesc = `자산권과 실용적 규제 완화를 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 강력한 투기 억제 성격을 띠어`;
          else if (a0==='M' && a2==='R') baseDesc = `자산권과 안정적인 시장 논리를 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 공공 주도의 규제 성격을 띠어`;
          else if (a0==='G' && a2==='W') baseDesc = `주거권 보호와 파격적인 공공 개입을 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 규제 완화에 집중되어 있어`;
          else if (a0==='G' && a2==='R') baseDesc = `주거권 보호와 전통적 공공 개입을 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 시장 논리에 가깝게 설계되어 있어`;
        }
        else if (cat === "복지/노동") {
          if (a1==='A' && a0==='M') baseDesc = `시장 중심의 성장을 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 보편적 분배에 초점을 두어`;
          else if (a1==='A' && a0==='G') baseDesc = `국가 주도의 성장을 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 평등주의적 복지 모델에 가까워`;
          else if (a1==='B' && a0==='M') baseDesc = `복지와 시장의 조화를 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 철저한 성과주의에 초점을 두어`;
          else if (a1==='B' && a0==='G') baseDesc = `보편적 복지를 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 능력주의 중심의 효율성에 초점을 두어`;
        }
        else if (cat === "사회/문화") {
          if (a2==='W' && a3==='O') baseDesc = `파격적 개혁과 연대를 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 보수적 질서와 전통적 가치를 담고 있어`;
          else if (a2==='W' && a3==='D') baseDesc = `실용적 개혁을 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 지나치게 공동체적이고 보수적인 가치를 담고 있어`;
          else if (a2==='R' && a3==='O') baseDesc = `전통적 규범과 결속을 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 급진적인 사회 개혁 요소를 담고 있어`;
          else if (a2==='R' && a3==='D') baseDesc = `전통적 규범과 개인주의를 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 급진적이고 집단주의적인 개혁 요소를 담고 있어`;
        }
        else if (cat === "정치/행정") {
          if (a2==='W' && a1==='A') baseDesc = `기득권 타파와 효율을 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 관료주의적 통제 성격을 띠어`;
          else if (a2==='W' && a1==='B') baseDesc = `직접 민주주의를 선호하는 귀하의 성향과 달리, ${titleStr}은(는) 철저한 엘리트 관료주의 성격을 띠어`;
          else if (a2==='R' && a1==='A') baseDesc = `엘리트 시스템과 효율을 신뢰하는 귀하의 성향과 달리, ${titleStr}은(는) 대중 영합적 성격이 짙어`;
          else if (a2==='R' && a1==='B') baseDesc = `안정적 행정을 신뢰하는 귀하의 성향과 달리, ${titleStr}은(는) 포퓰리즘이나 반기득권 성격이 짙어`;
        }
        else if (cat === "외교/안보") {
          if (a3==='O' && a2==='R') baseDesc = `굳건한 전통적 동맹을 중시하는 귀하의 성향과 달리, ${titleStr}은(는) 자주적 균형 노선에 가까워`;
          else if (a3==='O' && a2==='W') baseDesc = `유연하지만 확실한 동맹을 중시하는 귀하의 성향과 달리, ${titleStr}은(는) 극단적 자주 노선에 가까워`;
          else if (a3==='D' && a2==='R') baseDesc = `안정적인 실리 외교를 중시하는 귀하의 성향과 달리, ${titleStr}은(는) 맹목적 동맹 노선에 가까워`;
          else if (a3==='D' && a2==='W') baseDesc = `실리적 균형 외교를 중시하는 귀하의 성향과 달리, ${titleStr}은(는) 이념적 강경 노선에 가까워`;
        }
        
        if (!baseDesc) baseDesc = `귀하의 주요 가치관과 달리, ${titleStr}은(는) 대비되는 요소를 포함하고 있어`;

        if (prob <= 5) return { text: `${baseDesc} 시각 차이가 뚜렷하게 나타납니다.`, iconClass: "text-rose-700 dark:text-rose-300", IconComponent: Zap };
        if (prob <= 15) return { text: `${baseDesc} 관점의 대립이 명확한 편입니다.`, iconClass: "text-rose-600 dark:text-rose-400", IconComponent: Zap };
        if (prob <= 25) return { text: `${baseDesc} 접근 방식에서 큰 이견이 확인됩니다.`, iconClass: "text-rose-500 dark:text-rose-400", IconComponent: Droplets };
        if (prob <= 35) return { text: `${baseDesc} 방향성에서 다소 차이가 존재합니다.`, iconClass: "text-rose-400 dark:text-rose-500", IconComponent: Droplets };
        return { text: `${baseDesc} 세부적인 입장에서 이견이 있을 수 있습니다.`, iconClass: "text-slate-500 dark:text-slate-400", IconComponent: HelpCircle };
      }
    };

    const { text: reason, iconClass, IconComponent } = getReasonText(policy.category, isMatch, policy.title, prob);

    return { prob: Math.min(Math.max(prob, 1), 99), reason, IconComponent, iconClass };
  };

  const acceptanceData = getAcceptanceProb();

  return (
    <article id={`policy-${policy.id}`} className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-sm overflow-hidden flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-slate-300 dark:border-slate-700 bg-[#FDFCF8] dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="w-fit px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-none border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-300 bg-transparent shrink-0">
            {policy.category}
          </span>
          
          <button 
            onClick={() => setIsDataInfoModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors bg-transparent px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-sm shrink-0"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">데이터 수집 기준 안내</span>
            <span className="sm:hidden">안내</span>
          </button>
        </div>

        <h3 className="text-3xl md:text-4xl font-serif font-black text-slate-900 dark:text-slate-100 mb-6 leading-tight break-keep">{policy.title}</h3>

        {acceptanceData !== null && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-sm mb-6">
            <span className={`w-fit px-3 py-1.5 text-xs font-bold rounded-sm border transition-colors shrink-0 ${
              acceptanceData.prob > 70 ? 'bg-teal-50 border-teal-200 text-teal-800 dark:bg-teal-900/30 dark:border-teal-800 dark:text-teal-300' : 
              acceptanceData.prob < 30 ? 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-300' : 
              'bg-slate-100 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
            }`}>
              내 수용 확률: {acceptanceData.prob}%
            </span>
            <span className="flex items-start sm:items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed break-keep">
              <acceptanceData.IconComponent className={`w-4 h-4 shrink-0 mt-0.5 sm:mt-0 ${acceptanceData.iconClass}`} />
              {acceptanceData.reason}
            </span>
          </div>
        )}
        
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

            <div className="flex items-center gap-3 mb-6 px-5 py-3.5 bg-slate-900 dark:bg-slate-100 rounded-sm shadow-md mt-6">
              <Scale className="w-6 h-6 text-white dark:text-slate-900" />
              <h4 className="text-xl font-serif font-bold text-white dark:text-slate-900 tracking-wide">정책 평가 (양론 대립)</h4>
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
                        <span className="block mt-1.5 text-xs text-slate-400 dark:text-slate-500">(출처: {pro.source})</span>
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
                        <span className="block mt-1.5 text-xs text-slate-400 dark:text-slate-500">(출처: {con.source})</span>
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
                본 서비스(PPTI)는 특정 정부의 일방적인 발표 통계나 해석에만 의존하지 않기 위해 다음과 같은 엄격한 원칙을 따릅니다:
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
