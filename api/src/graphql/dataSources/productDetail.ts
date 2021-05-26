import {Product} from '../../models/product';
import {BaseDataSource} from './base';

interface ResponseApiRest {
  author: {
    name: string;
    lastname: string;
  };
  item: Product;
}

interface ResponseDetailRest extends Product {
  author: {
    name: string;
    lastname: string;
  };
  item: Product;
  currency_id: string;
  pictures: [{url: string}];
  domain_id: string;
  seller_address: {
    state: {
      id: string;
      name: string;
    };
  };
  base_price: number;
}

class ProductDetail extends BaseDataSource {
  private extractProduct(response: ResponseDetailRest): ResponseApiRest {
    const {
      id,
      title,
      base_price,
      sold_quantity,
      currency_id,
      condition,
      pictures,
      seller_address: {state},
      domain_id,
      description,
    } = response;

    return {
      author: {
        name: domain_id,
        lastname: '',
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: base_price,
          decimals: 1,
        },
        state,
        picture: pictures[0].url,
        condition,
        sold_quantity,
        description,
      },
    };
  }

  public async getProductDetail(id: string) {
    const response = await this.get(`items/${id}/`);
    const description = await this.get(`items/${id}/description`);

    const {author, item} = this.extractProduct({
      ...response,
      description: 'description.plain_text',
    });

    return {author, item};
  }
}

export {ProductDetail};
