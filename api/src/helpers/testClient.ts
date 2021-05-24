import {
  createTestClient,
  ApolloServerTestClient,
} from 'apollo-server-testing';
import { ApolloServer, Config } from 'apollo-server';

import { APOLLO_CONFIG } from '../base';

const testClient = (
  ctxArg = {},
  overrideConfig?: Config,
): ApolloServerTestClient => {
  const config: Config = overrideConfig
    ? { ...APOLLO_CONFIG, ...overrideConfig }
    : APOLLO_CONFIG;

  const baseCtxArg = ctxArg;
  let currentCtxArg = baseCtxArg;

  const server = new ApolloServer({
    ...config,
    context: () =>
      typeof config.context === 'function' ? config.context(currentCtxArg) : {},
  });

  const { query, mutate } = createTestClient(server);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrap = (fn: any) => (args: any, _ctxArg?: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    currentCtxArg = _ctxArg === null ? baseCtxArg : _ctxArg;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return fn(args);
  };

  return { query: wrap(query), mutate: wrap(mutate) };
};

export { testClient };