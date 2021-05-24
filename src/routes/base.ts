const searchPage = {
  key: 'SEARCH_PAGE',
  path: '/',
  exact: true,
};

const resultsSearchPage = {
  key: 'RESULTS_SEARCH_PAGE',
  path: '/items/',
  exact: true,
};

const productDetail = {
  key: 'PRODUCT_DETAIL',
  path: '/items/:id',
  exact: true,
};

export {productDetail, resultsSearchPage, searchPage};
