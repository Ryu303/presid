import { President } from "@/types/president";

export const yun: President = {
  id: "yun",
  name: "윤보선 (장면 내각)",
  term: "1960-1962",
  party: "민주당",
  globalCounterparts: [
    { country: "미국", leader: "존 F. 케네디", term: "1961-1963" },
    { country: "일본", leader: "이케다 하야토", term: "1960-1964" },
    { country: "북한", leader: "김일성", term: "1948-1994" }
  ],
  policies: [
    {
      id: "yun-economic-plan",
      title: "경제개발 5개년 계획 초안 마련 및 지방자치",
      category: "경제/산업",
      context: { 
        content: "4.19 혁명으로 이승만 정권 붕괴 후 내각책임제 출범, 부정부패 청산과 경제 재건에 대한 국민적 열망 분출", 
        source: "국사편찬위원회 한국사데이터베이스" 
      },
      legislationFacts: [
        { date: "1960-06", description: "제2공화국 헌법 개정 (내각책임제 및 양원제 도입)", source: "국가법령정보센터" },
        { date: "1960-12", description: "지방자치법 개정을 통한 완전한 지방자치제 실시 (서울시장 및 도지사 직선제)", source: "국가기록원" },
        { date: "1961-04", description: "경제개발 5개년 계획 초안 완성 (이후 군사정부에 의해 차용)", source: "기획재정부 경제개발사" }
      ],
      pros: [
        { content: "대한민국 역사상 최초로 완전한 민주적 절차에 의한 지방자치 단체장 직접 선거 실시", source: "한국지방자치학회" },
        { content: "부흥부를 중심으로 거시적이고 장기적인 '경제개발 5개년 계획'의 기틀을 최초로 수립", source: "한국경제학회 학술지" },
        { content: "언론, 출판, 집회, 결사의 자유가 전례 없이 보장된 민주주의의 황금기", source: "언론진흥재단 언론사연구" }
      ],
      cons: [
        { content: "민주당 내 신구파 갈등과 잦은 내각 교체로 인한 극심한 국정 혼란 야기", source: "KCI 등재 정치학 논문" },
        { content: "각종 데모와 시위가 끊이지 않아 사회적 불안정이 고조되고 치안 부재 상태 발생", source: "경찰청 치안사록" },
        { content: "경제개발 계획이 5.16 군사정변으로 인해 제2공화국 하에서 실제 실행되지 못함", source: "국사편찬위원회 현대사자료" }
      ],
      indicators: {
        domestic: [
          { name: "집회 및 시위 건수 (1960-1961)", value: "폭발적 증가", source: "경찰청", reportName: "치안통계" }
        ],
        global: [
          { name: "민주주의 지수 평가", value: "아시아 최고 수준의 자유 보장", source: "Freedom House", reportName: "Freedom in the World (과거 회고)" }
        ]
      },
      chart: {
        title: "경제성장률 추이 (%)",
        domesticLabel: "경제성장률",
        source: "한국은행",
        data: [
          { name: "1959", domestic: 4.6 },
          { name: "1960", domestic: 1.2 },
          { name: "1961", domestic: 4.1 },
          { name: "1962", domestic: 2.9 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "1960.4",
          name: "4·19 혁명",
          description: "이승만 정권의 부정선거에 항의하여 일어난 민주주의 시민 혁명.",
          source: "민주화운동기념사업회"
        },
        interpretationGuide: {
          viewpoint1: "시민 혁명을 통해 쟁취한 민주주의를 바탕으로 의원내각제를 도입하여 정치적 다원주의를 시도했다는 긍정적 시각.",
          viewpoint2: "민주당 구파와 신파의 극심한 갈등으로 국정을 안정시키지 못해 결국 5·16 군사정변의 빌미를 제공했다는 비판적 시각."
        }
      },
      glossary: [
        {
          term: "의원내각제",
          description: "국회의 다수당이 내각을 구성하고, 내각이 국회에 대하여 연대 책임을 지는 정부 형태입니다."
        }
      ],
        lineage: { prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" },
        frictionIndex: { veto: 0, filibusterHours: 0, strikeDays: 0 },
        mediaSnapshot: {
                    date: "1960.10.15",
                    conservative: { headline: "야심찬 경제계획, 재원 마련 대책은 모호", source: "조선일보" },
                    progressive: { headline: "경제제일주의 선언, 4.19 이후 첫 장기 도약 청사진", source: "경향신문" }
                  }
    }
  ],
  additionalFacts: [
    { date: "1960-06", description: "내각책임제를 골자로 한 제3차 헌법 개정안 통과", source: "대한민국 국회" },
    { date: "1960-08", description: "윤보선 제4대 대통령 취임 및 장면 내각 출범", source: "국가기록원" },
    { date: "1960-10", description: "경제제일주의 선언 및 국토건설사업 계획 입안", source: "기획재정부 기록" },
    { date: "1960-11", description: "지방자치법 개정 (지방자치단체장 직접 선거 도입)", source: "행정안전부" },
    { date: "1961-02", description: "한미경제협정 체결 (미국 경제 원조에 대한 조건 명문화)", source: "외교부" },
    { date: "1961-04", description: "부정선거 관련자 처벌을 위한 특별법 제정", source: "법제처" },
    { date: "1961-05", description: "5.16 군사정변 발생으로 사실상 내각책임제 기능 정지", source: "한국민족문화대백과사전" }
  ],
  coreDNA: "GBRD",
  promises: [
    {
      promise: "민주당 소속 의원내각제 하 소신내각 구성",
      result: "1960년 8월 장면 내각 출범, 의원내각제 실시. 극도의 정치 혼란으로 16개월 만에 5·16 쿠데타 발생",
      status: "partial",
      source: "한국정치외교사전"
    }
  ],
  keywords: ["민주주의", "권한이양", "과도정부", "전환기"],
  approvalRatings: [
    { date: "1960-08", rating: 65, event: "4·19 혁명 이후 제2공화국 취임", isHighlight: true },
    { date: "1961-04", rating: 30, event: "정치 혼란 가속 — 지지율 급폭 하락", isHighlight: true },
    { date: "1962-03", rating: 15, event: "5·16 쿠데타 이후 협력 거부로 사실상 권한 상실" }
  ],
  legacies: [
    {
      title: "제2공화국 헌법 (의원내각제 체험)",
      description: "4·19 혁명 이후 체험된 의원내각제는 비록 단명을 채웠으나, 후대 정치제도 논의 시 대통령제와의 비교 원형으로 반복 재거론됨.",
      source: "헌법재판소 헌법연혁"
    }
  ],
    cabinetRisk: { avgTenureMonths: 15, initialDropoutRate: 20 }
};
