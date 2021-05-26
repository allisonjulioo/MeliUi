import {ProductsList} from '../dataSources/productsList';

const productsListService = new ProductsList();

const productsList = async (_: any, {search}: {search: string}) =>
  await productsListService.getProducts(search);

const productsListResolvers = {
  Query: {
    productsList,
  },
};

export {productsListResolvers};
