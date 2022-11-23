import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  // `https://crislabs.onrender.com/graphql`,
  `${process.env.API_URL}/graphql`,
  {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  }
);
