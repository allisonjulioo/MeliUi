import {Product} from 'models/product';
import {gql} from '@apollo/client';
import {client} from 'configs/apollo';

const GET_PRODUCT_DETAIL = gql`
  query GetProductDetail($id: String!) {
    productDetail(id: $id) {
      data
    }
  }
`;

const queryProductDetail = async (id: string) => {
  const {data, errors} = await client.query<Product>({
    query: GET_PRODUCT_DETAIL,
    variables: {id},
  });
  return {data, errors};
};

export {queryProductDetail};
