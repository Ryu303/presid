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
    question: "모임에서 비용을 지출할 때, 모두가 동일하게 부담하고 권리를 나누기보다 비용을 더 많이 부담한 사람의 의견이 더 큰 비중으로 반영되는 것이 합리적이다.",
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
    question: "한정된 회사 예산으로 프로젝트를 진행할 때, 모든 팀에 예산을 똑같이 나누기보다 가장 성과를 낼 확률이 높은 핵심 부서에 예산을 집중 투자해 전체 회사의 이익을 극대화해야 한다.",
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
    question: "조직에서 업무 방식을 결정할 때, 절차가 다소 딱딱하더라도 오랜 기간 검증된 사내 매뉴얼과 전문가의 지침을 우선적으로 따르는 것이 안전하고 효율적이다.",
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
    question: "직장에서 부당한 대우를 받을 때, 스스로의 힘으로 정면돌파하기보다 나의 입장을 대변해 줄 수 있는 외부의 강력한 조력자를 적극적으로 활용하는 편이 낫다.",
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
    question: "협력사와의 분쟁이 발생했을 때, 객관적인 잘잘못을 따지기에 앞서 오랫동안 신뢰를 쌓아온 우리 측 파트너를 먼저 보호하고 지지하는 것이 당연하다.",
    leanYes: "O", leanNo: "D" // O (Alliance priority), D (Balancing/Pragmatic)
  },
  {
    id: "q4_6", axis: "axis4",
    question: "상충하는 두 조직 사이에서 한쪽을 선택해 소속감을 다지기보다는, 특정 세력에 얽매이지 않고 사안별로 철저하게 실용적인 이익을 추구하는 것이 현명하다.",
    leanYes: "D", leanNo: "O"
  },
  // Axis 1 추가 문항 (경제/산업)
  {
    id: "q1_7", axis: "axis1",
    question: "세입자 보호를 위해 정부가 임대료 인상률을 강제로 제한하는 것은 부작용이 있더라도 꼭 필요한 조치다.",
    leanYes: "G", leanNo: "M"
  },
  {
    id: "q1_8", axis: "axis1",
    question: "적자 구조의 공기업이라도 국민 필수 서비스라면 요금을 올려서 수익을 내기보다 국가가 세금으로 적자를 메워야 한다.",
    leanYes: "G", leanNo: "M"
  },
  {
    id: "q1_9", axis: "axis1",
    question: "대형 마트가 주말에 의무적으로 문을 닫게 하는 것은 소비자 불편을 초래하므로 폐지해야 한다.",
    leanYes: "M", leanNo: "G"
  },
  {
    id: "q1_10", axis: "axis1",
    question: "환경 보호를 위해 기업에게 막대한 탄소세를 부과하면 경제 성장이 둔화되더라도 감수해야 한다.",
    leanYes: "G", leanNo: "M"
  },
  {
    id: "q1_11", axis: "axis1",
    question: "다주택자에게 무거운 세금을 매기는 것은 자본주의의 기본 원칙을 훼손하는 지나친 처사다.",
    leanYes: "M", leanNo: "G"
  },
  {
    id: "q1_12", axis: "axis1",
    question: "최저임금은 경제 상황과 무관하게 근로자의 최소한의 인간다운 삶을 위해 지속적으로 인상되어야 한다.",
    leanYes: "G", leanNo: "M"
  },
  
  // Axis 2 추가 문항 (성장/분배, 복지/노동)
  {
    id: "q2_7", axis: "axis2",
    question: "국가 R&D 예산을 배분할 때, 성공 가능성이 낮은 다양한 기초과학 분야에 고루 나누기보다 당장 돈이 되는 핵심 기술에 몰아주어야 한다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_8", axis: "axis2",
    question: "기업이 위기에 처해 구조조정이 불가피할 때, 효율성을 위해 해고를 유연하게 허용해야 한다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_9", axis: "axis2",
    question: "복지 예산을 늘리는 것보다 그 돈으로 인프라나 산업에 투자하여 국가 전체의 파이를 키우는 것이 우선이다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_10", axis: "axis2",
    question: "비정규직의 정규직화는 기업의 인건비 부담을 늘려 결국 국가 경쟁력을 떨어뜨릴 것이다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_11", axis: "axis2",
    question: "부의 재분배보다는 성장을 통한 '낙수효과'를 기대하는 것이 더 현실적인 경제 정책이다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_12", axis: "axis2",
    question: "경제가 조금 덜 성장하더라도 빈부격차가 줄어들고 사회 안전망이 튼튼해지는 것이 더 중요하다.",
    leanYes: "B", leanNo: "A"
  },

  // Axis 3 추가 문항 (사회/문화, 규범/혁신)
  {
    id: "q3_7", axis: "axis3",
    question: "사형제도는 범죄 억제와 사회 정의 실현을 위해 반드시 유지되거나 강력하게 집행되어야 한다.",
    leanYes: "R", leanNo: "W"
  },
  {
    id: "q3_8", axis: "axis3",
    question: "동성혼 합법화나 포괄적 차별금지법 제정은 사회의 전통적 가치를 훼손하므로 반대한다.",
    leanYes: "R", leanNo: "W"
  },
  {
    id: "q3_9", axis: "axis3",
    question: "학생의 인권만큼이나 교권과 학교의 엄격한 규율이 바로 서야 올바른 교육 현장이 유지된다.",
    leanYes: "R", leanNo: "W"
  },
  {
    id: "q3_10", axis: "axis3",
    question: "대마초 합법화나 안락사 허용 등 개인의 신체적 자유와 결정권은 국가가 개입하지 말고 최대한 존중받아야 한다.",
    leanYes: "W", leanNo: "R"
  },
  {
    id: "q3_11", axis: "axis3",
    question: "과거의 낡은 헌법이나 제도는 현재 시대에 맞지 않다면 절차가 복잡하더라도 과감하게 뜯어고쳐야 한다.",
    leanYes: "W", leanNo: "R"
  },
  {
    id: "q3_12", axis: "axis3",
    question: "범죄자의 인권보다 강력한 처벌과 격리를 통한 시민의 안전 확보가 절대적으로 우선되어야 한다.",
    leanYes: "R", leanNo: "W"
  },

  // Axis 4 추가 문항 (외교/안보, 동맹/자주)
  {
    id: "q4_7", axis: "axis4",
    question: "미국 등 가치를 공유하는 전통적 동맹국과의 관계를 강화하는 것이 중국/러시아와의 실리적 외교보다 더 중요하다.",
    leanYes: "O", leanNo: "D"
  },
  {
    id: "q4_8", axis: "axis4",
    question: "적대국(예: 북한)에 대해서는 무조건적인 대화와 타협보다는 제재와 압박을 통해 굴복시키는 원칙적인 접근이 필요하다.",
    leanYes: "O", leanNo: "D"
  },
  {
    id: "q4_9", axis: "axis4",
    question: "국제 사회에서 강대국들의 눈치를 보기보다는 대한민국의 독자적인 목소리를 내고 자주국방을 실현해야 한다.",
    leanYes: "D", leanNo: "O"
  },
  {
    id: "q4_10", axis: "axis4",
    question: "주변 강대국들의 갈등 속에서 우리는 한쪽에 치우치지 않는 철저한 '균형 외교'를 유지해야 살아남을 수 있다.",
    leanYes: "D", leanNo: "O"
  },
  {
    id: "q4_11", axis: "axis4",
    question: "우방국이 방위비 대폭 인상 등 부당한 요구를 해오더라도, 동맹의 굳건함을 위해 어느 정도는 수용하는 것이 장기적으로 이득이다.",
    leanYes: "O", leanNo: "D"
  },
  {
    id: "q4_12", axis: "axis4",
    question: "역사적 과거사 문제(일본 등)가 아직 완전히 해결되지 않았더라도, 현재의 경제적/안보적 실익을 위해 과감하게 협력해야 한다.",
    leanYes: "D", leanNo: "O"
  }
];
