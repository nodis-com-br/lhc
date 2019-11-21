import { GraphQLSchema } from 'graphql';

export interface Schema {
  graphQLSchema: GraphQLSchema;
  outputFileName: string;
};
