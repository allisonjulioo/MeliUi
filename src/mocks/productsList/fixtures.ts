const success = {
  data: {
    productsList: {
      author: {
        name: 'Allison',
        lastname: 'Nunes',
      },

      categories: ['smartphone', 'eletronico', 'apple'],
      items: [
        {
          id: 1,
          title: 'Deco reverse Sombrero Oxford',
          sold_quantity: 120,
          price: {
            currency: 'pt-BR',
            amount: 1980,
            decimals: 1,
            formated: 'R$ 1.980,10',
            symbol: 'R$',
          },
          state: {
            id: 'BR-BR',
            name: 'Brasilia',
          },
          picture:
            'https://cdn.dooca.store/165/products/rvawndot1g3dg1azralwm7zh8xkbtqx8u3v1_620x620+fill_ffffff.jpg?v=1606182673',
          condition: 'Novo',
          free_shipping: true,
          description: 'Teste',
        },
        {
          id: 2,
          title: 'Deco intern iphone lisboa',
          sold_quantity: 120,
          price: {
            currency: 'pt-BR',
            amount: 2000,
            decimals: 0,
            formated: 'R$ 2.000,00',
            symbol: 'R$',
          },
          state: {
            id: 'BR-SP',
            name: 'São Paulo',
          },
          picture:
            'https://http2.mlstatic.com/D_NQ_NP_852271-MLB45683634710_042021-O.webp',
          condition: 'Usado',
          free_shipping: false,
          description: 'Teste',
        },
      ],
    },
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
