import {gql} from 'apollo-server';
import {testClient} from '../../helpers/testClient';

describe('group resolvers', () => {
  const {query} = testClient();

  test('lorem', async () => {
    const {data} = await query({
      query: gql`
        query {
          productsList
        }
      `,
    });

    expect(data.productsList).toBe('Products list data');
    // expect(errors?.[0].message).toBe('Unauthorized access')
    // expect(errors?.[0].extensions?.code).toBe('UNAUTHENTICATED')
  });

  test('teste ignored', async () => {
    const {errors} = await query({
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
