import { President } from "@/types/president";

export const choi: President = {
  id: "choi",
  name: "최규하",
  term: "1979-1980",
  party: "무소속",
  globalCounterparts: [
    { country: "미국", leader: "지미 카터", term: "1977-1981" },
    { country: "일본", leader: "오히라 마사요시", term: "1978-1980" },
    { country: "북한", leader: "김일성", term: "1948-1994" }
  ],
  policies: [
    {
      id: "choi-transition",
      title: "과도 정부 체제 및 민주화 이행 시도",
      category: "정치/행정",
      context: {
        content: "10.26 사태로 박정희 대통령이 서거한 후 발생한 권력 공백기와 '서울의 봄' 민주화 열기",
        source: "국사편찬위원회 현대사자료"
      },
      legislationFacts: [
        { date: "1979-11", description: "대통령 권한대행으로서 유신헌법 폐지 및 민주헌법 개정 약속", source: "대통령기록관 연설문" },
        { date: "1979-12", description: "긴급조치 9호 해제 및 시국사범 대규모 사면 복권", source: "법무부 관보" },
        { date: "1980-02", description: "헌법개정심의위원회 발족을 통해 개헌 작업 착수", source: "국가기록원" }
      ],
      pros: [
        { content: "긴급조치 해제와 사면 복권으로 구금된 인사를 석방하여 '서울의 봄'이라는 짧은 민주화 공간 창출", source: "민주화운동기념사업회" },
        { content: "국가적 위기 상황에서 헌정 질서의 중단을 막고 합법적 절차에 따라 권력을 이양하려 노력함", source: "한국정치학회보" }
      ],
      cons: [
        { content: "12.12 군사반란과 신군부의 권력 찬탈을 막지 못하고 실질적인 국정 통제력을 상실함", source: "국방부 과거사진상규명위원회" },
        { content: "우유부단한 대처로 인해 5.18 민주화운동 당시 신군부의 유혈 진압을 방치하는 결과 초래", source: "5.18 기념재단 진상조사보고서" }
      ],
      indicators: {
        domestic: [
          { name: "시국사범 사면 (1979.12)", value: "689명 석방", source: "법무부", reportName: "사면 복권 기록" }
        ],
        global: [
          { name: "정치적 안정성 평가", value: "극도의 불안정", source: "CIA", reportName: "Declassified Reports on South Korea" }
        ]
      },
      chart: {
        title: "소비자물가 상승률 (%)",
        domesticLabel: "물가상승률",
        source: "통계청",
        data: [
          { name: "1978", domestic: 14.4 },
          { name: "1979", domestic: 18.3 },
          { name: "1980", domestic: 28.7 },
          { name: "1981", domestic: 21.4 }
        ]
      },
      crossAnalysis: {
        linkedEvent: {
          date: "1979.12.12",
          name: "12·12 군사반란",
          description: "전두환 등 신군부 세력이 최규하 대통령의 재가 없이 군권을 장악한 사건.",
          source: "국방부"
        },
        interpretationGuide: {
          viewpoint1: "권력 공백기 속에서 신군부의 무력 행사로 인해 대통령으로서 통치력을 상실한 불가항력적 상황이었다는 시각.",
          viewpoint2: "국군 통수권자로서 신군부의 하극상을 강력히 통제하지 못하고 헌정 질서 유린을 방조했다는 비판적 시각."
        }
      },
      glossary: [
        {
          term: "과도정부",
          description: "정치적 격변이나 정권 교체기에 정식 정부가 수립되기 전까지 임시로 국정을 담당하는 정부입니다."
        }
      ],
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
    { date: "1979-10", description: "10.26 사태 직후 제주도를 제외한 전국에 비상계엄 선포", source: "국가기록원" },
    { date: "1979-12", description: "제10대 대통령 취임 및 12.12 군사반란 발생", source: "한국민족문화대백과사전" },
    { date: "1980-02", description: "민주화 일정 제시 및 헌법개정심의위원회 발족", source: "국가기록원" },
    { date: "1980-03", description: "신군부에 의해 중앙정보부장 서리로 전두환 임명 재가", source: "국가정보원 기록" },
    { date: "1980-05", description: "5.17 비상계엄 전국 확대 조치 재가", source: "국방부" },
    { date: "1980-05", description: "국가보위비상대책위원회(국보위) 설치", source: "법제처" },
    { date: "1980-08", description: "대통령직 사임 (역대 최단기 대통령)", source: "대통령기록관" }
  ],
  coreDNA: "MBRD",
  promises: [
    {
      promise: "민주주의 회복 및 헌정 일정 제시",
      result: "10·26 이후 개헌일정 등 제시하였으나, 12·12 쿠데타로 권한 심각한 저하. 8개월 재임 후 자진사퇴",
      status: "failed",
      source: "역사학계 또는 한국정치사전"
    }
  ],
  keywords: ["민주화", "권한이양", "과도정부", "전환기"],
  approvalRatings: [
    { date: "1979-12", rating: 50, event: "10·26 이후 권한 승계", isHighlight: true },
    { date: "1980-05", rating: 15, event: "5·18 광주민주화운동 공수 비판받음", isHighlight: true },
    { date: "1980-08", rating: 10, event: "전두환에 권한 넘겨주기 직전 자진사퇴" }
  ],
  legacies: [
    {
      title: "헌정역사적 반면교사로서의 위수 성과 확인",
      description: "권위 집단 시기 왕권연승 시도를 적극적으로 막지 못한 위정 사례로 헌정사에 기록됨. 헌법 수호 의무의 한계와 취약성을 조명한 사례 연구.",
      source: "한국현대사연구원"
    }
  ],
    cabinetRisk: { avgTenureMonths: 15, initialDropoutRate: 20 }
};
