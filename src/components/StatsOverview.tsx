import { totalGoals, parsedData, monthsData } from "../data";

export function StatsOverview() {
  const bestDay = [...parsedData].sort((a, b) => b.goals - a.goals)[0];
  const bestMonth = [...monthsData].sort((a, b) => b.totalGoals - a.totalGoals)[0];

  const stats = [
    {
      label: "Toplam Kariyer Golü",
      value: totalGoals.toString(),
      subValue: "Kariyer Boyunca",
      border: "border-yellow-400"
    },
    {
      label: "En Çok Gol Atılan Gün",
      value: bestDay.dateStr,
      subValue: `${bestDay.goals} Gol`,
      border: "border-white/20"
    },
    {
      label: "En Bereketli Ay",
      value: bestMonth.name.toUpperCase(),
      subValue: `${bestMonth.totalGoals} Gol`,
      border: "border-white/20"
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`border-l-2 ${stat.border} pl-4`}
        >
          <p className="text-[10px] uppercase font-bold text-neutral-500 mb-1">{stat.label}</p>
          <p className="text-2xl font-black uppercase tracking-tighter">{stat.value}</p>
          <p className="text-xs italic mt-1 text-yellow-400 font-bold">{stat.subValue}</p>
        </div>
      ))}
    </div>
  );
}
