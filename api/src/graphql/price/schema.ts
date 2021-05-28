import {gql} from 'apollo-server';

const priceSchema = gql`
  type Price {
    currency: String
    amount: String
    decimals: String
    formated: String
    symbol: String
  }
`;

export {priceSchema};
