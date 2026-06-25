import { motion } from "motion/react";
import { useMemo } from "react";
import { parsedData } from "../data";

export function NewsTicker() {
  const tickerString = useMemo(() => {
    // Top 5 combined goal days
    const topCombinedDays = [...parsedData]
      .sort((a, b) => (b.goals + b.cr7Goals) - (a.goals + a.cr7Goals))
      .slice(0, 5);

    // Top 5 Messi days
    const topMessiDays = [...parsedData]
      .sort((a, b) => b.goals - a.goals)
      .slice(0, 5);
      
    // Top 5 CR7 days
    const topCR7Days = [...parsedData]
      .sort((a, b) => b.cr7Goals - a.cr7Goals)
      .slice(0, 5);

    const items = [
      "GOAT KİM? MESSI VS CR7",
      ...topCombinedDays.map(d => `EN GOLLÜ GÜN (${d.dateStr.toUpperCase()}): ${d.goals + d.cr7Goals} GOALS 🔝`),
      "GOAT KİM? MESSI VS CR7",
      ...topMessiDays.map(d => `MESSI ${d.dateStr.toUpperCase()}: ${d.goals} GOALS`),
      "GOAT KİM? MESSI VS CR7",
      ...topCR7Days.map(d => `CR7 ${d.dateStr.toUpperCase()}: ${d.cr7Goals} GOALS`),
    ];

    return items.join(" • ") + " • ";
  }, []);

  return (
    <div className="bg-yellow-400 text-black py-2.5 overflow-hidden flex whitespace-nowrap border-y border-white/20 relative w-full">
      <motion.div
        className="flex items-center text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        <span>{tickerString}</span>
        <span>{tickerString}</span>
      </motion.div>
    </div>
  );
}
