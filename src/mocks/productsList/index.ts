import {graphql} from 'msw';
import {success, notFound} from './fixtures';

const handlers = [
  graphql.query('ProductsList', (req, res, ctx) => {
    const {token} = req.variables;
    sessionStorage.setItem('@@msw:scenarios', token);

    switch (token) {
      case 'not_found':
        return res(ctx.data(notFound), ctx.errors(notFound.errors));
      case 'success':
      default:
        return res(ctx.data(success.data));
    }
  }),
];

export {handlers};
