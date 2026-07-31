export interface Indicator {
  name: string;
  value: string | number;
  source: string;
  reportName?: string;
  year?: number;
}

export interface TextWithSource {
  content: string;
  source: string;
}

export interface PolicyFact {
  date: string;
  description: string;
  source: string;
}

export interface ChartDataPoint {
  name: string;
  domestic: number;
  international?: number;
}

export interface ChartConfig {
  title: string;
  data: ChartDataPoint[];
  domesticLabel: string;
  internationalLabel?: string;
  source: string;
}

export interface GlossaryTerm {
  term: string;
  description: string;
}

export interface HistoricalEvent {
  date: string;
  name: string;
  description: string;
  source: string;
}

export interface CrossAnalysis {
  linkedEvent: HistoricalEvent;
  interpretationGuide: {
    viewpoint1: string;
    viewpoint2: string;
  };
}

export interface Policy {
  id: string;
  title: string;
  category: "경제/산업" | "부동산/주거" | "복지/노동" | "외교/안보" | "사회/문화" | "정치/행정";
  valueTag?: "pro-market" | "pro-welfare";
  fundingSource?: string;
  keyPersonnel?: { name: string; role: string; description?: string }[];
  lineage?: { prev?: string; next?: string };
  frictionIndex?: { veto: number; filibusterHours: number; strikeDays: number };
  mediaSnapshot?: { date: string; conservative: { headline: string; source: string }; progressive: { headline: string; source: string } };
  context: TextWithSource;
  legislationFacts: PolicyFact[];
  pros: TextWithSource[];
  cons: TextWithSource[];
  indicators: {
    domestic: Indicator[];
    global: Indicator[];
  };
  chart?: ChartConfig;
  glossary?: GlossaryTerm[];
  crossAnalysis?: CrossAnalysis;
}
