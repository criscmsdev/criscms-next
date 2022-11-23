import { graphQLClient } from "@/graphql/graphqlClient";
import { DELETE_SITES_MARKETING } from "@/graphql/mutate/marketing/site.marketing.mutate";

export async function deleteSitesMarketing  (ids: string[] ) {
  const { deleteSitesMarketing } = await graphQLClient.request<{deleteSitesMarketing: string[]}>(DELETE_SITES_MARKETING, {
    ids
  });
  return deleteSitesMarketing;
  
};
