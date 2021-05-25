import {handlers as productsListHandlers} from './productsList';
import {handlers as productDetailHandlers} from './productDetail';

const handlers = [...productsListHandlers, ...productDetailHandlers];

export {handlers};
