module.exports = {
  testURL: 'http://localhost:8000',
  testEnvironment: './config/PuppeteerEnvironment',
  verbose: false,
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: false,
    localStorage: null,
  },
  moduleNameMapper: {
    '^@\/(.*)$': '<rootDir>/src/$1',
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './report',
        filename: 'report.html',
        hideIcon: true,
        expand: true,
        logoImgPath: false,
        enableMergeData: false,
        dataMergeLevel: 4,
        openReport: true,
        includeFailureMsg: true,
      },
    ],
  ],
};
