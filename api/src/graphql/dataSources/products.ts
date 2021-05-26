import {RESTDataSource, HTTPCache} from 'apollo-datasource-rest';
import {config} from 'dotenv';
import {Product} from '../../models/product';
import {ResponseListProducts} from '../../models/products';

config();

interface ResponseApiRest {
  results: ResponseListProducts[];
  filters: [
    {
      id: string;
      name: string;
      type: string;
      values: [
        {
          id: string;
          name: string;
          path_from_root: [
            {
              id: string;
              name: string;
            },
          ];
        },
      ];
    },
  ];
}

interface ResponseResultsArrayRest extends Product {
  sold_quantity: number;
  prices: {
    presentation: {
      display_currency: string;
    };
  };
  address: {
    state_id: string;
    state_name: string;
  };
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
  attributes: [
    {
      id: string;
      values: [{name: string}];
    },
  ];
}

class ProductsList extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.MELI_API_ENDPOINT_REST;
    this.httpCache = new HTTPCache();
  }

  private extractCategories(response: ResponseApiRest): string[] {
    const categories = response.filters.find(({id}) => id === 'category');
    const values = categories?.values[0].path_from_root;
    const categoriesArr = values?.flatMap(({name}, index) => [name]);

    return categoriesArr ?? [''];
  }

  private extractItems(results: ResponseResultsArrayRest[]): Product[] {
    return results?.flatMap(result => {
      const {
        id,
        title,
        sold_quantity,
        price,
        address,
        prices,
        shipping,
        thumbnail: picture,
        attributes,
      } = result;
      const {state_id, state_name} = address;
      const {
        presentation: {display_currency: currency},
      } = prices;
      const {free_shipping} = shipping;

      const amount = Math.floor(Number(price));
      const decimals = Number(String(price).split('.')[1] ?? 0);

      const conditionsValues = attributes.find(
        att => att.id === 'ITEM_CONDITION',
      );
      const condition = conditionsValues?.values[0].name ?? '';

      return [
        {
          id,
          title,
          sold_quantity,
          price: {
            currency,
            amount,
            decimals,
          },
          state: {
            id: state_id,
            name: state_name,
          },
          picture,
          condition,
          free_shipping,
          description: '',
        },
      ];
    });
  }

  public async getProducts(search: string) {
    const response = await this.get(`/search?q=${search}`);

    return {
      author: {
        name: 'Allison',
        lastname: 'Nunes',
      },
      items: this.extractItems(response.results),
      categories: this.extractCategories(response),
    };
  }
}

export {ProductsList};
