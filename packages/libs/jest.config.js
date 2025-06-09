
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // or "node" for non-DOM tests
  testMatch: ['**/__tests__/**/*.test.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@libs/(.*)$': '<rootDir>/packages/libs/src/$1', // adjust to match your aliases
  },
};
