import * as dotenv from 'dotenv';

dotenv.config();

export const schemaContexts = process.env.SCHEMA_CONTEXTS.split(',');
export const destinationFileNames = process.env.DESTINATION_FILE_NAMES.split(
  ',',
);
