import {gql} from 'apollo-server';

const productsListSchema = gql`
  type Products {
    author: Author
    categories: [String!]
    items: [Product]
  }
`;

export {productsListSchema};
