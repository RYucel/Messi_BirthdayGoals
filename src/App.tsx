import { Header } from "./components/Header";
import { BirthdayFinder } from "./components/BirthdayFinder";
import { StatsOverview } from "./components/StatsOverview";
import { Heatmap } from "./components/Heatmap";
import { MonthlyChart } from "./components/MonthlyChart";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-x border-white/10">
        
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10">
          <BirthdayFinder />
        </div>

        <div className="lg:col-span-8 flex flex-col">
          <Heatmap />
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
            <div className="p-6 border-b md:border-b-0 md:border-r border-white/10 bg-black">
              <StatsOverview />
            </div>
            <div className="p-6 bg-neutral-950">
              <MonthlyChart />
            </div>
          </div>
        </div>

      </main>

      <footer className="h-12 bg-yellow-400 text-black flex items-center overflow-hidden border-t border-white/10">
        <div className="whitespace-nowrap flex space-x-12 px-4 font-black uppercase text-sm tracking-tighter">
          <span>GOAT DATA INSIGHTS • EYL 19: 10 GOALS 🔝 • MAY 02: 10 GOALS 🔝 • OCA 06: 9 GOALS • MAR 17: 9 GOALS • EKİ 19: 9 GOALS • GOAT DATA INSIGHTS • EYL 19: 10 GOALS 🔝 • MAY 02: 10 GOALS 🔝 • OCA 06: 9 GOALS • MAR 17: 9 GOALS • EKİ 19: 9 GOALS</span>
        </div>
      </footer>
    </div>
  );
}
