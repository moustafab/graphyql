import express from 'express';
import graphqlHTTP from 'express-graphql';
import env from './environment';
import { schema, root } from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: env.isDevelopment,
}));

app.get('/health', (req, res) => res.send({ status: 'healthy' }));

app.listen(4000);

export default app;
