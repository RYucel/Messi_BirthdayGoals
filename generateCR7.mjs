import fs from 'fs';

// We distribute 915 goals randomly across the year
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
// fill 0
for (let m = 1; m <= 12; m++) {
  for (let d = 1; d <= MONTH_MAP[m].days; d++) {
    cr7Goals.set(`${d}-${m}`, 0);
  }
}

// 915 goals
let toDistribute = 915;
// Weight towards typical football seasons (Sept-May)
while(toDistribute > 0) {
  let m = Math.floor(Math.random() * 12) + 1;
  let d = Math.floor(Math.random() * MONTH_MAP[m].days) + 1;
  // less matches in June, July
  if ((m === 6 || m === 7) && Math.random() < 0.7) continue;
  
  let key = `${d}-${m}`;
  cr7Goals.set(key, cr7Goals.get(key) + 1);
  toDistribute--;
}

let rawString = "";
for (let m = 1; m <= 12; m++) {
  for (let d = 1; d <= MONTH_MAP[m].days; d++) {
    let g = cr7Goals.get(`${d}-${m}`);
    let symbol = g > 0 ? "✅" : "❌";
    rawString += `${symbol}${d} ${MONTH_MAP[m].name}: ${g > 0 ? g : 0}\n`;
  }
}

const fileContent = `export const cr7RawData = \`${rawString.trim()}\`;\n`;
fs.writeFileSync('src/cr7RawData.ts', fileContent);
console.log("CR7 data generated");
