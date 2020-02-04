import * as path from 'path';
import * as fs from 'fs';
import { rollup, InputOptions, OutputOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import { paramCase } from 'change-case';

import pkg from '../package.json';

const generatePackage = async schemaName => {
  const inputOptions: InputOptions = {
    input: path.join(__dirname, '../', 'schemas/', `${schemaName}.ts`),
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
    ],
  };
  const outputCjsOptions: OutputOptions = {
    file: path.join(__dirname, '../dist/', `${schemaName}/index.js`),
    format: 'cjs',
  };
  const outputEsOptions: OutputOptions = {
    file: path.join(__dirname, '../dist/', `${schemaName}/index.es.js`),
    format: 'es',
    esModule: true,
  };

  // create a bundle
  const bundle = await rollup(inputOptions);

  // generate code
  await bundle.generate(outputEsOptions);
  await bundle.generate(outputCjsOptions);

  // write the bundle to disk
  await bundle.write(outputEsOptions);
  await bundle.write(outputCjsOptions);

  const packageJson = {
    name: `${pkg.name}-${paramCase(schemaName)}`,
    version: pkg.version,
    repository: pkg.repository,
    author: pkg.author,
    contributors: pkg.contributors,
    main: 'index.js',
    module: 'index.es.js',
    types: `${schemaName}.d.ts`,
  };

  fs.writeFile(
    path.join(__dirname, '../dist/', `${schemaName}/package.json`),
    JSON.stringify(packageJson),
    err => {
      if (err) {
        console.log(
          `Failed to save package.json from ${schemaName}. Error: ${err.message}`,
        );
      } else {
        console.log(`Package.json from ${schemaName} generated!`);
      }
    },
  );
};

export { generatePackage };
