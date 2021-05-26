import {RESTDataSource, HTTPCache} from 'apollo-datasource-rest';
import {config} from 'dotenv';

config();

class BaseDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.MELI_API_ENDPOINT_REST;
    this.httpCache = new HTTPCache();
  }
}
export {BaseDataSource};
