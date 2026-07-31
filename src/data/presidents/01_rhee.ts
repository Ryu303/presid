import { President } from "@/types/president";

export const rhee: President = {
  id: "rhee",
  name: "이승만",
  term: "1948-1960",
  party: "독립촉성중앙협의회 / 자유당",
  globalCounterparts: [
    { country: "미국", leader: "해리 S. 트루먼 / 드와이트 D. 아이젠하워", term: "1945-1953 / 1953-1961" },
    { country: "일본", leader: "요시다 시게루 / 하토야마 이치로", term: "1948-1954 / 1954-1956" },
    { country: "북한", leader: "김일성", term: "1948-1994" }
  ],
  policies: [
    {
      id: "rhee-land-reform",
      title: "농지개혁 및 교육 인프라 확충",
      category: "경제/산업",
      context: { 
        content: "광복 직후 농업 중심 국가에서 소작농의 불만과 빈곤 극복, 근대화를 위한 의무교육 필요성 대두", 
        source: "국사편찬위원회 한국사데이터베이스" 
      },
      legislationFacts: [
        { date: "1949-06", description: "농지개혁법 제정 (유상매수, 유상분배 원칙)", source: "국가법령정보센터" },
        { date: "1950-03", description: "농지개혁법 개정 및 본격적인 시행", source: "국가기록원" },
        { date: "1950-06", description: "초등 의무교육 시행 기초 법안 제정", source: "국가기록원" }
      ],
      pros: [
        { content: "지주 중심의 봉건적 토지 소유 제도를 철폐하여 근대적 자본주의 발전을 위한 토대 마련", source: "한국경제학회 학술지" },
        { content: "소작농이 자영농으로 전환되며 사회적 안정성 증대 및 6.25 전쟁 중 농민들의 공산화 방지", source: "KCI 등재 역사학 논문" },
        { content: "의무교육 확충으로 문맹률을 크게 낮추고 이후 경제 성장을 위한 인적 자원 기반 구축", source: "교육부 교육통계연보" }
      ],
      cons: [
        { content: "유상분배 방식으로 인해 가난한 소작농들의 토지 상환 부담 가중", source: "한국사학회 학술지" },
        { content: "지주 세력의 산업자본가 전환 미흡 및 일부 토지 사전 처분으로 인한 개혁 효과 반감", source: "KCI 등재 경제사 논문" },
        { content: "전쟁과 겹치며 농업 생산력의 일시적 저하 및 식량난 가중", source: "한국농촌경제연구원" }
      ],
      indicators: {
        domestic: [
          { name: "자소작농 비율 (1949 -> 1951)", value: "34.6% -> 96.0%", source: "농림부", reportName: "농업통계" },
          { name: "초등학교 취학률 (1945 -> 1959)", value: "64% -> 95%", source: "문교부", reportName: "문교통계" }
        ],
        global: [
          { name: "문맹률 추이 (1945 -> 1955)", value: "78% -> 22%", source: "UNESCO / KOSIS", reportName: "한국 교육의 발달" }
        ]
      },
      chart: {
        title: "소비자물가지수 추이 (1953=100)",
        domesticLabel: "물가지수",
        source: "한국은행",
        data: [
          { name: "1948", domestic: 15 },
          { name: "1950", domestic: 30 },
          { name: "1953", domestic: 100 },
          { name: "1956", domestic: 230 },
          { name: "1960", domestic: 380 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "1950-1953",
          name: "6·25 전쟁",
          description: "한국 전쟁으로 인한 국토 황폐화와 막대한 인명, 재산 피해 발생.",
          source: "국방부 군사편찬연구소"
        },
        interpretationGuide: {
          viewpoint1: "전쟁의 폐허 속에서 농지개혁과 의무교육을 통해 근대 국가의 기틀을 마련했다는 평가.",
          viewpoint2: "전시 상황을 빌미로 장기 집권을 위한 헌정 파괴(발췌개헌 등)가 정당화되었다는 비판."
        }
      },
      glossary: [
        {
          term: "농지개혁",
          description: "지주가 소유한 토지를 국가가 유상 매수하여 소작농에게 유상 분배한 정책으로, 지주제를 해체하고 자영농을 육성했습니다."
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
      id: "rhee-us-alliance",
      title: "한미상호방위조약 체결",
      category: "외교/안보",
      context: { 
        content: "6.25 한국전쟁 휴전 협상 및 냉전 체제 하에서의 국가 생존과 안보 위협", 
        source: "외교부 외교사료관" 
      },
      legislationFacts: [
        { date: "1953-06", description: "이승만 대통령, 반공포로 석방 단행", source: "국가기록원" },
        { date: "1953-10", description: "워싱턴에서 한미상호방위조약 정식 조인", source: "조약집 (외교부)" },
        { date: "1954-11", description: "한미상호방위조약 발효", source: "국가법령정보센터" }
      ],
      pros: [
        { content: "미군의 한국 주둔을 법적으로 보장받아 북한의 재침을 억지하는 강력한 안보망 구축", source: "세종연구소 안보학술지" },
        { content: "안보 위협이 최소화된 상황에서 이후 경제 성장에 집중할 수 있는 지정학적 환경 조성", source: "한국국제정치학회" },
        { content: "미국으로부터 대규모 경제 원조와 군사 원조를 이끌어내는 외교적 성과", source: "국방부 군사편찬연구소" }
      ],
      cons: [
        { content: "휴전 협상 과정에서 반공포로를 독단적으로 석방하여 동맹국과의 심각한 외교적 마찰 초래", source: "외교사연구 논문" },
        { content: "군사적 작전통제권(전시)을 미군에 양도하여 주권 국가로서의 군사적 자율성 제약", source: "국방부 국방백서" },
        { content: "대미 의존도가 지나치게 높아져 이후 한국 경제와 외교가 미국에 종속되는 결과 초래", source: "KCI 등재 정치외교학 논문" }
      ],
      indicators: {
        domestic: [
          { name: "국방비 부담 경감 효과", value: "막대한 안보 비용 대체", source: "국방부", reportName: "국방백서" }
        ],
        global: [
          { name: "미국 무상경제원조액 (1953-1960)", value: "약 17억 달러", source: "USAID", reportName: "US Overseas Loans and Grants" }
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
    { date: "1948-07", description: "제헌국회에서 대한민국 제헌 헌법 공포", source: "국가기록원" },
    { date: "1949-06", description: "농지개혁법 제정 (지주제 해체 및 경자유전 원칙 확립)", source: "국가기록원" },
    { date: "1949-12", description: "교육법 제정 (초등 의무교육의 법적 근거 마련)", source: "법제처" },
    { date: "1951-12", description: "자유당 창당 (이승만 지지 세력 규합)", source: "한국민족문화대백과사전" },
    { date: "1952-07", description: "발췌개헌안 통과 (대통령 직선제 개헌)", source: "대한민국 국회" },
    { date: "1953-10", description: "한미상호방위조약 체결 (한미 동맹 공식화)", source: "외교부" },
    { date: "1954-11", description: "사사오입 개헌 (초대 대통령의 중임 제한 철폐)", source: "국가기록원" }
  ],
  coreDNA: "GARD",
  promises: [
    {
      promise: "해방 이후 대한민국 건국 및 헌법 체제 수립",
      result: "1948년 7월 제헌 헌법 공포, 초대 대통령 취임. 자유민주주의 공화국 체제 확립",
      status: "achieved",
      source: "국가기록원"
    },
    {
      promise: "농지개혁 실시",
      target: "유상몰수의 토지 수용 및 소작농에게 분배",
      result: "1950년 3월 농지개혁법 시행, 지주제 실질적 해체",
      status: "achieved",
      source: "한국농촌경제연구원"
    },
    {
      promise: "초등 의무교육 실시",
      target: "전국 초등학교 무상 교육",
      result: "1954년까지 전국적 의무교육 제도 확립, 문맹률 급간",
      status: "achieved",
      source: "교육부 교육연혁보고"
    },
    {
      promise: "자유시장 민주주의 실현",
      result: "발췌개헌, 사사오입 개헌 등 장기집권 시도. 1960년 4·19 혁명으로 하야. 1960년 4·19 혁명으로 하야",
      status: "failed",
      source: "민주화운동기념사업회"
    }
  ],
  keywords: ["건국", "반공", "한미동맹", "의무교육", "북진통일", "자유민주"],
  approvalRatings: [
    { date: "1948-08", rating: 75, event: "초대 대통령 취임 시 압도적 지지", isHighlight: true },
    { date: "1950-06", rating: 60, event: "6·25 전쟁 발발" },
    { date: "1953-07", rating: 55, event: "휴전협정 체결" },
    { date: "1956-05", rating: 40, event: "장기 집권에 대한 반발 기류" },
    { date: "1960-04", rating: 10, event: "4·19 혁명 발발 — 역대 최저", isHighlight: true }
  ],
  legacies: [
    {
      title: "한미상호방위조약 (1953)",
      description: "1953년 체결된 한미상호방위조약은 현재까지 대한민국 안보의 초석으로 작동하며, 주한미군 주둔의 법적 근거.",
      source: "외교부 조약국"
    },
    {
      title: "의무교육 제도 확립",
      description: "1949년 교육법 제정으로 마련된 초등 의무교육 체도는 현재 무상교육 12년 체계의 출발점이 됨.",
      source: "교육부 교육법력 연혁"
    }
  ],
    cabinetRisk: { avgTenureMonths: 15, initialDropoutRate: 20 }
};
