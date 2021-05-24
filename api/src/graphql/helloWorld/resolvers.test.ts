import { gql } from 'apollo-server';
import { testClient } from '../../helpers/testClient';

describe('group resolvers', () => {
  const { query } = testClient();

  test('lorem', async () => {
    const { data } = await query({
      query: gql`
        query {
          helloWorld
        }
      `,
    });

    expect(data.helloWorld).toBe('Hello World');
  });

  test('lorem', async () => {
    const { errors } = await query({
      query: gql`
        query {
          missingQuery
        }
      `,
    });

    expect(errors?.[0].message).toBe(
      'Cannot query field "missingQuery" on type "Query".',
    );
    expect(errors?.[0].extensions?.code).toBe('GRAPHQL_VALIDATION_FAILED');
  });
});
