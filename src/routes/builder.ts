import {ProductDetail} from 'pages/ProductDetail';
import {ResultsSearchPage} from 'pages/ResultsSearchPage';
import {SearchPage} from 'pages/SearchPage';

import {productDetail, resultsSearchPage, searchPage} from './base';

const routes = [
  {
    ...productDetail,
    component: ProductDetail,
  },
  {
    ...resultsSearchPage,
    component: ResultsSearchPage,
  },
  {
    ...searchPage,
    component: SearchPage,
  },
];

export {routes};
