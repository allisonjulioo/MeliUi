import {gql} from 'apollo-server';

const stateSchema = gql`
  type State {
    id: String!
    name: String!
  }
`;

export {stateSchema};
