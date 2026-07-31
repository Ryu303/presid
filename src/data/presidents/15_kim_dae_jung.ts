import { President } from "@/types/president";

export const kimDaeJung: President = {
  id: "kim-dae-jung",
  name: "김대중",
  term: "1998-2003",
  party: "새정치국민회의 / 새천년민주당",
  globalCounterparts: [
    { country: "미국", leader: "빌 클린턴 / 조지 W. 부시", term: "1993-2001 / 2001-2009" },
    { country: "일본", leader: "오부치 게이조 / 모리 요시로 / 고이즈미 준이치로", term: "1998-2000 / 2000-2001 / 2001-2006" },
    { country: "북한", leader: "김정일", term: "1994-2011" }
  ],
  policies: [
    {
      id: "kdj-imf",
      title: "IMF 외환위기 극복과 금 모으기 운동",
      category: "경제/산업",
      valueTag: "pro-welfare",
      fundingSource: "국제통화기금(IMF) 구제금융 580억 달러 및 공적자금(국채) 168조 원 투입",
      keyPersonnel: [
        { name: "이헌재", role: "금융감독위원장 / 재정경제부 장관" },
        { name: "강봉균", role: "대통령 경제수석비서관" }
      ],
      context: {
        content: "국가 부도 사태(외환위기) 속에서 취임하여 IMF의 가혹한 구조조정 요구 수용 및 국가 신인도 회복 절실",
        source: "한국은행 경제통계시스템(ECOS)"
      },
      legislationFacts: [
        { date: "1998-01", description: "노사정위원회 발족 (사회적 대타협 시도)", source: "대통령기록관" },
        { date: "1998-01", description: "전 국민적인 '금 모으기 운동' 전개", source: "국가기록원" },
        { date: "1998-02", description: "기업 구조조정 촉진법 및 정리해고제 법제화 (근로기준법 개정)", source: "국가법령정보센터" },
        { date: "2001-08", description: "IMF 구제금융 195억 달러 전액 조기 상환", source: "기획재정부 백서" }
      ],
      pros: [
        { content: "예정된 기한보다 3년이나 앞당겨 IMF 구제금융을 전액 상환하여 국가 부도 위기를 조기에 극복함", source: "KDI 경제발전사" },
        { content: "금 모으기 운동 등을 통해 국민적 통합을 이끌어내고 국제 사회에 한국의 위기 극복 의지를 강하게 각인시킴", source: "한국경제학회 학술지" },
        { content: "재벌 위주의 불투명한 기업 지배구조를 일부 개선하고 글로벌 스탠다드에 맞는 금융 시스템을 도입함", source: "자본시장연구원" }
      ],
      cons: [
        { content: "정리해고제 도입과 파견근로제 합법화로 비정규직이 폭발적으로 증가하며 노동 시장의 양극화가 본격화됨", source: "한국노동연구원" },
        { content: "알짜 기업과 금융기관들이 헐값에 외국 자본에 매각되어 국부 유출 논란이 거세게 일었음(론스타 사태 등)", source: "KCI 등재 경제사 논문" },
        { content: "중산층이 붕괴되고 빈부격차가 심화되어 한국 사회의 경제적 양극화가 고착화되는 결정적 계기가 됨", source: "한국사회복지학회" }
      ],
      indicators: {
        domestic: [
          { name: "외환보유액 (1997 -> 2001)", value: "39억 -> 1,028억 달러", source: "한국은행", reportName: "외환보유액 동향" },
          { name: "비정규직 비율 (2002)", value: "전체 임금근로자의 약 27.4%", source: "통계청", reportName: "경제활동인구조사 근로형태별 부가조사" }
        ],
        global: [
          { name: "국가 신용등급 (S&P)", value: "B+ (1998) -> A- (2002)", source: "S&P Global Ratings", reportName: "Sovereign Ratings History" }
        ]
      },
      chart: {
        title: "외환보유액 및 벤처기업 수 추이",
        domesticLabel: "외환보유액(억달러)",
        internationalLabel: "벤처기업수(백개)",
        source: "한국은행 / 벤처기업협회",
        data: [
          { name: "1998", domestic: 520, international: 20 },
          { name: "1999", domestic: 740, international: 49 },
          { name: "2000", domestic: 961, international: 87 },
          { name: "2001", domestic: 1028, international: 113 },
          { name: "2002", domestic: 1214, international: 87 }
        ]
      },
      glossary: [
        {
          term: "IMF 구제금융",
          description: "국제통화기금(IMF)이 외환보유액 부족으로 국가 부도 위기에 처한 국가에 자금을 지원하는 제도. 1997년 한국은 혹독한 구조조정(정리해고, 고금리 등)을 조건으로 구제금융을 받았습니다."
        },
        {
          term: "노사정위원회",
          description: "노동자, 사용자(기업), 정부가 모여 노동 정책과 경제 위기 극복 방안을 협의하는 사회적 대화 기구입니다."
        },
        {
          term: "정리해고제",
          description: "기업이 경영상의 긴박한 필요가 있을 때 근로자를 해고할 수 있도록 한 제도로, 외환위기 극복 과정에서 노동 시장의 유연성을 높이기 위해 전면 도입되었습니다."
        },
        {
          term: "파견근로제",
          description: "근로자 파견 업체가 고용한 근로자를 다른 기업에 파견하여 일하게 하는 제도로, 기업의 인건비 부담을 줄였으나 비정규직 양산의 원인이 되었습니다."
        }
      ],
      lineage: { prev: "이전 정책 (데이터 없음)", next: "다음 정책 (데이터 없음)" },
        mediaSnapshot: {
                    date: "1998.02.15",
                    conservative: { headline: "살인적 고금리와 대량 해고, 뼈를 깎는 IMF 구조조정", source: "조선일보" },
                    progressive: { headline: "노사정 대타협 성사, 고통 분담으로 국난 극복의 돌파구 마련", source: "한겨레" }
                  }
    },
    {
      id: "kdj-sunshine",
      title: "햇볕정책과 최초의 남북정상회담",
      category: "외교/안보",
      valueTag: "pro-welfare",
      fundingSource: "코스닥 활성화 및 정통부·과기부 예산을 통한 벤처캐피탈 매칭 펀드",
      keyPersonnel: [
        { name: "남궁석", role: "정보통신부 장관" }
      ],
      context: {
        content: "냉전 해체 이후에도 지속되는 한반도의 군사적 긴장을 완화하고 북한의 개방을 유도하기 위한 포용 정책",
        source: "통일부 통일백서"
      },
      legislationFacts: [
        { date: "1998-11", description: "금강산 관광 시작", source: "현대아산 / 통일부" },
        { date: "2000-06", description: "평양에서 역사상 최초의 남북정상회담 개최 및 6.15 남북 공동선언 발표", source: "대통령기록관" },
        { date: "2000-12", description: "한반도 평화 정착에 기여한 공로로 한국인 최초 노벨평화상 수상", source: "노벨위원회(Nobel Prize)" },
        { date: "2002-09", description: "경의선 및 동해선 철도/도로 연결 착공", source: "국토교통부 / 통일부" }
      ],
      pros: [
        { content: "분단 반세기 만에 처음으로 남북 정상이 만나 군사적 긴장을 크게 완화하고 평화 공존의 시대를 엶", source: "통일연구원" },
        { content: "이산가족 상봉, 금강산 관광 등 민간 교류를 활성화하여 민족적 동질성을 회복하려 노력함", source: "북한대학원대학교 학술지" },
        { content: "한국의 주도적인 대북 정책(페리 프로세스 등)으로 국제 사회의 지지를 확보하고 노벨평화상을 수상함", source: "외교부 외교사료관" }
      ],
      cons: [
        { content: "북한에 대한 현금 및 경제적 지원(대북송금 사건 등)이 북한의 핵무기와 미사일 개발 자금으로 전용되었다는 강력한 비판", source: "국가정보원 / 대법원 판례" },
        { content: "햇볕정책 추진 중에도 북한이 제1연평해전(1999), 제2연평해전(2002) 등 무력 도발을 자행하여 정책의 실효성 의문 제기", source: "국방부 국방백서" },
        { content: "상호주의 원칙이 배제된 일방적인 퍼주기식 지원으로 인해 북한의 근본적인 체제 변화를 이끌어내지 못함", source: "KCI 등재 정치외교학 논문" }
      ],
      indicators: {
        domestic: [
          { name: "남북교역액 (1998 -> 2003)", value: "2.2억 -> 7.2억 달러", source: "통일부", reportName: "남북교류협력동향" }
        ],
        global: [
          { name: "UN 통신인프라 지수 (2002)", value: "세계 최상위권 진입", source: "ITU", reportName: "Measuring the Information Society" }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "1997-1998",
          name: "IMF 구조조정 및 대량 실업 사태",
          description: "외환위기 극복을 위한 강도 높은 기업·금융 구조조정 과정에서 대규모 정리해고와 실업이 발생한 사건.",
          source: "통계청"
        },
        interpretationGuide: {
          viewpoint1: "초고속 인터넷과 IT 벤처 집중 육성이 전통 산업 붕괴로 인한 대량 실업을 신산업으로 흡수하고 경제 체질을 성공적으로 전환했다는 해석.",
          viewpoint2: "실업 대란을 막기 위한 고육지책으로 IT 벤처에 자금을 무분별하게 쏟아부어 '묻지마 벤처 거품'과 부작용을 유발했다는 해석."
        }
      },
      glossary: [
        {
          term: "햇볕정책",
          description: "이솝 우화에서 따온 말로, 무력이나 강압 대신 교류와 경제 지원 등 따뜻한 포용을 통해 북한의 개방과 변화를 유도하려는 대북 정책입니다."
        },
        {
          term: "6.15 남북 공동선언",
          description: "2000년 평양에서 열린 남북정상회담에서 김대중 대통령과 김정일 국방위원장이 발표한 합의문으로, 통일 문제의 자주적 해결과 교류 협력 활성화를 명시했습니다."
        },
        {
          term: "대북송금 사건",
          description: "남북정상회담 성사와 경협 사업권을 얻기 위해 현대그룹이 국가정보원을 통해 북한에 4억 5천만 달러를 불법 송금한 사건입니다."
        }
      ],
      lineage: { prev: "이전 정책 (데이터 없음)", next: "다음 정책 (데이터 없음)" },
        mediaSnapshot: {
                    date: "2000.06.15",
                    conservative: { headline: "남북정상회담 개최, 대북 퍼주기 식 햇볕정책 논란", source: "조선일보" },
                    progressive: { headline: "분단 55년 만의 뜨거운 포옹, 한반도 평화 시대 열리다", source: "한겨레" }
                  }
    }
  ],
  additionalFacts: [
    { date: "1998-02", description: "국민의 정부 출범 및 노사정위원회 발족", source: "경제사회노동위원회" },
    { date: "1998-04", description: "외국인투자촉진법 제정 (외국 자본 유치 전면 개방)", source: "산업통상자원부" },
    { date: "1999-01", description: "국민건강보험공단 출범 (의료보험조합 통합)", source: "국민건강보험공단" },
    { date: "2000-06", description: "남북정상회담 개최 및 6.15 남북공동선언 발표", source: "통일부" },
    { date: "2000-08", description: "의약분업 본격 시행", source: "보건복지부" },
    { date: "2000-12", description: "노벨평화상 수상", source: "노벨위원회" },
    { date: "2001-01", description: "여성부 신설", source: "여성가족부" },
    { date: "2001-08", description: "IMF 구제금융 차입금 전액 조기 상환 완료", source: "한국은행" },
    { date: "2002-05", description: "한일 월드컵 개최", source: "문화체육관광부" }
  ],
  coreDNA: "MBWO",
  promises: [
    {
      promise: "IMF 조기 졸업 / 경제 위기 극복",
      target: "IMF 구제금융 195억 달러 조기 상환",
      result: "2001년 8월 전액 조기 상환 완료 (당초 2004년 목표 대비 3년 앞당김)",
      status: "achieved",
      source: "한국은행 / IMF"
    },
    {
      promise: "초고속 인터넷 인프라 구축 (인터넷 강국)",
      target: "2002년까지 ADSL 144만 회선 목표",
      result: "2002년 기준 초고속인터넷 가입자 1,000만 명 돌파 (OECD 1위 달성)",
      status: "achieved",
      source: "정보통신부 / OECD"
    },
    {
      promise: "햇볕정책을 통한 남북관계 개선",
      target: "정상회담 개최 및 교류 정상화",
      result: "2000년 6월 제1차 남북정상회담 성사, 개성공단 합의. 단, 핵 문제는 미해결 상태 지속",
      status: "partial",
      source: "통일부 / 국가기록원"
    },
    {
      promise: "민주주의 공고화 / 권위주의 청산",
      target: "국가보안법 폐지",
      result: "국가보안법 폐지는 임기 내 미실현, 그러나 과거사 진상규명위원회 설치 등 제도적 민주화 진전",
      status: "partial",
      source: "민주화운동기념사업회"
    }
  ],
  keywords: ["민주주의", "IMF극복", "햇볕정책", "정보화", "남북화해", "인권"],
  approvalRatings: [
    { date: "1998-03", rating: 70, event: "취임 초기 — 위기 극복 의지 표명", isHighlight: true },
    { date: "1998-12", rating: 55 },
    { date: "1999-06", rating: 61, event: "IMF 경제 회복세 본격화" },
    { date: "2000-06", rating: 77, event: "남북정상회담 개최 직후 — 역대 최고 지지율", isHighlight: true },
    { date: "2001-01", rating: 48 },
    { date: "2001-09", rating: 40, event: "언론사 세무조사 논란 확산" },
    { date: "2002-03", rating: 38 },
    { date: "2002-12", rating: 24, event: "아들 비리 의혹 등 레임덕 심화 — 역대 최저", isHighlight: true }
  ],
  legacies: [
    {
      title: "초고속 인터넷 기반 구축 (디지털 인프라)",
      description: "1998~2002년 추진된 초고속인터넷 보급 정책은 현재 대한민국이 세계 최고 수준의 인터넷 인프라를 유지하는 기반이 되었으며, 이후 K-콘텐츠 및 플랫폼 기업 성장의 토대가 됨.",
      source: "과학기술정보통신부 / 정보통신정책연구원"
    },
    {
      title: "개성공단 합의 틀",
      description: "2000년 남북정상회담의 합의 사항 중 하나인 개성공단은 이후 2004년 착공되어 2016년 가동 중단 전까지 남북 경제 협력의 상징적 공간으로 기능함.",
      source: "통일부 / 개성공단지원재단"
    }
  ],
  cabinetRisk: { avgTenureMonths: 11, initialDropoutRate: 0 }
};
