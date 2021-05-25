import {createTestClient, ApolloServerTestClient} from 'apollo-server-testing';
import {ApolloServer, Config} from 'apollo-server';

import {APOLLO_CONFIG} from '../base';

const testClient = (
  ctxArg = {},
  overrideConfig?: Config,
): ApolloServerTestClient => {
  const config: Config = overrideConfig
    ? {...APOLLO_CONFIG, ...overrideConfig}
    : APOLLO_CONFIG;

  const baseCtxArg = ctxArg;
  let currentCtxArg = baseCtxArg;

  const server = new ApolloServer({
    ...config,
    context: () =>
      typeof config.context === 'function' ? config.context(currentCtxArg) : {},
  });

  const {query, mutate} = createTestClient(server);

  const wrap = (fn: any) => (args: any, ctxArg?: any) => {
    currentCtxArg = ctxArg === null ? baseCtxArg : ctxArg;

    return fn(args);
  };

  return {query: wrap(query), mutate: wrap(mutate)};
};

export {testClient};
