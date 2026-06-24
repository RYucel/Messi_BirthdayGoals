import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('cr7_new.html', 'utf-8');
const $ = cheerio.load(html);

console.log("Title:", $('title').text());
console.log("Body length:", $('body').text().length);

// Let's print out text that contains '2024'
const bodyText = $('body').text();
const lines = bodyText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
let count = 0;
for (const line of lines) {
  if (line.includes('2024') || line.includes('2023')) {
    console.log(line.substring(0, 100));
    count++;
    if (count > 20) break;
  }
}
