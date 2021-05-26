import {gql} from 'apollo-server';

const productDetailSchema = gql`
  type ProductDetails {
    author: Author
    item: Product
  }
`;

export {productDetailSchema};
