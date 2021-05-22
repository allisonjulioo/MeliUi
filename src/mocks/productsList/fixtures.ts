const success = {
  data: {
    author: {
      name: 'Allison',
      lastname: 'Nunes',
    },
    categories: ['smartphone', 'eletronico', 'apple'],
    items: [
      {
        id: 1,
        title: 'Deco reverse Sombrero Oxford',
        price: {
          currency: 'pt-BR',
          amount: 1980,
          decimals: 0,
        },
        picture:
          'https://cdn.dooca.store/165/products/rvawndot1g3dg1azralwm7zh8xkbtqx8u3v1_620x620+fill_ffffff.jpg?v=1606182673',
        condition: 'Novo',
        free_shipping: true,
      },
    ],
  },
};

const notFound = {
  data: {},
  errors: [
    {
      message: 'Not found products',
      path: ['productsList'],
      extensions: {
        argumentName: 'Not found',
        code: 'NOT_FOUND',
      },
    },
  ],
};

export {success, notFound};
