/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const { execSync } = require('child_process');
const { join } = require('path');
const fs = require('fs');
const findChrome = require('carlo/lib/find_chrome');
const detectInstaller = require('detect-installer');

const installPuppeteer = () => {
  // find can use package manager
  const packages = detectInstaller(join(__dirname, '../'));
  // get installed package manager
  const packageName = packages.find(detectInstaller.hasPackageCommand) || 'npm';
  console.log(`🤖 will use ${packageName} install puppeteer`);
  const command = `${packageName} ${packageName.includes('yarn') ? 'add' : 'i'} puppeteer`;
  execSync(command, {
    stdio: 'inherit',
  });
};

const initPuppeteer = async () => {
  try {
    // eslint-disable-next-line import/no-unresolved
    const findChromePath = await findChrome({});
    const { executablePath } = findChromePath;
    console.log(`🧲 find you browser in ${executablePath}`);
    return;
  } catch (error) {
    console.log('🧲 no find chrome');
  }

  try {
    require.resolve('puppeteer');
  } catch (error) {
    // need install puppeteer
    await installPuppeteer();
  }
};

initPuppeteer();

const mkdirScreenshot = (projectPath) => {
  fs.mkdirSync(projectPath);
}

/**
 * init initMkdir for screenshot
 */
const initMkdir = () => {
  const p = join(__dirname, '../screenshot');
  fs.access(p, (err) => {
    if (err) {
      console.log('cant find directory /screenshot, it will be created automaticly')
      mkdirScreenshot(p);
    } else {
      console.log('screenshot will save to directory /screenshot')
    }
  })
}

initMkdir()






