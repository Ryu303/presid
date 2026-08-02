export type QuizAxis = "axis1" | "axis2" | "axis3" | "axis4";

export interface QuizQuestion {
  id: string;
  axis: QuizAxis;
  question: string;
  leanYes: string; // The DNA letter that gets points for 'Agree'
  leanNo: string;  // The DNA letter that gets points for 'Disagree'
  relatedPresident?: string; // 연관 대통령
  relatedPolicy?: string;    // 연관 정책
  source?: string;           // 데이터 출처
}

export const quizQuestions: QuizQuestion[] = [
  // 축 1: M(Market) vs G(Guardian) - 경제/산업, 부동산/주거, 대기업/시민
  {
    id: "q1_1", axis: "axis1",
    question: "중고거래에서 인기 아이돌 콘서트 티켓을 10배 비싸게 파는 암표상을 보았을 때, '수요가 있으니 비싸지는 건 당연하다'며 시장에 맡기기보다 '국가나 플랫폼이 나서서 철저히 단속해야 한다'고 생각한다.",
    leanYes: "G", leanNo: "M",
    relatedPresident: "제16대 노무현 대통령",
    relatedPolicy: "부동산 투기 및 암표 강력 단속 의지",
    source: "국가기록원 경제정책 아카이브 (2005)"
  },
  {
    id: "q1_2", axis: "axis1",
    question: "단골 동네 빵집 바로 옆에 거대한 대형 프랜차이즈 빵집이 들어온다고 할 때, 소비자의 선택권을 존중하기보다 동네 상권을 지키기 위해 프랜차이즈 입점을 법으로 제한해야 한다.",
    leanYes: "G", leanNo: "M",
    relatedPresident: "제19대 문재인 대통령",
    relatedPolicy: "골목상권 보호 및 대형마트 규제법",
    source: "소상공인 보호 및 지원에 관한 법률 (2018)"
  },
  {
    id: "q1_3", axis: "axis1",
    question: "회사에서 직원들의 연봉을 정할 때, 철저하게 개인의 실적에 따라 연봉 차이가 10배 이상 나더라도 그것이 공정하고 당연한 결과라고 생각한다.",
    leanYes: "M", leanNo: "G",
    relatedPresident: "제17대 이명박 대통령",
    relatedPolicy: "성과주의 및 기업 규제 완화 (비즈니스 프렌들리)",
    source: "대통령비서실 국정과제 백서 (2008)"
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
    question: "오랫동안 사이가 안 좋았던 이웃(형제)과 대화가 필요할 때, 과거의 잘못에 대한 확실한 사과를 고집하기보다, 일단 먼저 유연하게 다가가 밥부터 먹으며 관계를 푸는 것이 현실적이다.",
    leanYes: "D", leanNo: "O" // O (Hardline/Principle - Conservative), D (Engagement - Progressive)
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
  // Axis 1 추가 문항 (경제/산업) -> 일상/게임/비즈니스 은유
  {
    id: "q1_7", axis: "axis1",
    question: "가뭄으로 동네 우물이 말라갈 때, 생수 가게 주인이 물값을 5배로 올린다면, 마을 이장이 나서서 강제로 예전 가격에 팔도록 통제해야 한다.",
    leanYes: "G", leanNo: "M"
  },
  {
    id: "q1_8", axis: "axis1",
    question: "마을 공동 버스가 매달 적자를 낼 때, 모두의 회비(세금)로 무작정 빵꾸를 메우기보다는, 철저히 이용자 부담 원칙에 따라 탑승 요금을 대폭 올려 흑자로 전환해야 한다.",
    leanYes: "M", leanNo: "G"
  },
  {
    id: "q1_9", axis: "axis1",
    question: "동네 상권을 살린답시고 가장 장사가 잘 되는 대형 맛집의 주말 영업을 강제로 쉬게 만드는 것은 오히려 손님들의 불편만 초래할 뿐이다.",
    leanYes: "M", leanNo: "G"
  },
  {
    id: "q1_10", axis: "axis1",
    question: "셰어하우스를 쓸 때, 공용 공간을 유독 자주 어지럽히는 룸메이트에게는 징벌적인 청소비(벌금)를 무겁게 매겨야 한다.",
    leanYes: "G", leanNo: "M"
  },
  {
    id: "q1_11", axis: "axis1",
    question: "게임 내에서 남들보다 열심히 사냥해서 희귀 아이템을 수십 개 보유한 랭커에게 '아이템 독점'이라며 과도한 보관료(세금)를 물리는 것은 부당하다.",
    leanYes: "M", leanNo: "G"
  },
  {
    id: "q1_12", axis: "axis1",
    question: "동아리에서 알바를 고용할 때, 동아리 재정 상태가 아무리 나빠도 시급 1만 원 이하로는 절대 사람을 써서는 안 된다는 강력한 하한선을 두어야 한다.",
    leanYes: "G", leanNo: "M"
  },
  
  // Axis 2 추가 문항 (성장/분배, 복지/노동) -> 일상/게임/비즈니스 은유
  {
    id: "q2_7", axis: "axis2",
    question: "동아리 예산을 지원할 때, 다양한 취미반에 고루고루 적은 돈을 나눠주기보다 이번 달 대회 우승 확률이 가장 높은 핵심 엘리트 팀에 예산을 몽땅 몰아주어야 한다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_8", axis: "axis2",
    question: "팀 프로젝트 마감일이 다가올 때, 실력이 부족한 팀원이 지연을 유발하더라도 그를 매정하게 버리고 에이스들끼리 달리기보다는, 끝까지 다 함께 책임지고 이끌고 가는 것이 진정한 팀워크다.",
    leanYes: "B", leanNo: "A"
  },
  {
    id: "q2_9", axis: "axis2",
    question: "회사 부서에 여윳돈이 생겼다면, 기약 없는 장기 실적을 위해 삭막하게 업무 장비를 사기보다는, 당장 다 같이 회식을 하며 그간의 노고를 고루 보상받고 나누는 것이 더 가치 있다.",
    leanYes: "B", leanNo: "A"
  },
  {
    id: "q2_10", axis: "axis2",
    question: "임시 프로젝트 스태프들을 특별한 심사 없이 무조건 정직원으로 전환해 주면, 조직의 긴장감이 떨어지고 결국 회사 경쟁력이 하락할 것이다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_11", axis: "axis2",
    question: "길드 내에서 자원을 똑같이 나누는 것보다, 일단 길드장이 서버 1위의 엄청난 부자가 되어야 길드원들에게 콩고물이라도 떨어져 혜택을 본다.",
    leanYes: "A", leanNo: "B"
  },
  {
    id: "q2_12", axis: "axis2",
    question: "파티 사냥 속도가 조금 느려지고 답답하더라도, 장비가 안 좋은 초보 힐러까지 꼼꼼히 챙겨서 한 명의 낙오자 없이 다 같이 생존하는 것이 훨씬 중요하다.",
    leanYes: "B", leanNo: "A"
  },

  // Axis 3 추가 문항 (사회/문화, 규범/혁신) -> 일상/게임/비즈니스 은유
  {
    id: "q3_7", axis: "axis3",
    question: "온라인 게임에서 고의로 아군을 방해하고 욕설을 일삼는 '악성 트롤러'는 어떠한 선처도 없이 즉각 영구 계정 정지 처분을 내려야 한다.",
    leanYes: "R", leanNo: "W"
  },
  {
    id: "q3_8", axis: "axis3",
    question: "전통 있는 독서 모임에서 갑자기 '웹소설'이나 '만화책'도 허용하자는 파격적인 의견이 나오면, 모임의 본질과 격이 떨어지므로 강력히 반대할 것이다.",
    leanYes: "R", leanNo: "W"
  },
  {
    id: "q3_9", axis: "axis3",
    question: "동아리가 창의적이고 활기차게 굴러가려면, 낡고 획일적인 회장의 엄격한 규칙을 강요하기보다는 동아리원 개개인의 개성과 사정을 최대한 유연하게 보장해 주어야 한다.",
    leanYes: "W", leanNo: "R"
  },
  {
    id: "q3_10", axis: "axis3",
    question: "타인에게 물리적인 피해만 안 준다면, 심야에 혼자 피시방에서 뭘 하든 어떤 옷을 입든 규칙으로 절대 터치해서는 안 된다.",
    leanYes: "W", leanNo: "R"
  },
  {
    id: "q3_11", axis: "axis3",
    question: "10년 전 선배들이 만들어 둔 동호회 회칙이 지금의 상황과 안 맞아 불편하다면, 절차가 아무리 번거롭고 어른들이 화를 내도 당장 다 뒤엎고 새로 써야 한다.",
    leanYes: "W", leanNo: "R"
  },
  {
    id: "q3_12", axis: "axis3",
    question: "모임에 지속적으로 분란을 일으키는 빌런이 있다면, 그 사람의 해명이나 안타까운 사정을 듣기 전에 일단 즉각 강퇴시키고 단톡방을 잠그는 것이 평화의 지름길이다.",
    leanYes: "R", leanNo: "W"
  },

  // Axis 4 추가 문항 (외교/안보, 동맹/자주) -> 일상/게임/비즈니스 은유
  {
    id: "q4_7", axis: "axis4",
    question: "내가 식당을 운영할 때, 당장 큰돈을 쓰는 진상 '신규 손님'의 비위를 맞추기보다, 10년 넘게 묵묵히 찾아와 준 '단골손님'과의 의리를 지키는 것이 장기적으로 무조건 맞다.",
    leanYes: "O", leanNo: "D"
  },
  {
    id: "q4_8", axis: "axis4",
    question: "사이 안 좋은 옆 반과 체육대회에서 크게 시비가 붙었을 때, 일단 굽히고 좋게 대화로 풀기보다는, 우리 반의 힘과 세력을 과시해서 기선제압을 확실히 해야 한다.",
    leanYes: "O", leanNo: "D"
  },
  {
    id: "q4_9", axis: "axis4",
    question: "회사를 다닐 때, 안정적이지만 거대한 대기업의 하청업체 직원으로 평생 눈치 보며 살기보다, 당장 굶고 힘들더라도 내 이름이 박힌 독자적인 브랜드를 창업하고 싶다.",
    leanYes: "D", leanNo: "O"
  },
  {
    id: "q4_10", axis: "axis4",
    question: "직장 내에서 파워가 쎈 두 파벌(A상무파 vs B전무파)이 피 터지게 싸울 때, 어느 한쪽에 줄을 서기보다는 눈치를 보며 철저히 양쪽 모두와 적당히 친하게 지내는 '박쥐' 전략이 현명하다.",
    leanYes: "D", leanNo: "O"
  },
  {
    id: "q4_11", axis: "axis4",
    question: "정말 친하고 나에게 큰 도움을 줬던 절친이 가끔 무리한 부탁(갑질)을 해오더라도, 우리의 깊은 우정을 깨지 않기 위해 어느 정도는 웃으며 참아주는 것이 낫다.",
    leanYes: "O", leanNo: "D"
  },
  {
    id: "q4_12", axis: "axis4",
    question: "과거에 나에게 큰 금전적 사기를 치고 상처를 줬던 원수 같은 동료라도, 지금 당장 진행하는 큰 프로젝트의 엄청난 보너스 수익을 위해서라면 쿨하게 다시 손잡고 협력할 수 있다.",
    leanYes: "D", leanNo: "O"
  }
];
