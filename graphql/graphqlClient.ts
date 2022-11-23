import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  `http://localhost:6002/graphql`,
  // `${process.env.API_URL}/graphql`,
  {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  }
);
