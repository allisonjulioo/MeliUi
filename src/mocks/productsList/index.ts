import {graphql} from 'msw';
import {success, invalidToken} from './fixtures';

const handlers = [
  graphql.mutation('productsList', (req, res, ctx) => {
    const {token} = req.variables;
    sessionStorage.setItem('@@msw:scenarios', token);

    switch (token) {
      case 'invalid_token':
        return res(ctx.data(invalidToken), ctx.errors(invalidToken.errors));
      case 'success':
      default:
        return res(ctx.data(success.data));
    }
  }),
];

export {handlers};
