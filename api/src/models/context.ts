import {ResponseListProducts} from './products';

export interface ContextSearch {
  data: ResponseListProducts;
  search: string;
}
