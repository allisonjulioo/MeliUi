import {Resolver} from '../../config/apollo';
import {ProductsList} from '../dataSources/products';

const productsListService = new ProductsList();

const productsList = async (search: string) => {
  console.log({search});

  const response = await productsListService.getProducts('kalimba');
  return response;
};

const productsListResolvers = {
  Query: {
    productsList,
  },
};

export {productsListResolvers};
