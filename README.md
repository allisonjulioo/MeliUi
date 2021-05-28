#  Meli Front End Test 
### Instruction to run and performance app

[![N|Solid](https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo-pt__large_plus.png)](https://nodesource.com/products/nsolid)
 
This project was developed for the testing of MELI *software enginner* the application has the client's 
part and an api the solution was developed with:

- ReactJS Client
- Apollo Server
- Graphql contract

## Important!!

>Initially to save time and do the tests it was the MSW to mock the calls GraphQl before creating the api, 
>to disable the mock of the api, go to `.env` and assign it off to the variable `REACT_APP_ENABLE_MOCK`
 
## Client dependencies
 
- [Apollo Client](https://github.com/apollographql/apollo-client)
- [Lodash Debounce](https://github.com/lodash/lodash)
- [Styled Components](https://github.com/styled-components/styled-components)
- [i18next](https://github.com/i18next/i18next)
- [Mock Service Worker (msw)](https://github.com/mswjs/msw)
- [Typescript](https://github.com/microsoft/TypeScript)
- [GrapQl](https://github.com/graphql)
 
## Server dependencies
 
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Apollo Server Express](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-express)
- [Styled Components](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-testing)
- [Apollo Server Testing](https://github.com/i18next/i18next)
- [Typescript](https://github.com/microsoft/TypeScript)
- [GrapQl](https://github.com/graphql)
 
 
## Installation

This app requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and and start the client app.

```sh
cd meli-test
npm install
npm run start
```
Install the dependencies and and start the server app.

```sh
cd meli-test/api
npm install
npm run start
```

#### Enable/Disable Mockable API MSW

cd meli-test/.env

| Variable | Value |
| ------ | ------ |
| REACT_APP_ENABLE_MOCK | on |
| REACT_APP_ENABLE_MOCK | off |
 

## Run tests
cd meli-test
 
```sh
npm run test
```

## Avaliable routes client


| Description | Path |
| ------ | ------ |
| Search page | http://localhost:3000/ |
| Results page | http://localhost:3000/items/?search=iphone |
| Detail produdct | http://localhost:3000/items/MLA865683438 |


## Avaliable routes server


| Api | Route |
| ------ | ------ |
| Query GraphQl | http://localhost:4000/graphql |

### Query Product List

Variable `search` String!

```
  query ProductsList($search: String) {
    productsList(search: $search) {
      categories
      items {
        id
        title
        price {
          currency
          amount
          decimals
          formated
        }
        state {
          name
        }
        picture
        condition
        free_shipping
      }
    }
  }
```
### Query Product Detail
Variable `id` String!
```
  query ProductDetail($id: String) {
    productDetail(id: $id) {
      author {
        name
        lastname
      }
      item {
        id
        title
        price {
          currency
          amount
          decimals
          formated
          symbol
        }
        state {
          id
          name
        }
        picture
        condition
        sold_quantity
        description
      }
    }
  }
```

**Thanks!**
 
 
