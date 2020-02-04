import * as path from 'path';
import * as fs from 'fs';
import { generatePackage } from '../generatePackage';

import pkg from '../../package.json';

const writeFile = jest.spyOn(fs, 'writeFile');

jest.mock('fs', () => {
  return {
    writeFile,
  };
});

// TODO: Terminar teste
describe('generatePackage', () => {
  test('should generate the correct package.json', () => {
    writeFile.mockImplementation(() => {});

    generatePackage('');

    // fs.writeFile.mockReset();
  });
});
