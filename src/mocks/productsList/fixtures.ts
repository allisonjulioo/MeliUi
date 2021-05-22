const success = {
  data: {
    productsList: {
      confirm: true,
    },
  },
  errors: [],
};

const invalidToken = {
  data: {},
  errors: [
    {
      message: 'Token is invalid or already used',
      locations: [
        {
          line: 2,
          column: 3,
        },
      ],
      path: ['productsList'],
      extensions: {
        argumentName: 'token',
        code: 'BAD_USER_INPUT',
      },
    },
  ],
};

export {success, invalidToken};
