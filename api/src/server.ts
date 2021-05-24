import { ApolloServer } from 'apollo-server'; 
import { APOLLO_CONFIG } from './base';

const server = new ApolloServer(APOLLO_CONFIG);

server
  .listen()
  .then(({ url }: { url: string }): void => {
    console.info(`🚀 Server ready at ${url}`);
  })
  .catch((e: unknown) => {
    console.error('Something went wrong while starting server', e);
  });