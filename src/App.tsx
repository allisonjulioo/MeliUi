import React from 'react';
import {Router} from 'routes/Router';
import {GlobalStyle} from 'theme/global';
import {Header} from 'components/Header';
import {Layout} from 'components/Layout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <Router />
      </Layout>
    </>
  );
};

export {App};
