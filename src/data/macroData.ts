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

export const macroTimelineData: MacroDataPoint[] = [
  { year: 1980, gdpGrowth: -1.6, inflation: 28.7, unemployment: 5.2, yearsToBuyApt: 8.5, bigMacIndex: 1.2, president: "전두환 정부" },
  { year: 1981, gdpGrowth: 7.2, inflation: 21.4, unemployment: 4.5, yearsToBuyApt: 8.6, bigMacIndex: 1.2, president: "전두환 정부" },
  { year: 1982, gdpGrowth: 8.3, inflation: 7.2, unemployment: 4.4, yearsToBuyApt: 8.8, bigMacIndex: 1.3, president: "전두환 정부" },
  { year: 1983, gdpGrowth: 13.4, inflation: 3.4, unemployment: 4.1, yearsToBuyApt: 9.0, bigMacIndex: 1.3, president: "전두환 정부" },
  { year: 1984, gdpGrowth: 10.4, inflation: 2.3, unemployment: 3.8, yearsToBuyApt: 9.2, bigMacIndex: 1.4, president: "전두환 정부" },
  { year: 1985, gdpGrowth: 7.8, inflation: 2.5, unemployment: 4.0, yearsToBuyApt: 9.3, bigMacIndex: 1.4, president: "전두환 정부" },
  { year: 1986, gdpGrowth: 11.2, inflation: 2.8, unemployment: 3.8, yearsToBuyApt: 9.5, bigMacIndex: 1.5, president: "전두환 정부" },
  { year: 1987, gdpGrowth: 12.5, inflation: 3.0, unemployment: 3.1, yearsToBuyApt: 9.8, bigMacIndex: 1.6, president: "전두환 정부" },
  { year: 1988, gdpGrowth: 11.9, inflation: 7.1, unemployment: 2.5, yearsToBuyApt: 10.5, bigMacIndex: 1.7, president: "노태우 정부" },
  { year: 1989, gdpGrowth: 7.0, inflation: 5.7, unemployment: 2.6, yearsToBuyApt: 11.2, bigMacIndex: 1.8, president: "노태우 정부" },
  { year: 1990, gdpGrowth: 9.8, inflation: 8.6, unemployment: 2.4, yearsToBuyApt: 12.0, bigMacIndex: 1.9, president: "노태우 정부" },
  { year: 1991, gdpGrowth: 10.3, inflation: 9.3, unemployment: 2.3, yearsToBuyApt: 11.8, bigMacIndex: 2.0, president: "노태우 정부" },
  { year: 1992, gdpGrowth: 6.2, inflation: 6.2, unemployment: 2.4, yearsToBuyApt: 11.5, bigMacIndex: 2.1, president: "노태우 정부" },
  { year: 1993, gdpGrowth: 6.8, inflation: 4.8, unemployment: 2.8, yearsToBuyApt: 11.0, bigMacIndex: 2.1, president: "김영삼 정부" },
  { year: 1994, gdpGrowth: 9.2, inflation: 6.3, unemployment: 2.4, yearsToBuyApt: 10.8, bigMacIndex: 2.2, president: "김영삼 정부" },
  { year: 1995, gdpGrowth: 9.6, inflation: 4.5, unemployment: 2.0, yearsToBuyApt: 10.5, bigMacIndex: 2.3, president: "김영삼 정부" },
  { year: 1996, gdpGrowth: 7.9, inflation: 4.9, unemployment: 2.0, yearsToBuyApt: 10.2, bigMacIndex: 2.3, president: "김영삼 정부" },
  { year: 1997, gdpGrowth: 5.9, inflation: 4.4, unemployment: 2.6, yearsToBuyApt: 9.5, bigMacIndex: 2.2, president: "김영삼 정부" },
  { year: 1998, gdpGrowth: -5.1, inflation: 7.5, unemployment: 7.0, yearsToBuyApt: 7.0, bigMacIndex: 2.1, president: "김대중 정부" },
  { year: 1999, gdpGrowth: 11.5, inflation: 0.8, unemployment: 6.3, yearsToBuyApt: 7.5, bigMacIndex: 2.2, president: "김대중 정부" },
  { year: 2000, gdpGrowth: 9.1, inflation: 2.3, unemployment: 4.4, yearsToBuyApt: 8.0, bigMacIndex: 2.3, president: "김대중 정부" },
  { year: 2001, gdpGrowth: 4.9, inflation: 4.1, unemployment: 4.0, yearsToBuyApt: 8.8, bigMacIndex: 2.4, president: "김대중 정부" },
  { year: 2002, gdpGrowth: 7.4, inflation: 2.8, unemployment: 3.3, yearsToBuyApt: 9.5, bigMacIndex: 2.5, president: "김대중 정부" },
  { year: 2003, gdpGrowth: 2.9, inflation: 3.5, unemployment: 3.6, yearsToBuyApt: 10.2, bigMacIndex: 2.6, president: "노무현 정부" },
  { year: 2004, gdpGrowth: 4.9, inflation: 3.6, unemployment: 3.7, yearsToBuyApt: 10.8, bigMacIndex: 2.6, president: "노무현 정부" },
  { year: 2005, gdpGrowth: 3.9, inflation: 2.8, unemployment: 3.7, yearsToBuyApt: 11.5, bigMacIndex: 2.7, president: "노무현 정부" },
  { year: 2006, gdpGrowth: 5.2, inflation: 2.2, unemployment: 3.5, yearsToBuyApt: 12.8, bigMacIndex: 2.8, president: "노무현 정부" },
  { year: 2007, gdpGrowth: 5.5, inflation: 2.5, unemployment: 3.2, yearsToBuyApt: 13.5, bigMacIndex: 2.9, president: "노무현 정부" },
  { year: 2008, gdpGrowth: 3.0, inflation: 4.7, unemployment: 3.2, yearsToBuyApt: 11.2, bigMacIndex: 3.1, president: "이명박 정부" },
  { year: 2009, gdpGrowth: 0.8, inflation: 2.8, unemployment: 3.6, yearsToBuyApt: 11.3, bigMacIndex: 3.2, president: "이명박 정부" },
  { year: 2010, gdpGrowth: 6.8, inflation: 2.9, unemployment: 3.7, yearsToBuyApt: 11.5, bigMacIndex: 3.3, president: "이명박 정부" },
  { year: 2011, gdpGrowth: 3.7, inflation: 4.0, unemployment: 3.4, yearsToBuyApt: 11.8, bigMacIndex: 3.4, president: "이명박 정부" },
  { year: 2012, gdpGrowth: 2.4, inflation: 2.2, unemployment: 3.2, yearsToBuyApt: 11.6, bigMacIndex: 3.5, president: "이명박 정부" },
  { year: 2013, gdpGrowth: 3.2, inflation: 1.3, unemployment: 3.1, yearsToBuyApt: 11.5, bigMacIndex: 3.6, president: "박근혜 정부" },
  { year: 2014, gdpGrowth: 3.2, inflation: 1.3, unemployment: 3.5, yearsToBuyApt: 11.8, bigMacIndex: 3.7, president: "박근혜 정부" },
  { year: 2015, gdpGrowth: 2.8, inflation: 0.7, unemployment: 3.6, yearsToBuyApt: 12.2, bigMacIndex: 3.8, president: "박근혜 정부" },
  { year: 2016, gdpGrowth: 2.9, inflation: 1.0, unemployment: 3.7, yearsToBuyApt: 12.5, bigMacIndex: 3.9, president: "박근혜 정부" },
  { year: 2017, gdpGrowth: 3.2, inflation: 1.9, unemployment: 3.7, yearsToBuyApt: 12.8, bigMacIndex: 4.0, president: "문재인 정부" },
  { year: 2018, gdpGrowth: 2.9, inflation: 1.5, unemployment: 3.8, yearsToBuyApt: 14.5, bigMacIndex: 4.1, president: "문재인 정부" },
  { year: 2019, gdpGrowth: 2.2, inflation: 0.4, unemployment: 3.8, yearsToBuyApt: 15.8, bigMacIndex: 4.2, president: "문재인 정부" },
  { year: 2020, gdpGrowth: -0.7, inflation: 0.5, unemployment: 4.0, yearsToBuyApt: 18.2, bigMacIndex: 4.2, president: "문재인 정부" },
  { year: 2021, gdpGrowth: 4.1, inflation: 2.5, unemployment: 3.7, yearsToBuyApt: 19.5, bigMacIndex: 4.3, president: "문재인 정부" },
  { year: 2022, gdpGrowth: 2.6, inflation: 5.1, unemployment: 2.9, yearsToBuyApt: 15.2, bigMacIndex: 4.5, president: "윤석열 정부" },
  { year: 2023, gdpGrowth: 1.4, inflation: 3.6, unemployment: 2.7, yearsToBuyApt: 14.8, bigMacIndex: 4.6, president: "윤석열 정부" },
  { year: 2024, gdpGrowth: 2.2, inflation: 2.6, unemployment: 2.8, yearsToBuyApt: 14.5, bigMacIndex: 4.8, president: "윤석열 정부" },
  { year: 2025, gdpGrowth: 2.1, inflation: 2.4, unemployment: 2.9, yearsToBuyApt: 14.2, bigMacIndex: 4.9, president: "이재명 정부" },
  { year: 2026, gdpGrowth: 2.3, inflation: 2.2, unemployment: 2.8, yearsToBuyApt: 14.0, bigMacIndex: 5.0, president: "이재명 정부" }
];
