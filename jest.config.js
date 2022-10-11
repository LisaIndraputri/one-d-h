
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**"
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
  moduleDirectories: [
    'node_modules',
    'util',
    __dirname,
  ],
  roots: [
    './src/__tests__',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/__tests__/__mocks__/styleMock.js',
  },
  testMatch: [
    '**/?(*.)+(spec).js',
  ],
  transform: { "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest" },
  verbose: true,
  setupFiles: [
    './setupTests.js',
  ],
};
