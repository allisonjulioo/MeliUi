import { gql } from 'apollo-server';

const helloWorldSchema = gql`
  type Query {
    helloWorld: String
  }
`;

export { helloWorldSchema };