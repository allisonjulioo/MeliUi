import React from 'react';
import {Router} from 'routes/Router';
import {GlobalStyle} from 'theme/global';
import {Header} from 'components/Header';
import {Layout} from 'components/Layout';
import {ProductsContext} from 'useList';
import {BreadCrumb} from 'components/BreadCrumb';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <ProductsContext>
        <GlobalStyle />
        <Header />
        <BreadCrumb />
        <Layout>
          <Router />
        </Layout>
      </ProductsContext>
    </BrowserRouter>
  );
};
export {App};
