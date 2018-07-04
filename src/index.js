
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema, root } from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);

export default app;
