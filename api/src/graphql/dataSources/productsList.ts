import {Product} from '../../models/product';
import {ResponseListProducts} from '../../models/products';
import {getFormated, getAmount, getDecimals} from '../../providers/currency';
import {BaseDataSource} from './base';

interface ResponseApiRest {
  results: ResponseListProducts[];
  available_filters: [
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

interface ResponseResultsArrayRest {
  id: number;
  title: string;
  price: number;
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

class ProductsList extends BaseDataSource {
  private extractCategories(response: ResponseApiRest): string[] | undefined {
    const categories = response.available_filters.find(
      ({id}) => id === 'category',
    );

    const categoriesArr = categories?.values?.flatMap(({name}, index) => [
      name,
    ]);

    return categoriesArr?.splice(0, 4);
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

      const amount = getAmount(price);
      const decimals = getDecimals(price);
      const formated = getFormated(currency, amount, decimals);

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
            formated,
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
    const response = await this.get(`sites/MLA/search?q=${search}`);

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
