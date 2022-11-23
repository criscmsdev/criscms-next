

import { graphQLClient } from "@/graphql/graphqlClient";
import { UPDATE_SITE_MARKETING_DB } from "@/graphql/mutate/marketing/site.marketing.mutate";
import { Site, UpdateSiteDB } from "@/interfaces/site.interface";

export async function updateSiteDBMarketing(inputDB: UpdateSiteDB) {
  const { updateSiteDBMarketing } = await graphQLClient.request<{updateSiteDBMarketing: Site}>(UPDATE_SITE_MARKETING_DB, {
    inputDB
  });
 return updateSiteDBMarketing
}