import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('cr7_new.html', 'utf-8');
const $ = cheerio.load(html);

// We need to find rows that have goals and dates
// The site usually has tables for match histories
const rows = $('tr');
let count = 0;
let goalsSum = 0;
const goalsByDate = new Map(); // key: "d-m", value: goals

rows.each((i, row) => {
  const cells = $(row).find('td');
  // It depends on the structure. Let's print out the first 5 rows' text to understand.
  if (count < 5) {
    const texts = [];
    cells.each((j, cell) => {
      texts.push($(cell).text().trim());
    });
    if (texts.length > 0) {
      console.log(texts);
      count++;
    }
  }
});
