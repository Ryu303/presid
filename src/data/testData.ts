export interface AnswerOption {
  text: string;
  value: number; // 2 (적극 지지), 1 (부분 지지), 0 (중립), -1 (부분 비판), -2 (적극 비판)
}

export interface BlindPolicy {
  id: string;
  title: string;
  description: string;
  presidentId: string;
  presidentName: string;
  actualPolicyName: string;
}

export const answerOptions: AnswerOption[] = [
  { text: "적극 지지한다", value: 2 },
  { text: "부분적으로 지지한다", value: 1 },
  { text: "중립 / 유보", value: 0 },
  { text: "부분적으로 비판한다", value: -1 },
  { text: "적극 비판한다", value: -2 }
];

export const blindPolicies: BlindPolicy[] = [
  {
    id: "q1",
    title: "부동산 세제 및 거래 투명화",
    description: "일정 금액 이상의 다주택자·부동산 보유자에게 누진적인 세금을 부과하고, 모든 부동산 거래 시 실거래가 신고를 의무화하여 투기 수요를 억제하려는 정책 방향에 대해 어떻게 생각하십니까?",
    presidentId: "roh-moo-hyun",
    presidentName: "노무현 정부",
    actualPolicyName: "8.31 종합대책 (종합부동산세 신설) 및 실거래가 신고 의무화"
  },
  {
    id: "q2",
    title: "구조조정과 신산업 집중 투자",
    description: "심각한 경제 위기 속에서 노동 시장의 유연화(비정규직 허용 등)를 수용하는 대신, 대규모 국가 예산을 벤처 기업 육성과 전국적인 초고속 인터넷망 등 신산업 인프라에 집중 투자하는 정책 방향은?",
    presidentId: "kim-dae-jung",
    presidentName: "김대중 정부",
    actualPolicyName: "노사정위원회 대타협 및 전국 초고속 인터넷망 구축 사업"
  },
  {
    id: "q3",
    title: "도심 재개발 및 민간 주도 공급",
    description: "기존 도심의 노후 지역을 광역적으로 묶어 대규모 재개발(뉴타운)을 촉진하고, 건설 규제를 완화하여 민간 주도로 주택 공급을 획기적으로 늘려 경제 성장을 견인하려는 정책 방향은?",
    presidentId: "lee-myung-bak",
    presidentName: "이명박 정부",
    actualPolicyName: "뉴타운 지정 활성화 및 민간 주도 공급 확대"
  },
  {
    id: "q4",
    title: "근로시간 단축 및 최저임금 인상",
    description: "장시간 노동 문제를 해결하고 저임금 근로자의 삶의 질을 높이기 위해, 주 52시간 근무제를 전면 도입하고 단기간에 최저임금을 큰 폭으로 인상하여 소득을 높여 경제를 돌게 하는 정책 방향은?",
    presidentId: "moon-jae-in",
    presidentName: "문재인 정부",
    actualPolicyName: "주 52시간 근무제 도입 및 최저임금 대폭 인상 (소득주도성장)"
  },
  {
    id: "q5",
    title: "건전 재정 확립 및 규제 완화",
    description: "국가 부채 증가를 막기 위해 정부 지출을 줄이는 건전 재정 기조를 확립하고, 법인세 인하 등 세부담을 덜어주어 민간 주도의 경제 성장을 촉진하려는 정책 방향은?",
    presidentId: "yoon-suk-yeol",
    presidentName: "윤석열 정부",
    actualPolicyName: "법인세 인하 및 건전 재정 기조 확립"
  },
  {
    id: "q6",
    title: "제한적 복지와 신산업 융합",
    description: "복지는 재정 한도 내에서 취약 계층에 집중하는 선별적 방식을 취하고, 기존 산업에 ICT를 융합하여 새로운 부가가치를 창출하는 것에 국가 역량을 집중하는 정책 방향은?",
    presidentId: "park-geun-hye",
    presidentName: "박근혜 정부",
    actualPolicyName: "기초연금 차등 지급 및 창조경제 정책"
  }
];
