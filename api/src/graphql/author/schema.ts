import {gql} from 'apollo-server';

const authorSchema = gql`
  type Author {
    name: String!
    lastname: String!
  }
`;

export {authorSchema};
