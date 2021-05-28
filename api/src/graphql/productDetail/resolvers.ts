import {ProductDetail} from '../dataSources/productDetail';

const productDetailService = new ProductDetail();

const productDetail = async (_: string, {id}: {id: string}) =>
  await productDetailService.getProductDetail(id);

const productDetailResolvers = {
  Query: {
    productDetail,
  },
};

export {productDetailResolvers};
