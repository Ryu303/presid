export type PT_CORE_DNA = string;

export const DNA_AXIS_MAP = {
  axis1: {
    M: { letter: "M", name: "Market", description: "시장 자율" },
    G: { letter: "G", name: "Guardian", description: "국가 개입" },
  },
  axis2: {
    A: { letter: "A", name: "Accelerator", description: "성장/효율" },
    B: { letter: "B", name: "Balancer", description: "분배/안전망" },
  },
  axis3: {
    W: { letter: "W", name: "Wave", description: "혁신/개혁" },
    R: { letter: "R", name: "Root", description: "질서/전통" },
  },
  axis4: {
    O: { letter: "O", name: "Outward", description: "개방/동맹" },
    D: { letter: "D", name: "Defender", description: "자주/실리" },
  }
};

export const getPersonaDetails = (dna: PT_CORE_DNA) => {
  if (dna.length !== 4) return undefined;
  
  const [a1, a2, a3, a4] = dna.toUpperCase().split('');
  
  const m1 = DNA_AXIS_MAP.axis1[a1 as keyof typeof DNA_AXIS_MAP.axis1];
  const m2 = DNA_AXIS_MAP.axis2[a2 as keyof typeof DNA_AXIS_MAP.axis2];
  const m3 = DNA_AXIS_MAP.axis3[a3 as keyof typeof DNA_AXIS_MAP.axis3];
  const m4 = DNA_AXIS_MAP.axis4[a4 as keyof typeof DNA_AXIS_MAP.axis4];
  
  if (!m1 || !m2 || !m3 || !m4) return undefined;

  // Combination mapping
  const personas: Record<string, { title: string, subtitle: string }> = {
    "MAWO": { title: "글로벌 시장개척자", subtitle: "자율경제와 글로벌 확장을 중시하는 혁신형 성장가" },
    "MAWD": { title: "자주적 시장개혁가", subtitle: "자율경제를 추구하되 국익과 실리를 최우선하는 개혁가" },
    "MARO": { title: "안정적 자유무역가", subtitle: "시장의 효율성을 바탕으로 질서 있는 개방을 추진하는 보수형 성장가" },
    "MARD": { title: "실리적 보수주의자", subtitle: "시장 자율과 전통적 가치를 수호하며 실용 외교를 지향하는 전략가" },
    
    "MBWO": { title: "포용적 글로벌 혁신가", subtitle: "시장 원리를 존중하되 복지와 개방을 통한 사회 개혁을 지향하는 리더" },
    "MBWD": { title: "실용적 복지개혁가", subtitle: "분배를 고려한 시장주의를 바탕으로 자주적 사회 개혁을 추진하는 실용가" },
    "MBRO": { title: "안정적 포용국가론자", subtitle: "전통적 가치 위에서 시장의 부를 안정적으로 분배하고 동맹을 중시하는 리더" },
    "MBRD": { title: "실리적 온건보수", subtitle: "시장의 힘으로 복지를 뒷받침하며 실용 외교와 전통을 지키는 현실주의자" },
    
    "GAWO": { title: "국가주도 글로벌 선도자", subtitle: "강력한 국가 개입으로 고속 성장을 이끌며 글로벌 확장을 추진하는 리더" },
    "GAWD": { title: "국가주도 자주성장론자", subtitle: "국가의 힘으로 혁신적 성장을 주도하며 자주의 원칙을 견지하는 지도자" },
    "GARO": { title: "권위주의 발전국가 모델", subtitle: "전통과 질서를 중시하며 국가 주도로 강력한 경제 성장을 추진하는 동맹파" },
    "GARD": { title: "보수적 발전국가 모델", subtitle: "국가 개입과 고속 성장을 추구하며 자주 국방과 질서를 우선하는 실리파" },
    
    "GBWO": { title: "진보적 복지개혁가", subtitle: "국가 개입을 통한 적극적 분배와 사회 혁신, 연대 외교를 지향하는 개혁가" },
    "GBWD": { title: "자주적 평등주의자", subtitle: "강력한 국가 주도로 분배를 실현하고 자주적이고 혁신적인 사회를 꿈꾸는 리더" },
    "GBRO": { title: "온건한 사민주의자", subtitle: "전통적 가치를 존중하며 국가 개입에 의한 복지와 연대 외교를 추구하는 중도파" },
    "GBRD": { title: "전통적 복지국가론자", subtitle: "국가 주도의 분배와 질서를 중시하며 자국 우선주의 실용 외교를 펼치는 리더" },
  };

  const persona = personas[dna.toUpperCase()];
  if (!persona) return undefined;

  return {
    dna: dna.toUpperCase(),
    letters: [m1, m2, m3, m4],
    title: persona.title,
    subtitle: persona.subtitle
  };
};
