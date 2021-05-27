import {ResponseListProducts} from 'models/products';
import {gql} from '@apollo/client';
import {client} from 'configs/apollo';

interface ProductsHook {
  productsList: ResponseListProducts;
  errors?: unknown;
}

const GET_PRODUCTS = gql`
  query ProductsList($search: String) {
    productsList(search: $search) {
      categories
      items {
        id
        title
        price {
          currency
          amount
          decimals
          formated
        }
        state {
          name
        }
        picture
        condition
        free_shipping
      }
    }
  }
`;

const queryProducts = async (search?: string) => {
  const {
    data: {productsList},
    errors,
    loading,
  } = await client.query<ProductsHook>({
    query: GET_PRODUCTS,
    variables: {search},
  });
  return {data: productsList, errors, loading};
};

export {queryProducts};
