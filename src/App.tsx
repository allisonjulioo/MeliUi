import {BreadCrumb} from 'components/BreadCrumb';
import {Header} from 'components/Header';
import {Layout} from 'components/Layout';
import {HashRouter} from 'react-router-dom';
import {Router} from 'routes/Router';
import {GlobalStyle} from 'theme/global';
import {ProductsContext} from 'useList';

const App = () => {
  return (
    <HashRouter>
      <ProductsContext>
        <GlobalStyle />
        <Header />
        <BreadCrumb />
        <Layout>
          <Router />
        </Layout>
      </ProductsContext>
    </HashRouter>
  );
};
export {App};
