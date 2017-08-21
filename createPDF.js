const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com', { waitUntil: 'networkidle' });
  await page.pdf({ path: 'google.pdf', format: 'A4' });

  browser.close();
})();