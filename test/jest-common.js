const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  testPathIgnorePatterns: [`node_modules`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
