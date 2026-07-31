import { President } from "@/types/president";

export const kimYoungSam: President = {
  id: "kim-young-sam",
  name: "김영삼",
  term: "1993-1998",
  party: "민주자유당 / 신한국당",
  globalCounterparts: [
    { country: "미국", leader: "빌 클린턴", term: "1993-2001" },
    { country: "일본", leader: "무라야마 도미이치 / 하시모토 류타로", term: "1994-1998" },
    { country: "북한", leader: "김일성 / 김정일", term: "1948-1994 / 1994-2011" }
  ],
  policies: [
    {
      id: "kys-real-name",
      title: "금융실명제 전격 실시",
      category: "경제/산업",
      valueTag: "pro-market",
      fundingSource: "재정 투입 없음 (제도 개혁을 통한 세원 투명화 목적)",
      keyPersonnel: [
        { name: "이경식", role: "부총리 겸 경제기획원 장관" },
        { name: "박재윤", role: "대통령 경제수석비서관" }
      ],
      context: {
        content: "가명 거래를 악용한 정경유착, 비자금 조성, 지하경제 비대화 등 경제 투명성 부재로 인한 부패 만연",
        source: "재무부 금융실명제 백서"
      },
      legislationFacts: [
        { date: "1993-08", description: "대통령 긴급재정경제명령으로 '금융실명거래 및 비밀보장에 관한 긴급재정경제명령' 전격 발표", source: "대통령기록관" },
        { date: "1993-10", description: "실명 전환 유예기간 종료 및 미전환 계좌 과징금 부과", source: "재무부 관보" },
        { date: "1997-12", description: "긴급명령을 대체하는 '금융실명거래 및 비밀보장에 관한 법률' 정식 제정", source: "국가법령정보센터" }
      ],
      pros: [
        { content: "검은돈과 지하경제를 양성화하여 조세 형평성을 높이고 한국 경제의 투명성을 선진국 수준으로 끌어올림", source: "한국조세재정연구원" },
        { content: "군사 작전과 같은 전격적인 기습 시행으로 기득권의 반발과 자금 이탈을 사전에 차단한 강력한 리더십", source: "KDI 경제발전사" },
        { content: "정치인과 고위 공직자의 부정한 자금 흐름을 추적할 수 있게 되어 훗날 부정부패 척결의 핵심 수단이 됨", source: "참여연대 맑은사회만들기본부" }
      ],
      cons: [
        { content: "준비 없는 갑작스러운 시행으로 인해 단기적으로 주식 시장이 폭락하고 시중 자금 경색이 발생함", source: "자본시장연구원" },
        { content: "음성 자금에 의존하던 중소기업과 영세 자영업자들이 자금 조달에 어려움을 겪으며 연쇄 부도 사태 발생", source: "중소기업중앙회 통계" },
        { content: "명령(긴급권) 발동이라는 초법적인 절차를 사용하여 경제 정책을 시행했다는 절차적 정당성 논란", source: "헌법재판소 판례평석" }
      ],
      indicators: {
        domestic: [
          { name: "실명 확인율 (시행 2개월 후)", value: "96% 달성", source: "재무부", reportName: "금융실명제 백서" },
          { name: "종합주가지수 (발표 직후)", value: "-4.7% (단기 폭락 후 회복)", source: "한국증권거래소", reportName: "증권통계" }
        ],
        global: [
          { name: "부패인식지수(CPI) 개선 기반", value: "투명성 제고", source: "국제투명성기구", reportName: "Corruption Perceptions Index" }
        ]
      },
      chart: {
        title: "외환보유액 추이 (억 달러)",
        domesticLabel: "외환보유액",
        source: "한국은행",
        data: [
          { name: "1993", domestic: 202 },
          { name: "1994", domestic: 256 },
          { name: "1995", domestic: 327 },
          { name: "1996", domestic: 332 },
          { name: "1997", domestic: 204 }
        ]
      },
      glossary: [
        {
          term: "금융실명제",
          description: "가명이나 차명에 의한 금융 거래를 금지하고, 본인의 실명으로만 금융 거래를 하도록 의무화한 제도입니다."
        },
        {
          term: "지하경제",
          description: "세무서 등 국가 기관에 신고되지 않아 세금이 부과되지 않는 불법적이거나 음성적인 경제 활동을 의미합니다."
        },
        {
          term: "긴급재정경제명령",
          description: "국가적 위기 상황이나 중대한 재정·경제상의 위기를 극복하기 위해 대통령이 국회의 집회를 기다릴 여유가 없을 때 발동하는 법률적 효력을 가진 명령입니다."
        }
      ],
      lineage: { prev: "이전 정책 (데이터 없음)", next: "다음 정책 (데이터 없음)" },
        mediaSnapshot: {
                    date: "1993.08.13",
                    conservative: { headline: "금융실명제 전격 실시, 중소기업 자금줄 막혀 줄도산 우려", source: "한국경제" },
                    progressive: { headline: "검은돈 차단 금융실명제 전격 실시, 경제 정의 실현의 신호탄", source: "한겨레" }
                  }
    },
    {
      id: "kys-segyehwa",
      title: "세계화(Segyehwa) 정책과 OECD 가입",
      category: "경제/산업",
      valueTag: "pro-market",
      context: {
        content: "WTO 체제 출범 등 글로벌 무한 경쟁 시대 도래 및 선진국 진입을 위한 국가 시스템 개방 요구",
        source: "외교통상부 외교백서"
      },
      legislationFacts: [
        { date: "1994-11", description: "시드니 APEC 정상회의에서 '세계화 구상' 전격 발표", source: "대통령기록관" },
        { date: "1995-01", description: "WTO(세계무역기구) 공식 출범 및 가입", source: "외교부" },
        { date: "1995-12", description: "조선총독부 건물 철거 (역사 바로 세우기)", source: "문화재청" },
        { date: "1996-12", description: "대한민국, OECD(경제협력개발기구) 29번째 회원국으로 정식 가입", source: "OECD 회원국 명부" }
      ],
      pros: [
        { content: "폐쇄적인 국가 시스템을 글로벌 스탠다드에 맞춰 규제를 철폐하고 시장을 개방하여 국가 경쟁력을 높임", source: "KDI 국제정책대학원" },
        { content: "OECD 가입을 통해 명실상부한 선진국 클럽의 일원으로 인정받으며 국가 브랜드를 격상시킴", source: "외교부 경제외교사" },
        { content: "'역사 바로 세우기'를 세계화와 병행하여 구시대의 잔재(하나회 척결 등)를 청산하고 문민 민주주의를 확립", source: "국사편찬위원회" }
      ],
      cons: [
        { content: "금융 시장을 무분별하게 개방하고 외채 관리에 실패하여 1997년 IMF 외환위기를 초래한 핵심 원인이 됨", source: "한국은행 경제통계시스템" },
        { content: "경쟁력이 취약한 농축산업 등 1차 산업에 대한 보호 대책이 미흡하여 시장 개방의 타격을 고스란히 받음", source: "한국농촌경제연구원" },
        { content: "내실을 다지기보다 OECD 가입이라는 외형적 성과와 정치적 치적에만 너무 집착했다는 비판", source: "KCI 등재 경제사 논문" }
      ],
      indicators: {
        domestic: [
          { name: "외국인 주식 투자 한도", value: "지속적 확대 (완전 개방 수순)", source: "재정경제원", reportName: "외환자유화 추진계획" },
          { name: "단기 외채 비율 (1997)", value: "외환보유액의 수 배 초과", source: "한국은행", reportName: "국제수지통계" }
        ],
        global: [
          { name: "무역수지 (1996)", value: "-206억 달러 (사상 최대 적자)", source: "관세청", reportName: "수출입동향" }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "1997-11",
          name: "IMF 외환위기 사태",
          description: "외환보유액 고갈로 국가 부도 위기에 직면하여 국제통화기금(IMF)에 긴급 구제금융을 요청한 사건.",
          source: "한국은행"
        },
        interpretationGuide: {
          viewpoint1: "금융실명제와 OECD 가입 등 세계화 개혁이 경제 체질 개선을 위한 필수적 조치였으나, 단기적인 충격이 외환위기를 촉발했다는 관점.",
          viewpoint2: "무리한 세계화 추진과 성급한 금융 시장 개방이 단기 외채 급증을 낳아 재앙적인 외환위기와 대량 실업을 자초했다는 관점."
        }
      },
      glossary: [
        {
          term: "역사 바로 세우기",
          description: "문민정부 출범 이후 옛 조선총독부 건물 철거, 전두환·노태우 전 대통령 구속 등 군사독재와 일제강점기의 잔재를 청산하고자 한 일련의 정책입니다."
        },
        {
          term: "하나회",
          description: "전두환, 노태우 등 육군사관학교 11기 출신들이 중심이 되어 결성한 군대 내 불법 사조직으로, 김영삼 대통령 취임 직후 전격 해체되었습니다."
        },
        {
          term: "IMF 외환위기",
          description: "1997년 외환보유고가 바닥나 국가 부도 위기에 처하자, 국제통화기금(IMF)에 긴급 구제금융을 요청하고 가혹한 경제 구조조정을 겪은 사건입니다."
        }
      ],
      lineage: { prev: "이전 정책 (데이터 없음)", next: "다음 정책 (김대중 정부 금모으기 운동)" },
        mediaSnapshot: {
                    date: "1994.11.18",
                    conservative: { headline: "구호만 요란한 '세계화', 국내 산업 보호 대책은 전무", source: "동아일보" },
                    progressive: { headline: "시드니 선언! 21세기 향한 국가 생존 전략 '세계화' 천명", source: "조선일보" }
                  }
    }
  ],
  additionalFacts: [
    { date: "1993-02", description: "문민정부 출범 및 고위 공직자 재산등록 의무화", source: "인사혁신처" },
    { date: "1993-03", description: "하나회(군내 사조직) 척결 시작", source: "국방부" },
    { date: "1993-08", description: "금융실명제 전격 실시 (긴급재정경제명령 제16호)", source: "기획재정부" },
    { date: "1994-10", description: "성수대교 붕괴 참사 발생", source: "국가기록원" },
    { date: "1995-01", description: "부동산 실권리자명의 등기에 관한 법률(부동산실명제) 제정", source: "법무부" },
    { date: "1995-06", description: "삼풍백화점 붕괴 참사 발생", source: "국가기록원" },
    { date: "1995-11", description: "전두환, 노태우 전 대통령 구속", source: "대검찰청" },
    { date: "1996-12", description: "OECD(경제협력개발기구) 가입", source: "외교부" },
    { date: "1997-11", description: "IMF(국제통화기금)에 구제금융 공식 요청", source: "한국은행" }
  ],
  coreDNA: "MAWO",
  promises: [
    {
      promise: "금융실명제 실시",
      result: "1993년 8월 긴급재정경제명령으로 전격 실시. 차명 금융거래와 불법정치자금 은닉에 타격을 가함",
      status: "achieved",
      source: "한국은행 / 금융감독원"
    },
    {
      promise: "세계화 및 OECD 가입",
      target: "경제 개방을 통한 선진국 도약",
      result: "1996년 OECD 가입. 단 경제개방 가속화로 인한 외환위기 취약성 노출, 1997년 IMF 구제금융 신청",
      status: "partial",
      source: "OECD / IMF"
    },
    {
      promise: "군사 정치 청산 (군부 하나회 해체)",
      result: "12·12 쿠데타 주도 세력인 하나회 실질적 해체. 전두환·노태우 구속 기소",
      status: "achieved",
      source: "군사법원 / 과거사진상규명위원회"
    },
    {
      promise: "IMF 위기 예방 및 경제 충격 최소화",
      result: "1997년 12월 IMF 신청. 환율 급등과 대규모 부도 발생으로 경제 대충격. 1차적 방어 실패",
      status: "failed",
      source: "한국은행 / KDI"
    }
  ],
  keywords: ["금융실명", "문민정부", "세계화", "OECD가입", "과거청산", "하나회해체"],
  approvalRatings: [
    { date: "1993-02", rating: 71, event: "취임 시점 — 민간인 최초 대통령 취임 기대감", isHighlight: true },
    { date: "1993-08", rating: 83, event: "금융실명제 단행 직후 — 역대 최고 지지율", isHighlight: true },
    { date: "1995-06", rating: 40, event: "삼풍백화점 붕괴 / 성수대교 붕괴 등 대형 사고" },
    { date: "1996-12", rating: 35, event: "노동법 기습 입법 반발" },
    { date: "1997-12", rating: 6, event: "IMF 구제금융 신청 후 — 역대 최저", isHighlight: true }
  ],
  legacies: [
    {
      title: "금융실명제 (1993년 ~ 현재까지 지속)",
      description: "1993년 8월 전격 시행된 금융실명제는 현재도 가명·차명 거래를 금지하는 금융 투명성의 기초로 작동하며, 불법자금 추적의 제도적 틀로 기능 중.",
      source: "금융감독원 / 한국은행"
    },
    {
      title: "전두환·노태우 구속 및 과거사 청산 선례",
      description: "1995년 전두환·노태우 전 대통령 구속은 민주화 이후 권위주의 통치자 처벌의 선례로서, 이후 민주주의 체제 통합의 규범으로 평가됨.",
      source: "과거사진상규명위원회 / 한국현대사연구원"
    }
  ],
  cabinetRisk: { avgTenureMonths: 10, initialDropoutRate: 0 }
};
