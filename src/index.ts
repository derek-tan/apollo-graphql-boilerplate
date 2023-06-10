import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

const typeFiles = loadFilesSync('src/schema/types/**/*.graphql');
const typeDefs = mergeTypeDefs(typeFiles)

const resolverFiles = loadFilesSync('src/schema/resolvers/**/*.resolvers.*');
const resolvers = mergeResolvers(resolverFiles)

// The ApolloServer constructor requires two parameters: 
// schema definitions and resolvers
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
