"use client";

import Timeline from "@/components/timeline/Timeline";
import PolicyCard from "@/components/policy/PolicyCard";
import MicroFactsAccordion from "@/components/policy/MicroFactsAccordion";
import PresidentAnalysisBoard from "@/components/president/PresidentAnalysisBoard";
import GlobalCounterparts from "@/components/president/GlobalCounterparts";
import CabinetSurvival from "@/components/president/CabinetSurvival";
import { presidentsData } from "@/data/presidents";
import { Search, ArrowLeft, ChevronRight, ChevronLeft, Menu, ArrowUp, GripHorizontal } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, Suspense, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const CATEGORIES = ["전체", "경제/산업", "부동산/주거", "복지/노동", "외교/안보", "사회/문화", "정치/행정"];

function TimelineContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize with query param if it exists, otherwise first president
  const initialPresidentId = searchParams.get("presidentId") || presidentsData[0].id;
  
  const [selectedPresidentId, setSelectedPresidentId] = useState(initialPresidentId);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMiniMenuExpanded, setIsMiniMenuExpanded] = useState(false);
  
  // Dragging state for mini menu
  const [menuTop, setMenuTop] = useState<number | null>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startTop = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startY.current = e.clientY;
    if (menuTop === null && menuRef.current) {
      startTop.current = menuRef.current.getBoundingClientRect().top;
    } else {
      startTop.current = menuTop || 0;
    }
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const deltaY = e.clientY - startY.current;
    let newTop = startTop.current + deltaY;
    if (newTop < 80) newTop = 80;
    if (newTop > window.innerHeight - 150) newTop = window.innerHeight - 150;
    setMenuTop(newTop);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };
  
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

  const miniMenuCategories = filteredPolicies.reduce((acc, policy) => {
    if (!acc[policy.category]) acc[policy.category] = [];
    acc[policy.category].push(policy);
    return acc;
  }, {} as Record<string, typeof filteredPolicies>);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-transparent text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      
      {/* Right Wall Floating Mini Menu */}
      {filteredPolicies.length > 0 && (
        <div 
          ref={menuRef}
          className={cn(
            "flex flex-col fixed right-1 md:right-3 z-50 bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-md shadow-lg transition-[width,padding] duration-300 overflow-x-hidden",
            isMiniMenuExpanded ? "w-48 md:w-56 p-2 md:p-3" : "w-10 md:w-12 p-1.5 md:p-2",
            menuTop === null ? "top-1/4 md:top-32" : ""
          )} 
          style={{ 
            maxHeight: 'max(60vh, calc(100vh - 200px))',
            top: menuTop !== null ? `${menuTop}px` : undefined 
          }}
        >
          
          {/* Header & Drag Handle */}
          <div className={cn(
            "flex flex-col border-b border-slate-200 dark:border-slate-800 pb-1.5 mb-1.5 sticky top-0 bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-xl z-10"
          )}>
            {/* Drag Grip */}
            <div 
              className="w-full flex items-center justify-center cursor-grab active:cursor-grabbing text-slate-300 dark:text-slate-600 hover:text-slate-500 transition-colors py-1 mb-1"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              title="드래그해서 위아래로 이동"
            >
              <GripHorizontal className="w-5 h-5" />
            </div>

            <div className={cn(
              "flex",
              isMiniMenuExpanded ? "flex-row items-center justify-between" : "flex-col items-center gap-2"
            )}>
              {isMiniMenuExpanded && (
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">탐색기</h4>
              )}
              
              <div className={cn("flex gap-1", isMiniMenuExpanded ? "flex-row" : "flex-col")}>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="p-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-sm text-slate-600 dark:text-slate-300 transition-colors flex items-center justify-center"
                  title="맨 위로"
                >
                  <ArrowUp className="w-3 h-3" />
                </button>
                <button 
                  onClick={() => setIsMiniMenuExpanded(!isMiniMenuExpanded)}
                  className="p-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-sm text-slate-600 dark:text-slate-300 transition-colors flex items-center justify-center"
                  title={isMiniMenuExpanded ? "접기" : "펼치기"}
                >
                  {isMiniMenuExpanded ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 mt-0.5 overflow-y-auto overflow-x-hidden pb-2">
            {Object.keys(miniMenuCategories).map((cat) => (
              <div key={`mini-${cat}`} className={cn("flex flex-col", isMiniMenuExpanded ? "" : "items-center")}>
                {isMiniMenuExpanded ? (
                  <div className="text-[10px] md:text-[11px] font-bold text-slate-900 dark:text-slate-100 mb-1 truncate">{cat}</div>
                ) : (
                  <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 mb-1" title={cat}>{cat.charAt(0)}</div>
                )}
                
                <ul className={cn(
                  "flex flex-col gap-1 w-full",
                  isMiniMenuExpanded ? "border-l border-slate-200 dark:border-slate-700 ml-1 pl-2" : "items-center"
                )}>
                  {miniMenuCategories[cat].map((policy, idx) => (
                    <li key={`mini-policy-${policy.id}`} className={cn("w-full", isMiniMenuExpanded ? "" : "flex justify-center")}>
                      <button
                        onClick={() => {
                          const el = document.getElementById(`policy-${policy.id}`);
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 100;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }}
                        className={cn(
                          "transition-colors leading-tight text-left block",
                          isMiniMenuExpanded 
                            ? "text-[9px] md:text-[10px] text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 line-clamp-2 w-full"
                            : "w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-500 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900 dark:hover:text-indigo-300 shrink-0"
                        )}
                        title={policy.title}
                      >
                        {isMiniMenuExpanded ? policy.title : (idx + 1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <aside 
        className={cn(
          "shrink-0 z-10 border-b md:border-r border-slate-300 dark:border-slate-700 bg-[#FDFCF8] dark:bg-[#121212] md:sticky md:top-[64px] transition-all duration-300 ease-in-out relative",
          isSidebarOpen ? "w-full md:w-64 md:h-[calc(100vh-64px)]" : "w-full md:w-12 md:h-[calc(100vh-64px)]"
        )}
      >
        {/* 모바일 타임라인 (항상 보임) */}
        <div className="md:hidden">
          <Timeline selectedId={selectedPresidentId} onSelect={handleSelectPresident} />
        </div>
        
        {/* 데스크톱 타임라인 (접기/펴기) */}
        <div className="hidden md:block w-full h-full relative">
          <div className={cn(
            "h-full", 
            isSidebarOpen 
              ? "overflow-y-auto" 
              : "overflow-hidden"
          )}>
            {isSidebarOpen ? (
              <div className="w-64">
                <Timeline selectedId={selectedPresidentId} onSelect={handleSelectPresident} />
              </div>
            ) : (
              <div className="flex flex-col items-center py-6 h-full">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] [writing-mode:vertical-lr] text-center h-full max-h-48 mt-4">
                  Timeline
                </span>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute top-6 -right-3.5 w-7 h-7 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 z-50 shadow-sm transition-transform cursor-pointer"
            title={isSidebarOpen ? "타임라인 접기" : "타임라인 펼치기"}
          >
            <ChevronRight className={cn("w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform duration-300", isSidebarOpen ? "rotate-180" : "")} />
          </button>
        </div>
      </aside>
      
      <section className="flex-1 px-4 md:px-12 pb-12 relative bg-transparent overflow-x-hidden min-w-0">
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
          
        </header>

        {selectedPresident && (
          <div className="max-w-6xl mx-auto pb-20">
            <Tabs defaultValue="전체" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              {/* Control Bar: Filters & Search */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 bg-[#FDFCF8]/95 dark:bg-[#121212]/95 px-4 md:px-12 py-3 border-y lg:border-x border-slate-300 dark:border-slate-700 shadow-sm sticky top-[64px] z-40 backdrop-blur-xl -mx-4 md:-mx-12">
                {/* Category Filters using TabsList */}
                <TabsList 
                  className="bg-transparent border-none rounded-none p-0 h-auto gap-6 justify-start overflow-x-auto flex flex-1 min-w-0 max-w-full flex-nowrap pb-2 pt-1"
                >
                  {CATEGORIES.map(cat => (
                    <TabsTrigger
                      key={cat}
                      value={cat}
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-slate-900 dark:data-[state=active]:border-slate-200 data-[state=active]:font-black data-[state=active]:text-slate-900 dark:data-[state=active]:text-white text-slate-400 dark:text-slate-500 font-medium px-1 py-2 data-[state=active]:shadow-none data-[state=active]:bg-transparent transition-all shrink-0"
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
                          <PolicyCard key={policy.id} policy={policy} presidentCoreDNA={selectedPresident.coreDNA} />
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
    </div>
  );
}

export default function TimelinePage() {
  return (
    <Suspense fallback={<div className="h-screen bg-[#FDFCF8] dark:bg-[#121212]"></div>}>
      <TimelineContent />
    </Suspense>
  );
}
