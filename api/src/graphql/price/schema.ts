import {gql} from 'apollo-server';

const priceSchema = gql`
  type Price {
    currency: String!
    amount: Int!
    decimals: Int!
  }
`;

export {priceSchema};
