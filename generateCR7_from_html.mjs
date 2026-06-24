import fs from 'fs';
import * as cheerio from 'cheerio';

const MONTH_MAP = {
  1: { name: "Oc", days: 31 },
  2: { name: "Ş", days: 29 },
  3: { name: "M", days: 31 },
  4: { name: "N", days: 30 },
  5: { name: "My", days: 31 },
  6: { name: "Hz", days: 30 },
  7: { name: "T", days: 31 },
  8: { name: "A", days: 31 },
  9: { name: "E", days: 30 },
  10: { name: "Ek", days: 31 },
  11: { name: "K", days: 30 },
  12: { name: "Ar", days: 31 },
};

const cr7Goals = new Map();
for (let m = 1; m <= 12; m++) {
  for (let d = 1; d <= MONTH_MAP[m].days; d++) {
    cr7Goals.set(`${d}-${m}`, 0);
  }
}

const html = fs.readFileSync('cr7_new.html', 'utf-8');
const $ = cheerio.load(html);

const matchDivs = $('.mb-3.text-sm.text-slate-200.relative.lg\\:flex.lg\\:flex-wrap');

matchDivs.each((i, el) => {
  const dateText = $(el).find('div').first().text().trim();
  const dateMatch = dateText.match(/^(\d{2})\/(\d{2})\/\d{4}/);
  
  if (dateMatch) {
    const day = parseInt(dateMatch[1], 10);
    const month = parseInt(dateMatch[2], 10);
    
    // Get goals
    const goalsCell = $(el).find('.flex.flex-1').eq(1);
    const goals = parseInt(goalsCell.text().trim(), 10) || 0;
    
    const key = `${day}-${month}`;
    if (cr7Goals.has(key)) {
      cr7Goals.set(key, cr7Goals.get(key) + goals);
    }
  }
});

let totalGoals = 0;
let rawString = "";
for (let m = 1; m <= 12; m++) {
  for (let d = 1; d <= MONTH_MAP[m].days; d++) {
    let g = cr7Goals.get(`${d}-${m}`);
    let symbol = g > 0 ? "✅" : "❌";
    rawString += `${symbol}${d} ${MONTH_MAP[m].name}: ${g > 0 ? g : 0}\n`;
    totalGoals += g;
  }
}

console.log("Total Goals parsed:", totalGoals);

const fileContent = `export const cr7RawData = \`${rawString.trim()}\`;\n`;
fs.writeFileSync('src/cr7RawData.ts', fileContent);
console.log("Generated src/cr7RawData.ts");
