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
    <div className="w-full max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          나의 정치/성향 DNA
        </h2>
        <p className="text-muted-foreground text-lg">
          당신의 가치관과 성향이 어느 쪽에 가까운지 확인해보세요.
        </p>
      </div>

      <div className="grid gap-8">
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
          const loserTrait = isLeftWinner ? rightTrait : leftTrait;

          return (
            <motion.div
              key={axis.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative p-6 rounded-3xl bg-background/50 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden group"
            >
              {/* 은은한 배경 글로우 효과 */}
              <div
                className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                style={{
                  background: `linear-gradient(90deg, ${leftTrait.color}, ${rightTrait.color})`,
                }}
              />

              <div className="relative z-10">
                {/* 축 제목 (예: 자원 분배, 목표 달성) */}
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-widest text-muted-foreground mb-4">
                    {axis.label}
                  </span>
                </div>

                {/* 게이지 바 영역 */}
                <div className="relative h-6 w-full rounded-full bg-black/40 overflow-hidden flex shadow-inner mb-8">
                  {/* 왼쪽 게이지 */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${leftPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                    className="h-full relative"
                    style={{ backgroundColor: leftTrait.color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  </motion.div>

                  {/* 오른쪽 게이지 */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${rightPercent}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                    className="h-full relative ml-auto"
                    style={{ backgroundColor: rightTrait.color }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
                  </motion.div>

                  {/* 중앙 구분선 */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-background/80 -translate-x-1/2 z-10 rounded-full" />
                </div>

                {/* 양쪽 정보 표시 (알파벳, 퍼센트, 타이틀) */}
                <div className="flex justify-between items-start">
                  {/* 왼쪽 특성 */}
                  <div
                    className={`flex-1 transition-all duration-300 ${
                      isLeftWinner ? "opacity-100 scale-100" : "opacity-50 scale-95"
                    }`}
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className="text-4xl font-black"
                        style={{ color: leftTrait.color }}
                      >
                        {leftTrait.letter}
                      </span>
                      <span className="text-2xl font-bold">{leftPercent}%</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {leftTrait.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-muted-foreground leading-relaxed pr-4"
                    >
                      {leftTrait.description}
                    </motion.p>
                  </div>

                  {/* 오른쪽 특성 */}
                  <div
                    className={`flex-1 text-right transition-all duration-300 ${
                      !isLeftWinner ? "opacity-100 scale-100" : "opacity-50 scale-95"
                    }`}
                  >
                    <div className="flex items-baseline justify-end gap-2 mb-1">
                      <span className="text-2xl font-bold">{rightPercent}%</span>
                      <span
                        className="text-4xl font-black"
                        style={{ color: rightTrait.color }}
                      >
                        {rightTrait.letter}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {rightTrait.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-muted-foreground leading-relaxed pl-4"
                    >
                      {rightTrait.description}
                    </motion.p>
                  </div>
                </div>

                {/* 승자 키워드 표시 */}
                <div className="mt-6 flex justify-center gap-2 flex-wrap">
                  {winnerTrait.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-white/10"
                      style={{
                        backgroundColor: `${winnerTrait.color}15`,
                        color: winnerTrait.color,
                      }}
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
