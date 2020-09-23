import * as fs from 'fs';
import { generatePackage } from '../generatePackage';

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
