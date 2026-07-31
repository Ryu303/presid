export type QuizAxis = "axis1" | "axis2" | "axis3" | "axis4";

export interface QuizQuestion {
  id: string;
  axis: QuizAxis;
  question: string;
  leanYes: string; // The DNA letter that gets points for 'Agree'
  leanNo: string;  // The DNA letter that gets points for 'Disagree'
}

export const quizQuestions: QuizQuestion[] = [
  // 축 1: M(Market) vs G(Guardian) - 시장 자율 vs 국가 개입
  {
    id: "q1_1",
    axis: "axis1",
    question: "위기 상황이 닥치면, 강력한 리더십 하에 일관된 규칙을 따르는 것보다 개인의 자율성과 능력에 맡기는 편이 생존에 유리하다.",
    leanYes: "M",
    leanNo: "G"
  },
  {
    id: "q1_2",
    axis: "axis1",
    question: "골목 상권을 보호하기 위해 대형 프랜차이즈의 진입을 인위적으로 막는 규제는 시장의 자연스러운 경쟁을 훼손하므로 불필요하다.",
    leanYes: "M",
    leanNo: "G"
  },
  {
    id: "q1_3",
    axis: "axis1",
    question: "중고거래 등 개인 간 거래 플랫폼에서 터무니없는 바가지 요금이 발생하더라도, 가격 상한선을 두는 것보다는 시장 자율에 맡겨야 한다.",
    leanYes: "M",
    leanNo: "G"
  },

  // 축 2: A(Accelerator) vs B(Balancer) - 성장/효율 vs 분배/안전망
  {
    id: "q2_1",
    axis: "axis2",
    question: "한정된 자원이 있다면, 모두에게 똑같이 분배하기보다 전체의 수준을 크게 높일 수 있는 소수의 핵심 역량에 집중 투자해야 한다.",
    leanYes: "A",
    leanNo: "B"
  },
  {
    id: "q2_2",
    axis: "axis2",
    question: "팀 프로젝트의 성과 보상은 전체의 노력(1/N)을 중시하기보다, 실질적으로 캐리한 에이스의 기여도에 따라 확실하게 차등 지급되어야 공평하다.",
    leanYes: "A",
    leanNo: "B"
  },
  {
    id: "q2_3",
    axis: "axis2",
    question: "귀한 자원(아이템)을 얻었을 때, 전체의 밸런스를 위해 부족한 사람에게 양보하기보다, 가장 성과가 뛰어난 사람이 먼저 보상을 받는 것이 룰이다.",
    leanYes: "A",
    leanNo: "B"
  },

  // 축 3: W(Wave) vs R(Root) - 혁신/개혁 vs 질서/전통
  {
    id: "q3_1",
    axis: "axis3",
    question: "오래된 시스템이나 공간을 물려받게 된다면, 기존의 정겨운 분위기를 보존하기보다 완전히 새로운 트렌드에 맞춰 전면 개편하는 것을 선호한다.",
    leanYes: "W",
    leanNo: "R"
  },
  {
    id: "q3_2",
    axis: "axis3",
    question: "다수가 익숙하게 사용하는 구식 시스템이 비효율적이라고 판단되면, 사람들의 반발이 있더라도 당장 최신 솔루션으로 교체해야 한다.",
    leanYes: "W",
    leanNo: "R"
  },
  {
    id: "q3_3",
    axis: "axis3",
    question: "나만의 공간을 꾸밀 때, 마음이 편안해지는 안정적이고 따뜻한 톤보다는 남들과는 확연히 다른 파격적이고 미래지향적인 스타일이 끌린다.",
    leanYes: "W",
    leanNo: "R"
  },

  // 축 4: O(Outward) vs D(Defender) - 개방/동맹 vs 자주/실리
  {
    id: "q4_1",
    axis: "axis4",
    question: "어려운 경쟁(분쟁)에 직면했을 때, 독자적으로 힘을 기르기보다는 외부의 협력자나 동맹을 빠르게 확보하여 함께 대처하는 것이 현명하다.",
    leanYes: "O",
    leanNo: "D"
  },
  {
    id: "q4_2",
    axis: "axis4",
    question: "새로운 핵심 기술이 필요할 때, 긴 시간과 비용을 들여 자체 개발하기보다는 이미 검증된 최고 성능의 해외 기술을 빠르게 도입하는 것이 낫다.",
    leanYes: "O",
    leanNo: "D"
  },
  {
    id: "q4_3",
    axis: "axis4",
    question: "새로운 무언가를 시도할 때, 늘 익숙하고 검증된 방식을 고수하기보다는 낯설고 이질적이더라도 외부의 새로운 문화에 오픈마인드로 도전하는 편이다.",
    leanYes: "O",
    leanNo: "D"
  }
];
