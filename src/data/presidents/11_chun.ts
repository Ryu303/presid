import { President } from "@/types/president";

export const chun: President = {
  id: "chun",
  name: "전두환",
  term: "1980-1988",
  party: "민주정의당",
  globalCounterparts: [
    { country: "미국", leader: "로널드 레이건", term: "1981-1989" },
    { country: "일본", leader: "나카소네 야스히로", term: "1982-1987" },
    { country: "북한", leader: "김일성", term: "1948-1994" }
  ],
  policies: [
    {
      id: "chun-economic-stabilization",
      title: "물가 안정과 3저 호황 경제",
      category: "경제/산업",
      valueTag: "pro-market",
      fundingSource: "국제 거시 환경(저유가, 저금리, 저달러)에 기인한 수출 주도 성장",
      keyPersonnel: [
        { name: "김재익", role: "대통령비서실 경제수석비서관" }
      ],
      context: {
        content: "제2차 오일쇼크로 인한 마이너스 성장과 초인플레이션 위기 속, 글로벌 3저(저금리, 저유가, 저달러) 현상 발생",
        source: "한국은행 경제통계시스템(ECOS)"
      },
      legislationFacts: [
        { date: "1981-04", description: "독점규제 및 공정거래에 관한 법률 제정", source: "공정거래위원회" },
        { date: "1982-01", description: "야간통행금지 해제 (소비 경제 활성화)", source: "국가기록원" },
        { date: "1986-01", description: "3저 호황기 진입 및 경상수지 최초 흑자 달성", source: "통계청 KOSIS" }
      ],
      pros: [
        { content: "강력한 긴축 정책과 임금 인상 억제로 1970년대 후반의 살인적인 물가를 한자릿수로 안정시킴", source: "KDI 경제동향보고서" },
        { content: "3저 호황을 기회로 삼아 수출을 극대화하여 건국 이래 최초로 무역수지 흑자 달성", source: "한국무역협회" },
        { content: "컬러 TV 보급 및 야간통행금지 해제로 국민들의 실질적인 소비와 대중문화 향유 기회 확대", source: "한국문화경제학회" }
      ],
      cons: [
        { content: "노동 운동을 가혹하게 탄압하여 경제 성장의 과실이 저임금 노동자에게 공정하게 분배되지 않음", source: "한국노동연구원" },
        { content: "정경유착과 권력형 비리(국제그룹 해체 등)가 심화되어 재벌 위주의 경제력 집중 가속화", source: "KCI 등재 경제사 논문" },
        { content: "강압적인 임금 및 물가 통제로 시장의 자율성을 심각하게 훼손", source: "한국경제학회보" }
      ],
      indicators: {
        domestic: [
          { name: "소비자물가 상승률 (1980 -> 1987)", value: "28.7% -> 3.0%", source: "통계청", reportName: "소비자물가조사" },
          { name: "무역수지 (1986)", value: "31억 달러 흑자 전환", source: "한국무역협회", reportName: "무역동향" }
        ],
        global: [
          { name: "연평균 경제성장률 (1981-1988)", value: "10.1%", source: "World Bank", reportName: "World Development Indicators" }
        ]
      },
      chart: {
        title: "연평균 경제성장률 (%)",
        domesticLabel: "경제성장률",
        source: "한국은행",
        data: [
          { name: "1980", domestic: -1.6 },
          { name: "1982", domestic: 8.3 },
          { name: "1984", domestic: 10.4 },
          { name: "1986", domestic: 11.2 },
          { name: "1988", domestic: 11.9 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "1980.5",
          name: "5·18 민주화운동",
          description: "광주 지역에서 신군부의 계엄령 확대와 민주주의 탄압에 항거하여 일어난 민주화 운동.",
          source: "민주화운동기념사업회"
        },
        interpretationGuide: {
          viewpoint1: "강력한 물가 안정 정책과 3저 호황을 통해 고도성장을 이룩하며 중산층을 육성했다는 경제적 긍정 평가.",
          viewpoint2: "무력으로 정권을 찬탈하고 광주 시민을 학살한 정통성 없는 독재 정권으로서, 경제 성장 역시 이전 시대의 기반 덕분이라는 비판."
        }
      },
      glossary: [
        {
          term: "3저 호황",
          description: "1980년대 중반 글로벌 경제 환경에서 나타난 저금리, 저유가, 저달러 현상을 말합니다. 이 세 가지 유리한 조건 덕분에 한국 경제는 유례없는 고도 성장과 경상수지 흑자를 기록할 수 있었습니다."
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
      id: "chun-sports-culture",
      title: "프로스포츠 창설 및 대형 국제대회 유치",
      category: "사회/문화",
      valueTag: "pro-market",
      context: {
        content: "정통성이 부족한 신군부 정권이 국민의 정치적 관심을 분산시키고 국가 위상을 높이려 함 (3S 정책)",
        source: "한국현대사학회"
      },
      legislationFacts: [
        { date: "1981-09", description: "바덴바덴 IOC 총회에서 1988 서울 올림픽 유치 확정", source: "대한체육회" },
        { date: "1982-03", description: "한국프로야구(KBO) 출범", source: "KBO 기록실" },
        { date: "1983-05", description: "한국프로축구(수퍼리그) 출범", source: "대한축구협회" },
        { date: "1986-09", description: "서울 아시안게임 개최", source: "국가기록원" }
      ],
      pros: [
        { content: "올림픽 등 대규모 국제대회 유치를 통해 도시 인프라(지하철 등)를 확충하고 국가 브랜드를 비약적으로 상승시킴", source: "서울연구원" },
        { content: "프로스포츠 창설로 스포츠 산업이 크게 발전하고 국민들에게 새로운 여가 문화 제공", source: "한국체육학회지" },
        { content: "해외여행 자유화 조치 및 교복 자율화 등으로 사회 전반의 개방화 및 자율화 분위기 조성", source: "국사편찬위원회" }
      ],
      cons: [
        { content: "이른바 '3S(Screen, Sports, Sex) 정책'을 통해 국민들의 정치적 비판 의식을 마비시키려 한 우민화 정책의 일환", source: "민주화운동기념사업회" },
        { content: "국제대회 준비를 핑계로 달동네 철거 등 빈민층의 주거 생존권을 폭력적으로 짓밟음", source: "도시연구소 보고서" },
        { content: "프로스포츠 창설 과정에서 기업들에게 강제적인 참여와 자금 할당을 요구하는 관치 체육의 한계 노출", source: "KCI 등재 스포츠사회학 논문" }
      ],
      indicators: {
        domestic: [
          { name: "프로야구 원년 관중 (1982)", value: "143만 명", source: "KBO", reportName: "KBO 연감" }
        ],
        global: [
          { name: "88 올림픽 참가국", value: "159개국 (동서 냉전 후 최다)", source: "IOC", reportName: "Olympic Games Report" }
        ]
      },
        lineage: { prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" },
        frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 0 },
        mediaSnapshot: {
                    date: "YYYY.MM.DD",
                    conservative: { headline: "관련 보도 데이터 수집 중...", source: "보수 매체" },
                    progressive: { headline: "관련 보도 데이터 수집 중...", source: "진보 매체" }
                  }
    },
    {
      id: "chun-minimum-wage",
      title: "최저임금법 제정 및 국민연금법 개정",
      category: "복지/노동",
      valueTag: "pro-market",
      context: {
        content: "고도의 경제 성장 이면에서 저임금 노동자들의 극심한 빈곤 문제와 다가올 고령화 사회에 대비한 복지 제도 확충 필요성 대두",
        source: "보건사회부 복지백서"
      },
      legislationFacts: [
        { date: "1986-12", description: "최저임금법 제정 및 공포", source: "국가법령정보센터" },
        { date: "1986-12", description: "국민복지연금법을 국민연금법으로 전면 개정", source: "국가법령정보센터" },
        { date: "1988-01", description: "최저임금제 및 국민연금제도 본격 시행 (10인 이상 사업장 대상)", source: "최저임금위원회 / 국민연금공단" }
      ],
      pros: [
        { content: "저임금 근로자를 보호하고 최소한의 생계비를 보장하는 국가적 장치인 최저임금제를 대한민국 역사상 최초로 도입함", source: "한국노동연구원" },
        { content: "유명무실했던 기존의 복지연금법을 실질적인 노후 보장 수단인 국민연금 제도로 개편하여 복지 국가의 기틀을 마련함", source: "한국사회복지학회" },
        { content: "경제 성장에 발맞춰 선진국형 사회 보장 제도를 법제화하고 구체적인 실행 단계로 진입시킴", source: "보건사회연구원" }
      ],
      cons: [
        { content: "최저임금제 도입 초기에는 적용 대상이 10인 이상 제조업 사업장으로 극히 제한되어 대다수 영세 노동자는 혜택을 받지 못함", source: "KCI 등재 노동경제학 논문" },
        { content: "민주화 요구를 무마하고 권위주의 정권의 유화적인 이미지를 조성하기 위한 정치적 도구로 복지 제도를 활용했다는 비판", source: "비판사회학회" },
        { content: "국민연금 시행 초기 강제 가입 조항으로 인해 저소득층의 당장의 가처분 소득을 감소시켜 조세 저항을 유발함", source: "한국재정학회" }
      ],
      indicators: {
        domestic: [
          { name: "제1차 최저임금 (1988)", value: "시급 462.5원 (제1그룹 기준)", source: "최저임금위원회", reportName: "최저임금 심의의결서" }
        ],
        global: [
          { name: "아시아 최저임금 도입 속도", value: "일본, 대만 등에 이어 비교적 늦은 도입", source: "ILO", reportName: "Minimum Wage Systems" }
        ]
      },
        lineage: { prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" },
        frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 0 },
        mediaSnapshot: {
                    date: "YYYY.MM.DD",
                    conservative: { headline: "관련 보도 데이터 수집 중...", source: "보수 매체" },
                    progressive: { headline: "관련 보도 데이터 수집 중...", source: "진보 매체" }
                  }
    }
  ],
  additionalFacts: [
    { date: "1981-04", description: "프로야구 출범 결의 (3S 정책의 일환)", source: "KBO 기록" },
    { date: "1982-01", description: "야간통행금지 전면 해제", source: "경찰청" },
    { date: "1982-03", description: "중고등학생 교복 자율화 조치 시행", source: "교육부" },
    { date: "1982-07", description: "금융실명제 도입 시도 (이후 보류)", source: "기획재정부" },
    { date: "1983-09", description: "소련 전투기에 의한 대한항공(KAL) 007편 격추 사건", source: "외교부" },
    { date: "1985-05", description: "미국 문화원 점거 농성 사건 발생", source: "한국민족문화대백과사전" },
    { date: "1986-12", description: "최저임금법 제정 (이후 1988년부터 시행)", source: "고용노동부" },
    { date: "1987-04", description: "4.13 호헌조치 발표", source: "국가기록원" }
  ],
  coreDNA: "MAWO",
  promises: [
    {
      promise: "물가 안정 및 경제 안정성 확보",
      target: "단임년도 소비자물가 하락률 한자리대",
      result: "1983년 3.4%, 1984년 2.3%로 안정. 단 1980년 28.7% 폭등으로 시작하여 정상화 실현",
      status: "partial",
      source: "통계청 소비자물가지수"
    },
    {
      promise: "정의사회 구현 / 복지 확충",
      target: "프로스포츠 코리아 출범",
      result: "1983년 국민연금제도 도입, 최저임금법 제정(1986년). 단 노동운동 탄압은 미해결",
      status: "partial",
      source: "노동부"
    },
    {
      promise: "1988년 서울 올림픽 유치",
      result: "1981년 서울 올림픽 유치 확정. 1988년 성공적 개최 (7.7선언 직후 열림)",
      status: "achieved",
      source: "대한체육회"
    },
    {
      promise: "단임 헌법으로 평화적 정권 이양",
      result: "1988년 노태우에게 정권 이양. 단 퇴임 이후 비자금 논란 등으로 국회 청문회 연동",
      status: "partial",
      source: "국회사무처"
    }
  ],
  keywords: ["정의사회", "안정", "올림픽", "경제성장", "삼저호황", "새시대"],
  approvalRatings: [
    { date: "1980-09", rating: 55, event: "쿠데타 직후 대통령 취임", isHighlight: false },
    { date: "1982-01", rating: 62, event: "야간통행금지 해제 / 경제안정세", isHighlight: true },
    { date: "1984-09", rating: 50, event: "업적 호조속 중반기" },
    { date: "1987-06", rating: 25, event: "6월민주항쟁 시위 강경진압 — 역대 최저", isHighlight: true },
    { date: "1988-02", rating: 30, event: "퇴임 시점" }
  ],
  legacies: [
    {
      title: "국민연금제도 출발 (1988년)",
      description: "1988년 노태우 정부에서 시행된 국민연금은 전두환 정부 시기 1986년 제도 마련, 1988년 시행. 현재까지 4,000만 명 이상이 가입한 노후제도의 기초.",
      source: "국민연금공단"
    },
    {
      title: "최저임금법 제정 (1986년)",
      description: "1986년 제정된 최저임금법은 현재 매년 최저임금위원회가 심의하는 노동시장 플로어의 핵심 제도적 틀.",
      source: "노동부 / 최저임금위원회"
    }
  ],
    cabinetRisk: { avgTenureMonths: 15, initialDropoutRate: 20 }
};
