import {cleanup, fireEvent, render} from '@testing-library/react';
import {searchPagePath} from 'routes/helpers';
import {App} from 'App';
import {server} from 'mocks/node';
import userEvent from '@testing-library/user-event';

const {listen, close} = server;

beforeAll(() => listen());
afterAll(() => close());
afterEach(() => cleanup());

const configRoute = () => {
  window.history.pushState({}, 'Search Page', searchPagePath());
};

describe('pages/search-page', () => {
  test('Elements in view', async () => {
    configRoute();
    const {findByTestId, findByAltText} = render(<App />);

    await findByAltText(/Logotipo do mercado livre/i);
    await findByTestId(/input-search-bar/i);
    await findByTestId(/submit-search-bar/i);
    await findByAltText(/Ícone de busca/i);
  });

  test('Search item in search form', async () => {
    configRoute();
    const {findByTestId} = render(<App />);

    const inputSearch = await findByTestId(/input-search-bar/i);
    const buttonSubmitSearch = await findByTestId(/form-search-bar/i);
    userEvent.type(inputSearch, 'Galaxy');
    fireEvent.submit(buttonSubmitSearch);

    expect(inputSearch).toHaveAttribute('value', 'Galaxy');
  });
});
