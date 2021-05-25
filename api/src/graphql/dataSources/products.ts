import {RESTDataSource, HTTPCache} from 'apollo-datasource-rest';
import {config} from 'dotenv';

config();

class ProductsList extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.MELI_API_ENDPOINT_REST;
    this.httpCache = new HTTPCache();
  }

  async getProducts(search: string) {
    const response = await this.get(`/search?q=${search}`);
    return response.results;
  }
}

export {ProductsList};
