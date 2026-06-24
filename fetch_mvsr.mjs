import fs from 'fs';

async function scrape() {
  try {
    const response = await fetch('https://www.messivsronaldo.app/match-histories/ronaldo-match-history/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    console.log("Status:", response.status);
    const text = await response.text();
    fs.writeFileSync('cr7_new.html', text);
    console.log("Length:", text.length);
  } catch (err) {
    console.error(err);
  }
}
scrape();
