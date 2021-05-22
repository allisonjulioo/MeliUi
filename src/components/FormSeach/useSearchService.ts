import {ResponseListProducts} from 'models/products';
import {gql} from '@apollo/client';
import {client} from 'configs/apollo';

interface ProductsHook {
  data: ResponseListProducts;
  errors?: unknown;
}

const GET_PRODUCTS = gql`
  query GetProducts($filter: String!) {
    author
    categories
    items
  }
`;

const queryProducts = async (filter?: string) => {
  const {data, errors} = await client.query<ProductsHook>({
    query: GET_PRODUCTS,
    variables: {filter},
  });
  return {data, errors};
};

export {queryProducts};
