import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('cr7_new.html', 'utf-8');
const $ = cheerio.load(html);

const matchDivs = $('.mb-3.text-sm.text-slate-200.relative.lg\\:flex.lg\\:flex-wrap');

matchDivs.each((i, el) => {
  if (i < 5) {
    console.log(`\n--- Match ${i} ---`);
    const dateDiv = $(el).find('div').first();
    console.log("Date text:", dateDiv.text());
    
    // Let's find all flex flex-1 texts inside
    $(el).find('.flex.flex-1').each((j, cel) => {
      console.log(`Cell ${j}:`, $(cel).text().trim());
    });
  }
});
