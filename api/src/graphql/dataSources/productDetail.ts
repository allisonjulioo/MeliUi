import {Product} from '../../models/product';
import {getAmount, getDecimals, getFormated} from '../../providers/currency';
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
  attributes: [
    {
      id: string;
      value_name: string;
    },
  ];
}

class ProductDetail extends BaseDataSource {
  private extractCondition(response: ResponseDetailRest): string {
    const condition = response.attributes.find(
      ({id}) => id === 'ITEM_CONDITION',
    );

    return condition?.value_name ?? '';
  }

  private extractProduct(response: ResponseDetailRest): ResponseApiRest {
    const {
      id,
      title,
      base_price,
      sold_quantity,
      currency_id,
      pictures,
      seller_address: {state},
      domain_id,
      description,
    } = response;

    const amount = getAmount(base_price);
    const decimals = getDecimals(base_price);
    const formated = getFormated(currency_id, amount, decimals);
    const condition = this.extractCondition(response);

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
          amount,
          decimals,
          formated,
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
      description: description.plain_text,
    });

    return {author, item};
  }
}

export {ProductDetail};
