const fs = require('fs');
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://hamzanews.com/roy/test.php');
  const title = await page.title();
  await browser.close();

  const outputHtml = `
    <html>
      <head><title>Puppeteer Output</title></head>
      <body>
        <h1>Title of the page: ${title}</h1>
      </body>
    </html>
  `;

  fs.writeFileSync('output/index.html', outputHtml);
}

run();