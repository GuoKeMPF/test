module.exports = {
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/layout/**',
    '**/src/pages/**',
    '**/src/models/**',
    '**/src/**.**',
  ], 
  coverageReporters: ["clover", "json", "lcov", "text"],
  testResultsProcessor:'./testResult/index.js',
  moduleNameMapper: {
    '^@\/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
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
