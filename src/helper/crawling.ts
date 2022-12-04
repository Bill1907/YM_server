import puppeteer from 'puppeteer';

export default async (url: string) => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: [`--window-size=1920,1080`],
      defaultViewport: {
        width: 1920,
        height: 1080
      }
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const body = await page.$('body');
    const html = await page.evaluate(body => body?.innerHTML, body);
    console.log(html);
  } catch (err) {
    let message = 'UnKnown Error';
    if (err instanceof Error) message = err.message;
    return message;
  }
};
