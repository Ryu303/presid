import { dnaDictionary, DnaLetter } from '@/data/dnaDictionary';

export type PT_CORE_DNA = string;

// 정치적 뉘앙스를 덜어낸 MBTI식 16가지 성향 타이틀 및 닉네임
export const personas: Record<string, { nickname: string, title: string, subtitle: string }> = {
  "MAWO": { nickname: "마오", title: "행동파 프론티어", subtitle: "뛰어난 성과를 바탕으로 새로운 영역을 거침없이 개척하는 리더" },
  "MAWD": { nickname: "마우드", title: "자립형 혁신가", subtitle: "효율을 극대화하면서도 나만의 확실한 길을 개척하는 마이웨이 리더" },
  "MARO": { nickname: "마로", title: "엘리트 사령관", subtitle: "철저한 규율과 성과를 바탕으로 강력한 팀워크를 이끄는 전략가" },
  "MARD": { nickname: "마드", title: "완벽주의 실속파", subtitle: "안정된 룰 안에서 최고의 성과를 내며 실리를 놓치지 않는 현실주의자" },
  
  "MBWO": { nickname: "엠비오", title: "열정적 분위기 메이커", subtitle: "팀원 모두를 이끌고 자유롭고 파격적인 아이디어로 뭉치는 리더" },
  "MBWD": { nickname: "엠비우드", title: "독립적 아이디어 뱅크", subtitle: "남들의 시선에 얽매이지 않고 자유롭게 상생을 도모하는 유연한 마인드" },
  "MBRO": { nickname: "엠브로", title: "따뜻한 피스메이커", subtitle: "안정적인 시스템 속에서 모두의 의견을 듣고 팀워크를 다지는 조율자" },
  "MBRD": { nickname: "엠발디", title: "신중한 수호자", subtitle: "정해진 규칙 안에서 무리하지 않고 구성원을 보호하며 실속을 차리는 든든한 방패" },
  
  "GAWO": { nickname: "가오", title: "불도저 행동대장", subtitle: "모두를 위한 목표를 향해 규칙을 깨고 끈끈한 의리로 돌격하는 리더" },
  "GAWD": { nickname: "가우드", title: "실용적 개혁가", subtitle: "공동의 이익을 위해 낡은 틀을 깨고 철저하게 실리를 추구하는 승부사" },
  "GARO": { nickname: "가로", title: "카리스마 리더", subtitle: "정해진 원칙과 강한 소속감으로 공동체의 폭발적 성장을 이끄는 리더" },
  "GARD": { nickname: "가드", title: "원칙주의 마스터", subtitle: "공동체를 위해 원칙을 지키면서도 냉철하게 상황을 판단하는 실무자" },
  
  "GBWO": { nickname: "지비오", title: "자유로운 낭만파", subtitle: "격식 없이 사람들을 모아 모두가 평등하고 행복한 세상을 꿈꾸는 리더" },
  "GBWD": { nickname: "지비우드", title: "마이웨이 힐러", subtitle: "소외되는 사람 없이 다 함께 잘 살되, 눈치 보지 않고 내 길을 가는 자유 영혼" },
  "GBRO": { nickname: "지브로", title: "정석적인 등대지기", subtitle: "전통과 예의를 중시하며 공동체의 평화와 끈끈함을 지키는 어른스러운 리더" },
  "GBRD": { nickname: "지발디", title: "철벽의 밸런서", subtitle: "모두를 아우르면서도 룰을 준수하고, 상황에 맞게 융통성을 발휘하는 방어수" },
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
    breakdown
  };
};
