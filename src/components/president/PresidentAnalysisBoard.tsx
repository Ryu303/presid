"use client";
import React from 'react';
import { President } from '@/types/president';
import PromiseVsResult from './PromiseVsResult';
import SpeechKeywords from './SpeechKeywords';
import ApprovalRatingSparkline from './ApprovalRatingSparkline';
import EnduringLegacySection from './EnduringLegacy';
import PersonaResultCard from '../ui/PersonaResultCard';

interface Props {
  president: President;
}

export default function PresidentAnalysisBoard({ president }: Props) {
  const hasAnyData =
    (president.promises && president.promises.length > 0) ||
    (president.keywords && president.keywords.length > 0) ||
    (president.approvalRatings && president.approvalRatings.length > 0) ||
    (president.legacies && president.legacies.length > 0);

  if (!hasAnyData) return null;

  return (
    <div className="mb-12 font-sans">
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-300 dark:border-slate-700">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">다각 분석 대시보드</h2>
        <span className="flex-1 border-t border-dashed border-slate-300 dark:border-slate-600" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {president.coreDNA && (
          <div className="lg:col-span-2 flex justify-center mb-8">
            <PersonaResultCard dna={president.coreDNA} presidentName={president.name} />
          </div>
        )}
        {president.promises && president.promises.length > 0 && (
          <div className="lg:col-span-2">
            <PromiseVsResult promises={president.promises} />
          </div>
        )}
        {president.approvalRatings && president.approvalRatings.length > 0 && (
          <ApprovalRatingSparkline ratings={president.approvalRatings} presidentName={president.name} />
        )}
        {president.keywords && president.keywords.length > 0 && (
          <SpeechKeywords keywords={president.keywords} />
        )}
        {president.legacies && president.legacies.length > 0 && (
          <div className="lg:col-span-2">
            <EnduringLegacySection legacies={president.legacies} />
          </div>
        )}
      </div>
    </div>
  );
}
