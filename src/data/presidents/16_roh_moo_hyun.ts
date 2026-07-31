import { President } from "@/types/president";

export const rohMooHyun: President = {
  id: "roh-moo-hyun",
  name: "노무현",
  term: "2003-2008",
  party: "새천년민주당 / 열린우리당",
  globalCounterparts: [
    { country: "미국", leader: "조지 W. 부시", term: "2001-2009" },
    { country: "일본", leader: "고이즈미 준이치로 / 아베 신조 (1차)", term: "2001-2007" },
    { country: "북한", leader: "김정일", term: "1994-2011" }
  ],
  policies: [
    {
      id: "rmh-balance",
      title: "국가균형발전과 행정중심복합도시 건설",
      category: "부동산/주거",
      valueTag: "pro-welfare",
      context: {
        content: "수도권 과밀화와 지방 소멸 위기가 국가적 과제로 대두되었으며, 권위주의적 중앙집권 체제 탈피 요구",
        source: "국가균형발전위원회 백서"
      },
      legislationFacts: [
        { date: "2004-01", description: "국가균형발전 특별법, 지방분권 특별법, 신행정수도 특별법(3대 특별법) 공포", source: "국가법령정보센터" },
        { date: "2004-10", description: "신행정수도 특별법에 대한 헌법재판소의 위헌 결정 (관습헌법 논리)", source: "헌법재판소 판례" },
        { date: "2005-03", description: "위헌 결정 후 '행정중심복합도시(세종시) 건설을 위한 특별법'으로 우회 제정", source: "국가기록원" },
        { date: "2005-06", description: "수도권 공공기관 176개 지방 이전 계획(혁신도시) 발표", source: "국토교통부" }
      ],
      pros: [
        { content: "건국 이래 최초로 수도권 일극주의를 타파하고 실질적인 국토 균형 발전과 지방 분권의 기틀을 법제화함", source: "한국지방행정연구원" },
        { content: "세종시와 전국 10개 혁신도시 건설을 통해 낙후된 지방에 새로운 성장 거점을 마련함", source: "국토연구원" },
        { content: "중앙 부처의 권한을 지방 정부로 대폭 이양하여 풀뿌리 민주주의와 지방 자치의 역량을 한 단계 끌어올림", source: "한국지방자치학회" }
      ],
      cons: [
        { content: "헌재의 위헌 결정에도 불구하고 무리하게 행정수도 이전을 추진하여 극심한 국론 분열과 사회적 갈등을 초래함", source: "KCI 등재 정치학 논문" },
        { content: "행정 부처가 서울과 세종시로 이원화되면서 막대한 행정 비효율과 공무원들의 길거리 낭비 시간을 발생시킴", source: "한국행정학회보" },
        { content: "지방 이전 및 신도시 개발 발표로 인해 전국적인 부동산 투기 열풍과 지가 상승을 촉발함", source: "한국주택경제학회" }
      ],
      indicators: {
        domestic: [
          { name: "수도권 인구 비중 (2003 -> 2008)", value: "47.6% -> 48.8% (증가세 지속)", source: "통계청", reportName: "인구주택총조사" },
          { name: "전국 지가 변동률 (2006)", value: "5.61% 급등", source: "국토교통부", reportName: "지가동향" }
        ],
        global: [
          { name: "지역 불균형 지수 (Gini index)", value: "OECD 평균 대비 수도권 집중도 최고 수준", source: "OECD", reportName: "Regional Statistics" }
        ]
      },
      chart: {
        title: "종합주가지수(KOSPI) 및 전국 주택가격 추이",
        domesticLabel: "KOSPI",
        internationalLabel: "주택가격지수",
        source: "한국거래소 / KB국민은행",
        data: [
          { name: "2003", domestic: 810, international: 65 },
          { name: "2004", domestic: 895, international: 63 },
          { name: "2005", domestic: 1379, international: 67 },
          { name: "2006", domestic: 1434, international: 75 },
          { name: "2007", domestic: 1897, international: 78 }
        ]
      },
      glossary: [
        {
          term: "종합부동산세",
          description: "부동산 투기 억제를 목적으로 일정 금액 이상의 부동산(주택 및 토지) 보유자에게 누진세율을 적용하여 부과하는 국세입니다."
        }
      ],
      crossAnalysis: {
        linkedEvent: {
          date: "2000년대 중반",
          name: "저금리 기조 및 전 세계적 유동성 팽창 (부동산 활황기)",
          description: "닷컴버블 붕괴 이후 글로벌 저금리 기조가 이어지며 시중에 돈이 풀리고 자산 가격이 전 세계적으로 폭등하던 시기.",
          source: "한국은행"
        },
        interpretationGuide: {
          viewpoint1: "부동산 폭등이라는 시대적 거품에 맞서 종합부동산세를 도입함으로써 조세 형평성을 맞추고 투기 억제를 시도한 용기 있는 정책이었다는 해석.",
          viewpoint2: "자산 시장의 자연스러운 흐름을 무리한 징벌적 세금으로 억누르려다 조세 저항만 키우고 결과적으로 집값 안정에도 실패했다는 해석."
        }
      },
        lineage: { prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" },
        frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 0 },
        mediaSnapshot: {
                    date: "2004.10.22",
                    conservative: { headline: "헌재, 신행정수도 위헌 결정… 국가 백년대계 혼란 자초", source: "조선일보" },
                    progressive: { headline: "관습헌법이 국토 균형 발전 막았다… 충청권 강력 반발", source: "오마이뉴스" }
                  }
    },
    {
      id: "rmh-fta",
      title: "한미 FTA 체결 및 권위주의 청산",
      category: "외교/안보",
      valueTag: "pro-market",
      fundingSource: "농어업 피해 보전 및 경쟁력 강화를 위한 국고 예산 (약 22조 원 규모 대책)",
      keyPersonnel: [
        { name: "김현종", role: "외교통상부 통상교섭본부장" },
        { name: "한덕수", role: "한미 FTA 체결지원위원장 / 국무총리" }
      ],
      context: {
        content: "글로벌 무역 장벽 철폐 흐름(개방형 통상 국가 지향) 및 제왕적 대통령제에 대한 비판적 여론 형성",
        source: "외교통상부 한미FTA 백서"
      },
      legislationFacts: [
        { date: "2006-02", description: "한미 자유무역협정(FTA) 협상 공식 개시 선언", source: "대통령기록관" },
        { date: "2007-04", description: "한미 FTA 14개월의 줄다리기 끝에 협상 최종 타결", source: "외교부" },
        { date: "2007-10", description: "노무현 대통령 도보로 군사분계선 넘어 제2차 남북정상회담 개최 (10.4 남북정상선언)", source: "통일부" }
      ],
      pros: [
        { content: "지지층의 거센 반발을 감수하고 국가의 미래 먹거리를 위해 세계 최대 시장인 미국과의 FTA를 성사시킴", source: "KIEP 대외경제정책연구원" },
        { content: "검찰, 국정원 등 권력 기관의 정치 개입을 차단하고 제왕적 대통령의 권한을 내려놓아 권위주의 문화를 청산함", source: "한국정치학회" },
        { content: "한미 동맹을 '포괄적 동맹'으로 격상시키는 동시에 전시작전통제권 환수를 추진하여 자주국방의 의지를 다짐", source: "국방대학교 안보문제연구소" }
      ],
      cons: [
        { content: "한미 FTA 추진 과정에서 핵심 지지층(농민, 진보 진영)이 이탈하며 정권의 정치적 기반이 붕괴되는 결과 초래", source: "KCI 등재 사회학 논문" },
        { content: "대국민 소통 방식의 논란과 당정 갈등으로 국정 운영의 불안정성 노출", source: "언론진흥재단 기사 분석" },
        { content: "임기 말 무리한 남북정상회담 추진과 NLL 포기 논란 등으로 국론 분열과 차기 정권에 외교적 부담을 전가함", source: "세종연구소 외교학술지" }
      ],
      indicators: {
        domestic: [
          { name: "대미 수출액 (2006)", value: "431억 달러", source: "한국무역협회", reportName: "무역통계" }
        ],
        global: [
          { name: "민주주의 지수 (2008)", value: "완전한 민주주의(Full Democracy) 분류", source: "The Economist Intelligence Unit", reportName: "Democracy Index" }
        ]
      },
        lineage: { prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" },
        frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 0 },
        mediaSnapshot: {
                    date: "2007.04.03",
                    conservative: { headline: "한미 FTA 체결, 농업 희생양 삼은 굴욕적 졸속 협상", source: "경향신문" },
                    progressive: { headline: "세계 최대 시장 뚫었다! 한미 FTA 14개월 줄다리기 끝 타결", source: "중앙일보" }
                  }
    }
  ],
  additionalFacts: [
    { date: "2003-02", description: "참여정부 출범", source: "국가기록원" },
    { date: "2004-03", description: "대통령 탄핵소추안 국회 통과 (이후 헌재 기각)", source: "헌법재판소" },
    { date: "2004-04", description: "KTX(한국고속철도) 개통", source: "한국철도공사" },
    { date: "2005-01", description: "호주제 폐지를 골자로 한 민법 개정안 통과", source: "법무부" },
    { date: "2005-08", description: "부동산 실거래가 신고제 도입 (8.31 부동산 대책)", source: "국토교통부" },
    { date: "2006-03", description: "행정중심복합도시(세종시) 건설 기본계획 발표", source: "행정중심복합도시건설청" },
    { date: "2007-04", description: "한미 FTA(자유무역협정) 타결", source: "산업통상자원부" },
    { date: "2007-10", description: "제2차 남북정상회담 (10.4 남북정상선언)", source: "통일부" },
    { date: "2008-01", description: "국민참여재판제도 첫 시행", source: "대법원" }
  ],
  coreDNA: "MBWD",
  promises: [
    {
      promise: "행정수도 이전 (세종시)",
      target: "수도 기능을 세종시로 이전",
      result: "헌법재판소 2004년 위헌 결정. 수정된 신행정수도 건설안으로 지속 추진, 세종시 이전 부분 실현",
      status: "partial",
      source: "헌법재판소 / 행정안전부"
    },
    {
      promise: "한미 FTA 체결",
      result: "2007년 한미 FTA 본협정 타결. 단 국회 비준은 이명박 정부 시절 완료",
      status: "partial",
      source: "산업통상자원부"
    },
    {
      promise: "부동산 투기 억제 및 집값 안정화",
      target: "종합부동산세 등 강력한 정책 시행",
      result: "종합부동산세 도입(2005년)에도 불구하고 임기 중 집값 연평균 10% 이상 폭등 지속",
      status: "failed",
      source: "KB국민은행 주택가격동향"
    },
    {
      promise: "권위주의 철폐 및 연대하는 정치 청산",
      result: "청와대 권위 제도 폐지, 국가정보원 개혁 등 노력. 단 실질적 철폐는 제한적",
      status: "partial",
      source: "민주화운동기념사업회"
    }
  ],
  keywords: ["참여정부", "원칙과상식", "한미FTA", "지방분권", "탈권위", "프레임리스"],
  approvalRatings: [
    { date: "2003-02", rating: 70, event: "취임 시점 — 노무현 돌풍과 개혁 기대", isHighlight: true },
    { date: "2004-03", rating: 37, event: "국회 탄핵소추안 가결 (60일 직무 정지)", isHighlight: false },
    { date: "2004-05", rating: 60, event: "헌법재판소 탄핵 기각 이후 지지율 회복", isHighlight: false },
    { date: "2006-01", rating: 32, event: "부동산 정책 실패 논란 속 지지율 하락" },
    { date: "2007-05", rating: 25, event: "임기 말 레임덕 기조 — 역대 최저", isHighlight: true },
    { date: "2007-10", rating: 30, event: "2차 남북정상회담 성공 후 소폭 회복" }
  ],
  legacies: [
    {
      title: "한미 FTA 를 포함한 자유무역협정(FTA) 확대 틀",
      description: "노무현 정부 시기 체결된 한미 FTA는 비록 이명박 정부에서 발효되었으나, 한국의 FTA 중심 다자무역체제 전환의 출발점으로 평가됨.",
      source: "산업통상자원부"
    },
    {
      title: "국민참여재판제도 신설 (2008년)",
      description: "2008년 신설된 국민참여재판은 사법 권력에 대한 민주적 통제라는 의미에서 현재까지 사법 체계 내에서 유지 중.",
      source: "법무부"
    }
  ],
    cabinetRisk: { avgTenureMonths: 15, initialDropoutRate: 20 }
};
