"use client";

import React, { useState } from 'react';
import { X, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface FactCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  policyTitle: string;
}

export default function FactCheckModal({ isOpen, onClose, policyTitle }: FactCheckModalProps) {
  const [reportType, setReportType] = useState('팩트 오류');
  const [content, setContent] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [showToast, setShowToast] = useState(false);

  if (!isOpen && !showToast) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !sourceUrl.trim()) return;
    
    // Show toast
    setShowToast(true);
    
    // Reset and close after delay
    setTimeout(() => {
      setShowToast(false);
      setContent('');
      setSourceUrl('');
      setReportType('팩트 오류');
      onClose();
    }, 2500);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl p-6 md:p-8 relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">팩트체크 및 편향 제보</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              [{policyTitle}] 정책 내용 중 수정이 필요한 부분을 알려주세요.
            </p>

            <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-xl flex items-start gap-3">
              <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <p className="text-sm text-indigo-900 dark:text-indigo-200/80 leading-relaxed">
                <strong className="text-indigo-700 dark:text-indigo-300">중립성 가이드라인:</strong> 특정 진영이나 인물에 대한 감정적 비난은 반영되지 않으며, 검증 가능한 학술/공공 출처가 첨부된 건만 객관적으로 검토됩니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">제보 유형</label>
                <div className="grid grid-cols-2 gap-2">
                  {['팩트 오류', '편향된 설명', '근거 출처 미비', '기타'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setReportType(type)}
                      className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                        reportType === type 
                          ? 'bg-indigo-100 dark:bg-indigo-600/20 border-indigo-500 text-indigo-700 dark:text-indigo-300 font-bold' 
                          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">상세 제보 내용</label>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="w-full h-32 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none transition-all"
                  placeholder="수정이 필요한 구체적인 내용과 이유를 작성해 주세요..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">객관적 참고 문헌/출처 URL</label>
                <input 
                  type="url"
                  value={sourceUrl}
                  onChange={(e) => setSourceUrl(e.target.value)}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="https://..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  취소
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors shadow-md"
                >
                  제보 제출하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification (Mockup) */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-[60] animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-xl p-4 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-slate-900 dark:text-white font-bold text-sm">제보가 성공적으로 접수되었습니다!</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">보내주신 자료를 신중히 검토하여 반영하겠습니다.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
