export interface MacroDataPoint {
  year: number;
  gdpGrowth: number;
  inflation: number;
  unemployment: number;
  yearsToBuyApt: number;
  bigMacIndex: number;
  president: string;
}

export interface PresidentEra {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  colorType: 'light' | 'dark'; // for alternating background shades
}

export const presidentEras: PresidentEra[] = [
  { id: "chun", name: "전두환", startYear: 1980, endYear: 1988, colorType: 'light' },
  { id: "roh-tae-woo", name: "노태우", startYear: 1988, endYear: 1993, colorType: 'dark' },
  { id: "kim-young-sam", name: "김영삼", startYear: 1993, endYear: 1998, colorType: 'light' },
  { id: "kim-dae-jung", name: "김대중", startYear: 1998, endYear: 2003, colorType: 'dark' },
  { id: "roh-moo-hyun", name: "노무현", startYear: 2003, endYear: 2008, colorType: 'light' },
  { id: "lee-myung-bak", name: "이명박", startYear: 2008, endYear: 2013, colorType: 'dark' },
  { id: "park-geun-hye", name: "박근혜", startYear: 2013, endYear: 2017, colorType: 'light' },
  { id: "moon-jae-in", name: "문재인", startYear: 2017, endYear: 2022, colorType: 'dark' },
  { id: "yoon", name: "윤석열", startYear: 2022, endYear: 2025, colorType: 'light' },
  { id: "lee-jae-myung", name: "이재명", startYear: 2025, endYear: 2026, colorType: 'dark' },
];

// Helper to generate realistic-looking mock macro data
const generateMockData = (): MacroDataPoint[] => {
  const data: MacroDataPoint[] = [];
  let baseYearsToBuyApt = 8.5; // Starting point in 1980
  let baseBigMac = 1.2; // Starting point roughly
  
  for (let year = 1980; year <= 2026; year++) {
    let gdpGrowth = 5;
    let inflation = 3;
    let unemployment = 3;

    // Introduce some historical variations
    if (year >= 1980 && year <= 1988) { // Chun
      gdpGrowth = 8 + (Math.random() * 4 - 2);
      inflation = 6 + (Math.random() * 10 - 5);
      unemployment = 4 + (Math.random() * 1 - 0.5);
      baseYearsToBuyApt += 0.2;
      baseBigMac += 0.05;
    } else if (year >= 1988 && year < 1993) { // Roh TW
      gdpGrowth = 7 + (Math.random() * 3 - 1.5);
      inflation = 7 + (Math.random() * 4 - 2);
      unemployment = 2.5 + (Math.random() * 1 - 0.5);
      baseYearsToBuyApt += 0.5; // Real estate boom
      baseBigMac += 0.1;
    } else if (year >= 1993 && year < 1998) { // YS (IMF at the end)
      if (year === 1997) {
        gdpGrowth = 5.9; inflation = 4.4; unemployment = 2.6;
        baseYearsToBuyApt -= 0.5;
      } else if (year === 1998) {
        gdpGrowth = -5.1; inflation = 7.5; unemployment = 7.0;
        baseYearsToBuyApt -= 1.5; // Crash
      } else {
        gdpGrowth = 7 + (Math.random() * 2 - 1);
        inflation = 4 + (Math.random() * 2 - 1);
        unemployment = 2.2 + (Math.random() * 1 - 0.5);
        baseYearsToBuyApt += 0.3;
      }
      baseBigMac += 0.08;
    } else if (year >= 1998 && year < 2003) { // DJ
      if (year === 1999) {
        gdpGrowth = 11.5; inflation = 0.8; unemployment = 6.3;
      } else {
        gdpGrowth = 5 + (Math.random() * 3 - 1.5);
        inflation = 3 + (Math.random() * 2 - 1);
        unemployment = 4 + (Math.random() * 1 - 0.5);
      }
      baseYearsToBuyApt += 0.6; // Recovery boom
      baseBigMac += 0.1;
    } else if (year >= 2003 && year < 2008) { // MH
      gdpGrowth = 4.5 + (Math.random() * 1.5 - 0.75);
      inflation = 3 + (Math.random() * 1 - 0.5);
      unemployment = 3.5 + (Math.random() * 0.5 - 0.25);
      baseYearsToBuyApt += 1.2; // Rapid housing price growth
      baseBigMac += 0.15;
    } else if (year >= 2008 && year < 2013) { // MB
      if (year === 2008) gdpGrowth = 3.0;
      else if (year === 2009) gdpGrowth = 0.8;
      else gdpGrowth = 3.5 + (Math.random() * 2 - 1);
      inflation = 3 + (Math.random() * 1.5 - 0.75);
      unemployment = 3.2 + (Math.random() * 0.5 - 0.25);
      baseYearsToBuyApt += 0.1; // Stagnation
      baseBigMac += 0.1;
    } else if (year >= 2013 && year < 2017) { // GH
      gdpGrowth = 3 + (Math.random() * 1 - 0.5);
      inflation = 1.5 + (Math.random() * 1 - 0.5);
      unemployment = 3.4 + (Math.random() * 0.5 - 0.25);
      baseYearsToBuyApt += 0.4;
      baseBigMac += 0.1;
    } else if (year >= 2017 && year < 2022) { // Moon
      if (year === 2020) gdpGrowth = -0.7;
      else if (year === 2021) gdpGrowth = 4.3;
      else gdpGrowth = 2.5 + (Math.random() * 1 - 0.5);
      inflation = 1.5 + (Math.random() * 1 - 0.5);
      unemployment = 3.8 + (Math.random() * 0.5 - 0.25);
      baseYearsToBuyApt += 2.5; // Very rapid housing growth
      baseBigMac += 0.15;
    } else if (year >= 2022 && year < 2025) { // Yoon
      gdpGrowth = 1.5 + (Math.random() * 1 - 0.5);
      inflation = 3.5 + (Math.random() * 2 - 1);
      unemployment = 2.8 + (Math.random() * 0.5 - 0.25);
      baseYearsToBuyApt -= 0.5; // Slight correction
      baseBigMac += 0.3; // High inflation
    } else { // Lee Jae-myung
      gdpGrowth = 2.0 + (Math.random() * 1 - 0.5);
      inflation = 2.5 + (Math.random() * 1 - 0.5);
      unemployment = 3.0 + (Math.random() * 0.5 - 0.25);
      baseYearsToBuyApt += 0.2;
      baseBigMac += 0.1;
    }

    // specific override for 1998 (IMF impact) just to be sure
    if (year === 1998) {
      gdpGrowth = -5.1;
      inflation = 7.5;
      unemployment = 7.0;
    }

    // Determine President for the year
    let presidentName = "";
    if (year >= 1980 && year < 1988) presidentName = "전두환 정부";
    else if (year >= 1988 && year < 1993) presidentName = "노태우 정부";
    else if (year >= 1993 && year < 1998) presidentName = "김영삼 정부";
    else if (year >= 1998 && year < 2003) presidentName = "김대중 정부";
    else if (year >= 2003 && year < 2008) presidentName = "노무현 정부";
    else if (year >= 2008 && year < 2013) presidentName = "이명박 정부";
    else if (year >= 2013 && year < 2017) presidentName = "박근혜 정부";
    else if (year >= 2017 && year < 2022) presidentName = "문재인 정부";
    else if (year >= 2022 && year < 2025) presidentName = "윤석열 정부";
    else presidentName = "이재명 정부";

    data.push({
      year,
      gdpGrowth: Number(gdpGrowth.toFixed(1)),
      inflation: Number(inflation.toFixed(1)),
      unemployment: Number(unemployment.toFixed(1)),
      yearsToBuyApt: Number(baseYearsToBuyApt.toFixed(1)),
      bigMacIndex: Number(baseBigMac.toFixed(2)),
      president: presidentName
    });
  }
  return data;
};

export const macroTimelineData = generateMockData();
