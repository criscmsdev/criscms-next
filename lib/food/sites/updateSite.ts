

import { graphQLClient } from "@/graphql/graphqlClient";
import { UPDATE_SITE_FOOD } from "@/graphql/mutate/food/site.food.mutate";
import { Site, UpdateSite } from "@/interfaces/site.interface";

export async function updateSiteFood(inputUpdate: UpdateSite) {
  const { updateSiteFood } = await graphQLClient.request<{updateSiteFood: Site}>(UPDATE_SITE_FOOD, {
    inputUpdate
  });
 return updateSiteFood
}