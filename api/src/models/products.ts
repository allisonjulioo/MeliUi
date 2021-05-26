import {Author} from './author';
import {Product} from './product';

export interface ResponseListProducts {
  author: Author;
  categories: string[];
  results: Product[];
}
