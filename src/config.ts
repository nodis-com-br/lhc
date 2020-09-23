import * as dotenv from 'dotenv';
import { camelCase } from 'change-case';

dotenv.config();

export const schemaContexts = process.env.SCHEMA_CONTEXTS.split(',');
export const destinationFileNames = schemaContexts.map(ctx => camelCase(ctx));
