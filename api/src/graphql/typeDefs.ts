import {productsListSchema} from './productsList/schema';
import {productDetailSchema} from './productDetail/schema';
import {productSchema} from './product/schema';
import {authorSchema} from './author/schema';
import {priceSchema} from './price/schema';
import {stateSchema} from './state/schema';
import {gql} from 'apollo-server-express';

const querysSchema = gql`
  type Query {
    productsList(search: String): Products!
    productDetail(id: String): ProductDetails!
  }
`;

const typeDefs = [
  querysSchema,
  productsListSchema,
  productDetailSchema,
  productSchema,
  authorSchema,
  priceSchema,
  stateSchema,
];

export {typeDefs};
