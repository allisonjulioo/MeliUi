import {Author} from './author';
import {Item} from './item';

export interface ResponseListProducts {
  search?: string;
  author: Author;
  categories: string[];
  items: Item[];
}
