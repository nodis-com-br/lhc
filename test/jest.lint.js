const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '../src'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*.+(js|ts|tsx)'],
};
