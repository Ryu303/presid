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
    question: "팀 프로젝트에 큰 위기가 닥쳤을 때, '모두 똑같은 규칙을 따르자'는 리더보다는 '각자 제일 잘하는 걸 알아서 해결하자'는 분위기가 더 생존율이 높다고 생각한다.",
    leanYes: "M",
    leanNo: "G"
  },
  {
    id: "q1_2",
    axis: "axis1",
    question: "동네 낡은 빵집 옆에 엄청 크고 세련된 대형 프랜차이즈 빵집이 들어오는 건, 어쩔 수 없는 시장의 자연스러운 흐름이라고 생각한다.",
    leanYes: "M",
    leanNo: "G"
  },
  {
    id: "q1_3",
    axis: "axis1",
    question: "당근마켓 같은 중고거래에서 한정판 굿즈를 엄청난 바가지 가격에 팔더라도, '규제'하기보다는 안 사는 사람이 많아지면 알아서 가격이 내려갈 거라고 믿는다.",
    leanYes: "M",
    leanNo: "G"
  },

  // 축 2: A(Accelerator) vs B(Balancer) - 성장/효율 vs 분배/안전망
  {
    id: "q2_1",
    axis: "axis2",
    question: "회사에 남은 예산이 있다면, 직원 모두에게 10만 원씩 똑같이 나눠주기보다, 가장 성과를 낼 수 있는 에이스 팀에 몰아주는 게 회사 전체를 위해 맞다고 생각한다.",
    leanYes: "A",
    leanNo: "B"
  },
  {
    id: "q2_2",
    axis: "axis2",
    question: "조별 과제에서 점수를 받을 때, 무조건 모두가 똑같은 점수를 받는 것(1/N)보다 실질적으로 하드캐리한 친구가 혼자 A+를 독식하는 게 진짜 공평한 거라 생각한다.",
    leanYes: "A",
    leanNo: "B"
  },
  {
    id: "q2_3",
    axis: "axis2",
    question: "게임에서 엄청 좋은 아이템이 나왔을 때, 레벨이 가장 낮아 도움이 필요한 파티원보다, 딜을 가장 많이 넣은 1등 유저가 가져가는 게 당연한 룰이라고 생각한다.",
    leanYes: "A",
    leanNo: "B"
  },

  // 축 3: W(Wave) vs R(Root) - 혁신/개혁 vs 질서/전통
  {
    id: "q3_1",
    axis: "axis3",
    question: "부모님이 오래 운영하시던 낡은 식당을 내가 물려받는다면, 옛날 감성을 유지하기보다 완전히 요즘 인스타 감성의 핫플로 싹 다 뜯어고치고 싶다.",
    leanYes: "W",
    leanNo: "R"
  },
  {
    id: "q3_2",
    axis: "axis3",
    question: "회사 사람들이 전부 옛날 엑셀 방식에 익숙하더라도, 내가 보기에 너무 비효율적이라면 사람들의 짜증을 감수하고서라도 당장 최신 협업 툴(노션 등)로 바꿔야 직성이 풀린다.",
    leanYes: "W",
    leanNo: "R"
  },
  {
    id: "q3_3",
    axis: "axis3",
    question: "내 방을 새로 꾸밀 때, 남들 다 하는 무난하고 따뜻한 '오늘의집' 우드톤 감성보다는, 차갑더라도 나만의 독특하고 힙한 스타일로 꾸미는 게 훨씬 끌린다.",
    leanYes: "W",
    leanNo: "R"
  },

  // 축 4: O(Outward) vs D(Defender) - 개방/동맹 vs 자주/실리
  {
    id: "q4_1",
    axis: "axis4",
    question: "억울한 일로 갈등이 생겼을 때, 혼자서 멘탈을 챙기며 묵묵히 이겨내기보다는 인맥을 총동원해 내 편을 만들어 적극적으로 대처하는 편이다.",
    leanYes: "O",
    leanNo: "D"
  },
  {
    id: "q4_2",
    axis: "axis4",
    question: "외국어 공부를 할 때, 어떻게든 내 힘으로 문법책을 파고들어 실력을 키우기보다는 일단 검증된 최신 번역 앱이나 AI를 결제해서 빠르고 편하게 해결하는 쪽을 택한다.",
    leanYes: "O",
    leanNo: "D"
  },
  {
    id: "q4_3",
    axis: "axis4",
    question: "해외 여행을 가서 식사를 할 때, 안전하게 유명한 맛집이나 한식당을 찾기보다는 메뉴판도 못 읽는 완전 현지인 로컬 식당에 무작정 도전하는 걸 좋아한다.",
    leanYes: "O",
    leanNo: "D"
  }
];
