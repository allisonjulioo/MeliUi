import {render, waitFor} from '@testing-library/react';
import {searchPagePath} from 'routes/helpers';
import {App} from 'App';
import {server} from 'mocks/node';

const {listen, close} = server;

beforeAll(() => listen());
afterAll(() => close());

const configRoute = () => {
  window.history.pushState({}, 'Identity confirmation Page', searchPagePath());
};

describe('pages/', () => {
  test('Elements in view', async () => {
    configRoute();
    const {findByText, debug} = render(<App />);
    await findByText(/Página de busca/i);
  });
});
