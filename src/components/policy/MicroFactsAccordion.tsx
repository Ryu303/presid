"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PolicyFact } from '@/types/policy';
import { Plus, Minus } from 'lucide-react';

interface MicroFactsAccordionProps {
  facts?: PolicyFact[];
}

export default function MicroFactsAccordion({ facts }: MicroFactsAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!facts || facts.length === 0) {
    return null;
  }

  return (
    <div className="w-full font-sans border border-slate-300 dark:border-slate-700 bg-transparent mt-12 mb-16 shadow-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-[#FDFCF8] dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
          {isOpen ? '[ - 해당 정부의 세부 행정/법안 팩트 닫기 ]' : '[ + 해당 정부의 세부 행정/법안 팩트 더 보기 ]'}
        </span>
        {isOpen ? (
          <Minus className="w-4 h-4 text-slate-500" />
        ) : (
          <Plus className="w-4 h-4 text-slate-500" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-transparent border-t border-slate-300 dark:border-slate-700">
              <ul className="flex flex-col">
                {facts.map((fact, index) => (
                  <li 
                    key={index} 
                    className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 py-3 border-b border-dashed border-slate-300 dark:border-slate-700 last:border-b-0"
                  >
                    <div className="shrink-0 text-sm font-bold text-slate-900 dark:text-white md:w-24">
                      {fact.date}
                    </div>
                    <div className="flex-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {fact.description}
                    </div>
                    <div className="shrink-0 text-xs text-slate-500 dark:text-slate-500 md:w-32 md:text-right mt-1 md:mt-0">
                      출처: {fact.source}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
