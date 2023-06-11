import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { applyMiddleware } from 'graphql-middleware';
import schema from './schema/index';
import { getAuthenticatedUser } from './lib/auth';
import permissions from './authorization';

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    schema: applyMiddleware(
      schema, 
      permissions,
    ),
    context: ({ req }) => {
      const user = getAuthenticatedUser(req);
      return { user };
    },
  });
  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log('🚀  Server ready at: localhost:4000')
  });
}

startServer();
