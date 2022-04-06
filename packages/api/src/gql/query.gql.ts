import { gql } from 'apollo-server';

export const queryGql = gql`
  type Response {
    pages: Int
    list: [Contributors]
  }
  type Query {
    contributors(page: Int!): Response
    contributor(github: String!): Contributors
  }
`;
