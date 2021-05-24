import { Config } from 'apollo-server';

import { resolvers } from './graphql/resolvers'; 

const APOLLO_CONFIG: Config = {
 
  resolvers,
  context: async context => {
    return { 
      ...context,
    };
  },
};

export { APOLLO_CONFIG };