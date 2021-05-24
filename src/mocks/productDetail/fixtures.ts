const success = {
  data: {
    id: 1,
    title: 'Deco reverse Sombrero Oxford',
    sold: 100,
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
    description: `Estamos há mais de 3 anos no mercado, nos dedicamos a participar da história de nossos clientes, oferecendo produtos que tornam os seus momentos inesquecíveis. Aqui você encontra aparelhos exclusivos novos e seminovos (Vitrine) para todos os gostos. Atentos às inovações do mercado, estamos sempre em busca de novas tecnologias e aparelhos.
    A TechStore_SP foi criada e desenvolvida especialmente para atender um público diferenciado, que exige qualidade e bom gosto.`,
  },
};

const notFound = {
  data: {},
  errors: [
    {
      message: 'Not found product',
      path: ['productDetail'],
      extensions: {
        argumentName: 'Not found',
        code: 'NOT_FOUND',
      },
    },
  ],
};

export {success, notFound};
