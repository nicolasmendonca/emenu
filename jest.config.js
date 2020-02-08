module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!src/tests/**/*.{js,jsx}', // exclude js files used for utils/mocks/stubs
    '!src/*.js', // exclude base CRA files
    '!src/redux/createStore.js',
  ],
};
