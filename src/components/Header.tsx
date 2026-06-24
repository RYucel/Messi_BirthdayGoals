import { totalGoals } from "../data";

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end px-6 sm:px-12 py-6 border-b border-white/20 bg-gradient-to-b from-neutral-900 to-black gap-4 sm:gap-0 max-w-7xl w-full mx-auto border-x">
      <div>
        <h2 className="text-[10px] tracking-[0.3em] font-bold text-yellow-400 uppercase mb-1">The GOAT Statistics</h2>
        <h1 className="text-4xl sm:text-6xl font-black italic tracking-tighter uppercase leading-none">
          Messi <br/> <span className="text-transparent border-t-2 border-white pt-1 block mt-1" style={{ WebkitTextStroke: "1px white" }}>Gol Takvimi</span>
        </h1>
      </div>
      <div className="text-left sm:text-right">
        <div className="text-4xl sm:text-5xl font-black text-yellow-400">{totalGoals}</div>
        <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 mt-1">Kariyer Golü</div>
      </div>
    </header>
  );
}
