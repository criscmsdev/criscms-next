

import { graphQLClient } from "@/graphql/graphqlClient";
import { UPDATE_SITE_MARKETING_IMAGE } from "@/graphql/mutate/marketing/site.marketing.mutate";
import { Site, UpdateSiteImage } from "@/interfaces/site.interface";

export async function updateSiteImageMarketing(inputImage: UpdateSiteImage) {
  const { updateSiteImageMarketing } = await graphQLClient.request<{updateSiteImageMarketing: Site}>(UPDATE_SITE_MARKETING_IMAGE, {
    inputImage
  });
 return updateSiteImageMarketing
}