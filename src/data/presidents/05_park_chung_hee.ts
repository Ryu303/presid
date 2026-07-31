import { President } from "@/types/president";

export const parkChungHee: President = {
  id: "park-chung-hee",
  name: "박정희",
  term: "1963-1979",
  party: "민주공화당",
  globalCounterparts: [
    { country: "미국", leader: "린든 B. 존슨 / 리처드 닉슨 / 제럴드 포드 / 지미 카터", term: "1963-1981" },
    { country: "일본", leader: "사토 에이사쿠 / 다나카 가쿠에이", term: "1964-1974" },
    { country: "북한", leader: "김일성", term: "1948-1994" }
  ],
  policies: [
    {
      id: "park-economic-development",
      title: "경제개발 5개년 계획과 수출 주도 산업화",
      category: "경제/산업",
      valueTag: "pro-market",
      context: {
        content: "만성적인 빈곤과 실업, 미국 원조 축소에 대응하여 자립 경제 구축의 필요성 대두",
        source: "한국은행 경제통계시스템(ECOS)"
      },
      legislationFacts: [
        { date: "1962-01", description: "제1차 경제개발 5개년 계획 발표 (장면 내각 초안 수정)", source: "국가기록원" },
        { date: "1964-12", description: "수출 1억 달러 달성 및 수출의 날 제정", source: "한국무역협회" },
        { date: "1970-07", description: "경부고속도로 전 구간 개통", source: "국토교통부" },
        { date: "1973-01", description: "중화학공업 육성 선언", source: "대통령기록관" }
      ],
      pros: [
        { content: "한강의 기적이라 불리는 고도 성장을 달성하여 최빈국에서 중진국으로 도약", source: "KDI 경제발전경험 공유사업 보고서" },
        { content: "경부고속도로 등 국가 기간망 확충과 포항제철 건립으로 중화학공업 기반 구축", source: "한국경제사학회" },
        { content: "수출 중심의 경제 구조로 글로벌 시장에 성공적으로 편입", source: "대외경제정책연구원(KIEP)" }
      ],
      cons: [
        { content: "저임금·장시간 노동에 의존하여 노동자들의 인권과 처우가 철저히 억압됨 (전태일 열사 사건 등)", source: "민주화운동기념사업회" },
        { content: "정경유착 및 재벌 중심의 불균형 성장으로 부와 소득의 심각한 불평등 초래", source: "KCI 등재 경제학 논문" },
        { content: "무리한 중화학공업 중복 투자로 1970년대 후반 심각한 인플레이션과 경제 위기 촉발", source: "한국은행 발간자료" }
      ],
      indicators: {
        domestic: [
          { name: "수출액 (1962 -> 1979)", value: "5천만 -> 150억 달러", source: "한국무역협회", reportName: "무역통계연보" },
          { name: "1인당 국민소득 (1962 -> 1979)", value: "87 -> 1,693 달러", source: "한국은행", reportName: "국민소득통계" }
        ],
        global: [
          { name: "연평균 경제성장률 (1963-1979)", value: "약 9.3%", source: "World Bank", reportName: "World Development Indicators" }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "1972.10",
          name: "10월 유신",
          description: "박정희 대통령이 장기 집권을 위해 헌법을 개정하고 비상계엄령을 선포한 사건.",
          source: "국가기록원"
        },
        interpretationGuide: {
          viewpoint1: "중화학 공업화 육성과 안보 위기 극복을 위해 강력하고 안정적인 리더십이 불가피했다는 논리.",
          viewpoint2: "경제 성장을 명분으로 국민의 기본권을 탄압하고 민주주의를 훼손한 독재 체제라는 비판."
        }
      },
      glossary: [
        {
          term: "경제개발 5개년 계획",
          description: "국가 주도로 경제성장률 목표를 설정하고 전략 산업을 집중 육성하는 중장기 경제 정책입니다. 제1차(1962~1966)부터 제4차(1977~1981)까지 추진되었습니다."
        },
        {
          term: "중화학공업 육성",
          description: "1973년 박정희 대통령의 선언으로 시작되었으며, 철강, 비철금속, 기계, 조선, 전자, 화학 등 6대 핵심 산업을 집중적으로 키워 수출 구조를 고도화한 정책입니다."
        },
        {
          term: "10월 유신",
          description: "1972년 10월 17일, 박정희 대통령이 장기 집권을 위해 국회를 해산하고 비상계엄령을 선포한 뒤 헌법을 개정한 사건입니다. 대통령의 권한이 절대적으로 강화되었습니다."
        },
        {
          term: "전태일 열사 사건",
          description: "1970년 평화시장 재단사였던 전태일이 '근로기준법을 준수하라'며 분신 항거한 사건으로, 한국 노동운동의 상징적인 출발점이 되었습니다."
        }
      ],
      lineage: { prev: "이전 정책 (윤보선 경제계획 초안)", next: "다음 정책 (전두환 3저 호황)" },
        mediaSnapshot: {
                    date: "1962.01.14",
                    conservative: { headline: "제1차 경제개발 5개년 계획 발표, 외자 의존도 너무 높아", source: "동아일보" },
                    progressive: { headline: "자립경제 향한 5개년 계획 시동, 조국 근대화의 신호탄", source: "서울신문" }
                  }
    },
    {
      id: "park-saemaul",
      title: "새마을운동 및 농어촌 개발",
      category: "사회/문화",
      valueTag: "pro-market",
      context: {
        content: "공업화 과정에서 도농 간 소득 격차가 심화되고 농촌 인구가 도시로 이탈하는 현상 발생",
        source: "농림수산식품부 통계"
      },
      legislationFacts: [
        { date: "1970-04", description: "박정희 대통령, 새마을운동 제창", source: "대통령기록관" },
        { date: "1971-01", description: "전국 마을에 시멘트 무상 배급 및 환경 개선 사업 시작", source: "국가기록원" },
        { date: "1973-11", description: "새마을지도자 연수원 개원 및 의식 교육 강화", source: "행정안전부 자료" }
      ],
      pros: [
        { content: "초가지붕 개량, 마을길 확장 등 농촌의 낙후된 생활 환경을 획기적으로 현대화", source: "한국농촌경제연구원" },
        { content: "농민들에게 '하면 된다'는 자조, 자립, 협동 정신을 심어주어 패배주의 극복", source: "새마을운동중앙회 백서" },
        { content: "이후 UN 등 여러 국제기구에서 개발도상국의 성공적인 농촌 개발 모델로 채택", source: "UN 경제사회이사회 보고서" }
      ],
      cons: [
        { content: "하향식(Top-down) 관변 운동으로 진행되어 농민의 자율성보다 획일적인 강요가 우선됨", source: "KCI 등재 사회학 논문" },
        { content: "전통 문화를 '미신'이나 '구습'으로 치부하여 농촌의 고유한 전통과 미풍양속 훼손", source: "한국문화인류학회" },
        { content: "유신 체제를 정당화하고 농촌 지지 기반을 다지기 위한 정치적 도구로 활용되었다는 비판", source: "한국정치학회보" }
      ],
      indicators: {
        domestic: [
          { name: "농가 지붕 개량률 (1977)", value: "약 98%", source: "내무부", reportName: "새마을운동 추진실적" }
        ],
        global: [
          { name: "농촌 인프라 개선", value: "개도국 모범 사례 선정", source: "UN", reportName: "농촌개발 보고서" }
        ]
      },
      glossary: [
        {
          term: "새마을운동",
          description: "1970년부터 범국가적으로 추진된 농촌 근대화 및 지역 개발 운동으로, '근면, 자조, 협동'을 기본 정신으로 내세웠습니다."
        },
        {
          term: "하향식(Top-down) 운동",
          description: "주민들의 자발적인 참여로 아래에서부터 시작된 것이 아니라, 국가 권력이나 관료 조직이 주도하여 위에서 아래로 지시가 하달되는 방식을 의미합니다."
        },
        {
          term: "관변 운동",
          description: "정부나 국가 기관이 정치적 목적을 띠고 조직하거나 주도하여 벌이는 사회 운동을 비판적으로 이르는 말입니다."
        }
      ],
      lineage: { prev: "이전 정책 (데이터 없음)", next: "다음 정책 (데이터 없음)" },
        mediaSnapshot: {
                    date: "1970.04.23",
                    conservative: { headline: "관 주도 새마을운동, 농민 자율성 훼손 우려", source: "동아일보" },
                    progressive: { headline: "우리도 한번 잘살아보세! 농촌 근대화의 횃불 점화", source: "조선일보" }
                  }
    },
    {
      id: "park-medical-insurance",
      title: "의료보험법 제정 및 제한적 시행",
      category: "복지/노동",
      valueTag: "pro-market",
      fundingSource: "가입자 기여금(보험료) 및 노사 분담금 기반 징수",
      keyPersonnel: [
        { name: "신현확", role: "보건사회부 장관" }
      ],
      context: {
        content: "경제 성장에 따른 국민의 의료 수요 증가와 최소한의 사회 안전망 구축 필요성 대두",
        source: "보건복지부 연혁 자료"
      },
      legislationFacts: [
        { date: "1963-12", description: "의료보험법 최초 제정 (임의 가입 방식)", source: "국가법령정보센터" },
        { date: "1976-12", description: "의료보험법 전면 개정 (강제 가입 방식으로 전환)", source: "국가법령정보센터" },
        { date: "1977-07", description: "500인 이상 사업장 및 공업단지 근로자 대상 의료보험 최초 시행", source: "국민건강보험공단 30년사" }
      ],
      pros: [
        { content: "대한민국 역사상 처음으로 현대적인 의미의 건강보험 제도를 법제화하고 기틀을 마련함", source: "한국보건사회연구원" },
        { content: "경제 성장과 함께 증가하던 산업 재해 및 근로자들의 의료비 부담을 일부 완화함", source: "한국사회복지학회" },
        { content: "비록 제한적이었으나, 이후 전 국민 건강보험으로 확대되는 중요한 정책적 마중물 역할을 함", source: "건강보험심사평가원 통계" }
      ],
      cons: [
        { content: "초기에는 500인 이상 대기업 사업장 등 극히 일부 계층에만 혜택이 집중되어 의료 양극화를 오히려 심화시킴", source: "KCI 등재 보건행정학 논문" },
        { content: "농어민과 도시 영세민 등 정작 의료 혜택이 가장 절실한 취약 계층은 철저히 소외됨", source: "비판사회학회" },
        { content: "국가의 재정 투입을 최소화하고 기업과 근로자에게 재정 부담을 전가하는 방식으로 설계됨", source: "의료정책연구소" }
      ],
      indicators: {
        domestic: [
          { name: "의료보험 적용 인구 (1977)", value: "전체 인구의 약 8.8%", source: "보건사회부", reportName: "의료보험연보" }
        ],
        global: [
          { name: "개발도상국 의료보험 도입 속도", value: "빠른 편이나 적용 범위는 제한적", source: "WHO", reportName: "Health Systems in Transition" }
        ]
      },
      glossary: [
        {
          term: "강제 가입 방식",
          description: "개인의 선택에 맡기는 임의 가입과 달리, 법률에 의해 일정 요건을 갖춘 사업장이나 국민이 의무적으로 의료보험에 가입하도록 강제하는 방식입니다."
        },
        {
          term: "의료 양극화",
          description: "대기업 근로자 등 특정 계층은 의료 혜택을 충분히 누리는 반면, 농어민이나 영세민 등 취약 계층은 질 높은 의료 서비스에서 소외되는 격차 현상을 말합니다."
        }
      ],
      lineage: { prev: "이전 정책 (데이터 없음)", next: "다음 정책 (노태우 전 국민 의료보험)" },
        mediaSnapshot: {
                    date: "1977.07.01",
                    conservative: { headline: "의료보험 첫 실시, 500인 이상 사업장만 혜택 형평성 논란", source: "동아일보" },
                    progressive: { headline: "전 국민 의료 혜택 시대의 서막, 복지국가로의 큰 걸음", source: "경향신문" }
                  }
    }
  ],
  additionalFacts: [
    { date: "1961-06", description: "중앙정보부 창설", source: "국가정보원 기록" },
    { date: "1962-01", description: "제1차 경제개발 5개년 계획 발표", source: "기획재정부" },
    { date: "1968-04", description: "향토예방군 창설", source: "국방부" },
    { date: "1968-12", description: "국민교육헌장 선포", source: "교육부" },
    { date: "1970-07", description: "경부고속도로 전 구간 개통", source: "한국도로공사" },
    { date: "1971-08", description: "그린벨트(개발제한구역) 최초 지정", source: "국토교통부" },
    { date: "1972-08", description: "8.3 사채동결조치 (긴급재정경제명령 제15호)", source: "한국은행" },
    { date: "1972-10", description: "10월 유신 선포 및 비상계엄령 발동", source: "국가기록원" },
    { date: "1974-08", description: "서울 지하철 1호선 개통", source: "서울교통공사" },
    { date: "1977-07", description: "의료보험제도 시행 (500인 이상 사업장 대상)", source: "국민건강보험공단" }
  ],
  coreDNA: "MAWO",
  promises: [
    {
      promise: "경제 개발 5개년 계획 (조국 근대화)",
      target: "1962~1966년 1차 5개년 계획: GDP 성장률 7.1% 목표",
      result: "목표치를 초과 달성하며 고도성장 진입. 단, 개인 자유 제한",
      status: "achieved",
      source: "한국은행 국민계정 / KDI"
    },
    {
      promise: "한일 국교 정상화",
      target: "일본과의 국교 정상화 및 주장액 확보",
      result: "1965년 한일협정 체결. 대일 청구권 포기 논란 속에 무상 3억 달러 청구권 자금 수령",
      status: "partial",
      source: "외교사료관 / 한일회담 문서"
    },
    {
      promise: "중화학 공업화 및 수출 강국 달성",
      target: "1981년 수출 100억 달러 달성",
      result: "1977년 수출 100억 달러 조기 달성 (목표 대비 4년 앞당김)",
      status: "achieved",
      source: "한국무역협회"
    },
    {
      promise: "자유시장 민주주의 실현",
      result: "유신체제(1972년) 등 장기집권 굳혀 속 민주주의 후퇴. 1979년 10·26 피습으로 사망",
      status: "failed",
      source: "민주화운동기념사업회"
    }
  ],
  keywords: ["경제는염통나", "조국근대화", "수출주도", "산업화", "서울올림픽", "새마을운동"],
  approvalRatings: [
    { date: "1963-12", rating: 47, event: "5·16 쿠데타 이후 대통령 찬청 제5공화국 안정적 취임", isHighlight: true },
    { date: "1965-06", rating: 35, event: "한일협정 반대 데모 확산" },
    { date: "1968-01", rating: 58, event: "1·21사태 등 안보위기 대응 속 지지안정" },
    { date: "1972-10", rating: 45, event: "유신체제 선포 — 지지대 축소" },
    { date: "1979-10", rating: 40, event: "10·26 피습으로 사망. 타살당시 지지율은 통치 피로감 속에서도 40대유지", isHighlight: false }
  ],
  legacies: [
    {
      title: "경부고속도로 / 국토개발 충독식 인프라",
      description: "1970년 개통한 경부고속도로는 현재한국 고속도로 네트워크의 출발점. 이 시기 조성된 포항제철소, 국주공장, 국서 1호선 등 중화학 공업단지는 현재도 대한민국 산업의 튼한 기반.",
      source: "국토교통부 / 한국도로공사"
    },
    {
      title: "국민건강보험제도 도입 (1977년)",
      description: "1977년 시범 실시된 의료보험은 현재 전국민 의료제도의 직접적 출발점. 현재 건강보험공단이 운영하는 전국민 건강보험의 제도적 기틀.",
      source: "건강보험공단"
    }
  ],
  cabinetRisk: { avgTenureMonths: 36, initialDropoutRate: 0 }
};
