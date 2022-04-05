import { ApolloServer, gql } from 'apollo-server';
import { queryGql } from './gql/query.gql';
import { contributorsGql } from './gql/contributors.gql';
import {connection} from "@contributors/global";
import {ContributorService} from "./app/contributor.service";

(async () => {
  await connection();
  const resolvers = {
    Query: {
      contributors: function (_, params) {
        return ContributorService.getList(params.page);
      },
      contributor: function(_, params) {
        return ContributorService.getOne(params.github);
      }
    },
  };

  const server = new ApolloServer({
    typeDefs: [contributorsGql, queryGql],
    resolvers,
  });
  server.listen({port: process.env.APOLLO}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
