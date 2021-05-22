import React from 'react';
import {Router} from 'routes/Router';
import {GlobalStyle} from 'theme/global';
import {Header} from 'components/Header';
import {Layout} from 'components/Layout';
import {ProductsContext} from 'useList';

const App = () => {
  return (
    <ProductsContext>
      <GlobalStyle />
      <Header />
      <Layout>
        <Router />
      </Layout>
    </ProductsContext>
  );
};

export {App};
