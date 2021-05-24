const {jest: jestConfig} = require('kcd-scripts/config');

module.exports = Object.assign(jestConfig, {
  // globalSetup: '<rootDir>/src/setupJest',
  roots: ['<rootDir>/src/'],
  modulePaths: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules', 'src'],

  transform: {
    ...jestConfig.transform,
    '\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },

  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
});
