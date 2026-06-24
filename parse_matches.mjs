import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('cr7_new.html', 'utf-8');
const $ = cheerio.load(html);

// Looking at the output, the container is probably "mb-3 text-sm text-slate-200 relative lg:flex lg:flex-wrap"
// or anything that contains dates.
const matchDivs = $('.mb-3.text-sm.text-slate-200.relative.lg\\:flex.lg\\:flex-wrap');

const data = [];
matchDivs.each((i, el) => {
  const text = $(el).text();
  // Usually the date is formatted like "28 May 2023" or something.
  // And goals are probably marked with some icon or text. Let's just find the text of each match div.
  if (i < 5) {
    console.log(`\n--- Match ${i} ---`);
    console.log(text.replace(/\s+/g, ' '));
  }
});

