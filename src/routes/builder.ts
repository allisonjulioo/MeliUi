import {SearchPage} from 'pages/SearchPage';
import {ResultsSearchPage} from 'pages/ResultsSearchPage';

import {resultsSearchPage, searchPage} from './base';

const routes = [
  {
    ...searchPage,
    component: SearchPage,
  },
  {
    ...resultsSearchPage,
    component: ResultsSearchPage,
  },
];

export {routes};
