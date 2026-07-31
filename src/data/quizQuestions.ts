export type QuizAxis = "axis1" | "axis2" | "axis3" | "axis4";

export interface QuizQuestion {
  id: string;
  axis: QuizAxis;
  question: string;
  leanYes: string; // The DNA letter that gets points for 'Agree'
  leanNo: string;  // The DNA letter that gets points for 'Disagree'
}

export const quizQuestions: QuizQuestion[] = [
  // 축 1: M(Market) vs G(Guardian) - 경제/산업, 부동산/주거, 대기업/시민
  {
    id: "q1_1", axis: "axis1",
    question: "중고거래에서 인기 아이돌 콘서트 티켓을 10배 비싸게 파는 암표상을 보았을 때, '수요가 있으니 비싸지는 건 당연하다'며 시장에 맡기기보다 '국가나 플랫폼이 나서서 철저히 단속해야 한다'고 생각한다.",
    leanYes: "G", leanNo: "M"
  },
  {
    id: "q1_2", axis: "axis1",
    question: "단골 동네 빵집 바로 옆에 거대한 대형 프랜차이즈 빵집이 들어온다고 할 때, 소비자의 선택권을 존중하기보다 동네 상권을 지키기 위해 프랜차이즈 입점을 법으로 제한해야 한다.",
    leanYes: "G", leanNo: "M"
  },
  {
    id: "q1_3", axis: "axis1",
    question: "회사에서 직원들의 연봉을 정할 때, 철저하게 개인의 실적에 따라 연봉 차이가 10배 이상 나더라도 그것이 공정하고 당연한 결과라고 생각한다.",
    leanYes: "M", leanNo: "G"
  },
  {
    id: "q1_4", axis: "axis1",
    question: "동네 모임에서 곗돈을 쓸 때, 다양한 동네 작은 가게들을 돌아다니며 골고루 팔아주기보다 가장 퀄리티가 좋은 최고급 대형 레스토랑 한 곳에 몰아서 쓰는 게 낫다.",
    leanYes: "M", leanNo: "G" // M(Corporate/Premium) vs G(Grassroots/Local)
  },
  {
    id: "q1_5", axis: "axis1",
    question: "친구들과 여행 가서 밥값을 낼 때, 다 같이 똑같이 돈을 내고 똑같이 먹기보다 '돈을 더 많이 낸 사람(물주)'이 메뉴 결정권을 강력하게 가지는 게 당연하다.",
    leanYes: "M", leanNo: "G" // M(Ownership/Capital) vs G(Equality/Public)
  },
  {
    id: "q1_6", axis: "axis1",
    question: "마을에 공동으로 쓰는 땅이 있다면, 돈 많은 사람이 그 땅을 비싸게 사서 개인 정원으로 예쁘게 꾸미기보다 누구나 와서 쉴 수 있는 공공 공원으로 만들어야 한다.",
    leanYes: "G", leanNo: "M"
  },

  // 축 2: A(Accelerator) vs B(Balancer) - 복지/노동, 성장/분배
  {
    id: "q2_1", axis: "axis2",
    question: "RPG 게임을 할 때 길드에 자금이 생겼다면, 초보 길드원들에게 장비를 골고루 나눠주기보다 가장 레벨이 높은 '에이스 딜러'에게 최고급 무기를 몰아줘서 보스를 빨리 잡는 게 낫다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_2", axis: "axis2",
    question: "학교에서 특별 예산이 남았을 때, 공부를 가장 잘하는 우등생들을 위한 최신식 독서실을 짓기보다 성적이 낮거나 학교에 적응을 못하는 학생들을 위한 멘토링 프로그램에 돈을 써야 한다.",
    leanYes: "B", leanNo: "A"
  },
  {
    id: "q2_3", axis: "axis2",
    question: "무인도에 조난당했을 때, 사냥을 전혀 못하는 사람에게도 똑같이 식량을 분배하기보다 가장 사냥을 잘하고 튼튼한 사람에게 식량을 몰아줘서 우리 모두의 생존 확률 자체를 높여야 한다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_4", axis: "axis2",
    question: "조별 과제에서 한두 명이 밤을 새워 하드캐리 했더라도, 팀 전체가 어쨌든 다 같이 참여했으니 점수는 1/N로 똑같이 받는 것이 가장 평화롭고 공평하다.",
    leanYes: "B", leanNo: "A"
  },
  {
    id: "q2_5", axis: "axis2",
    question: "올림픽 국가대표 포상금을 줄 때, 출전한 모든 선수에게 격려금을 골고루 나눠주기보다 메달을 딴 소수의 엘리트 선수들에게 수십억의 포상금을 싹 다 몰아주는 것이 맞다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_6", axis: "axis2",
    question: "회사에서 신입사원을 뽑을 때, 오직 스펙과 능력만 보고 1등부터 줄을 세워 뽑기보다, 능력이 조금 떨어지더라도 사회적 소외계층을 위한 채용 할당제를 의무화해야 한다.",
    leanYes: "B", leanNo: "A"
  },

  // 축 3: W(Wave) vs R(Root) - 사회/문화, 정치/행정
  {
    id: "q3_1", axis: "axis3",
    question: "오랫동안 써오던 스마트폰 운영체제가 완전히 새롭게 바뀌었을 때, 남들이 다 쓰고 안정화될 때까지 기다리기보다 버그가 있더라도 무조건 당장 업데이트해서 새로운 기능을 써본다.",
    leanYes: "W", leanNo: "R"
  },
  {
    id: "q3_2", axis: "axis3",
    question: "회사에서 수십 년간 이어져 온 낡고 비효율적인 보고 체계가 있다면, 윗사람들이 불편해하고 조직이 시끄러워지더라도 내가 총대를 메고 시스템을 완전히 뒤엎어 버리고 싶다.",
    leanYes: "W", leanNo: "R"
  },
  {
    id: "q3_3", axis: "axis3",
    question: "결혼식이나 장례식 같은 집안의 큰 행사를 치를 때, 남들 시선을 신경 쓰지 않는 실용적이고 파격적인 방식보다 어른들이 하시는 '전통적인 격식과 예의'는 꼭 갖춰야 한다.",
    leanYes: "R", leanNo: "W"
  },
  {
    id: "q3_4", axis: "axis3",
    question: "동호회에서 중대한 결정을 내릴 때, 100명의 회원 전체가 투표로 참여하는 것보다 가장 경험이 많고 똑똑한 소수의 엘리트 운영진 3명에게 모든 권한을 위임하는 것이 훨씬 효율적이다.",
    leanYes: "R", leanNo: "W" // R (Elite/System) vs W (Direct Democracy/Grassroots)
  },
  {
    id: "q3_5", axis: "axis3",
    question: "몸이 아파서 병원에 갔을 때, 의사가 불친절하더라도 엘리트 코스를 밟은 대학병원 교수님의 처방이라면 무조건 신뢰하며 군말 없이 따르는 편이다.",
    leanYes: "R", leanNo: "W"
  },
  {
    id: "q3_6", axis: "axis3",
    question: "아무리 훌륭한 시스템이라도 꽉 막힌 규정보다는 현장에서 뛰는 사람들의 목소리와 자유가 우선되어야 한다. 사내 복장 규정도 완전히 폐지하고 반바지/슬리퍼까지 자율화해야 한다.",
    leanYes: "W", leanNo: "R"
  },

  // 축 4: O(Outward) vs D(Defender) - 외교/안보, 동맹타겟/자주
  {
    id: "q4_1", axis: "axis4",
    question: "직장에서 엄청나게 힘센 상사가 나를 억울하게 괴롭힐 때, 나 스스로 실력과 증거를 갈고닦아 정면승부하기보다 나를 지켜줄 수 있는 '더 높은 직급의 사람(강력한 외부 인맥)'을 끌어들여 맞선다.",
    leanYes: "O", leanNo: "D"
  },
  {
    id: "q4_2", axis: "axis4",
    question: "해외 여행 중 길을 완전히 잃어버렸을 때, 내 스마트폰 지도와 감각을 믿고 스스로 길을 찾기보다 무조건 현지 경찰서나 든든한 대형 호텔을 찾아가서 강력하게 도움을 요청한다.",
    leanYes: "O", leanNo: "D"
  },
  {
    id: "q4_3", axis: "axis4",
    question: "무인도에서 다른 거대한 생존자 무리를 만났을 때, 어떻게든 그 무리에 합류하여 든든한 팀의 일원이 되기보다, 어느 정도 거리를 두고 나만의 독자적인 베이스캠프를 지키는 것이 낫다.",
    leanYes: "D", leanNo: "O"
  },
  {
    id: "q4_4", axis: "axis4",
    question: "오랫동안 사이가 안 좋았던 이웃(형제)과 화해해야 할 때, 아무리 핏줄이라도 그동안 잘못한 것에 대해 확실한 사과를 먼저 받아내야만 대화할 수 있다.",
    leanYes: "O", leanNo: "D" // O (Hardline/Principle - Conservative), D (Engagement - Progressive)
  },
  {
    id: "q4_5", axis: "axis4",
    question: "나와 가장 친한 단짝 친구가 다른 반 친구와 싸웠을 때, 양쪽 말을 다 들어보고 공정하고 실용적으로 중재하기보다 일단 무조건 내 단짝 친구 편을 들어 확실하게 의리를 지켜야 한다.",
    leanYes: "O", leanNo: "D" // O (Alliance priority), D (Balancing/Pragmatic)
  },
  {
    id: "q4_6", axis: "axis4",
    question: "회사 내 두 거대 파벌 사이에서, 나와 가치관이 맞는 한쪽에 확실히 줄을 서서 끈끈하게 의리를 지키기보다, 어느 쪽과도 엮이지 않고 상황에 따라 내게 이득이 되는 실리만 쏙쏙 챙기는 것이 현명하다.",
    leanYes: "D", leanNo: "O"
  }
];
