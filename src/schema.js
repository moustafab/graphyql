import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL index language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => 'Hello world!',
};

export {
  schema,
  root,
};
