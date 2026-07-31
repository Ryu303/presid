"use client";

import { useState } from "react";
import Timeline from "@/components/timeline/Timeline";
import PolicyCard from "@/components/policy/PolicyCard";
import MicroFactsAccordion from "@/components/policy/MicroFactsAccordion";
import PresidentAnalysisBoard from "@/components/president/PresidentAnalysisBoard";
import GlobalCounterparts from "@/components/president/GlobalCounterparts";
import CabinetSurvival from "@/components/president/CabinetSurvival";
import { presidentsData } from "@/data/presidents";
import { Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CATEGORIES = ["전체", "경제/산업", "부동산/주거", "복지/노동", "외교/안보", "사회/문화", "정치/행정"];

function TimelineContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize with query param if it exists, otherwise first president
  const initialPresidentId = searchParams.get("presidentId") || presidentsData[0].id;
  
  const [selectedPresidentId, setSelectedPresidentId] = useState(initialPresidentId);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync state if URL changes
  useEffect(() => {
    const pid = searchParams.get("presidentId");
    if (pid && pid !== selectedPresidentId) {
      setSelectedPresidentId(pid);
    }
  }, [searchParams]);

  // Update URL without navigation when state changes
  const handleSelectPresident = (id: string) => {
    setSelectedPresidentId(id);
    router.replace(`/timeline?presidentId=${id}`, { scroll: false });
  };
  
  const selectedPresident = presidentsData.find(p => p.id === selectedPresidentId);

  const filteredPolicies = selectedPresident?.policies.filter(policy => {
    const matchesCategory = selectedCategory === "전체" || policy.category === selectedCategory;
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          policy.context.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  return (
    <main className="flex flex-col md:flex-row h-[calc(100vh-65px)] bg-transparent text-slate-900 dark:text-slate-200 overflow-hidden font-sans transition-colors duration-300">
      <aside className="w-full md:w-64 shrink-0 h-48 md:h-auto overflow-y-auto z-10 border-b md:border-r border-slate-300 dark:border-slate-700 bg-[#FDFCF8] dark:bg-[#121212]">
        <Timeline selectedId={selectedPresidentId} onSelect={handleSelectPresident} />
      </aside>
      
      <section className="flex-1 overflow-y-auto px-4 md:px-12 pb-12 relative bg-transparent">
        <header className="pt-8 md:pt-12 pb-6 mb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-6 border-b border-slate-300 dark:border-slate-700">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-slate-800 dark:text-slate-300 font-medium mb-4 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              메인으로 돌아가기
            </Link>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                정책 아카이브 탐색
              </h1>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              특정 정부의 법안 통과 내역과 성과, 부작용을 객관적으로 살펴봅니다.
            </p>
          </div>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-3 py-1 border border-slate-300 dark:border-slate-700 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium self-start xl:self-end"
            >
              {theme === "dark" ? "☀️ 라이트" : "🌙 다크"}
            </button>
          )}
        </header>

        {selectedPresident && (
          <div className="max-w-6xl mx-auto pb-20">
            <Tabs defaultValue="전체" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              {/* Control Bar: Filters & Search */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 bg-[#FDFCF8]/95 dark:bg-[#121212]/95 px-4 py-2 border border-slate-300 dark:border-slate-700 shadow-sm sticky top-0 z-40 backdrop-blur-xl">
                {/* Category Filters using TabsList */}
                <TabsList className="bg-transparent border-none rounded-none p-0 h-auto gap-6 justify-start overflow-x-auto w-full lg:w-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {CATEGORIES.map(cat => (
                    <TabsTrigger
                      key={cat}
                      value={cat}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-slate-900 dark:data-[state=active]:border-slate-200 data-[state=active]:font-black data-[state=active]:text-slate-900 dark:data-[state=active]:text-white text-slate-400 dark:text-slate-500 font-medium px-1 py-2 data-[state=active]:shadow-none data-[state=active]:bg-transparent transition-all"
                    >
                      {cat}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {/* Search Bar */}
                <div className="relative w-full lg:w-72 shrink-0">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="정책명 또는 키워드 검색..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-none pl-11 pr-4 py-2.5 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all shadow-none"
                  />
                </div>
              </div>

              <div className="mb-8 pl-2">
                <h2 className="text-3xl md:text-5xl font-serif font-black mb-3">{selectedPresident.name} 정부</h2>
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-sm">
                  <span className="border border-slate-300 dark:border-slate-600 px-3 py-1 rounded-none text-slate-800 dark:text-slate-200">{selectedPresident.term}</span>
                  <span>•</span>
                  <span>{selectedPresident.party}</span>
                </div>
              </div>

              {/* 동시대 주요국 지도자 패널 */}
              <GlobalCounterparts presidentName={selectedPresident.name} counterparts={selectedPresident.globalCounterparts || []} />

              {/* 다각 분석 대시보드 - 전체 탭에서만 표시하여 가시성 확보 */}
              {selectedCategory === "전체" && (
                <PresidentAnalysisBoard president={selectedPresident} />
              )}

              {CATEGORIES.map(cat => (
                <TabsContent key={cat} value={cat} className="mt-0 outline-none">
                  {filteredPolicies.length > 0 ? (
                    <>
                      <div className="space-y-12">
                        {filteredPolicies.map(policy => (
                          <PolicyCard key={policy.id} policy={policy} />
                        ))}
                      </div>
                      {/* Micro-facts accordion for the president (only shown if viewing all categories or matches) */}
                      {(cat === "전체" && selectedPresident.additionalFacts) && (
                        <MicroFactsAccordion facts={selectedPresident.additionalFacts} />
                      )}
                    </>
                  ) : (
                    <div className="py-20 text-center text-slate-500 dark:text-slate-400 bg-transparent rounded-sm border border-slate-300 dark:border-slate-700 shadow-none px-6">
                      <Search className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-6" />
                      <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-slate-200 mb-3">해당 분류의 굵직한 독립적 정책 데이터가 부족합니다.</h3>
                      <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
                        해당 정부 시기에는 <strong className="text-slate-900 dark:text-white border-b border-slate-500">{cat}</strong> 분야보다 당면한 다른 국가적 과제(예: 경제 성장, 전후 복구, 민주화 등)가 우선시되어, 현대적 의미의 독립적이고 파급력 있는 정책 비중이 상대적으로 낮았거나 현재 검증 가능한 데이터로 분류되지 않았습니다.
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>

            {selectedPresident.cabinetRisk && (
              <div className="mt-16">
                <CabinetSurvival risk={selectedPresident.cabinetRisk} />
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default function TimelinePage() {
  return (
    <Suspense fallback={<div className="h-screen bg-[#FDFCF8] dark:bg-[#121212]"></div>}>
      <TimelineContent />
    </Suspense>
  );
}
