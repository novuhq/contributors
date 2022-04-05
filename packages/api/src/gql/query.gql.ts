import { gql } from 'apollo-server';
import { contributorsGql } from './contributors.gql';

export const queryGql = gql`
  type Query {
    contributors(page: Int!): [Contributors]
    contributor(github: String!): Contributors
  }
`;
