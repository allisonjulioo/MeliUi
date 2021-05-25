import {gql} from 'apollo-server';

const productsListSchema = gql`
  type Query {
    productsList(search: String): String
  }
`;

export {productsListSchema};
// type Session {
//   accessToken: String!
//   user: User!
//   receiver: Receiver!
//   purposes: [String]!
// }
