export interface DayData {
  day: number;
  monthId: number;
  monthName: string;
  goals: number; // Messi's goals
  cr7Goals: number; // Ronaldo's goals
  dateStr: string;
}

export interface MonthData {
  id: number;
  name: string;
  totalGoals: number; // Messi's total
  cr7TotalGoals: number; // Ronaldo's total
  days: DayData[];
}
