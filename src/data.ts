import { DayData, MonthData } from "./types";

const rawData = `❌1 Oc: 0
❌2 Oc: 0
❌3 Oc: 0
✅4 Oc: 2
✅5 Oc: 1
✅6 Oc: 9
✅7 Oc: 1
✅8 Oc: 5
✅9 Oc: 6
✅10 Oc: 3
✅11 Oc: 6
✅12 Oc: 3
✅13 Oc: 2
✅14 Oc: 2
✅15 Oc: 3
✅16 Oc: 5
✅17 Oc: 3
✅18 Oc: 3
✅19 Oc: 3
✅20 Oc: 1
✅21 Oc: 3
✅22 Oc: 6
✅23 Oc: 2
✅24 Oc: 5
✅25 Oc: 1
✅26 Oc: 3
✅27 Oc: 6
✅28 Oc: 1
✅29 Oc: 4
✅30 Oc: 4
✅31 Oc: 1
✅1 Ş: 7
✅2 Ş: 2
✅3 Ş: 4
✅4 Ş: 3
✅5 Ş: 3
✅6 Ş: 2
✅7 Ş: 1
✅8 Ş: 1
✅9 Ş: 3
✅10 Ş: 1
✅11 Ş: 3
✅12 Ş: 1
✅13 Ş: 2
✅14 Ş: 2
✅15 Ş: 5
✅16 Ş: 4
✅17 Ş: 2
✅18 Ş: 2
✅19 Ş: 8
✅20 Ş: 4
✅21 Ş: 1
✅22 Ş: 5
✅23 Ş: 6
✅24 Ş: 5
✅25 Ş: 2
✅26 Ş: 4
✅27 Ş: 2
✅28 Ş: 2
✅29 Ş: 3
✅1 M: 6
✅2 M: 5
✅3 M: 3
✅4 M: 5
❌5 M: 0
✅6 M: 4
✅7 M: 9
✅8 M: 6
✅9 M: 2
✅10 M: 4
✅11 M: 3
✅12 M: 4
✅13 M: 4
✅14 M: 7
✅15 M: 2
✅16 M: 5
✅17 M: 9
✅18 M: 2
✅19 M: 2
✅20 M: 3
✅21 M: 5
✅22 M: 3
✅23 M: 5
✅24 M: 1
✅25 M: 1
✅26 M: 1
❌27 M: 0
✅28 M: 4
✅29 M: 3
✅30 M: 3
✅31 M: 4
❌1 N: 0
✅2 N: 2
✅3 N: 4
✅4 N: 1
✅5 N: 4
✅6 N: 7
✅7 N: 5
✅8 N: 4
✅9 N: 4
✅10 N: 2
✅11 N: 1
✅12 N: 1
✅13 N: 1
✅14 N: 2
✅15 N: 3
✅16 N: 3
✅17 N: 3
✅18 N: 6
❌19 N: 0
✅20 N: 4
✅21 N: 1
✅22 N: 2
✅23 N: 5
❌24 N: 0
✅25 N: 2
✅26 N: 2
✅27 N: 7
✅28 N: 2
✅29 N: 6
❌30 N: 0
✅1 My: 5
✅2 My: 10
✅3 My: 2
✅4 My: 4
✅5 My: 6
✅6 My: 5
❌7 My: 0
✅8 My: 2
✅9 My: 2
✅10 My: 1
✅11 My: 1
❌12 My: 0
✅13 My: 3
✅14 My: 2
❌15 My: 0
✅16 My: 3
✅17 My: 2
❌18 My: 0
✅19 My: 2
✅20 My: 2
✅21 My: 2
❌22 My: 0
✅23 My: 2
✅24 My: 1
✅25 My: 2
❌26 My: 0
✅27 My: 3
✅28 My: 3
✅29 My: 4
✅30 My: 2
✅31 My: 2
✅1 Hz: 1
✅2 Hz: 1
✅3 Hz: 1
✅4 Hz: 1
✅5 Hz: 7
❌6 Hz: 0
✅7 Hz: 3
❌8 Hz: 0
✅9 Hz: 6
✅10 Hz: 3
❌11 Hz: 0
❌12 Hz: 0
✅13 Hz: 2
✅14 Hz: 6
✅15 Hz: 2
✅16 Hz: 5
✅17 Hz: 2
✅18 Hz: 1
✅19 Hz: 2
✅20 Hz: 1
✅21 Hz: 2
❌22 Hz: 0
❌23 Hz: 0
❌24 Hz: 0
✅25 Hz: 2
✅26 Hz: 1
❌27 Hz: 0
✅28 Hz: 2
❌29 Hz: 0
✅30 Hz: 1
❌1 T:
❌2 T: 0
✅3 T: 1
❌4 T: 0
✅5 T: 2
❌6 T: 0
❌7 T: 0
✅8 T: 1
✅9 T: 3
❌10 T: 0
✅11 T: 1
✅12 T: 2
❌13 T: 0
❌14 T: 0
❌15 T: 0
✅16 T: 1
❌17 T: 0
❌18 T: 0
✅19 T: 4
❌20 T: 0
✅21 T: 1
❌22 T: 0
❌23 T: 0
❌24 T: 0
✅25 T: 2
❌26 T: 0
❌27 T: 0
❌28 T: 0
❌29 T: 0
❌30 T: 0
✅31 T: 1
❌1 A: 0
✅2 A: 2
❌3 A: 0
❌4 A: 0
❌5 A: 0
✅6 A: 4
❌7 A: 0
✅8 A: 1
❌9 A: 0
❌10 A: 0
✅11 A: 3
❌12 A: 0
✅13 A: 1
✅14 A: 1
✅15 A: 2
✅16 A: 1
✅17 A: 4
✅18 A: 4
✅19 A: 3
✅20 A: 2
✅21 A: 4
❌22 A: 0
✅23 A: 3
✅24 A: 2
❌25 A: 0
✅26 A: 6
✅27 A: 2
✅28 A: 1
✅29 A: 4
❌30 A: 0
❌31 A: 0
✅1 E: 4
✅2 E: 2
❌3 E: 0
✅4 E: 4
❌5 E: 0
❌6 E: 0
✅7 E: 3
✅8 E: 1
✅9 E: 7
✅10 E: 2
❌11 E: 0
✅12 E: 4
✅13 E: 4
✅14 E: 6
✅15 E: 2
✅16 E: 1
✅17 E: 5
✅18 E: 7
✅19 E: 10 🔝
✅20 E: 4
✅21 E: 3
✅22 E: 4
✅23 E: 3
✅24 E: 6
❌25 E: 0
✅26 E: 2
✅27 E: 7
✅28 E: 5
✅29 E: 2
✅30 E: 1
✅1 Ek: 5
✅2 Ek: 3
✅3 Ek: 3
✅4 Ek: 2
✅5 Ek: 1
✅6 Ek: 1
✅7 Ek: 5
✅8 Ek: 1
❌9 Ek: 0
✅10 Ek: 4
✅11 Ek: 3
✅12 Ek: 2
❌13 Ek: 0
✅14 Ek: 2
✅15 Ek: 7
✅16 Ek: 2
✅17 Ek: 2
✅18 Ek: 5
✅19 Ek: 9
✅20 Ek: 7
✅21 Ek: 2
✅22 Ek: 4
✅23 Ek: 3
✅24 Ek: 2
✅25 Ek: 3
❌26 Ek: 0
✅27 Ek: 2
✅28 Ek: 4
✅29 Ek: 5
✅30 Ek: 2
❌31 Ek: 0
✅1 K: 6
✅2 K: 3
❌3 K: 0
✅4 K: 2
✅5 K: 2
✅6 K: 4
✅7 K: 6
❌8 K: 0
✅9 K: 4
✅10 K: 2
✅11 K: 4
✅12 K: 2
✅13 K: 2
✅14 K: 2
✅15 K: 3
✅16 K: 2
✅17 K: 3
✅18 K: 1
✅19 K: 1
✅20 K: 7
❌21 K: 0
✅22 K: 4
✅23 K: 4
✅24 K: 4
✅25 K: 5
✅26 K: 2
✅27 K: 4
✅28 K: 2
✅29 K: 4
❌30 K: 0
✅1 Ar: 3
✅2 Ar: 1
✅3 Ar: 2
✅4 Ar: 2
✅5 Ar: 2
✅6 Ar: 1
✅7 Ar: 8
✅8 Ar: 2
✅9 Ar: 5
✅10 Ar: 4
❌11 Ar: 0
✅12 Ar: 5
✅13 Ar: 3
❌14 Ar: 0
❌15 Ar: 0
✅16 Ar: 6
❌17 Ar: 0
✅18 Ar: 5
✅19 Ar: 2
✅20 Ar: 3
✅21 Ar: 1
✅22 Ar: 3
✅23 Ar: 1
❌24 Ar: 0
❌25 Ar: 0
❌26 Ar: 0
❌27 Ar: 0
❌28 Ar: 0
❌29 Ar: 0
✅30 Ar: 1
❌31 Ar: 0`;

const MONTH_MAP: Record<string, { id: number; name: string; daysInMonth: number }> = {
  Oc: { id: 1, name: "Ocak", daysInMonth: 31 },
  Ş: { id: 2, name: "Şubat", daysInMonth: 29 }, // Using 29 for a leap year compatible dataset
  M: { id: 3, name: "Mart", daysInMonth: 31 },
  N: { id: 4, name: "Nisan", daysInMonth: 30 },
  My: { id: 5, name: "Mayıs", daysInMonth: 31 },
  Hz: { id: 6, name: "Haziran", daysInMonth: 30 },
  T: { id: 7, name: "Temmuz", daysInMonth: 31 },
  A: { id: 8, name: "Ağustos", daysInMonth: 31 },
  E: { id: 9, name: "Eylül", daysInMonth: 30 },
  Ek: { id: 10, name: "Ekim", daysInMonth: 31 },
  K: { id: 11, name: "Kasım", daysInMonth: 30 },
  Ar: { id: 12, name: "Aralık", daysInMonth: 31 },
};

export const parsedData: DayData[] = (() => {
  const lines = rawData.split("\n").map((l) => l.trim()).filter(Boolean);
  const data: DayData[] = [];
  
  for (const line of lines) {
    // Clean emojis and extra text (like 🔝)
    const cleanLine = line.replace(/[✅❌🔝]/g, "").trim();
    // Match "1 Oc: 0" or "1 T:" 
    const match = cleanLine.match(/^(\d+)\s+([^:]+):\s*(\d*)$/);
    
    if (match) {
      const day = parseInt(match[1], 10);
      const monthKey = match[2].trim();
      const goalsStr = match[3];
      const goals = goalsStr ? parseInt(goalsStr, 10) : 0;
      
      const monthInfo = MONTH_MAP[monthKey];
      if (monthInfo) {
        data.push({
          day,
          monthId: monthInfo.id,
          monthName: monthInfo.name,
          goals,
          dateStr: `${day} ${monthInfo.name}`,
        });
      }
    }
  }
  return data;
})();

export const monthsData: MonthData[] = (() => {
  const map: Record<number, MonthData> = {};
  
  // Initialize with empty months based on our map
  Object.values(MONTH_MAP).forEach((m) => {
    map[m.id] = {
      id: m.id,
      name: m.name,
      totalGoals: 0,
      days: [],
    };
  });

  // Populate days
  parsedData.forEach((dayData) => {
    if (map[dayData.monthId]) {
      map[dayData.monthId].days.push(dayData);
      map[dayData.monthId].totalGoals += dayData.goals;
    }
  });

  // Convert to array and sort by ID
  return Object.values(map).sort((a, b) => a.id - b.id);
})();

export const totalGoals = parsedData.reduce((acc, curr) => acc + curr.goals, 0);

// Helper to get data by exact date
export const getGoalsByDate = (monthId: number, day: number): DayData | undefined => {
  return parsedData.find(d => d.monthId === monthId && d.day === day);
};
