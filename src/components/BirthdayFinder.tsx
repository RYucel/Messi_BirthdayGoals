import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { monthsData, getGoalsByDate } from "../data";
import { cn } from "../lib/utils";

export function BirthdayFinder() {
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const daysInMonth = useMemo(() => {
    const month = monthsData.find((m) => m.id === selectedMonth);
    return month ? month.days.length : 31;
  }, [selectedMonth]);

  const currentData = useMemo(() => {
    return getGoalsByDate(selectedMonth, selectedDay);
  }, [selectedMonth, selectedDay]);

  const goals = currentData ? currentData.goals : 0;

  useEffect(() => {
    if (goals > 0) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.9 },
        colors: ["#facc15", "#ffffff", "#000000"],
      });
    }
  }, [selectedMonth, selectedDay, goals]);

  return (
    <div className="p-6 flex flex-col bg-neutral-950 h-full">
      <div className="space-y-5">
        <section>
          <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block italic font-bold">Step 01: Ay Seçimi</label>
          <div className="grid grid-cols-4 gap-1">
            {monthsData.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedMonth(m.id);
                  setSelectedDay(1);
                }}
                className={cn(
                  "border py-1.5 text-[10px] font-bold transition-colors uppercase",
                  selectedMonth === m.id
                    ? "border-yellow-400 bg-yellow-400 text-black"
                    : "border-white/20 text-white hover:bg-white hover:text-black"
                )}
              >
                {m.name.slice(0, 3)}
              </button>
            ))}
          </div>
        </section>

        <section>
          <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block italic font-bold">Step 02: Gün Seçimi</label>
          <div className="grid grid-cols-7 gap-1">
             {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
              <button
                key={d}
                onClick={() => {
                  setSelectedDay(d);
                }}
                className={cn(
                  "border py-1 text-[10px] font-bold transition-colors",
                  selectedDay === d
                    ? "border-yellow-400 bg-yellow-400 text-black"
                    : "border-white/20 text-white hover:bg-white hover:text-black"
                )}
              >
                {d.toString().padStart(2, '0')}
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-5 pt-5 border-t border-white/10">
        <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedMonth}-${selectedDay}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="p-5 bg-neutral-900 border border-white/5 rounded-none"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-1">Doğum Günü Sonucu</h3>
              {goals > 0 ? (
                <>
                  <p className="text-3xl sm:text-4xl font-black mb-1">{goals} GOAL{goals > 1 ? 'S' : ''}</p>
                  <p className="text-[9px] sm:text-[10px] opacity-60 leading-relaxed uppercase tracking-widest">
                    Messi, {selectedDay} {monthsData.find(m => m.id === selectedMonth)?.name} tarihinde toplam <strong className="text-white">{goals} gol</strong> attı.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-3xl sm:text-4xl font-black mb-1 text-neutral-600">0 GOALS</p>
                  <p className="text-[9px] sm:text-[10px] opacity-60 leading-relaxed uppercase tracking-widest">
                    Bu tarihte gol kaydedilmedi.
                  </p>
                </>
              )}
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
