import { President } from "@/types/president";

export const leeJaeMyung: President = {
  id: "lee-jae-myung",
  name: "이재명",
  term: "2025-현재",
  party: "더불어민주당",
  globalCounterparts: [
    { country: "미국", leader: "도널드 트럼프 (2기)", term: "2025-현재" },
    { country: "일본", leader: "이시바 시게루", term: "2024-현재" },
    { country: "북한", leader: "김정은", term: "2011-현재" }
  ],
  policies: [
    {
      id: "ljm-basic-society",
      title: "기본사회 정책(기본소득/기본주거 등) 추진",
      category: "복지/노동",
      valueTag: "pro-welfare",
      fundingSource: "세출 구조조정 및 초과세수 활용 (기본소득 목적세 신설 논의 단계)",
      keyPersonnel: [
        { name: "김민석", role: "기본사회추진위원장 / 국무총리" },
        { name: "조정식", role: "대통령직인수위원장" }
      ],
      context: {
        content: "2024년 12월 비상계엄 선포 및 2025년 4월 헌법재판소의 탄핵 인용에 따른 초유의 조기 대선 국면. 심화된 사회 분열 치유와 경제 회복이 주요 과제",
        source: "언론 보도 종합"
      },
      legislationFacts: [
        { date: "2025-07", description: "대통령 직속 '기본사회위원회' 출범 및 기본소득 로드맵 발표", source: "국회 의안정보시스템" },
        { date: "2025-09", description: "기본주거 시범사업 및 관련 법안(기본사회기본법) 국회 발의", source: "국회 의안정보시스템" }
      ],
      pros: [
        { content: "보편적 복지를 통해 경제적 양극화를 완화하고, 소득 하위계층의 안정적인 삶의 기반을 마련할 것으로 기대됨", source: "기본사회연구소" },
        { content: "지급된 기본소득이 지역화폐 등으로 소비되어 골목상권 활성화 및 내수 경제 진작에 긍정적인 영향을 미침", source: "한국경제학회 세미나 자료" },
        { content: "복지 사각지대를 해소하고 4차 산업혁명 시대의 일자리 감소 위기에 선제적으로 대응하는 미래지향적 정책임", source: "보건사회연구원" }
      ],
      cons: [
        { content: "막대한 재원 마련(증세 또는 국채 발행)이 불가피하여 국가 재정 건전성을 크게 악화시킬 수 있다는 우려", source: "한국조세재정연구원" },
        { content: "제한된 예산 안에서 기존의 선별 복지(취약계층 집중 지원) 혜택이 축소되거나 충돌할 가능성이 제기됨", source: "KDI 국책연구보고서" },
        { content: "근로 의욕을 고취시키기보다는 보편 지급으로 인한 도덕적 해이를 유발할 수 있다는 재계 및 보수진영의 비판", source: "전국경제인연합회" }
      ],
      indicators: {
        domestic: [
          { name: "기본사회 관련 예산 편성액", value: "내년도 예산안 반영 추진 중", source: "기획재정부", reportName: "2026 예산안" },
          { name: "소상공인 체감 경기지수", value: "지역화폐 발행액 증액 이후 소폭 상승 기대", source: "소상공인시장진흥공단", reportName: "동향조사" }
        ],
        global: [
          { name: "국가채무비율 전망", value: "복지 지출 증가에 따른 중장기 상승 경고", source: "IMF", reportName: "Article IV Consultation" }
        ]
      },
      glossary: [
        { term: "비상계엄", description: "2024년 12월 선포되었으나 국회 요구로 즉각 해제된 사건으로, 정국 혼란과 조기 대선의 직접적 원인이 됨." },
        { term: "조기 대선", description: "헌법재판소의 탄핵 인용 결정(2025년 4월)으로 인해 정해진 임기 만료 전 실시된 제21대 대통령 선거." },
        { term: "기본소득", description: "재산, 노동의 유무와 상관없이 모든 국민에게 조건 없이 정기적으로 일정한 금액을 현금으로 지급하는 정책입니다." }
      ],
      lineage: { prev: "문재인 정부 소득주도성장", next: "다음 정책 (현재 진행 중)" },
        mediaSnapshot: {
                    date: "2022.03.05",
                    conservative: { headline: "기본소득 등 천문학적 포퓰리즘, 국가 재정 파탄 불 보듯", source: "조선일보" },
                    progressive: { headline: "기본사회로 패러다임 대전환, 소외 없는 경제적 기본권 보장", source: "경향신문" }
                  }
    },
    {
      id: "ljm-pragmatic-diplomacy",
      title: "실용주의 균형 외교 추진",
      category: "외교/안보",
      valueTag: "pro-welfare",
      context: {
        content: "미중 패권 경쟁 심화 속에서 이념 편향적 외교를 탈피하고, 국익을 최우선으로 하는 유연한 다자 외교 및 한중관계 복원 필요성 대두",
        source: "외교부 국립외교원"
      },
      legislationFacts: [
        { date: "2025-08", description: "한중 고위급 채널 재가동 및 경제 협력 강화 실무 회담", source: "외교부" },
        { date: "2025-10", description: "'가치외교'에서 '국익 중심 실용외교'로의 외교안보 기조 공식 전환 발표", source: "대통령실" }
      ],
      pros: [
        { content: "경색되었던 한중관계를 개선하여 최대 무역국인 중국과의 경제적 실리를 확보하고 수출 기업의 숨통을 틔움", source: "한국무역협회" },
        { content: "이념적 잣대보다는 사안별 국익에 따라 유연하게 대처하여 다극화되는 글로벌 질서 속에서 외교적 자율성을 높임", source: "동아시아연구원" },
        { content: "주변국과의 긴장 완화를 통해 한반도의 지정학적 리스크(코리아 디스카운트)를 줄이고 평화 안정을 도모함", source: "통일연구원" }
      ],
      cons: [
        { content: "미국과의 가치 동맹 기조에서 벗어나면서, 기존 한미일 3각 안보 협력 구도에 균열이 생길 수 있다는 우려", source: "아산정책연구원" },
        { content: "미국의 대중국 첨단산업 통제(디커플링) 전략에 역행하는 것으로 비춰져 동맹국의 신뢰를 저하시킬 위험", source: "국가안보전략연구원" },
        { content: "북한의 지속적인 핵 위협 속에서 전통적 우방국과의 연합 대비 태세가 느슨해질 수 있다는 안보 불안 제기", source: "한국국방연구원" }
      ],
      indicators: {
        domestic: [
          { name: "대중국 무역 수지", value: "관계 개선에 따른 점진적 적자폭 축소 전망", source: "관세청", reportName: "수출입동향" },
          { name: "한미연합훈련 규모", value: "실무급 협의를 통한 훈련 수위 조절", source: "국방부", reportName: "국방정책브리핑" }
        ],
        global: [
          { name: "미국 및 서방국가 신뢰지수", value: "동맹국 정책 변화에 대한 모니터링 강화", source: "CSIS", reportName: "아시아 정책 동향" }
        ]
      },
      glossary: [
        {
          term: "실용외교",
          description: "특정 이념이나 진영 논리에 얽매이지 않고 국가의 경제적, 안보적 이익(국익)을 최우선으로 하여 유연하게 대처하는 외교 노선입니다."
        },
        {
          term: "코리아 디스카운트",
          description: "남북 분단이라는 지정학적 리스크나 불투명한 기업 지배 구조 등으로 인해 한국의 주가가 실제 가치보다 낮게 평가되는 현상입니다."
        },
        {
          term: "디커플링",
          description: "미국이 중국과의 경제적 상호 의존 관계를 끊고 첨단 기술 및 공급망에서 중국을 배제하려는 탈동조화 전략을 뜻합니다."
        }
      ],
      lineage: { prev: "윤석열 정부 가치 편중 외교", next: "다음 정책 (현재 진행 중)" },
        mediaSnapshot: {
                    date: "2022.02.25",
                    conservative: { headline: "국익보다 안보 우선, 한미 동맹 흔드는 줄타기 외교 우려", source: "동아일보" },
                    progressive: { headline: "국익 중심 실용 외교 천명, 맹목적 진영 논리 벗어나야", source: "한겨레" }
                  }
    }
  ],
  additionalFacts: [
    { date: "2025-05", description: "제21대 대통령 취임 및 비상계엄 후유증 수습 선언", source: "대통령실" },
    { date: "2025-07", description: "기본사회위원회 출범", source: "대통령실" }
  ],
  coreDNA: "GBWD",
  promises: [
    {
      promise: "기본사회 정책 (기본소득·기본주거 등) 추진",
      target: "기본사회위원회 설치 및 구체적 프로그램 대국민 설득",
      result: "2025년 7월 기본사회위원회 출범. 로드맵 수립 단계 (임기 초반)",
      status: "ongoing",
      source: "대통령실 / 기본사회위원회"
    },
    {
      promise: "경제위기 극복과 수출시장 확대",
      target: "미중일 무역분쟁 대응 및 수출 창구 다변화",
      result: "2025년 하반기 실용외교 노선 기반으로 조심스럽게 진행 중",
      status: "ongoing",
      source: "기획재정부"
    }
  ],
  keywords: ["기본사회", "민생회복", "경제위기", "사회통합", "민주주의", "지역화폐"],
  approvalRatings: [
    { date: '2025-06', rating: 58, event: '조기 대선 정국 수습 기대 반영', isHighlight: true },
    { date: '2025-10', rating: 52, event: '기본사회위원회 출범 등 주요 공약 트랙 작동' },
    { date: '2026-03', rating: 48, event: '인플레이션 부담 속 지지율 소폭 하락' },
    { date: '2026-07', rating: 51, event: '임기 초반 현재 지속 추적 중' }
  ],
  legacies: [
    {
      title: '(추진 중) 기본사회위원회',
      description: '2025년 7월 출범한 대통령 직속 기본사회위원회는 기본소득·기본주거 등 복지 제도 설계의 종합시행 주체로, 임기 종료 이후에도 복지국가 로드맵 가능성 여부가 논의될 수 있습니다.',
      source: '대통령실 / 기본사회위원회'
    }
  ],
  cabinetRisk: { avgTenureMonths: 15, initialDropoutRate: 0 }
};
