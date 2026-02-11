// Automated accessibility check using axe-core and Puppeteer
const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('axe-core/puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('file://' + __dirname + '/index.html');

  const results = await new AxePuppeteer(page).analyze();
  require('fs').writeFileSync('axe-accessibility-report.json', JSON.stringify(results, null, 2));

  await browser.close();
  console.log('Accessibility report generated: axe-accessibility-report.json');
})();
