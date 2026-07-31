"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { presidentsData } from "@/data/presidents";
import PolicyCard from "@/components/policy/PolicyCard";
import MicroFactsAccordion from "@/components/policy/MicroFactsAccordion";
import PresidentAnalysisBoard from "@/components/president/PresidentAnalysisBoard";
import GlobalCounterparts from "@/components/president/GlobalCounterparts";
import CabinetSurvival from "@/components/president/CabinetSurvival";
import TableOfContents, { TocItem } from "@/components/TableOfContents";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PresidentDetailClient() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const president = presidentsData.find(p => p.id === id);

  if (!mounted) return null;

  if (!president) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">대통령 정보를 찾을 수 없습니다.</h1>
        <Link href="/" className="text-indigo-600 hover:underline">홈으로 돌아가기</Link>
      </div>
    );
  }

  // Generate TOC Items based on president data
  const tocItems: TocItem[] = [
    { id: "section-dashboard", label: "다각 분석 대시보드" },
  ];
  
  // Create sections for each category that has policies
  const policiesByCategory = president.policies.reduce((acc, policy) => {
    if (!acc[policy.category]) acc[policy.category] = [];
    acc[policy.category].push(policy);
    return acc;
  }, {} as Record<string, typeof president.policies>);

  const categories = Object.keys(policiesByCategory);
  categories.forEach(cat => {
    const subItems = policiesByCategory[cat].map(policy => ({
      id: `policy-${policy.id}`,
      label: policy.title,
    }));
    
    tocItems.push({ 
      id: `section-${cat}`, 
      label: `${cat} 정책`,
      subItems: subItems.length > 0 ? subItems : undefined 
    });
  });

  if (president.additionalFacts && president.additionalFacts.length > 0) {
    tocItems.push({ id: "section-microfacts", label: "마이크로 팩트" });
  }

  return (
    <main className="min-h-screen bg-transparent text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Header Area */}
        <header className="mb-16 border-b border-slate-300 dark:border-slate-700 pb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium mb-6 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            메인으로 돌아가기
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-slate-900 dark:text-white">
              {president.name} 정부
            </h1>
          </div>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-sm">
            <span className="border border-slate-300 dark:border-slate-600 px-3 py-1 rounded-none text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900">{president.term}</span>
            <span>•</span>
            <span>{president.party}</span>
          </div>
        </header>

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: 25% TOC Sidebar */}
          <aside className="hidden md:block w-1/4 shrink-0 relative">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Right: 75% Main Content */}
          <section className="w-full md:w-3/4 flex flex-col gap-24 pb-32">
            <div id="section-dashboard" className="scroll-mt-32">
              <GlobalCounterparts presidentName={president.name} counterparts={president.globalCounterparts || []} />
              <div className="mt-8">
                <PresidentAnalysisBoard president={president} />
              </div>
            </div>

            {categories.map((cat) => (
              <div key={cat} id={`section-${cat}`} className="scroll-mt-32 flex flex-col gap-10">
                <div>
                  <h2 className="text-3xl font-serif font-bold border-b-2 border-slate-900 dark:border-white pb-4 inline-block w-fit mb-6">
                    {cat} 정책
                  </h2>
                  
                  {/* 미니 바로가기 쪽지 (Mini Shortcut Note) */}
                  {policiesByCategory[cat].length > 1 && (
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-sm mb-4">
                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest">
                        해당 분야 정책 바로가기
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {policiesByCategory[cat].map(policy => (
                          <a 
                            key={`shortcut-${policy.id}`}
                            href={`#policy-${policy.id}`}
                            className="inline-flex px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-sm text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors shadow-sm"
                          >
                            {policy.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-16">
                  {policiesByCategory[cat].map(policy => (
                    <div key={policy.id} id={`policy-${policy.id}`} className="scroll-mt-32">
                      <PolicyCard policy={policy} presidentCoreDNA={president.coreDNA} />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {president.additionalFacts && president.additionalFacts.length > 0 && (
              <div id="section-microfacts" className="scroll-mt-32">
                <MicroFactsAccordion facts={president.additionalFacts} />
              </div>
            )}

            {president.cabinetRisk && (
              <div className="mt-12">
                <CabinetSurvival risk={president.cabinetRisk} />
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
