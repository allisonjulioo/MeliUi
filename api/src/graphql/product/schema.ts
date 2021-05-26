import {gql} from 'apollo-server';

const productSchema = gql`
  type Product {
    id: String!
    title: String!
    sold: Int!
    price: Price
    state: State
    picture: String!
    condition: String!
    description: String!
    sold_quantity: Int!
    free_shipping: Boolean!
  }
`;

export {productSchema};
