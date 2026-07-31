import { President } from "@/types/president";

export const moonJaeIn: President = {
  id: "moon-jae-in",
  name: "문재인",
  term: "2017-2022",
  party: "더불어민주당",
  globalCounterparts: [
    { country: "미국", leader: "도널드 트럼프 / 조 바이든", term: "2017-2021 / 2021-2025" },
    { country: "일본", leader: "아베 신조 / 스가 요시히데", term: "2012-2021" },
    { country: "북한", leader: "김정은", term: "2011-현재" }
  ],
  cabinetRisk: { avgTenureMonths: 20, initialDropoutRate: 15 },
  policies: [
    {
      id: "mji-income-led",
      title: "소득주도성장과 최저임금 인상",
      category: "경제/산업",
      valueTag: "pro-welfare",
      fundingSource: "일반 국고 예산 증액, 초과 세수 활용 및 최저임금위원회 인상 결의",
      keyPersonnel: [
        { name: "장하성", role: "대통령비서실 정책실장" },
        { name: "홍장표", role: "대통령비서실 경제수석비서관" }
      ],
      
      lineage: { prev: "창조경제 (박근혜 정부)", next: "신성장 4.0 (윤석열 정부)" },
      mediaSnapshot: {
                  date: "2017.07.16",
                  conservative: { headline: "최저임금 16.4% 파격 인상, 영세 자영업자 벼랑 끝으로", source: "한국경제" },
                  progressive: { headline: "소득주도성장 본궤도, 최저임금 대폭 인상으로 서민 지갑 연다", source: "한겨레" }
                },
      context: {
        content: "낙수효과 소멸 및 가계부채 심화 속에서 내수 활성화와 분배 개선을 통한 새로운 성장 모델 요구",
        source: "기획재정부 경제정책방향"
      },
      legislationFacts: [
        { date: "2017-07", description: "2018년 최저임금 16.4% 파격 인상 의결 (7,530원)", source: "최저임금위원회" },
        { date: "2018-02", description: "주 52시간 근무제 도입을 위한 근로기준법 개정안 통과", source: "국가법령정보센터" },
        { date: "2018-08", description: "소상공인 지원 및 상가건물 임대차보호법 개정", source: "법무부" }
      ],
      pros: [
        { content: "저임금 근로자의 임금을 대폭 인상하여 노동 소득 분배율을 개선하고 최하위 계층의 소득을 보호함", source: "한국노동연구원" },
        { content: "주 52시간제 도입으로 장시간 노동 관행을 깨고 '워라밸(일과 삶의 균형)' 문화를 사회 전반에 정착시킴", source: "한국여성정책연구원" },
        { content: "아동수당 도입, 기초연금 인상 등 포용적 복지 확대를 통해 사회 안전망을 크게 강화함", source: "보건사회연구원" }
      ],
      cons: [
        { content: "최저임금의 급격한 인상으로 영세 자영업자와 소상공인의 인건비 부담이 크게 증가함", source: "중소기업중앙회" },
        { content: "인건비 부담을 느낀 기업들이 고용을 축소하거나 무인화 기기(키오스크)로 대체하여 저숙련 일자리가 오히려 감소함", source: "KDI 경제동향보고서" },
        { content: "주 52시간제가 획일적으로 적용되어 탄력근로제가 필요한 R&D 및 뿌리산업 현장의 유연성을 저해함", source: "한국경제연구원" }
      ],
      indicators: {
        domestic: [
          { name: "최저임금 인상률 (2018)", value: "16.4% (역대 최고 수준)", source: "최저임금위원회", reportName: "최저임금 심의의결서" },
          { name: "소득 1분위 근로소득 증감률 (2018.1Q)", value: "-13.3% (분배 지표 악화 논란)", source: "통계청", reportName: "가계동향조사" }
        ],
        global: [
          { name: "GDP 대비 일반정부부채비율", value: "임기 중 약 10%p 상승", source: "IMF", reportName: "World Economic Outlook" }
        ]
      },
      chart: {
        title: "최저임금 인상 추이 (원)",
        domesticLabel: "최저임금(시급)",
        source: "최저임금위원회",
        data: [
          { name: "2017", domestic: 6470 },
          { name: "2018", domestic: 7530 },
          { name: "2019", domestic: 8350 },
          { name: "2020", domestic: 8590 },
          { name: "2021", domestic: 8720 },
          { name: "2022", domestic: 9160 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "2020~2022",
          name: "코로나19 팬데믹",
          description: "전례 없는 전 세계적 감염병 확산으로 소비 심리가 위축되고 민생 경제가 큰 타격을 입은 재난적 시기.",
          source: "질병관리청"
        },
        interpretationGuide: {
          viewpoint1: "팬데믹이라는 미증유의 위기 속에서 적극적인 확장 재정과 소득주도성장 정책이 서민 경제의 붕괴를 막는 든든한 방파제 역할을 했다는 해석.",
          viewpoint2: "위기를 명분으로 한 과도한 현금 살포와 무리한 최저임금 인상이 맞물려 자영업자를 벼랑으로 몰고 국가 부채를 급증시켰다는 해석."
        }
      },
      glossary: [
        {
          term: "소득주도성장",
          description: "가계의 임금과 소득을 인상하여 소비를 촉진하고, 이를 통해 내수 활성화와 경제 성장을 달성하겠다는 거시경제 정책입니다."
        },
        {
          term: "주 52시간 근무제",
          description: "일주일 최대 근로 시간을 법정 근로 40시간과 연장 근로 12시간을 합쳐 52시간으로 제한하여 장시간 노동 관행을 없애려는 제도입니다."
        },
        {
          term: "탄력근로제",
          description: "특정 주나 특정 일의 근무 시간을 늘리는 대신 다른 날의 근무 시간을 줄여 일정 기간 평균 근로 시간을 주 52시간 내로 맞추는 유연 근무 제도입니다."
        }
      ]
    },
    {
      id: "mji-real-estate",
      title: "부동산 규제 정책 (임대차 3법 등)",
      category: "부동산/주거",
      valueTag: "pro-welfare",
      context: {
        content: "저금리 기조와 풍부한 유동성 장세 속에서 크게 상승하는 수도권 집값 안정화 및 무주택 서민 주거권 보호 필요",
        source: "국토교통부 주거종합계획"
      },
      legislationFacts: [
        { date: "2017-08", description: "8.2 부동산 대책 (다주택자 양도세 중과, 대출 규제 강화)", source: "국토교통부" },
        { date: "2018-09", description: "9.13 부동산 대책 (종합부동산세 강화)", source: "기획재정부" },
        { date: "2020-07", description: "임대차 3법(전월세신고제, 전월세상한제, 계약갱신청구권제) 국회 본회의 통과", source: "국가법령정보센터" },
        { date: "2021-02", description: "2.4 대책 (뒤늦은 대규모 주택 공급 계획 발표)", source: "국토교통부" }
      ],
      pros: [
        { content: "임대차 3법 도입으로 세입자가 2+2년의 거주 기간을 보장받게 되어 단기적인 주거 안정성이 획기적으로 높아짐", source: "국토연구원" },
        { content: "다주택자에 대한 중과세와 갭투자 방지책을 통해 부동산 투기 수요를 억제하려는 강력한 정책 의지를 보임", source: "한국주택학회" },
        { content: "공공임대주택 100만 호 공급 목표를 조기 달성하여 무주택 서민과 청년층을 위한 주거 안전망을 확충함", source: "LH 토지주택연구원" }
      ],
      cons: [
        { content: "다수의 규제 대책과 조세 강화 정책이 매물 감소를 유발하여 결과적으로 서울 집값이 크게 상승하는 역효과 초래", source: "부동산114 통계" },
        { content: "임대차 3법 시행 직후 전세 매물이 급감하고 전셋값이 크게 상승하여 임대차 시장의 불안정성 확대", source: "한국은행 경제전망보고서" },
        { content: "임기 초반 공급 부족을 부인하고 수요 억제에만 집중하다가 뒤늦게 공급 대책(2.4 대책)으로 선회하여 실기했다는 비판", source: "KDI 정책평가" }
      ],
      indicators: {
        domestic: [
          { name: "서울 아파트 매매가격 증감 (임기 내)", value: "약 2배 가량 급등", source: "KB국민은행", reportName: "월간 주택가격동향" },
          { name: "종합부동산세 고지 인원 (2021)", value: "94.7만 명 (역대 최대)", source: "국세청", reportName: "국세통계연보" }
        ],
        global: [
          { name: "PIR(가구소득 대비 주택가격 비율, 서울)", value: "급격한 상승세 지속", source: "Numbeo / KB", reportName: "Property Prices Index" }
        ]
      },
      glossary: [
        {
          term: "임대차 3법",
          description: "세입자 보호를 위해 도입된 전월세신고제, 전월세상한제(인상률 5% 제한), 계약갱신청구권제(2+2년 거주 보장)를 묶어 부르는 말입니다."
        },
        {
          term: "갭투자",
          description: "전세가와 매매가의 차이(Gap)가 적은 주택을 전세를 끼고 매입하여 시세 차익을 노리는 부동산 투자 방식입니다."
        },
        {
          term: "양도세 중과",
          description: "부동산을 팔아 얻은 양도 차익에 대해 세금을 부과할 때, 다주택자에게는 기본 세율보다 훨씬 높은 누진 세율을 적용하여 매매 차익을 회수하려는 징벌적 세금 정책입니다."
        }
      ],
      lineage: { prev: "박근혜 정부 부동산 규제 완화 (초이노믹스)", next: "다음 정책 (윤석열 정부 부동산 규제 완화)" },
        mediaSnapshot: {
                    date: "2020.07.31",
                    conservative: { headline: "임대차 3법 강행 처리, 전세 씨 마르고 시장 대혼란 초래", source: "조선일보" },
                    progressive: { headline: "세입자 주거 안정을 위한 임대차 3법 드디어 국회 통과", source: "경향신문" }
                  }
    }
  ],
  additionalFacts: [
    { date: "2017-05", description: "문재인 정부 출범 (인수위 없이 즉각 취임)", source: "국가기록원" },
    { date: "2017-11", description: "포항 지진 발생 및 수능 연기", source: "교육부" },
    { date: "2018-02", description: "평창 동계올림픽 개최", source: "문화체육관광부" },
    { date: "2018-04", description: "제1차 남북정상회담 (판문점 선언)", source: "통일부" },
    { date: "2018-07", description: "주 52시간 근무제 시행 (300인 이상 사업장)", source: "고용노동부" },
    { date: "2019-07", description: "일본의 반도체 핵심 소재 수출 규제 조치", source: "산업통상자원부" },
    { date: "2020-01", description: "국내 첫 코로나19 확진자 발생 및 대응", source: "질병관리청" },
    { date: "2020-04", description: "긴급재난지원금 전 국민 지급 결정", source: "기획재정부" },
    { date: "2021-01", description: "고위공직자범죄수사처(공수처) 출범", source: "법무부" }
  ],
  coreDNA: "GBWD",
  promises: [
    {
      promise: "소득주도성장 (최저임금 1만 원)",
      target: "임기 내 최저임금 시간당 1만 원 달성",
      result: "2022년 기준 9,160원. 목표치 미달. 2018년 16.4% 인상 후 인상 속도 조절",
      status: "failed",
      source: "최저임금위원회"
    },
    {
      promise: "주 52시간 근무제 도입 (노동시간 단축)",
      target: "연간 근로시간 OECD 평균 수준 단축",
      result: "2018년 300인 이상 사업장 시행, 단계적 확대. 2021년 연평균 근로시간 1,915시간 (2017년 대비 약 100시간 감소)",
      status: "achieved",
      source: "고용노동부 / OECD Employment Outlook"
    },
    {
      promise: "한반도 평화프로세스 완성 (비핵화)",
      target: "북한 비핵화 협상 타결",
      result: "2018년 4월 판문점 선언, 9월 평양공동선언 서명. 북미회담 결렬 후 협상 중단 상태로 임기 종료",
      status: "partial",
      source: "통일부 / 국가정보원"
    },
    {
      promise: "공공일자리 81만 개 창출",
      target: "임기 내 공공 일자리 81만 개 신규 창출",
      result: "공공 부문 채용 확대는 진행되었으나, 전체 고용 목표 달성 여부는 논란. 청년 고용률 개선은 부진",
      status: "partial",
      source: "통계청 경제활동인구조사 / 기획재정부"
    }
  ],
  keywords: ["소득주도성장", "한반도평화", "적폐청산", "공정", "코로나대응", "탈원전"],
  approvalRatings: [
    { date: "2017-05", rating: 84, event: "취임 직후 — 박근혜 탄핵 이후 높은 국민 기대감 (역대 최고 출발)", isHighlight: true },
    { date: "2017-11", rating: 73 },
    { date: "2018-05", rating: 78, event: "판문점 남북정상회담 직후" },
    { date: "2019-03", rating: 45, event: "최저임금 급등에 따른 자영업 피해 논란 확산" },
    { date: "2020-05", rating: 71, event: "코로나19 K-방역 국제적 호평" },
    { date: "2021-04", rating: 32, event: "LH 직원 부동산 투기 의혹 — 역대 최저점", isHighlight: true },
    { date: "2021-10", rating: 38 },
    { date: "2022-03", rating: 41, event: "임기 말, 대선 전후 소폭 회복", isHighlight: false }
  ],
  legacies: [
    {
      title: "고위공직자범죄수사처 (공수처)",
      description: "2021년 출범한 공수처는 이전 정부들의 개혁 과제였던 검찰 견제 기구로, 제도로서 현재까지 유지·운영 중이며 고위직 비리 수사 체계의 일부로 기능하고 있음.",
      source: "고위공직자범죄수사처"
    },
    {
      title: "소재·부품·장비 국산화 기반 (소부장 정책)",
      description: "2019년 일본 수출 규제 대응으로 추진된 소재·부품·장비 자립화 정책은 현재 반도체·디스플레이 공급망의 국내 핵심 기술 확보와 관련 예산 투입의 제도적 틀로 정착함.",
      source: "산업통상자원부 / 소재부품장비특별법"
    }
  ]
};
