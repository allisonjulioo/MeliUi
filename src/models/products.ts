import {Author} from './author';
import {Product} from './product';

export interface ResponseListProducts {
  search?: string;
  author: Author;
  categories: string[];
  items: Product[];
}
