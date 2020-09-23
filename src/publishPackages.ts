import { exec } from 'child_process';
import { paramCase } from 'change-case';

import { destinationFileNames } from './config';
import pkg from '../package.json';

destinationFileNames.forEach(destination => {
  exec(
    `yarn publish dist/${destination} --access restricted --new-version ${pkg.version}`,
    (error, _, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`@nodis/lhc-${paramCase(destination)} published!`);
    },
  );
});
