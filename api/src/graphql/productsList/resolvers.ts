import {ProductsList} from '../dataSources/productsList';

const productsListService = new ProductsList();

const productsList = async (_: string, {search}: {search: string}) =>
  await productsListService.getProducts(search);

const productsListResolvers = {
  Query: {
    productsList,
  },
};

export {productsListResolvers};
