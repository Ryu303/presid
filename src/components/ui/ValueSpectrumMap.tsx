"use client";
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, LabelList, Cell } from 'recharts';
import { presidentsData } from '@/data/presidents';

interface ValueSpectrumMapProps {
  userDna: string;
}

export default function ValueSpectrumMap({ userDna }: ValueSpectrumMapProps) {
  
  // DNA 알파벳을 기반으로 X(경제), Y(사회) 좌표를 100점 만점으로 스케일링
  const getBaseCoord = (dna: string) => {
    let x = 0; let y = 0;
    // X축: 시장(M +60)/성장(A +30) vs 국가(G -60)/분배(B -30) => 결과: -90, -30, +30, +90
    if (dna[0] === 'M') x += 60; else x -= 60;
    if (dna[1] === 'A') x += 30; else x -= 30;
    
    // Y축: 규범(R +60)/보수외교(O +30) vs 혁신(W -60)/자주외교(D -30) => 결과: -90, -30, +30, +90
    if (dna[2] === 'R') y += 60; else y -= 60;
    if (dna[3] === 'O') y += 30; else y -= 30; 
    return { x, y };
  };

  const counts: Record<string, number> = {};

  const getLayoutProps = (baseX: number, baseY: number) => {
    const key = `${baseX},${baseY}`;
    if (!counts[key]) counts[key] = 0;
    
    const count = counts[key];
    counts[key]++;

    let pointOffsetX = 0;
    let pointOffsetY = 0;
    let labelDx = 0;
    let labelDy = 0;
    let anchor = "middle";

    // 모바일에서도 떨어져 보이도록 데이터 도메인 오프셋을 크게(15~25) 줍니다.
    switch(count) {
      case 0:
        labelDy = -15; // Top
        break;
      case 1:
        pointOffsetX = 22;
        pointOffsetY = -15;
        labelDy = 18; // Bottom
        break;
      case 2:
        pointOffsetX = -22;
        pointOffsetY = -5;
        labelDx = -14;
        labelDy = 4;
        anchor = "end"; // Left
        break;
      case 3:
        pointOffsetX = 22;
        pointOffsetY = 15;
        labelDx = 14;
        labelDy = 4;
        anchor = "start"; // Right
        break;
      case 4:
        pointOffsetX = -15;
        pointOffsetY = 22;
        labelDy = -15;
        break;
      default:
        pointOffsetX = count * 10;
        pointOffsetY = count * -10;
        labelDy = -15;
    }
    return { pointOffsetX, pointOffsetY, labelDx, labelDy, anchor };
  };
  
  const presidentPoints = presidentsData.map(p => {
    const base = getBaseCoord(p.coreDNA || "MBRO");
    const layout = getLayoutProps(base.x, base.y);

    // 긴 이름 축약 처리 (글씨 겹침 방지)
    const shortName = p.name === "윤보선 (장면 내각)" ? "윤보선" : p.name;

    return {
      name: shortName,
      x: base.x + layout.pointOffsetX,
      y: base.y + layout.pointOffsetY,
      labelDx: layout.labelDx,
      labelDy: layout.labelDy,
      anchor: layout.anchor,
      fill: '#94a3b8',
      isUser: false
    };
  });

  const userBase = getBaseCoord(userDna);
  const userLayout = getLayoutProps(userBase.x, userBase.y);
  
  const userPoint = {
    name: '나(You)',
    x: userBase.x + userLayout.pointOffsetX,
    y: userBase.y + userLayout.pointOffsetY,
    labelDx: userLayout.labelDx,
    labelDy: userLayout.labelDy,
    anchor: userLayout.anchor,
    fill: '#F59E0B', 
    isUser: true
  };

  const data = [...presidentPoints, userPoint];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm py-4 px-6 md:px-10 shadow-sm font-sans mb-16 mt-8">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2">역대 정부 가치관 스펙트럼</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">대한민국 정치 지형도에서 나와 가장 가까운 정부들을 시각적으로 확인해보세요.</p>
      </div>

      <div className="w-full h-[400px] md:h-[500px] relative -translate-x-5 md:-translate-x-10">
        {/* 4사분면 배경색 영역 (정대칭으로 복구하되, 컨테이너 전체가 이동함) */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-30 pointer-events-none p-[20px]">
          <div className="bg-red-50 dark:bg-red-900/20 border-r border-b border-slate-300 dark:border-slate-600"></div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-slate-300 dark:border-slate-600"></div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-r border-slate-300 dark:border-slate-600"></div>
          <div className="bg-amber-50 dark:bg-amber-900/20"></div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="경제/분배" 
              domain={[-130, 130]} 
              tick={false}
              axisLine={{ stroke: '#94a3b8', strokeWidth: 2 }}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="사회/외교" 
              domain={[-130, 130]} 
              tick={false}
              axisLine={{ stroke: '#94a3b8', strokeWidth: 2 }}
            />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }} 
              content={({ payload }) => {
                if (payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 shadow-lg rounded-sm text-sm font-bold">
                      {data.name}
                    </div>
                  );
                }
                return null;
              }}
            />
            
            <Scatter name="Presidents" data={data}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.isUser ? '#F59E0B' : '#94a3b8'} className={entry.isUser ? "animate-pulse" : ""} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>

        {/* Axis Labels (그래프가 왼쪽으로 이동한 만큼 반대로 보정하여 제자리에 고정) */}
        <div className="absolute top-0 left-[calc(50%+20px)] md:left-[calc(50%+40px)] -translate-x-1/2 text-[10px] md:text-xs font-bold text-slate-500 bg-white dark:bg-slate-900 px-2 py-1 z-10">보수/안정형 (R, O)</div>
        <div className="absolute bottom-0 left-[calc(50%+20px)] md:left-[calc(50%+40px)] -translate-x-1/2 text-[10px] md:text-xs font-bold text-slate-500 bg-white dark:bg-slate-900 px-2 py-1 z-10">진보/개방형 (W, D)</div>
        <div className="absolute left-[4px] md:left-[0px] top-1/2 -translate-y-1/2 text-[10px] md:text-xs font-bold text-slate-500 -rotate-90 bg-white dark:bg-slate-900 px-2 py-1 origin-center z-10 whitespace-nowrap">국가주도/분배 (G, B)</div>
        <div className="absolute -right-[44px] md:-right-[80px] top-1/2 -translate-y-1/2 text-[10px] md:text-xs font-bold text-slate-500 rotate-90 bg-white dark:bg-slate-900 px-2 py-1 origin-center z-10 whitespace-nowrap">자유시장/성장 (M, A)</div>
      </div>
    </div>
  );
}
