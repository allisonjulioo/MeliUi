import {Author} from './author';
import {Item} from './item';

export interface ResponseListProducts {
  author: Author;
  categories: string[];
  items: Item[];
}
