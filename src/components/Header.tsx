import { totalGoals, cr7TotalGoals } from "../data";

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end px-6 sm:px-12 py-6 border-b border-white/20 bg-gradient-to-b from-neutral-900 to-black gap-4 sm:gap-0 max-w-7xl w-full mx-auto border-x">
      <div>
        <h2 className="text-[10px] tracking-[0.3em] font-bold text-yellow-400 uppercase mb-1">The GOAT Statistics</h2>
        <h1 className="text-4xl sm:text-6xl font-black italic tracking-tighter uppercase leading-none">
          Messi <span className="text-white/20">vs</span> CR7 <br/> <span className="text-transparent border-t-2 border-white pt-1 block mt-1" style={{ WebkitTextStroke: "1px white" }}>Gol Takvimi</span>
        </h1>
      </div>
      <div className="flex gap-8 text-left sm:text-right">
        <div>
          <div className="text-[10px] font-bold text-yellow-400 tracking-widest uppercase mb-1">Messi</div>
          <div className="text-4xl sm:text-5xl font-black text-white">{totalGoals}</div>
        </div>
        <div className="w-px bg-white/20"></div>
        <div>
          <div className="text-[10px] font-bold text-red-500 tracking-widest uppercase mb-1">C. Ronaldo</div>
          <div className="text-4xl sm:text-5xl font-black text-white">{cr7TotalGoals}</div>
        </div>
      </div>
    </header>
  );
}
