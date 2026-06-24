import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('cr7_new.html', 'utf-8');
const $ = cheerio.load(html);

const divs = $('div');
const classCounts = new Map();

divs.each((i, el) => {
  const className = $(el).attr('class');
  if (className) {
    classCounts.set(className, (classCounts.get(className) || 0) + 1);
  }
});

const sorted = [...classCounts.entries()].sort((a, b) => b[1] - a[1]);
console.log(sorted.slice(0, 20));
