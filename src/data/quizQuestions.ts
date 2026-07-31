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
    question: "동네 골목의 작은 식당들을 보호하기 위해, 대형 프랜차이즈의 무분별한 입점을 어느 정도 제한하는 것은 꼭 필요하다고 생각한다.",
    leanYes: "G",
    leanNo: "M"
  },
  {
    id: "q1_3",
    axis: "axis1",
    question: "중고거래에서 한정판을 비싸게 팔더라도, '규제'하기보다는 안 사면 알아서 가격이 내려갈 거라고 믿는 편이다.",
    leanYes: "M",
    leanNo: "G"
  },

  // 축 2: A(Accelerator) vs B(Balancer) - 성장/효율 vs 분배/안전망
  {
    id: "q2_1",
    axis: "axis2",
    question: "조직에 남은 예산이 있다면, 모두에게 똑같이 나누기보다 가장 큰 성과를 낼 수 있는 에이스 팀에 몰아주는 게 전체를 위해 맞다고 본다.",
    leanYes: "A",
    leanNo: "B"
  },
  {
    id: "q2_2",
    axis: "axis2",
    question: "조별 과제를 할 때 한두 명이 하드캐리 했더라도, 팀 전체가 다 같이 고생했으니 점수는 1/N로 똑같이 받는 것이 가장 평화롭고 공평하다.",
    leanYes: "B",
    leanNo: "A"
  },
  {
    id: "q2_3",
    axis: "axis2",
    question: "게임에서 엄청 좋은 아이템이 나왔을 때, 레벨이 낮아 당장 필요한 사람보다 딜을 가장 많이 넣은 1등 유저가 먼저 가져가는 게 당연한 룰이라고 생각한다.",
    leanYes: "A",
    leanNo: "B"
  },

  // 축 3: W(Wave) vs R(Root) - 혁신/개혁 vs 질서/전통
  {
    id: "q3_1",
    axis: "axis3",
    question: "부모님이 오래 운영하시던 낡은 식당을 물려받는다면, 옛날 감성을 유지하기보다 요즘 트렌드에 맞춰 전면 개편하고 싶다.",
    leanYes: "W",
    leanNo: "R"
  },
  {
    id: "q3_2",
    axis: "axis3",
    question: "회사 사람들이 전부 옛날 방식에 익숙하다면, 비록 조금 비효율적이더라도 사람들을 피곤하게 만들기보다는 기존 방식을 유지하는 편이 낫다.",
    leanYes: "R",
    leanNo: "W"
  },
  {
    id: "q3_3",
    axis: "axis3",
    question: "내 방을 새로 꾸밀 때, 남들 다 하는 무난하고 따뜻한 우드톤보다는 다소 파격적이더라도 나만의 독특하고 힙한 스타일로 꾸미는 게 끌린다.",
    leanYes: "W",
    leanNo: "R"
  },

  // 축 4: O(Outward) vs D(Defender) - 개방/동맹 vs 자주/실리
  {
    id: "q4_1",
    axis: "axis4",
    question: "억울한 갈등이 생겼을 때, 혼자서 묵묵히 이겨내기보다는 인맥을 총동원해 내 편을 만들어 적극적으로 대처하는 편이다.",
    leanYes: "O",
    leanNo: "D"
  },
  {
    id: "q4_2",
    axis: "axis4",
    question: "외국어 공부를 할 때 번역 앱이나 AI에 의존하기보다는, 시간이 걸려도 내 스스로 문법책을 파고들어 완벽한 내 실력으로 만드는 쪽을 택한다.",
    leanYes: "D",
    leanNo: "O"
  },
  {
    id: "q4_3",
    axis: "axis4",
    question: "해외 여행을 가서 밥을 먹을 때, 안전하게 유명한 맛집을 찾기보다는 메뉴판도 못 읽는 완전 현지인 로컬 식당에 무작정 도전하는 걸 좋아한다.",
    leanYes: "O",
    leanNo: "D"
  }
];
