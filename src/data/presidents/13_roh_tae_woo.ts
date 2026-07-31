import { President } from "@/types/president";

export const rohTaeWoo: President = {
  id: "roh-tae-woo",
  name: "노태우",
  term: "1988-1993",
  party: "민주정의당 / 민주자유당",
  globalCounterparts: [
    { country: "미국", leader: "조지 H.W. 부시", term: "1989-1993" },
    { country: "일본", leader: "다케시타 노보루 / 가이후 도시키", term: "1987-1991" },
    { country: "북한", leader: "김일성", term: "1948-1994" }
  ],
  policies: [
    {
      id: "roh-northern-diplomacy",
      title: "북방외교 및 남북 기본합의서",
      category: "외교/안보",
      valueTag: "pro-market",
      fundingSource: "경제 협력 차관(대소련 경협차관 30억 달러 등) 제공",
      keyPersonnel: [
        { name: "박철언", role: "대통령정책보좌관" }
      ],
      context: {
        content: "동구권 붕괴와 냉전 종식이라는 급격한 국제 정세 변화 속 1988년 서울 올림픽의 성공적 개최",
        source: "외교부 외교사료관"
      },
      legislationFacts: [
        { date: "1989-02", description: "헝가리와 수교 (공산권 국가 최초)", source: "외교부" },
        { date: "1990-09", description: "소련과 공식 외교 관계 수립", source: "외교부" },
        { date: "1991-09", description: "남북한 UN 동시 가입", source: "통일부" },
        { date: "1991-12", description: "남북 기본합의서(남북 사이의 화해와 불가침 및 교류 협력에 관한 합의서) 채택", source: "국가법령정보센터" },
        { date: "1992-08", description: "중화인민공화국과 공식 수교", source: "외교부" }
      ],
      pros: [
        { content: "냉전 종식의 흐름을 빠르게 읽고 소련, 중국 등 기존 적성국들과 수교하여 외교 지평을 획기적으로 넓힘", source: "세종연구소 학술지" },
        { content: "남북한 UN 동시 가입과 남북 기본합의서 채택으로 한반도 평화 공존의 역사적 기틀을 마련", source: "통일연구원" },
        { content: "북방외교를 통해 새로운 수출 시장을 개척하여 이후 한국 경제 팽창의 발판을 제공", source: "KIEP 대외경제정책연구원" }
      ],
      cons: [
        { content: "중국과 수교하는 과정에서 오랜 우방이었던 대만(중화민국)과 일방적으로 단교하여 외교적 신뢰에 타격을 줌", source: "KCI 등재 외교학 논문" },
        { content: "소련과의 수교를 위해 대규모 경제 협력 차관을 무리하게 제공하여 이후 상환(불곰사업 등)에 어려움을 겪음", source: "한국국제정치학회" },
        { content: "보수 진영으로부터 지나친 유화 정책으로 북한의 체제 결속을 도왔다는 비판 존재", source: "현대북한연구 학술지" }
      ],
      indicators: {
        domestic: [
          { name: "북방국가와의 교역량 (1987 -> 1992)", value: "약 4배 이상 증가", source: "통계청", reportName: "수출입통계" }
        ],
        global: [
          { name: "UN 가입 결의안 (1991)", value: "총회 만장일치 통과", source: "UN", reportName: "UN General Assembly Resolutions" }
        ]
      },
      chart: {
        title: "소비자물가 및 주택가격 상승률 (%)",
        domesticLabel: "물가상승률",
        internationalLabel: "주택가격상승률",
        source: "통계청 / 국민은행",
        data: [
          { name: "1988", domestic: 7.1, international: 13.2 },
          { name: "1989", domestic: 5.7, international: 14.6 },
          { name: "1990", domestic: 8.6, international: 21.0 },
          { name: "1991", domestic: 9.3, international: -2.2 },
          { name: "1992", domestic: 6.2, international: -5.0 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "1987.6",
          name: "6월 민주항쟁 및 직선제 개헌",
          description: "전 국민적 민주화 요구로 인해 대통령 직선제로 헌법이 개정되고 제6공화국이 출범함.",
          source: "헌법재판소"
        },
        interpretationGuide: {
          viewpoint1: "군 출신임에도 불구하고 6·29 선언을 통해 민주주의를 수용하고, 북방외교를 통해 외교 지평을 획기적으로 넓혔다는 평가.",
          viewpoint2: "3당 합당으로 보수 기득권 연합을 형성하여 지역주의를 심화시켰고, 5공화국 청산에 소극적이었다는 비판."
        }
      },
      glossary: [
        {
          term: "북방외교",
          description: "냉전 체제 붕괴 시기에 공산권 및 사회주의 국가들과 국교를 수립하여 외교적 고립을 탈피하고 경제 협력을 확대한 정책입니다."
        }
      ],
        lineage: { prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" },
        frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 0 },
        mediaSnapshot: {
                    date: "1990.09.30",
                    conservative: { headline: "한소 수교 전격 타결, 너무 막대한 경제 협력 차관 부담", source: "조선일보" },
                    progressive: { headline: "북방 외교의 쾌거! 냉전 벽 허물고 모스크바와 손잡아", source: "경향신문" }
                  }
    },
    {
      id: "roh-housing-2million",
      title: "주택 200만 호 건설과 신도시 개발",
      category: "부동산/주거",
      valueTag: "pro-market",
      context: {
        content: "3저 호황 이후 시중 유동성 급증과 도시 집중화로 인한 주택 보급률 부족 및 극심한 전월세난, 집값 폭등",
        source: "국토연구원 주택정책사"
      },
      legislationFacts: [
        { date: "1988-02", description: "주택 200만 호 건설 계획 발표", source: "국가기록원" },
        { date: "1989-04", description: "분당, 일산, 평촌, 산본, 중동 등 1기 신도시 건설 발표", source: "국토교통부" },
        { date: "1989-12", description: "토지공개념 3법(택지소유상한법, 개발이익환수법, 토지초과이득세법) 제정", source: "국가법령정보센터" },
        { date: "1992-12", description: "주택 214만 호 건설 초과 달성", source: "건설부 백서" }
      ],
      pros: [
        { content: "단기간에 엄청난 물량을 공급하여 폭등하던 집값을 확실하게 안정시키고 전월세난을 해결함", source: "주택산업연구원" },
        { content: "1기 신도시 건설로 중산층의 자가 소유 비율을 크게 높이고 현대적인 주거 환경(아파트 문화)을 정착시킴", source: "한국주거학회" },
        { content: "토지공개념을 최초로 법제화하여 부동산 투기 억제를 위한 강력한 제도적 장치를 마련함", source: "KDI 경제정보센터" }
      ],
      cons: [
        { content: "동시다발적인 대규모 건설로 인해 시멘트, 철근 등 건설 자재 파동과 인건비 폭등을 유발함", source: "대한건설협회 통계" },
        { content: "바닷모래를 사용한 불량 아파트 논란과 날림 공사 등 부실 시공 문제가 사회적으로 크게 대두됨", source: "언론 보도 아카이브" },
        { content: "강력한 토지공개념 법안들이 훗날 대부분 위헌 또는 헌법불합치 판결을 받으며 사유재산권 침해 논란을 빚음", source: "헌법재판소 판례집" }
      ],
      indicators: {
        domestic: [
          { name: "전국 주택 보급률 (1987 -> 1992)", value: "69.2% -> 76.0%", source: "건설부", reportName: "주택통계요람" },
          { name: "전국 아파트 매매가격 증감률 (1991)", value: "-2.1% (하락 전환)", source: "한국주택은행", reportName: "주택가격동향" }
        ],
        global: [
          { name: "OECD 평균 주택공급 속도", value: "단기간 세계 최고 수준", source: "OECD", reportName: "Housing Market Trends" }
        ]
      },
        lineage: { prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" },
        frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 0 },
        mediaSnapshot: {
                    date: "1989.04.28",
                    conservative: { headline: "분당·일산 신도시 건설, 강남 집값 잡기엔 역부족", source: "조선일보" },
                    progressive: { headline: "주택 200만호 건설 본격화, 서민 내 집 마련 꿈 앞당긴다", source: "한국일보" }
                  }
    }
  ],
  additionalFacts: [
    { date: "1988-01", description: "제6공화국 헌법(제9차 개헌) 시행 및 헌법재판소 신설", source: "헌법재판소" },
    { date: "1988-11", description: "국회 광주특위 및 5공 비리 청문회 개최", source: "대한민국 국회" },
    { date: "1989-01", description: "해외여행 전면 자유화 시행", source: "외교부" },
    { date: "1989-05", description: "전교조(전국교직원노동조합) 결성 및 대규모 해직 사태", source: "교육부" },
    { date: "1990-01", description: "3당 합당 (민주정의당, 통일민주당, 신민주공화당) 선언", source: "국가기록원" },
    { date: "1990-12", description: "노소영-최태원 결혼 (정경유착 논란의 시발점)", source: "언론 보도 종합" },
    { date: "1991-03", description: "낙동강 페놀 오염 사건 발생", source: "환경부" },
    { date: "1992-08", description: "최초의 우리별 1호 인공위성 발사 성공", source: "한국항공우주연구원" }
  ],
  coreDNA: "MARO",
  promises: [
    {
      promise: "민주화 완성 및 직선제 통한 권력 위임",
      target: "6·29 선언 이행 (대통령 직선제 개헌 수락)",
      result: "1987년 10월 헌법개정으로 직선제 확립. 6학년 만에 진정한 민주주의 체제로 이행",
      status: "achieved",
      source: "헌법재판소"
    },
    {
      promise: "북방외교 및 사회주의 국가들과 국교 정상화",
      target: "소련·중국 등과 수교",
      result: "1990년 한소수교, 1992년 한중수교 성사. 남북 유엔 동시 가입(1991년)",
      status: "achieved",
      source: "외교부"
    },
    {
      promise: "200만 호 주택 공급 계획",
      target: "임기내 200만 호 주택 공급",
      result: "수도권 신도시(1기, 2기 신도시) 개발로 일정 수준 달성. 단 가격은 오히려 급등",
      status: "partial",
      source: "국토교통부"
    }
  ],
  keywords: ["민주화", "보통사람", "북방외교", "신도시", "보통사람", "올림픽성공"],
  approvalRatings: [
    { date: "1988-02", rating: 56, event: "취임 시점 — 6·29 선언의 성과로 고막 출발", isHighlight: true },
    { date: "1989-03", rating: 40, event: "수공업 파업 확산 및 경제 불안" },
    { date: "1990-01", rating: 55, event: "3당합당 이후 거대여당 출범", isHighlight: false },
    { date: "1991-09", rating: 42, event: "남북 동시 유엔 가입 성공" },
    { date: "1992-12", rating: 30, event: "임기 말 비자금 로비 의혹 등 레임덕", isHighlight: true }
  ],
  legacies: [
    {
      title: "수도권 1기 신도시 (1989~1992년)",
      description: "분당, 일산, 평촌, 산본, 중동 등 5대 신도시 개발은 현재 수도권 주거 네트워크의 핵심을 이루며, 이후 경기도 신도시 확장의 원형이 됨.",
      source: "국토교통부"
    },
    {
      title: "한중·한소 수교의 동력 (1991년 소련·중국 수교)",
      description: "1990년 한소수교, 1992년 한중수교는 현재 중국과의 무역교류 및 지정학적 긴장 관리의 제도적 틀로 작동 중.",
      source: "외교부"
    }
  ],
    cabinetRisk: { avgTenureMonths: 15, initialDropoutRate: 20 }
};
