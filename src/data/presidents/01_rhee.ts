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
          description: "지주가 소유한 토지를 국가가 매수하여 소작농에게 분배한 정책으로, 지주제를 해체하고 자영농을 육성했습니다."
        },
        {
          term: "유상매수",
          description: "국가가 지주로부터 토지를 강제로 빼앗는 무상몰수가 아닌, 지가증권을 발급하여 정당한 대가를 지불하고 토지를 사들인 방식입니다."
        },
        {
          term: "유상분배",
          description: "농민이 국가로부터 토지를 무상으로 받는 것이 아니라, 평년 수확량의 30%를 5년간 상환하는 조건으로 토지 소유권을 넘겨받은 방식입니다."
        },
        {
          term: "발췌개헌",
          description: "1952년 6.25 전쟁 중 부산 임시수도에서, 이승만 대통령이 재집권을 위해 야당 의원들을 구금한 상태에서 통과시킨 대통령 직선제 개헌입니다."
        },
        {
          term: "초등 의무교육",
          description: "1949년 교육법 제정을 통해 초등교육 6년을 전 국민 의무교육으로 규정하여, 국가 문맹률을 획기적으로 낮추는 계기가 되었습니다."
        },
        {
          term: "자영농",
          description: "자신의 소유 토지에서 직접 농사를 짓는 농민을 의미하며, 농지개혁을 통해 과거 소작농들이 대부분 자영농으로 전환되었습니다."
        }
      ],
      lineage: { prev: "대한민국 임시정부 및 미군정 정책", next: "다음 정책 (박정희 정부 경제개발)" },
        mediaSnapshot: {
                    date: "1949.06.22",
                    conservative: { headline: "농지개혁안 통과, 지주층 막대한 타격 불가피", source: "동아일보" },
                    progressive: { headline: "소작농 눈물 닦아줄 농지개혁, 농민 해방의 첫걸음", source: "경향신문" }
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
      lineage: { prev: "한미군사고문단(KMAG) 및 상호방위 원조", next: "다음 정책 (박정희 정부 파병 및 한미동맹 강화)" },
      glossary: [
        {
          term: "한미상호방위조약",
          description: "1953년 10월 워싱턴에서 체결된 한미 간의 군사동맹 조약으로, 외부의 무력 공격에 대해 상호 원조하고 미군의 한국 주둔을 허용하는 안보의 핵심축입니다."
        },
        {
          term: "반공포로 석방",
          description: "1953년 6월, 이승만 대통령이 휴전 협정에 반대하며 미군 통제하에 있던 거제도 등지의 반공포로 약 2만 7천 명을 독단적으로 전격 석방한 사건입니다."
        },
        {
          term: "냉전 체제",
          description: "제2차 세계대전 이후 미국 중심의 자본주의 진영과 소련 중심의 공산주의 진영이 무력 충돌 없이 정치, 경제, 이념적으로 대립하던 세계 질서를 말합니다."
        },
        {
          term: "작전통제권(전시)",
          description: "전쟁 등 비상사태 발생 시 군대의 작전을 지휘하고 통제할 수 있는 권한으로, 6.25 전쟁 당시 이승만 대통령이 유엔군 사령관에게 이양한 이후 현재까지 한미연합사령관이 행사하고 있습니다."
        }
      ],
        mediaSnapshot: {
                    date: "1953.10.02",
                    conservative: { headline: "한미상호방위조약 조인, 북진통일 단념 아쉬워", source: "조선일보" },
                    progressive: { headline: "한미 동맹으로 국가 안보 초석 마련, 평화 재건 박차", source: "동아일보" }
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
      result: "발췌개헌, 사사오입 개헌 등 장기집권 시도. 1960년 4·19 혁명으로 하야",
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
      description: "1949년 교육법 제정으로 마련된 초등 의무교육 제도는 현재 무상교육 12년 체계의 출발점이 됨.",
      source: "교육부 교육법령 연혁"
    }
  ],
  cabinetRisk: { avgTenureMonths: 14, initialDropoutRate: 20 }
};
