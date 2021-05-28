import {cleanup, render, waitFor} from '@testing-library/react';
import {resultsSearchPagePath} from 'routes/helpers';
import {server} from 'mocks/node';
import {createMemoryHistory} from 'history';
import {ResultsSearchPage} from './';
import {Header} from 'components/Header';
import {Layout} from 'components/Layout';
import {ProductsContext} from 'useList';
import {BreadCrumb} from 'components/BreadCrumb';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import {success} from 'mocks/productsList/fixtures';

const {listen, close} = server;

beforeAll(() => listen());
afterAll(() => close());
afterEach(() => cleanup());

const history = createMemoryHistory();

const App = () => {
  return (
    <BrowserRouter>
      <ProductsContext
        data={{
          data: success.data.productsList,
        }}
      >
        <Header />
        <BreadCrumb />
        <Layout>
          <Router history={history}>
            <Route
              path={resultsSearchPagePath()}
              component={ResultsSearchPage}
            />
          </Router>
        </Layout>
      </ProductsContext>
    </BrowserRouter>
  );
};

const configRoute = () => {
  window.history.pushState({}, 'Result search', resultsSearchPagePath());
};

describe('pages/result-searcg', () => {
  test('Elements in search header', async () => {
    configRoute();
    const {findByTestId, findByAltText} = render(<App />);

    await findByAltText(/Logotipo do mercado livre/i);
    await findByTestId(/input-search-bar/i);
    await findByTestId(/submit-search-bar/i);
    await findByAltText(/Ícone de busca/i);
  });

  test('has category list items', async () => {
    history.push(`${resultsSearchPagePath()}?seearch=Iphone`);
    const {findByText, findAllByTestId, getByText} = render(<App />);

    await findByText(/smartphone/i);
    await findByText(/eletronico/i);
    await findByText(/apple/i);

    await waitFor(() => {
      expect(getByText(/smartphone/i).closest('a')).toBeTruthy();
      expect(getByText(/eletronico/i).closest('a')).toBeTruthy();
      expect(getByText(/apple/i).closest('a')).toBeTruthy();
    });

    const categories = await findAllByTestId('item-category');
    expect(categories).toHaveLength(3);
  });

  test('has products list items', async () => {
    history.push(`${resultsSearchPagePath()}?seearch=Iphone`);
    const {findByText, findAllByTestId, findByAltText} = render(<App />);

    await findByAltText(/Deco reverse Sombrero Oxford/i);
    await findByText(/Deco reverse Sombrero Oxford/i);
    expect(await findByText('R$ 1.980,10')).toBeInTheDocument();
    await findByText(/Novo/i);
    await findByText(/Brasilia/i);

    const products = await findAllByTestId('product-result');
    const images = await findAllByTestId('product-image');
    const freeShipping = await findAllByTestId('product-free-shipping');

    products.forEach(product => {
      expect(product.closest('a')).toBeTruthy();
    });

    expect(products).toHaveLength(2);
    expect(images).toHaveLength(2);
    expect(freeShipping).toHaveLength(1);
  });
});
