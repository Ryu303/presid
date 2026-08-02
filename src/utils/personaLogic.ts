import { dnaDictionary, DnaLetter } from '@/data/dnaDictionary';

export type PT_CORE_DNA = string;

// 정치적 뉘앙스를 덜어낸 MBTI식 16가지 성향 타이틀, 닉네임, 그리고 상세 스토리텔링
export const personas: Record<string, { nickname: string, title: string, subtitle: string, story: string }> = {
  "MAWO": { 
    nickname: "마오", title: "행동파 프론티어", subtitle: "뛰어난 성과를 바탕으로 새로운 영역을 거침없이 개척하는 리더",
    story: "시장의 논리와 성과를 최우선으로 생각하며, 목표가 정해지면 망설임 없이 돌진하는 행동주의자입니다. 낡은 관습이나 틀에 얽매이기보다는 혁신적인 방식을 선호하며, 위기가 닥치면 주변의 강력한 네트워크와 조력자를 적극 활용해 정면 돌파하는 탁월한 문제 해결 능력을 지녔습니다." 
  },
  "MAWD": { 
    nickname: "마우드", title: "자립형 혁신가", subtitle: "효율을 극대화하면서도 나만의 확실한 길을 개척하는 마이웨이 리더",
    story: "탁월한 효율성을 추구하며 끊임없이 성장하려 하지만, 남들에게 기대거나 무리에 속하기보다는 나만의 독자적인 길을 걷는 것을 선호합니다. 기존의 낡은 룰을 깨부수는 혁신을 즐기며, 어떤 상황에서도 남의 눈치를 보지 않고 실속을 차리는 굳건한 마이웨이 성향입니다." 
  },
  "MARO": { 
    nickname: "마로", title: "엘리트 사령관", subtitle: "철저한 규율과 성과를 바탕으로 강력한 팀워크를 이끄는 전략가",
    story: "뛰어난 성과와 효율을 중시하면서도, 오랫동안 검증된 시스템과 규범의 힘을 믿습니다. 혼자 앞서가기보다는 신뢰할 수 있는 파트너들과 강력한 동맹을 맺고, 체계적인 룰 안에서 조직을 일사불란하게 이끄는 카리스마 넘치는 지휘관 타입입니다." 
  },
  "MARD": { 
    nickname: "마드", title: "완벽주의 실속파", subtitle: "안정된 룰 안에서 최고의 성과를 내며 실리를 놓치지 않는 현실주의자",
    story: "모험이나 파격보다는 안정적인 규정과 절차를 존중하며, 그 안에서 누구보다 치열하게 개인의 성과를 극대화하는 현실주의자입니다. 외부에 섣불리 의존하지 않고 스스로의 힘으로 실리를 챙기며, 매사에 꼼꼼하고 완벽을 기하는 신중한 성향을 가졌습니다." 
  },
  
  "MBWO": { 
    nickname: "엠비오", title: "열정적 분위기 메이커", subtitle: "팀원 모두를 이끌고 자유롭고 파격적인 아이디어로 뭉치는 리더",
    story: "경쟁과 성과보다는 모두가 함께 나누고 즐기는 평등한 분위기를 사랑합니다. 틀에 박힌 규정보다는 자유롭고 창의적인 발상을 좋아하며, 주변 사람들과 끈끈한 네트워크를 맺어 유쾌하게 크고 작은 문제들을 해결해 나가는 조직의 활력소입니다." 
  },
  "MBWD": { 
    nickname: "엠비우드", title: "독립적 아이디어 뱅크", subtitle: "남들의 시선에 얽매이지 않고 자유롭게 상생을 도모하는 유연한 마인드",
    story: "누군가 소외되는 것을 싫어하는 따뜻한 마음을 가졌지만, 굳이 주류 무리에 속하려고 애쓰지도 않는 자유로운 영혼입니다. 낡은 관습을 신경 쓰지 않는 톡톡 튀는 아이디어로 본인만의 길을 개척하며, 소박하지만 뚜렷한 주관을 가진 매력적인 평화주의자입니다." 
  },
  "MBRO": { 
    nickname: "엠브로", title: "따뜻한 피스메이커", subtitle: "안정적인 시스템 속에서 모두의 의견을 듣고 팀워크를 다지는 조율자",
    story: "안정적이고 전통적인 가치를 존중하며, 어떤 상황에서도 튀지 않고 주변 사람들과 조화롭게 어울리는 것을 최우선으로 생각합니다. 조직 내에서 갈등이 생기면 원만하게 타협점을 찾아내고 구성원 모두를 포용하는 든든하고 따뜻한 중재자 역할을 합니다." 
  },
  "MBRD": { 
    nickname: "엠발디", title: "신중한 수호자", subtitle: "정해진 규칙 안에서 무리하지 않고 구성원을 보호하며 실속을 차리는 든든한 방패",
    story: "개인의 화려한 성공보다는 우리 모두의 안정과 평화를 중시합니다. 검증되지 않은 새로운 방식보다는 익숙하고 안전한 룰을 따르는 것을 선호하며, 남에게 의지하기보다는 스스로의 독립적인 공간을 지키면서 주변을 묵묵히 챙기는 책임감 강한 타입입니다." 
  },
  
  "GAWO": { 
    nickname: "가오", title: "불도저 행동대장", subtitle: "모두를 위한 목표를 향해 규칙을 깨고 끈끈한 의리로 돌격하는 리더",
    story: "나 혼자만의 이익보다는 우리 사회와 공동체가 다 함께 성장하는 것에 큰 가치를 둡니다. 이를 위해서라면 때로는 낡은 규칙을 과감히 부수고, 주변의 든든한 동맹들과 연대하여 엄청난 추진력으로 앞을 향해 돌진하는 뜨거운 열정의 소유자입니다." 
  },
  "GAWD": { 
    nickname: "가우드", title: "실용적 개혁가", subtitle: "공동의 이익을 위해 낡은 틀을 깨고 철저하게 실리를 추구하는 승부사",
    story: "공동체의 발전이라는 확고한 목표를 위해 혁신적인 방법을 주저하지 않습니다. 겉치레나 인맥에 의존하기보다는 철저하게 실용적이고 독립적인 노선을 타며, 기존의 룰을 뒤엎더라도 확실한 성과와 공익을 쟁취해내는 날카로운 승부사 기질이 있습니다." 
  },
  "GARO": { 
    nickname: "가로", title: "카리스마 리더", subtitle: "정해진 원칙과 강한 소속감으로 공동체의 폭발적 성장을 이끄는 리더",
    story: "강력한 규율과 질서 속에서 조직 전체가 한 방향으로 나아갈 때 가장 큰 힘이 발휘된다고 믿습니다. 외부의 든든한 조력자와 굳건한 파트너십을 맺고, 흔들림 없는 원칙과 카리스마로 무리를 이끌어 거대한 성과를 만들어내는 정통파 리더입니다." 
  },
  "GARD": { 
    nickname: "가드", title: "원칙주의 마스터", subtitle: "공동체를 위해 원칙을 지키면서도 냉철하게 상황을 판단하는 실무자",
    story: "공동체의 규범과 질서를 누구보다 철저히 지키며, 조직 전체의 성장을 묵묵히 뒷받침하는 기둥 같은 존재입니다. 섣불리 남에게 기대지 않고 스스로의 원칙과 실력을 무기로 상황을 타개하며, 어떤 위기에도 쉽게 흔들리지 않는 굳건한 마인드를 지녔습니다." 
  },
  
  "GBWO": { 
    nickname: "지비오", title: "자유로운 낭만파", subtitle: "격식 없이 사람들을 모아 모두가 평등하고 행복한 세상을 꿈꾸는 리더",
    story: "승자 독식의 차가운 경쟁보다는 소외된 사람 없이 모두가 평등하고 따뜻한 공동체를 꿈꿉니다. 형식이나 권위에 얽매이지 않고 주변 사람들과 격식 없이 연대하며, 자유롭고 창의적인 방식으로 세상을 더 나은 곳으로 만들고자 하는 이상주의자입니다." 
  },
  "GBWD": { 
    nickname: "지비우드", title: "마이웨이 힐러", subtitle: "소외되는 사람 없이 다 함께 잘 살되, 눈치 보지 않고 내 길을 가는 자유 영혼",
    story: "누구도 상처받지 않고 다 함께 잘 사는 세상을 바라지만, 억지로 조직이나 무리에 속해 남의 눈치를 보는 것은 질색합니다. 틀을 깨는 자유로운 사고방식을 가졌으며, 조용하지만 묵묵하게 자신만의 방식으로 주변에 선한 영향력을 퍼뜨리는 독립적인 힐러입니다." 
  },
  "GBRO": { 
    nickname: "지브로", title: "정석적인 등대지기", subtitle: "전통과 예의를 중시하며 공동체의 평화와 끈끈함을 지키는 어른스러운 리더",
    story: "사회의 오랜 전통과 예의범절을 존중하며, 무리한 변화보다는 안정 속에서 공동체가 함께 나누고 화합하는 것을 중시합니다. 끈끈한 인간관계와 룰을 바탕으로 갈등을 치유하고, 구성원들이 언제나 믿고 기댈 수 있는 든든한 등대 같은 역할을 합니다." 
  },
  "GBRD": { 
    nickname: "지발디", title: "철벽의 밸런서", subtitle: "모두를 아우르면서도 룰을 준수하고, 상황에 맞게 융통성을 발휘하는 방어수",
    story: "소외되는 사람을 챙기는 따뜻함과 정해진 원칙을 지키는 깐깐함을 동시에 갖췄습니다. 불필요하게 남에게 의존하거나 파벌을 만들지 않으며, 스스로의 중심을 단단히 잡고 묵묵하게 조직의 밸런스와 평화를 수호하는 가장 신뢰할 수 있는 방어수입니다." 
  },
};

export const getAllDnas = (): string[] => Object.keys(personas);

export const getPersonaDetails = (dna: PT_CORE_DNA) => {
  if (dna.length !== 4) return undefined;
  
  const [a1, a2, a3, a4] = dna.toUpperCase().split('') as DnaLetter[];
  
  const m1 = dnaDictionary[a1];
  const m2 = dnaDictionary[a2];
  const m3 = dnaDictionary[a3];
  const m4 = dnaDictionary[a4];
  
  if (!m1 || !m2 || !m3 || !m4) return undefined;

  const persona = personas[dna.toUpperCase()];
  if (!persona) return undefined;

  // 세부 성향 분석 (dnaDictionary에서 불러옴)
  const breakdown = {
    axis1: m1.description,
    axis2: m2.description,
    axis3: m3.description,
    axis4: m4.description
  };

  return {
    dna: dna.toUpperCase(),
    nickname: persona.nickname,
    letters: [
      { letter: m1.letter, name: m1.subtitle, description: m1.title }, // ex) M, Market, 성과주의 마인드
      { letter: m2.letter, name: m2.subtitle, description: m2.title },
      { letter: m3.letter, name: m3.subtitle, description: m3.title },
      { letter: m4.letter, name: m4.subtitle, description: m4.title }
    ],
    title: persona.title,
    subtitle: persona.subtitle,
    story: persona.story,
    breakdown
  };
};
