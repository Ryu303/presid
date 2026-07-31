"use client";

import React from "react";
import { motion } from "framer-motion";
import { dnaAxes, dnaDictionary, DnaLetter } from "@/data/dnaDictionary";

export interface DnaScore {
  axisId: string;
  leftScore: number; // 0 to 100
  rightScore: number; // 0 to 100
}

interface DnaIndicatorProps {
  scores: DnaScore[];
}

export default function DnaIndicator({ scores }: DnaIndicatorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight text-slate-900 dark:text-white mb-4">
          나의 정치/성향 DNA
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium">
          당신의 가치관과 성향이 어느 쪽에 가까운지 확인해보세요.
        </p>
      </div>

      <div className="grid gap-6">
        {dnaAxes.map((axis, index) => {
          const score = scores.find((s) => s.axisId === axis.id);
          // 기본값 50:50 (데이터가 없을 경우)
          const leftPercent = score ? score.leftScore : 50;
          const rightPercent = score ? score.rightScore : 50;

          const leftTrait = dnaDictionary[axis.left as DnaLetter];
          const rightTrait = dnaDictionary[axis.right as DnaLetter];

          // 승자 판단
          const isLeftWinner = leftPercent >= rightPercent;
          const winnerTrait = isLeftWinner ? leftTrait : rightTrait;

          return (
            <motion.div
              key={axis.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative p-6 md:p-8 rounded-sm bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              <div className="relative z-10">
                {/* 축 제목 (예: 자원 분배, 목표 달성) */}
                <div className="text-center mb-6">
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
                    {axis.label}
                  </span>
                </div>

                {/* 게이지 바 영역 */}
                <div className="relative h-4 w-full bg-slate-100 dark:bg-slate-800 flex mb-8 overflow-hidden rounded-sm">
                  {/* 왼쪽 게이지 */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${leftPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                    className="h-full relative"
                    style={{ backgroundColor: leftTrait.color }}
                  />

                  {/* 오른쪽 게이지 */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${rightPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                    className="h-full relative ml-auto"
                    style={{ backgroundColor: rightTrait.color }}
                  />

                  {/* 중앙 구분선 */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white dark:bg-[#1C1C1C] -translate-x-1/2 z-10" />
                </div>

                {/* 양쪽 정보 표시 */}
                <div className="flex justify-between items-start gap-4">
                  {/* 왼쪽 특성 */}
                  <div
                    className={`flex-1 transition-all duration-300 ${
                      isLeftWinner ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <div className="flex items-end gap-2 mb-2">
                      <span
                        className="text-4xl md:text-5xl font-serif font-black leading-none"
                        style={{ color: leftTrait.color }}
                      >
                        {leftTrait.letter}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-none mb-1">{leftPercent}%</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {leftTrait.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed break-keep">
                      {leftTrait.description}
                    </p>
                  </div>

                  {/* 오른쪽 특성 */}
                  <div
                    className={`flex-1 text-right transition-all duration-300 ${
                      !isLeftWinner ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <div className="flex items-end justify-end gap-2 mb-2">
                      <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-none mb-1">{rightPercent}%</span>
                      <span
                        className="text-4xl md:text-5xl font-serif font-black leading-none"
                        style={{ color: rightTrait.color }}
                      >
                        {rightTrait.letter}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {rightTrait.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed break-keep">
                      {rightTrait.description}
                    </p>
                  </div>
                </div>

                {/* 승자 키워드 표시 */}
                <div className="mt-8 flex justify-center gap-2 flex-wrap pt-6 border-t border-slate-100 dark:border-slate-800">
                  {winnerTrait.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-600 dark:text-slate-300 rounded-sm"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
