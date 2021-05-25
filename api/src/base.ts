import {Config} from 'apollo-server';

import {resolvers} from './graphql/resolvers';
import {typeDefs} from './graphql/typeDefs';

const APOLLO_CONFIG: Config = {
  typeDefs,
  resolvers,
  context: async context => {
    return {
      ...context,
    };
  },
};

export {APOLLO_CONFIG};
