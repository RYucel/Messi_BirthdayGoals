import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { monthsData } from "../data";

export function MonthlyChart() {
  const data = monthsData.map((m) => ({
    name: m.name.slice(0, 3).toUpperCase(), // Short name
    fullName: m.name,
    goals: m.totalGoals,
  }));

  const maxGoals = Math.max(...data.map((d) => d.goals));

  return (
    <div className="h-[220px] flex flex-col">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-4">Aylık Dağılım</h3>
      
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#525252" 
              fontSize={10} 
              tickLine={false}
              axisLine={false}
              fontWeight="bold"
            />
            <YAxis 
              stroke="#525252" 
              fontSize={10} 
              tickLine={false}
              axisLine={false}
              fontWeight="bold"
            />
            <Tooltip
              cursor={{ fill: '#262626', opacity: 0.4 }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-black border border-white/20 p-4 rounded-none shadow-2xl">
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-1">{data.fullName}</p>
                      <p className="text-2xl font-black text-yellow-400">
                        {data.goals} <span className="text-sm text-white">GOALS</span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="goals">
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.goals === maxGoals ? "#facc15" : "#ffffff"} 
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
