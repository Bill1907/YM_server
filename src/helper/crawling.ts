import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

export default async (url: string) => {
  try {
    console.log(url);
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-web-security']
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const homeBtn = await page.$('.link_navbar.home');
    const html = await page.evaluate(body => body?.innerHTML, homeBtn);
    console.log(html);
    const $ = cheerio.load(html);
    console.log($.html());
  } catch (err) {
    let message = 'UnKnown Error';
    if (err instanceof Error) message = err.message;
    return message;
  }
};
