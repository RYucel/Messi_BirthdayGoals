export interface DayData {
  day: number;
  monthId: number;
  monthName: string;
  goals: number;
  dateStr: string;
}

export interface MonthData {
  id: number;
  name: string;
  totalGoals: number;
  days: DayData[];
}
