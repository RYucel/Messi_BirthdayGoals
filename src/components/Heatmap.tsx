import { useMemo } from "react";
import { parsedData, monthsData } from "../data";
import { cn } from "../lib/utils";

export function Heatmap() {
  const getCellColor = (goals: number) => {
    if (goals === 0) return "bg-neutral-800";
    if (goals <= 3) return "bg-yellow-900";
    if (goals <= 6) return "bg-yellow-600";
    return "bg-yellow-400"; // 7+ goals
  };

  const gridCells = useMemo(() => {
    const cells = [];
    for (let day = 1; day <= 31; day++) {
      for (let monthId = 1; monthId <= 12; monthId++) {
        const cellData = parsedData.find((d) => d.day === day && d.monthId === monthId);
        
        cells.push({
          key: `${monthId}-${day}`,
          monthId,
          day,
          goals: cellData?.goals ?? 0,
          isValidDate: !!cellData,
        });
      }
    }
    return cells;
  }, []);

  return (
    <div className="p-6 sm:p-8 bg-black flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-6 gap-4">
          <h3 className="text-lg font-bold italic uppercase tracking-tight">Yıllık Gol Yoğunluğu</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-[9px] uppercase font-bold"><span className="w-2 h-2 bg-neutral-800 rounded-full"></span><span>0 Gol</span></div>
            <div className="flex items-center space-x-2 text-[9px] uppercase font-bold"><span className="w-2 h-2 bg-yellow-900 rounded-full"></span><span>1-3 Gol</span></div>
            <div className="flex items-center space-x-2 text-[9px] uppercase font-bold"><span className="w-2 h-2 bg-yellow-600 rounded-full"></span><span>4-6 Gol</span></div>
            <div className="flex items-center space-x-2 text-[9px] uppercase font-bold"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span><span>7+ Gol</span></div>
          </div>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[600px]">
            {/* Month Headers */}
            <div className="grid grid-cols-[auto_repeat(12,1fr)] gap-[2px] mb-2">
              <div className="w-6"></div>
              {monthsData.map((m) => (
                <div key={m.id} className="text-center text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                  {m.name.slice(0, 3)}
                </div>
              ))}
            </div>

            {/* Grid Body */}
            <div className="space-y-[2px]">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <div key={day} className="grid grid-cols-[auto_repeat(12,1fr)] gap-[2px]">
                  <div className="w-6 flex items-center justify-end pr-2 text-[9px] text-neutral-500 font-bold">
                    {day.toString().padStart(2, '0')}
                  </div>
                  
                  {monthsData.map((m) => {
                    const cell = gridCells.find((c) => c.day === day && c.monthId === m.id);
                    if (!cell || !cell.isValidDate) {
                       return <div key={m.id} className="h-3 w-full bg-transparent" />;
                    }
                    return (
                      <div
                        key={m.id}
                        title={`${day} ${m.name}: ${cell.goals} gol`}
                        className={cn(
                          "h-3 w-full transition-colors duration-200",
                          getCellColor(cell.goals)
                        )}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
