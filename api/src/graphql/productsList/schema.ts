import {gql} from 'apollo-server';

const productsListSchema = gql`
  type Author {
    name: String!
    lastname: String!
  }

  type Price {
    currency: String!
    amount: Int!
    decimals: Int!
  }

  type State {
    id: String!
    name: String!
  }

  type Item {
    id: String!
    title: String!
    sold: Int!
    price: Price
    state: State
    picture: String!
    condition: String!
    description: String!
    free_shipping: Boolean!
  }

  type Session {
    author: Author
    categories: [String!]
    items: [Item]
  }

  type Query {
    productsList(search: String): Session!
  }
`;

export {productsListSchema};
