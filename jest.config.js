module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {},
  testMatch: [
    '<rootDir>/test/**/*.(spec|test).(ts|js)?(x)',
    '<rootDir>/src/**/*.(spec|test).(ts|js)?(x)'
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts'
  ]
}
