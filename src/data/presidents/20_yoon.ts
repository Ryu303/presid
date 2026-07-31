import { President } from "@/types/president";

export const yoon: President = {
  id: "yoon",
  name: "윤석열",
  term: "2022-2025",
  party: "국민의힘",
  globalCounterparts: [
    { country: "미국", leader: "조 바이든", term: "2021-2025" },
    { country: "일본", leader: "기시다 후미오", term: "2021-2024" },
    { country: "북한", leader: "김정은", term: "2011-현재" }
  ],
  cabinetRisk: { avgTenureMonths: 16, initialDropoutRate: 0 },
  policies: [
    {
      id: "ysy-foreign-alliance",
      title: "한미동맹 격상과 한일관계 정상화",
      category: "외교/안보",
      valueTag: "pro-market",
      
      lineage: { prev: "한반도 운전자론 (문재인 정부)" },
      mediaSnapshot: {
        date: "2023.03.17",
        conservative: { headline: "한일관계 12년 만에 정상화... 한미일 안보 협력 완성", source: "조선일보" },
        progressive: { headline: "가해자 면죄부 준 굴욕외교... 과거사 팔아먹은 정상회담", source: "오마이뉴스" }
      },
      context: {
        content: "미중 패권 경쟁 심화, 북한의 전례 없는 미사일 도발, 그리고 글로벌 공급망 재편이라는 엄중한 안보·경제적 도전",
        source: "외교부 국립외교원"
      },
      legislationFacts: [
        { date: "2023-04", description: "국빈 방미 및 '워싱턴 선언' 채택 (확장억제 강화)", source: "대통령실" },
        { date: "2023-05", description: "한일정상회담을 통한 셔틀외교 복원 및 강제동원 제3자 변제안 발표", source: "외교부" },
        { date: "2023-08", description: "캠프 데이비드 한미일 정상회의 (3국 안보 협력 체제 공식화)", source: "대통령실" }
      ],
      pros: [
        { content: "워싱턴 선언을 통해 미국의 확장억제(핵우산) 공약을 문서화하여 북핵에 대한 압도적인 억지력을 확보함", source: "국방부 국방백서" },
        { content: "정치적 부담을 감수하고 악화되었던 한일 관계를 선제적으로 복원하여 미래지향적 협력의 물꼬를 틄", source: "세종연구소 학술지" },
        { content: "캠프 데이비드 회의를 통해 한미일 3각 안보 협력을 전례 없는 수준으로 끌어올려 인태 지역의 핵심축으로 부상함", source: "한국국제정치학회" }
      ],
      cons: [
        { content: "강제동원 피해자 배상 문제에서 '제3자 변제안'을 밀어붙여 피해자들의 반발과 대법원 판결 무시 논란을 초래함", source: "국가인권위원회 / 민주사회를위한변호사모임" },
        { content: "가치 외교에 지나치게 편중되어 최대 교역국인 중국, 그리고 러시아와의 관계가 악화되며 경제·안보적 리스크가 가중됨", source: "KIEP 대외경제정책연구원" },
        { content: "후쿠시마 오염수 방류 등 민감한 현안에서 일본 측 입장을 지나치게 옹호한다는 국내적 비판 여론에 직면함", source: "언론진흥재단 기사 분석" }
      ],
      indicators: {
        domestic: [
          { name: "한미연합훈련 규모", value: "실기동 훈련(FTX) 대폭 재개 및 확대", source: "국방부", reportName: "국방업무보고" },
          { name: "대중국 수출 증감률 (2023)", value: "-19.9% (역대급 감소)", source: "산업통상자원부", reportName: "수출입동향" }
        ],
        global: [
          { name: "핵협의그룹(NCG) 출범", value: "한미 간 상설 협의체 신설", source: "White House", reportName: "Washington Declaration" }
        ]
      },
      chart: {
        title: "기준금리 및 소비자물가상승률 (%)",
        domesticLabel: "기준금리",
        internationalLabel: "소비자물가상승률",
        source: "한국은행 / 통계청",
        data: [
          { name: "2022.05", domestic: 1.5, international: 5.4 },
          { name: "2022.12", domestic: 3.25, international: 5.0 },
          { name: "2023.06", domestic: 3.5, international: 2.7 },
          { name: "2023.12", domestic: 3.5, international: 3.2 },
          { name: "2024.06", domestic: 3.5, international: 2.4 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "2024.4",
          name: "제22대 총선 여소야대 심화",
          description: "총선 결과 야당이 압승을 거두며 입법 주도권을 강화한 정치 지형.",
          source: "중앙선거관리위원회"
        },
        interpretationGuide: {
          viewpoint1: "노동, 연금, 교육 등 필수적인 3대 구조 개혁을 추진하며 국가의 체질 개선을 시도했다는 긍정적 평가.",
          viewpoint2: "불통과 일방적 국정 운영으로 야당과의 협치에 실패했으며, 이로 인해 주요 개혁 과제가 좌초되었다는 비판."
        }
      },
      glossary: [
        {
          term: "워싱턴 선언",
          description: "2023년 한미정상회담에서 채택된 선언으로, 미국의 확장억제(핵우산)를 강화하기 위해 한미 핵협의그룹(NCG)을 신설하는 내용이 핵심입니다."
        },
        {
          term: "제3자 변제안",
          description: "일제 강제동원 피해자 배상 문제에 대해, 일본 전범 기업 대신 한국의 일제강제동원피해자지원재단이 배상금을 대신 지급하는 방식입니다."
        },
        {
          term: "건전재정",
          description: "국가 채무 비율을 안정적으로 관리하고 방만한 재정 지출을 억제하여 재정의 지속가능성을 확보하려는 기조입니다."
        }
      ]
    },
    {
      id: "ysy-nuclear-energy",
      title: "탈원전 정책 폐기와 원전 생태계 복원",
      category: "경제/산업",
      valueTag: "pro-market",
      context: {
        content: "전임 정부의 탈원전 기조로 붕괴된 원전 산업 생태계를 살리고, 글로벌 탄소중립과 에너지 안보에 대응할 필요성",
        source: "산업통상자원부 에너지정책방향"
      },
      legislationFacts: [
        { date: "2022-07", description: "'새정부 에너지정책 방향' 발표 (원전 비중 확대 공식화)", source: "국가기록원" },
        { date: "2023-01", description: "신한울 3·4호기 건설 재개 및 원전 협력업체 대규모 금융 지원", source: "한국수력원자력" },
        { date: "2023-12", description: "네덜란드 등과 '원전 동맹' 구축 및 원전 수출 드라이브", source: "대통령실" }
      ],
      pros: [
        { content: "고사 위기에 처했던 국내 원전 부품 및 중소 협력업체들에게 일감을 공급하여 산업 생태계를 빠르게 복원함", source: "원자력산업협회" },
        { content: "체코, 폴란드 등 해외 원전 수주전에 적극적으로 나서며 K-원전의 우수성을 알리고 원전 수출 강국으로의 도약을 도모함", source: "KOTRA" },
        { content: "원전을 기저 전원으로 활용하여 에너지를 안정적으로 공급하고 한전의 막대한 적자를 줄이려는 현실적 에너지 믹스 채택", source: "에너지경제연구원" }
      ],
      cons: [
        { content: "원전 확대에 집중한 나머지 글로벌 메가트렌드인 재생에너지(RE100 등) 투자와 보급 목표가 후퇴했다는 비판", source: "기후변화행동연구소" },
        { content: "고준위 방사성 폐기물(사용후핵연료) 처분장 부지 선정 등 근본적인 해결책 없이 원전 가동만 늘린다는 지적", source: "환경운동연합" },
        { content: "후쿠시마 원전 사고 이후 국민들의 원전 안전에 대한 불안감이 여전한 상황에서 충분한 사회적 합의 과정이 부족함", source: "KCI 등재 환경사회학 논문" }
      ],
      indicators: {
        domestic: [
          { name: "원전 발전 비중 목표 (2030년)", value: "32.4% 이상으로 대폭 상향", source: "산업통상자원부", reportName: "제10차 전력수급기본계획" },
          { name: "원전 설비 수출액 (2022-2023)", value: "약 4조원 (수주 목표 10기)", source: "산업통상자원부", reportName: "원전수출동향" }
        ],
        global: [
          { name: "재생에너지 발전 비중", value: "OECD 국가 중 최하위 수준 머묾", source: "IEA", reportName: "World Energy Balances" }
        ]
      },
      glossary: [
        {
          term: "RE100",
          description: "기업이 사용하는 전력의 100%를 태양광, 풍력 등 재생에너지로 충당하겠다는 글로벌 캠페인으로, 원자력은 포함되지 않아 수출 기업들의 과제로 떠오르고 있습니다."
        },
        {
          term: "고준위 방사성 폐기물",
          description: "원자력 발전 후 남은 사용후핵연료 등 방사선 세기가 매우 강한 폐기물로, 영구 처분장 부지 선정이 한국 원전 정책의 최대 난제 중 하나입니다."
        },
        {
          term: "체코 원전 수주",
          description: "2024년 한국수력원자력 컨소시엄이 체코 신규 원전 건설 사업의 우선협상대상자로 선정되어 한국형 원전의 우수성을 입증한 사건입니다."
        }
      ],
      lineage: { prev: "이전 정책 (데이터 없음)", next: "다음 정책 (데이터 없음)" },
        mediaSnapshot: {
                    date: "YYYY.MM.DD",
                    conservative: { headline: "관련 보도 데이터 수집 중...", source: "보수 매체" },
                    progressive: { headline: "관련 보도 데이터 수집 중...", source: "진보 매체" }
                  }
    }
  ],
  additionalFacts: [
    { date: "2022-05", description: "윤석열 정부 출범 및 청와대 개방 (대통령실 용산 이전)", source: "대통령실" },
    { date: "2022-10", description: "이태원 압사 참사 발생", source: "행정안전부" },
    { date: "2023-01", description: "만 나이 통일법 시행", source: "법제처" },
    { date: "2023-08", description: "새만금 세계스카우트 잼버리 대회 부실 운영 논란", source: "여성가족부" },
    { date: "2023-11", description: "의대 정원 확대 추진 공식화", source: "보건복지부" },
    { date: "2024-02", description: "의료계 집단 사직 등 의정 갈등 본격화", source: "보건복지부" },
    { date: "2024-04", description: "제22대 국회의원 선거 (여소야대 정국 심화)", source: "중앙선거관리위원회" },
    { date: "2024-12", description: "비상계엄 선포 및 국회 요구로 즉각 해제", source: "관보" }
  ],
  coreDNA: "MARO",
  promises: [
    {
      promise: "노동시장 개혁 (주 최대 69시간제 등)",
      target: "선택적 노동시간 연장제 (근로시간 선택의 유연화 추진)",
      result: "구체적 입법 추진되었으나 노동계·야당 반대 속에 의회 통과 실패. 비상계엄 선포로 동력 상실",
      status: "failed",
      source: "고용노동부 / 국회의안검색"
    },
    {
      promise: "대형마트 의무휴업 규제 완화",
      result: "지자체별로 의무휴업일을 평일로 전환하는 조치 실시. 지역상권 규제 완화 제한적 성과",
      status: "partial",
      source: "산업통상자원부 / 기획재정부"
    },
    {
      promise: "한미일 공조체제 강화 및 대북 강경 외교",
      target: "한미일 군사협력 공조",
      result: "2023년 캠프데이비드 선언 등 한미일 안보협력 강화. 단 대일 과거사 양보안에 대한 국내 반발 여론 상존",
      status: "partial",
      source: "외교부"
    },
    {
      promise: "원전 생태계 복원 (SMR 등 차세대 원전 접목)",
      result: "탈원전 정책 폐기 및 신한울 원전 재가동. 2024년 체코 원전 수주 우선협상대상자 선정",
      status: "partial",
      source: "산업통상자원부"
    }
  ],
  keywords: ["자유", "공정", "글로벌중추국가", "한미일공조", "노동개혁", "원전복원"],
  approvalRatings: [
    { date: "2022-05", rating: 52, event: "취임 시점", isHighlight: false },
    { date: "2022-09", rating: 24, event: "비속어 논란 등 악재 연속 — 1차 최저", isHighlight: true },
    { date: "2023-01", rating: 33, event: "화물연대 파업 강경 대응 후 소폭 회복" },
    { date: "2024-04", rating: 25, event: "총선 참패 이후 지지율 하락" },
    { date: "2024-12", rating: 19, event: "비상계엄 선포 직전 최저점", isHighlight: true }
  ],
  legacies: [
    {
      title: "탈원전 정책 폐기 및 원전 확대로의 에너지 정책 전환",
      description: "문재인 정부 시기의 탈원전 기조를 전면 철회하고 원전 확대로 전환한 것은 향후 에너지 정책의 중요한 분기점이 됨.",
      source: "산업통상자원부"
    }
  ]
};
