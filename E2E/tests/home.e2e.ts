import { screenshot } from "../utils/screenshot";
import { BASE_URL } from "../config/config";
import type { Page } from 'puppeteer'

it('page should have footer', async () => {
    const page: Page = global.page
    await page.goto(`${BASE_URL}`);

    await screenshot({ name: 'home page', });
    const home = await page.evaluate(() => document.getElementById('home'));
    expect(home).not.toBeNull();
    await page.click('#home');
    await page.waitForSelector('#home_title', {
        timeout: 2000,
    });
    const title = await page.evaluate(() => document.getElementById('home_title'));
    expect(title).not.toBeNull();
    await screenshot({ name: 'page should title', });
});
