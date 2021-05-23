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
          decimals: 1,
        },
        state: {
          id: 'BR-BR',
          name: 'Brasilia',
        },
        picture:
          'https://cdn.dooca.store/165/products/rvawndot1g3dg1azralwm7zh8xkbtqx8u3v1_620x620+fill_ffffff.jpg?v=1606182673',
        condition: 'Novo',
        free_shipping: true,
      },
      {
        id: 2,
        title: 'Deco reverse Sombrero Oxford',
        price: {
          currency: 'pt-BR',
          amount: 2000,
          decimals: 0,
        },
        state: {
          id: 'BR-SP',
          name: 'São Paulo',
        },
        picture:
          'https://http2.mlstatic.com/D_NQ_NP_852271-MLB45683634710_042021-O.webp',
        condition: 'Novo',
        free_shipping: false,
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
