"use client";

import { Policy } from "@/types/policy";
import { usePerspectiveGuard } from "@/hooks/usePerspectiveGuard";
import { Info, X } from "lucide-react";

interface PerspectiveGuardProps {
  policy: Policy;
}

export function PerspectiveGuard({ policy }: PerspectiveGuardProps) {
  const { isVisible, isAligned, dismiss } = usePerspectiveGuard(policy);

  if (!isVisible || isAligned === null) return null;

  return (
    <div className="bg-slate-100 text-slate-600 rounded-sm p-4 mb-4 flex gap-3 relative border border-slate-200">
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1 pr-6 font-sans text-sm leading-relaxed">
        {isAligned ? (
          <p>
            <span className="font-bold text-slate-800">💡 사용자님의 기존 정책 선호도 데이터를 분석한 결과, </span>
            해당 정책의 <strong>[긍정적 성과(Pros)]</strong>에 무비판적으로 동의할 인지 편향 확률이 높습니다. 
            객관적 판단을 위해 하단의 <strong>[비판적 평가(Cons)]</strong> 지표를 의도적으로 정독하시길 권장합니다.
          </p>
        ) : (
          <p>
            <span className="font-bold text-slate-800">💡 사용자님의 기존 정책 선호도 데이터와 상충하는 정책입니다. </span>
            무의식적으로 방어 기제가 작동할 수 있으므로, 해당 정책이 도입되었던 <strong>[시대적 맥락(Context)]</strong>과 <strong>[국제 교차 검증 지표]</strong>를 먼저 확인하시길 권장합니다.
          </p>
        )}
      </div>
      <button 
        onClick={dismiss} 
        className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-slate-600 rounded-sm transition-colors flex items-center justify-center bg-transparent border-0"
        aria-label="편향 경고 끄기"
        title="편향 경고 끄기"
      >
        <span className="sr-only">편향 경고 끄기</span>
        <div className="flex items-center gap-1 text-xs">
          ✕ 끄기
        </div>
      </button>
    </div>
  );
}
