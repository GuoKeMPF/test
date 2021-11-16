import { screenshot } from "../utils/screenshot";
import { BASE_URL } from "../config/config";
import type { Page } from 'puppeteer'

it('page should have footer', async () => {
    const page: Page = global.page
    await page.goto(`${BASE_URL}`);
    await page.waitForSelector('footer', {
        timeout: 2000,
    });
    const haveFooter = await page.evaluate(() => document.getElementsByTagName('footer').length > 0);
    expect(haveFooter).toBeTruthy();
    await screenshot({ name: 'page should have footer', });
});
