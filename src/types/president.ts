import { Policy, PolicyFact } from "./policy";

export interface PromiseResult {
  promise: string;       // 공약 원문 (간략)
  target?: string;       // 목표 수치 (선택)
  result: string;        // 실제 결과/수치
  status: 'achieved' | 'partial' | 'failed' | 'ongoing'; // 달성 여부 (표기용, 가치판단 없이)
  source: string;
}

export interface ApprovalRating {
  date: string;          // 예: "2017-05"
  rating: number;        // 지지율 (%)
  event?: string;        // 변곡점 이벤트 (선택)
  isHighlight?: boolean; // 최고/최저점 마킹용
}

export interface EnduringLegacy {
  title: string;         // 유산 제목
  description: string;  // 현재까지 작동 중인 방식 설명
  source: string;
}

export interface President {
  id: string;
  name: string;
  term: string;
  party: string;
  imageUrl?: string;
  policies: Policy[];
  additionalFacts?: PolicyFact[];
  // 신규 분석 모듈 필드
  coreDNA?: string;
  promises?: PromiseResult[];
  keywords?: string[];
  approvalRatings?: ApprovalRating[];
  legacies?: EnduringLegacy[];
  globalCounterparts?: { country: string; leader: string; term: string; }[];
  cabinetRisk?: { avgTenureMonths: number; initialDropoutRate: number };
}
