import { totalGoals, cr7TotalGoals, parsedData, monthsData } from "../data";

export function StatsOverview() {
  const messiBestDay = [...parsedData].sort((a, b) => b.goals - a.goals)[0];
  const messiBestMonth = [...monthsData].sort((a, b) => b.totalGoals - a.totalGoals)[0];
  
  const cr7BestDay = [...parsedData].sort((a, b) => b.cr7Goals - a.cr7Goals)[0];
  const cr7BestMonth = [...monthsData].sort((a, b) => b.cr7TotalGoals - a.cr7TotalGoals)[0];

  const stats = [
    {
      label: "En Çok Gol Atılan Gün",
      messiValue: messiBestDay.dateStr,
      messiSub: `${messiBestDay.goals} Gol`,
      cr7Value: cr7BestDay.dateStr,
      cr7Sub: `${cr7BestDay.cr7Goals} Gol`,
    },
    {
      label: "En Bereketli Ay",
      messiValue: messiBestMonth.name.toUpperCase(),
      messiSub: `${messiBestMonth.totalGoals} Gol`,
      cr7Value: cr7BestMonth.name.toUpperCase(),
      cr7Sub: `${cr7BestMonth.cr7TotalGoals} Gol`,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col gap-2">
          <p className="text-[10px] uppercase font-bold text-neutral-500 mb-2 border-b border-white/10 pb-2">{stat.label}</p>
          <div className="flex gap-4">
            <div className="flex-1 border-l-2 border-yellow-400 pl-4">
              <p className="text-[9px] uppercase font-bold text-yellow-400 mb-1">Messi</p>
              <p className="text-xl font-black uppercase tracking-tighter">{stat.messiValue}</p>
              <p className="text-xs italic mt-1 text-white opacity-60 font-bold">{stat.messiSub}</p>
            </div>
            <div className="flex-1 border-l-2 border-red-500 pl-4">
              <p className="text-[9px] uppercase font-bold text-red-500 mb-1">C. Ronaldo</p>
              <p className="text-xl font-black uppercase tracking-tighter">{stat.cr7Value}</p>
              <p className="text-xs italic mt-1 text-white opacity-60 font-bold">{stat.cr7Sub}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
