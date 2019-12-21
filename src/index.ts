import * as fs from 'fs';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import { codegen } from '@graphql-codegen/core';
import { printSchema, parse } from 'graphql';
import * as path from 'path';

import { getSchemas } from './getSchemas';

(async () => {
  try {
    const schemas = await getSchemas();

    for (let i = 0; i < schemas.length; i++) {
      const outputFile = `schemas/${schemas[i].outputFileName}.ts`;
      const config = {
        filename: outputFile,
        schema: parse(printSchema(schemas[i].graphQLSchema)),
        plugins: [
          {
            typescript: {},
          },
        ],
        pluginMap: {
          typescript: typescriptPlugin,
        },
        documents: [],
        config: {},
      };

      const output = await codegen(config);

      fs.writeFile(path.join(__dirname, '../', outputFile), output, err => {
        if (err) {
          console.log(`Failed to save ${outputFile}. Error: ${err.message}`);
        } else {
          console.log(`${outputFile} generated!`);
        }
      });
    }
  } catch (e) {
    console.log(e);
    console.log('Build failed.');
  }
})();
