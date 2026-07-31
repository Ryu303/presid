export type DnaLetter = 'M' | 'G' | 'A' | 'B' | 'W' | 'R' | 'O' | 'D';

export interface DnaTrait {
  letter: DnaLetter;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  color: string;
}

export const dnaDictionary: Record<DnaLetter, DnaTrait> = {
  // 축 1: 재화/자원의 분배와 룰 (M vs G)
  M: {
    letter: 'M',
    title: '성과주의 마인드',
    subtitle: 'Market',
    description: '"내가 노력한 만큼 가져가는 게 당연하지!" 실력과 성과에 따른 확실한 보상을 중요하게 생각합니다. 치열한 경쟁을 성장의 원동력으로 봅니다.',
    keywords: ['실력 최우선', '확실한 보상', '경쟁 즐김', '자율성'],
    color: '#3B82F6', // Blue
  },
  G: {
    letter: 'G',
    title: '공동체 마인드',
    subtitle: 'Guardian',
    description: '"다 같이 잘 살아야지!" 누군가 이기적으로 독식하는 것을 싫어하며, 약자를 보호하고 룰을 지키며 함께 상생하는 것을 중요하게 생각합니다.',
    keywords: ['상생과 보호', '약자 배려', '룰 준수', '독식 반대'],
    color: '#10B981', // Green
  },

  // 축 2: 목표 달성과 팀워크 (A vs B)
  A: {
    letter: 'A',
    title: '성과 집중 가속형',
    subtitle: 'Accelerator',
    description: '"선택과 집중으로 파이를 키우자!" 목표 달성을 위해 가능성이 높은 핵심 역량에 자원을 집중하여, 전체의 효율을 극대화하고 성장을 이끄는 것을 선호합니다.',
    keywords: ['효율 극대화', '선택과 집중', '성과 중심', '파이 키우기'],
    color: '#F59E0B', // Amber
  },
  B: {
    letter: 'B',
    title: '평화로운 밸런스형',
    subtitle: 'Balancer',
    description: '"한 명도 소외되면 안 돼!" 조금 늦더라도 뒤처지는 사람 없이 모두가 함께 성장하고 이익을 고루 나누는 따뜻한 팀워크를 좋아합니다.',
    keywords: ['팀워크 중시', '공평한 분배', '결과의 평등', '함께 성장'],
    color: '#8B5CF6', // Purple
  },

  // 축 3: 규정과 변화 (W vs R)
  W: {
    letter: 'W',
    title: '자유로운 혁신파',
    subtitle: 'Wave',
    description: '"낡은 규칙은 깨라고 있는 것!" 꽉 막힌 규정과 형식적인 예의를 답답해합니다. 남들 시선을 신경 쓰지 않고 실용적이고 파격적인 변화를 즐깁니다.',
    keywords: ['형식 파괴', '자유로움', '실용주의', '새로고침'],
    color: '#EC4899', // Pink
  },
  R: {
    letter: 'R',
    title: '든든한 시스템파',
    subtitle: 'Root',
    description: '"다 이유가 있어서 있는 룰이지!" 오랜 시간 검증된 시스템과 권위를 존중합니다. 정해진 매뉴얼과 사회적 격식을 지키는 것을 편안해합니다.',
    keywords: ['매뉴얼 중시', '격식과 예의', '안정감', '경험 존중'],
    color: '#6366F1', // Indigo
  },

  // 축 4: 갈등 해결과 인간관계 (O vs D)
  O: {
    letter: 'O',
    title: '소속감과 원칙 중시형',
    subtitle: 'Outward',
    description: '"원칙과 신의를 지킨다!" 강한 소속감과 신뢰를 바탕으로 협력하는 것을 중요하게 생각합니다. 한 번 맺은 관계는 끝까지 책임지며 원칙대로 행동합니다.',
    keywords: ['상호 신뢰', '강한 소속감', '원칙주의', '협력적 연대'],
    color: '#EF4444', // Red
  },
  D: {
    letter: 'D',
    title: '냉철한 실속파',
    subtitle: 'Defender',
    description: '"영원한 적도 아군도 없다!" 상황에 따라 매우 유연하게 대처합니다. 감정이나 의리에 휘둘리기보다 나에게 득이 되는 실리를 철저하게 챙깁니다.',
    keywords: ['철저한 실리', '유연한 대처', '마이웨이', '독자 생존'],
    color: '#14B8A6', // Teal
  }
};

export const dnaAxes = [
  { id: 'axis1', left: 'M', right: 'G', label: '자원 분배' },
  { id: 'axis2', left: 'A', right: 'B', label: '목표 달성' },
  { id: 'axis3', left: 'W', right: 'R', label: '규칙/변화' },
  { id: 'axis4', left: 'O', right: 'D', label: '인간관계' }
] as const;
