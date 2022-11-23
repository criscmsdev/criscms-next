
import { graphQLClient } from "@/graphql/graphqlClient";
import { Site } from "@/interfaces/site.interface";
import { gql } from "graphql-request";

export const MARKETING_GET_SITES = gql`
  query MarketingGetSites {
    marketingGetSites {
      id
    }
  }
`;

export async function marketingGetSites  () {
  const { marketingGetSites } = await graphQLClient.request<{
    marketingGetSites: Site[];
  }>(MARKETING_GET_SITES, { cache: 'force-cache'});
  return marketingGetSites;
};
