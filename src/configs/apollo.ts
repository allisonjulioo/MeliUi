import {ApolloClient, InMemoryCache} from '@apollo/client';

const {REACT_APP_API_URL: uri} = process.env;

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export {client};
