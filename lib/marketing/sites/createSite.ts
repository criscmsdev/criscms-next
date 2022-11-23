import { graphQLClient } from "@/graphql/graphqlClient";
import { CreateSite, Site } from "@/interfaces/site.interface";
import { gql } from "graphql-request";

export const MARKETING_CREATE_SITE = gql`
  mutation MarketingCreateSite($inputCreate: CreateSite!) {
    marketingCreateSite(inputCreate: $inputCreate) {
      id
    }
  }
`;

export async function marketingCreateSite  (inputCreate: CreateSite ) {
  const { marketingCreateSite } = await graphQLClient.request<{marketingCreateSite: Site}>(MARKETING_CREATE_SITE, {
    inputCreate,
  });
  return marketingCreateSite;
};