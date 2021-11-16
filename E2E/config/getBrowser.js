/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const findChrome = require('carlo/lib/find_chrome');

const launchSetting = {
  defaultViewport: {
    width: 1920,
    height: 1080,
  },
  headless: false,
  args: [
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--no-first-run',
    '--no-zygote',
    '--no-sandbox',
  ],
}



const getBrowser = async () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch(launchSetting);
    return browser;
  } catch (error) {
    // console.log(error)
    console.log('🧲 no find puppeteer');
  }

  try {
    // eslint-disable-next-line import/no-unresolved
    const puppeteer = require('puppeteer-core');
    const findChromePath = await findChrome({});
    const { executablePath } = findChromePath;
    const browser = await puppeteer.launch(launchSetting);
    return browser;
  } catch (error) {
    console.log('🧲 no puppeteer-core');
  }
  throw new Error('no find puppeteer');
};

module.exports = getBrowser;
