import { President } from "@/types/president";

export const parkGeunHye: President = {
  id: "park-geun-hye",
  name: "박근혜",
  term: "2013-2017",
  party: "새누리당",
  globalCounterparts: [
    { country: "미국", leader: "버락 오바마", term: "2009-2017" },
    { country: "일본", leader: "아베 신조 (2차)", term: "2012-2020" },
    { country: "북한", leader: "김정은", term: "2011-현재" }
  ],
  cabinetRisk: { avgTenureMonths: 14, initialDropoutRate: 0 },
  policies: [
    {
      id: "pgh-creative-economy",
      title: "창조경제와 벤처 육성",
      category: "경제/산업",
      valueTag: "pro-market",
      fundingSource: "코스닥 활성화 및 정통부·과기부 예산을 통한 벤처캐피탈 매칭 펀드",
      keyPersonnel: [
        { name: "최문기", role: "정보통신부 장관" }
      ],
      
      lineage: { prev: "녹색성장 (이명박 정부)", next: "한국형 뉴딜 (문재인 정부)" },
      mediaSnapshot: {
                  date: "2013.06.05",
                  conservative: { headline: "실체 없는 창조경제, 재벌 퍼주기와 관치 금융으로 변질", source: "한겨레" },
                  progressive: { headline: "창조경제타운 출범, 아이디어가 돈이 되는 벤처 생태계 조성", source: "한국경제" }
                },
      context: {
        content: "저성장 기조 고착화 및 추격형 경제 모델의 한계 직면, 새로운 성장 동력 발굴 필요성",
        source: "미래창조과학부 백서"
      },
      legislationFacts: [
        { date: "2013-03", description: "미래창조과학부 출범 (과학기술과 ICT 융합 컨트롤타워)", source: "국가법령정보센터" },
        { date: "2014-09", description: "전국 17개 시도에 '창조경제혁신센터' 구축 완료", source: "청와대 브리핑" },
        { date: "2015-01", description: "크라우드 펀딩법 통과 등 벤처 창업 규제 완화", source: "금융위원회" }
      ],
      pros: [
        { content: "대기업과 지역 스타트업을 1:1로 매칭하는 창조경제혁신센터를 통해 지역 창업 생태계 활성화에 기여함", source: "과학기술정책연구원" },
        { content: "벤처 투자 펀드 확대 및 규제 완화로 제2의 벤처 창업 붐을 조성하는 기틀을 마련함", source: "중소기업청" },
        { content: "과학기술과 ICT를 융합하여 새로운 산업을 육성하려는 거시적인 국가 아젠다를 제시함", source: "KDI 경제동향보고서" }
      ],
      cons: [
        { content: "'창조경제'라는 개념 자체가 모호하고 추상적이어서 임기 내내 실체가 없다는 비판에 시달림", source: "한국경제학회 학술지" },
        { content: "대기업의 팔을 비틀어 억지로 혁신센터를 할당하는 관치 경제적 접근으로 자율성을 훼손함", source: "참여연대 경제금융센터" },
        { content: "정권 말 최순실 국정농단 사태와 연루되며 창조경제 관련 예산과 사업이 부패의 온상으로 전락함", source: "특검 수사결과 발표" }
      ],
      indicators: {
        domestic: [
          { name: "신규 벤처 투자액 (2012 -> 2016)", value: "1.2조 -> 2.1조 원 증가", source: "중소기업청", reportName: "벤처투자 동향" },
          { name: "신설 법인 수 (2016)", value: "역대 최고치 경신", source: "통계청", reportName: "기업생멸행정통계" }
        ],
        global: [
          { name: "블룸버그 혁신지수 (2016)", value: "세계 1위", source: "Bloomberg", reportName: "Bloomberg Innovation Index" }
        ]
      },
      chart: {
        title: "가계부채 추이 (조 원)",
        domesticLabel: "가계부채(가계신용)",
        source: "한국은행",
        data: [
          { name: "2013", domestic: 1019 },
          { name: "2014", domestic: 1085 },
          { name: "2015", domestic: 1203 },
          { name: "2016", domestic: 1342 },
          { name: "2017", domestic: 1450 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "2014.4",
          name: "세월호 참사",
          description: "전남 진도 앞바다에서 여객선 세월호가 침몰하여 300여 명이 희생된 국가적 재난.",
          source: "해양수산부"
        },
        interpretationGuide: {
          viewpoint1: "공무원 연금 개혁 등 일부 구조 개혁을 추진하며 재정 건전성 확보에 기여했다는 시각.",
          viewpoint2: "국가 재난에 대한 무능한 대처와 비선 실세의 국정 농단으로 인해 헌정 사상 최초로 탄핵된 뼈아픈 실패라는 평가."
        }
      },
      glossary: [
        {
          term: "창조경제",
          description: "기존의 산업에 정보통신기술(ICT)과 과학기술을 접목하여 새로운 부가가치와 일자리를 창출하겠다는 경제 패러다임입니다."
        },
        {
          term: "크라우드 펀딩",
          description: "자금이 필요한 벤처기업이나 스타트업이 온라인 플랫폼을 통해 불특정 다수의 대중(Crowd)으로부터 자금을 모으는 방식입니다."
        },
        {
          term: "국정농단 사태",
          description: "대통령의 비선 실세였던 최순실이 국가 국정에 광범위하게 개입하고 사익을 취한 사건으로, 헌정 사상 최초의 대통령 파면을 초래했습니다."
        }
      ]
    },
    {
      id: "pgh-trustpolitik",
      title: "한반도 신뢰프로세스와 개성공단 전면 중단",
      category: "외교/안보",
      valueTag: "pro-market",
      context: {
        content: "북한의 3차 핵실험(2013) 강행으로 한반도 안보 위기 고조 및 대북 정책의 전환 요구",
        source: "통일부 통일백서"
      },
      legislationFacts: [
        { date: "2013-02", description: "북한 제3차 핵실험 강행", source: "국방부" },
        { date: "2014-03", description: "독일 드레스덴 선언 (평화통일 기반 조성 구상 발표)", source: "청와대" },
        { date: "2015-08", description: "북한 목함지뢰 도발 직후 8.25 남북 고위급 합의 도출", source: "통일부" },
        { date: "2016-02", description: "북한 4차 핵실험 및 미사일 발사에 대응하여 개성공단 전면 가동 중단 단행", source: "국가기록원" }
      ],
      pros: [
        { content: "원칙 있는 대북 기조를 유지하며 2015년 목함지뢰 도발 당시 북한의 유감 표명을 이끌어냄", source: "국방부 국방백서" },
        { content: "통일준비위원회를 발족하고 '통일대박론'을 주창하여 통일에 대한 국민적 관심과 담론을 환기함", source: "통일연구원" },
        { content: "북한의 핵 고도화에 맞서 사드(THAAD) 배치를 결정하여 한미 동맹 기반의 억지력을 강화함", source: "세종연구소 학술지" }
      ],
      cons: [
        { content: "개성공단을 법적 근거 없이 일방적으로 전면 중단하여 입주 기업들에게 막대한 재산상 피해를 입힘", source: "헌법재판소 판례 / 개성공단기업협회" },
        { content: "사드 배치 결정 과정에서 중국의 경제 보복(한한령)을 초래하고 외교적 갈등을 관리하지 못함", source: "KCI 등재 외교학 논문" },
        { content: "결과적으로 '한반도 신뢰프로세스'는 실패로 돌아갔고 남북 관계가 장기적인 경색 국면으로 전환됨", source: "현대북한연구 학술지" }
      ],
      indicators: {
        domestic: [
          { name: "개성공단 입주기업 피해액", value: "수천억 원 규모 추산", source: "통일부", reportName: "개성공단 피해조사" }
        ],
        global: [
          { name: "UN 대북 제재 결의", value: "강력한 제재안(2270호 등) 통과", source: "UN Security Council", reportName: "Resolutions on North Korea" }
        ]
      },
      glossary: [
        {
          term: "한반도 신뢰프로세스",
          description: "튼튼한 안보를 바탕으로 남북 간에 신뢰를 점진적으로 쌓아가며 한반도의 평화와 통일 기반을 구축하겠다는 박근혜 정부의 대북 정책입니다."
        },
        {
          term: "드레스덴 선언",
          description: "2014년 독일 드레스덴에서 발표된 구상으로, 남북 주민의 인도적 문제 해결, 남북 공동 번영을 위한 민생 인프라 구축, 동질성 회복을 제안했습니다."
        },
        {
          term: "사드(THAAD)",
          description: "고고도 미사일 방어 체계로, 북한의 미사일 위협에 대응하기 위해 한국 배치가 결정되었으나 중국의 강력한 경제 보복(한한령)을 낳았습니다."
        }
      ],
      lineage: { prev: "이전 정책 (데이터 없음)", next: "다음 정책 (데이터 없음)" },
        mediaSnapshot: {
                    date: "2016.02.10",
                    conservative: { headline: "개성공단 전면 중단, 남북 관계 최후의 보루마저 붕괴", source: "경향신문" },
                    progressive: { headline: "개성공단 자금 핵개발 전용 차단! 단호한 원칙적 대북 압박", source: "조선일보" }
                  }
    }
  ],
  additionalFacts: [
    { date: "2013-02", description: "박근혜 정부 출범 및 미래창조과학부 신설", source: "행정안전부" },
    { date: "2014-04", description: "세월호 참사 발생", source: "해양경찰청" },
    { date: "2014-11", description: "정부조직법 개정 (해양경찰청 해체 및 국민안전처 신설)", source: "법제처" },
    { date: "2014-12", description: "통합진보당 위헌 정당 해산 결정", source: "헌법재판소" },
    { date: "2015-09", description: "부정청탁 및 금품등 수수의 금지에 관한 법률(김영란법) 통과", source: "국회 의안정보시스템" },
    { date: "2015-12", description: "한일 위안부 문제 협상 타결", source: "외교부" },
    { date: "2016-02", description: "개성공단 전면 가동 중단", source: "통일부" },
    { date: "2016-12", description: "국회 박근혜 대통령 탄핵소추안 가결", source: "대한민국 국회" },
    { date: "2017-03", description: "헌법재판소 박근혜 대통령 탄핵 인용 및 파면", source: "헌법재판소" }
  ],
  coreDNA: "GARO",
  promises: [
    {
      promise: "창조경제 (미래형 산업 육성)",
      target: "문화·콘텐츠 투자, 벤처 시장 육성",
      result: "한류전담 TF, 문화체육관광부 신설 등 추진. 실질적 경제 효과는 논란. 안종범 게이트 등 국정농단 사태와의 연루 논란",
      status: "failed",
      source: "미래창조과학부 / 감사원"
    },
    {
      promise: "4대 국정과제 해결 (가계부채증가·노인빈곤·실업·비정규직)",
      result: "기초연금 인상, 노인장기요양보험 확대 등 부분적으로 실시. 부채 감소 효과는 제한적",
      status: "partial",
      source: "기획재정부 / 보건복지부"
    },
    {
      promise: "남북 신뢰프로세스 (드레스덴 선언)",
      result: "개성공단 전면 운영 중단(2016년) 등 남북관계 악화. 탄핵으로 협상 창구 없이 임기 종료",
      status: "failed",
      source: "통일부"
    }
  ],
  keywords: ["창조경제", "드레스덴선언", "기초연금", "원칙", "문화체육", "미래"],
  approvalRatings: [
    { date: "2013-02", rating: 52, event: "취임 시점", isHighlight: false },
    { date: "2013-10", rating: 64, event: "정상외교 성과 인정 시기 — 역대 최고", isHighlight: true },
    { date: "2014-04", rating: 55, event: "세월호 침몰 사고 발생 직전" },
    { date: "2014-05", rating: 38, event: "세월호 참사 이후 미흡한 대응 비판받음" },
    { date: "2016-10", rating: 17, event: "최순실 국정농단 폭로 — 역대 최저", isHighlight: true },
    { date: "2017-03", rating: 5, event: "탄핵 인용 직전", isHighlight: false }
  ],
  legacies: [
    {
      title: "개성공단 잠정 중단의 제도적 파장 (역설적)",
      description: "2016년 개성공단 전면중단은 이후 남북 경협 재개 논의에서 미해결된 국가간 신뢰를 둘러싼 사안으로 남북관계 논의의 중요한 변수로 작동 중.",
      source: "통일부 / 개성공단지원재단"
    },
    {
      title: "노인장기요양보험 확대 (2014년)",
      description: "2014년 노인장기요양보험 확대(등급판정 간소화 등)는 현재도 고령화 사회에서 필수 돌봄시스템의 핵심 제도로 기능 중.",
      source: "보건복지부"
    }
  ]
};
