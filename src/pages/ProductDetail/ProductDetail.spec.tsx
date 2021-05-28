import {screen, cleanup, render, waitFor} from '@testing-library/react';
import {App} from 'App';
import {server} from 'mocks/node';

const {listen, close} = server;

beforeAll(() => listen());
afterAll(() => close());
afterEach(() => cleanup());

const configRoute = () => {
  window.history.pushState({id: 1}, 'Detail product', '/items/1');
};

beforeEach(async () => {
  await waitFor(() => render(<App />));
});

describe('pages/detail-product', () => {
  test('Elements in search header', async () => {
    configRoute();

    await screen.findByAltText(/Logotipo do mercado livre/i);
    await screen.findByTestId(/input-search-bar/i);
    await screen.findByTestId(/submit-search-bar/i);
    await screen.findByAltText(/Ícone de busca/i);
  });

  test('has display item detail in page', async () => {
    await waitFor(() => {
      screen.getByText(/100/i);
      screen.getByText(/Deco reverse Sombrero Oxford/i);
      screen.getByText(/1.980/i);
      screen.getByText(/Descrição do produto/i);
      const saleButton = screen.getByText(/Comprar/i);
      expect(saleButton.closest('button')).toBeTruthy();
    });
  });
});
