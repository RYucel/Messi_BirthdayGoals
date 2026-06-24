import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { monthsData } from "../data";

export function MonthlyChart() {
  const data = monthsData.map((m) => ({
    name: m.name.slice(0, 3).toUpperCase(), // Short name
    fullName: m.name,
    messi: m.totalGoals,
    cr7: m.cr7TotalGoals,
  }));

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
                      <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-2">{data.fullName}</p>
                      <div className="space-y-2">
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-yellow-400 block mb-1">Messi</span>
                          <span className="text-xl font-black text-white">{data.messi}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-red-500 block mb-1">C. Ronaldo</span>
                          <span className="text-xl font-black text-white">{data.cr7}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} />
            <Bar dataKey="messi" name="MESSI" fill="#facc15" radius={[2, 2, 0, 0]} />
            <Bar dataKey="cr7" name="C. RONALDO" fill="#ef4444" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
