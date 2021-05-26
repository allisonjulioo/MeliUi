import {Product} from 'models/product';
import {gql} from '@apollo/client';
import {client} from 'configs/apollo';

interface ProductsHook {
  productDetail: {
    author: {id: string};
    item: Product;
  };
  errors?: unknown;
}

const GET_PRODUCT_DETAIL = gql`
  query ProductDetail($id: String) {
    productDetail(id: $id) {
      author {
        name
        lastname
      }
      item {
        id
        title
        price {
          currency
          amount
          decimals
        }
        state {
          id
          name
        }
        picture
        condition
        sold_quantity
        description
      }
    }
  }
`;

const queryProductDetail = async (id: string) => {
  const {
    data: {productDetail},
    errors,
  } = await client.query<ProductsHook>({
    query: GET_PRODUCT_DETAIL,
    variables: {id},
  });

  return {data: productDetail, errors};
};

export {queryProductDetail};
