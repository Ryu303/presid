import { President } from "@/types/president";

export const leeMyungBak: President = {
  id: "lee-myung-bak",
  name: "이명박",
  term: "2008-2013",
  party: "한나라당 / 새누리당",
  globalCounterparts: [
    { country: "미국", leader: "조지 W. 부시 / 버락 오바마", term: "2001-2009 / 2009-2017" },
    { country: "일본", leader: "아소 다로 / 하토야마 유키오 / 노다 요시히코", term: "2008-2012" },
    { country: "북한", leader: "김정일 / 김정은", term: "1994-2011 / 2011-현재" }
  ],
  cabinetRisk: { avgTenureMonths: 18.2, initialDropoutRate: 20 },
  policies: [
    {
      id: "lmb-global-crisis",
      title: "글로벌 금융위기 극복과 G20 정상회의",
      category: "경제/산업",
      valueTag: "pro-market",
      context: {
        content: "2008년 미국 리먼 브라더스 파산으로 촉발된 전대미문의 글로벌 금융위기 및 환율 급등 (환란 공포)",
        source: "한국은행 경제통계시스템"
      },
      legislationFacts: [
        { date: "2008-10", description: "한미 통화스위프(300억 달러 규모) 전격 체결", source: "한국은행 / 미국 연방준비제도" },
        { date: "2009-03", description: "잡셰어링(일자리 나누기) 및 희망근로 프로젝트 추진", source: "기획재정부" },
        { date: "2010-11", description: "서울 G20 정상회의 성공적 개최 (비(非)G8 국가 최초)", source: "외교부 백서" }
      ],
      pros: [
        { content: "한미, 한일 통화스위프를 신속하게 체결하여 외환시장의 패닉을 조기에 진화하고 국가 부도 위기를 막음", source: "KDI 국제정책대학원" },
        { content: "OECD 국가 중 가장 빠르게 금융위기 이전의 경제성장률을 회복하며 위기 관리 능력을 국제적으로 인정받음", source: "OECD Economic Outlook" },
        { content: "G20 정상회의를 성공적으로 개최하여 글로벌 경제 질서 재편 과정에서 룰 메이커(Rule Maker)로 도약", source: "국립외교원" }
      ],
      cons: [
        { content: "위기 극복 과정에서 고환율 정책(MB 물가)을 고수하여 서민 물가 폭등과 실질 소득 감소를 초래함", source: "한국경제학회보" },
        { content: "대기업 중심의 낙수효과(비즈니스 프렌들리)에 의존하여 중소기업과의 격차 및 소득 양극화가 오히려 심화됨", source: "KCI 등재 경제사 논문" },
        { content: "미국산 쇠고기 수입 재개 과정에서 국민적 소통 부재로 대규모 촛불집회를 자초하여 국정 동력을 조기에 상실함", source: "한국사회학회" }
      ],
      indicators: {
        domestic: [
          { name: "경제성장률 (2009 -> 2010)", value: "0.8% -> 6.8% (V자 반등)", source: "한국은행", reportName: "국민계정" }
        ],
        global: [
          { name: "글로벌 금융위기 회복 속도", value: "OECD 국가 중 1위", source: "OECD", reportName: "Crisis Response and Recovery" }
        ]
      },
      chart: {
        title: "경제성장률 및 실업률 추이 (%)",
        domesticLabel: "경제성장률",
        internationalLabel: "실업률",
        source: "한국은행 / 통계청",
        data: [
          { name: "2008", domestic: 3.0, international: 3.2 },
          { name: "2009", domestic: 0.8, international: 3.6 },
          { name: "2010", domestic: 6.8, international: 3.7 },
          { name: "2011", domestic: 3.7, international: 3.4 },
          { name: "2012", domestic: 2.4, international: 3.2 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "2008-09",
          name: "글로벌 금융위기 (리먼 브라더스 사태)",
          description: "미국 서브프라임 모기지 부실로 촉발된 전 세계적 금융 위기와 극심한 경기 침체.",
          source: "기획재정부"
        },
        interpretationGuide: {
          viewpoint1: "글로벌 금융위기라는 초유의 사태를 극복하기 위해 대규모 국책 사업과 기업 중심의 성장을 신속히 추진하여 거시 경제를 방어했다는 해석.",
          viewpoint2: "위기 극복을 명분으로 재벌 및 대기업 중심의 특혜성 감세를 추진하여 양극화를 심화시키고 재정 건전성을 악화시켰다는 해석."
        }
      },
      glossary: [
        {
          term: "낙수효과",
          description: "대기업과 고소득층의 소득과 부가 먼저 늘어나면, 그에 따른 투자와 소비 증가를 통해 자연스럽게 중소기업과 저소득층에게도 혜택이 돌아간다는 경제 이론입니다."
        }
      ],
        lineage: { prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" },
        frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 0 },
        mediaSnapshot: {
                    date: "YYYY.MM.DD",
                    conservative: { headline: "관련 보도 데이터 수집 중...", source: "보수 매체" },
                    progressive: { headline: "관련 보도 데이터 수집 중...", source: "진보 매체" }
                  }
    },
    {
      id: "lmb-four-rivers",
      title: "4대강 살리기 사업",
      category: "부동산/주거",
      valueTag: "pro-market",
      fundingSource: "국고 투입(약 14조 원) 및 한국수자원공사 부채 전가(약 8조 원)",
      keyPersonnel: [
        { name: "정종환", role: "국토해양부 장관" },
        { name: "심명필", role: "4대강 살리기 추진본부장" }
      ],
      
      lineage: { next: "창조경제 (박근혜 정부)" },
      frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 14 },
      mediaSnapshot: {
        date: "2009.06.09",
        conservative: { headline: "4대강, 생명 살리고 지역경제 깨운다", source: "조선일보" },
        progressive: { headline: "환경 대재앙 부를 4대강 삽질... 혈세 22조 증발 위기", source: "한겨레" }
      },
      context: {
        content: "만성적인 홍수/가뭄 피해 예방 및 글로벌 금융위기 속 내수 경기 진작과 일자리 창출(한국형 뉴딜) 목적",
        source: "국토해양부 4대강 마스터플랜"
      },
      legislationFacts: [
        { date: "2009-06", description: "4대강 살리기 마스터플랜 최종 확정 및 발표", source: "국가기록원" },
        { date: "2009-11", description: "4대강(한강, 낙동강, 금강, 영산강) 16개 보 건설 공사 일제 착공", source: "국토교통부" },
        { date: "2011-10", description: "4대강 살리기 사업 주요 공정 사실상 완공", source: "감사원 감사보고서" }
      ],
      pros: [
        { content: "대규모 보 건설과 준설을 통해 하천의 저수 용량을 획기적으로 늘려 홍수 방어 능력과 수자원 확보량 증가", source: "한국수자원학회" },
        { content: "전국을 잇는 자전거길과 수변 공원 조성으로 국민들에게 새로운 레저 공간을 제공함", source: "국토연구원" },
        { content: "토목 공사를 통해 금융위기 당시 급격히 침체되던 내수 건설 경기를 방어하는 완충 역할을 수행", source: "건설산업연구원" }
      ],
      cons: [
        { content: "수질 개선 목적과 달리 보 건설로 인해 유속이 느려져 심각한 조류 대발생(녹조) 및 수질 악화 유발", source: "환경운동연합 / 환경부 조사" },
        { content: "총 22조 원이라는 막대한 국가 예산이 투입되었으나 경제성(B/C)과 타당성 평가가 졸속으로 처리됨", source: "감사원 4대강 사업 감사 결과" },
        { content: "사업을 무리하게 속도전으로 밀어붙이며 반대 여론을 탄압하고 하도급 비리 등 건설사 담합 의혹 발생", source: "공정거래위원회 / 참여연대" }
      ],
      indicators: {
        domestic: [
          { name: "수자원 확보량", value: "약 13억 톤 추가 확보", source: "국토해양부", reportName: "4대강 살리기 사업 백서" },
          { name: "녹조(조류경보) 발생 일수", value: "사업 전 대비 크게 증가", source: "환경부", reportName: "수질측정망 데이터" }
        ],
        global: [
          { name: "UN 환경계획(UNEP) 평가", value: "녹색 성장(Green Growth) 정책의 일환으로 소개됨", source: "UNEP", reportName: "Overview of the Republic of Korea's Green Growth" }
        ]
      }
    }
  ],
  additionalFacts: [
    { date: "2008-02", description: "정부조직 개편 (해양수산부, 정보통신부 폐지 및 통폐합)", source: "행정안전부" },
    { date: "2008-05", description: "미국산 소고기 수입 반대 촛불집회 시작", source: "경찰청" },
    { date: "2008-08", description: "저탄소 녹색성장 비전 선포", source: "환경부" },
    { date: "2009-05", description: "노무현 전 대통령 서거", source: "국가기록원" },
    { date: "2009-12", description: "UAE 원전 수출 계약 체결", source: "산업통상자원부" },
    { date: "2010-03", description: "천안함 피격 사건 발생", source: "국방부" },
    { date: "2010-11", description: "G20 서울 정상회의 개최", source: "외교부" },
    { date: "2011-08", description: "무상급식 주민투표 (오세훈 서울시장 사퇴)", source: "중앙선거관리위원회" },
    { date: "2012-07", description: "세종특별자치시 공식 출범", source: "세종특별자치시" }
  ],
  coreDNA: "MAWO",
  promises: [
    {
      promise: "747 공약 (7% 성장, 4만 달러 소득, 7대 강국)",
      target: "연평균 GDP 성장률 7% / 1인당 GNI 4만 달러",
      result: "임기 평균 GDP 성장률 약 3.2%, 2012년 1인당 GNI 약 2만 4천 달러",
      status: "failed",
      source: "한국은행 국민계정 / KDI"
    },
    {
      promise: "대운하(이후 4대강 살리기로 전환) 사업 추진",
      target: "경인·경부 대운하 건설",
      result: "대운하 계획은 공식 철회, 4대강 살리기 사업으로 변경하여 추진 (22조 원 투입)",
      status: "partial",
      source: "감사원 / 국토해양부"
    },
    {
      promise: "글로벌 금융위기 극복 및 V자 반등",
      target: "위기 조기 극복",
      result: "2009년 성장률 0.8%로 OECD 최저 하락 후, 2010년 6.8% 반등 — OECD 국가 중 가장 빠른 회복",
      status: "achieved",
      source: "한국은행 / OECD Economic Outlook"
    },
    {
      promise: "원전 수출 강국 도약",
      target: "2030년까지 원전 80기 수출",
      result: "2009년 UAE 바라카 원전 수출 성공(186억 달러). 후속 계약은 당초 목표 대비 부진",
      status: "partial",
      source: "산업통상자원부 / 한국수력원자력"
    }
  ],
  keywords: ["747공약", "녹색성장", "비즈니스프렌들리", "4대강", "G20", "원전수출"],
  approvalRatings: [
    { date: "2008-02", rating: 52, event: "취임", isHighlight: false },
    { date: "2008-05", rating: 21, event: "미국산 소고기 수입 반대 촛불집회 — 역대 최저", isHighlight: true },
    { date: "2008-09", rating: 25 },
    { date: "2009-06", rating: 42, event: "경기 회복 기대감" },
    { date: "2010-06", rating: 55, event: "G20 의장국, 천안함 외교적 대응 — 최고점", isHighlight: true },
    { date: "2011-06", rating: 40 },
    { date: "2012-03", rating: 38 },
    { date: "2012-12", rating: 29, event: "자원외교 비리 의혹 및 레임덕 심화", isHighlight: false }
  ],
  legacies: [
    {
      title: "인천국제공항 확장 및 허브 공항 위상 강화",
      description: "이명박 정부 시기 추진된 인천공항 2단계 확장(2008)과 공항 운영 민영화 추진이 현재 인천공항의 세계 최고 수준 서비스와 환승 허브 위상의 물리적 기초를 마련함.",
      source: "인천국제공항공사 / 국토교통부"
    },
    {
      title: "UAE 원전 수출 계약 (바라카 원전)",
      description: "2009년 체결된 UAE 바라카 원전 건설 계약은 대한민국 원전 수출의 최초 사례로, 현재도 한국수력원자력이 운영·정비를 담당하며 유효한 국가 에너지 외교 자산으로 기능 중.",
      source: "산업통상자원부 / 한국수력원자력"
    }
  ]
};
