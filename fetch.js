const fs = require('fs');

async function scrape() {
  try {
    const response = await fetch('https://fbref.com/en/players/dea698d9/goallogs/all_comps/Cristiano-Ronaldo-Goal-Log', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    console.log("Status:", response.status);
    const text = await response.text();
    console.log("Length:", text.length);
    fs.writeFileSync('cr7.html', text);
  } catch (err) {
    console.error(err);
  }
}
scrape();
