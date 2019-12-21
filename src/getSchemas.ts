import { buildSchema } from 'graphql';
import axios from 'axios';

import { schemaContexts, destinationFileNames } from './config';
import { Schema } from './models/Schema';

const fetchSchema = async (context: string) => {
  const { data } = await axios.get<string>(
    `https://api.qa.nodis.com.br/${context}/v1/graphql-schema`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    },
  );

  return data;
};

export const getSchemas = async () => {
  const schemas: Schema[] = [];

  for (let i = 0; i < schemaContexts.length; i++) {
    const schema = await fetchSchema(schemaContexts[i]);
    schemas.push({
      graphQLSchema: buildSchema(schema),
      outputFileName: destinationFileNames[i],
    });
  }

  return schemas;
};
