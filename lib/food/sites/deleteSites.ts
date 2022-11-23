import { graphQLClient } from "@/graphql/graphqlClient";
import { DELETE_SITES_FOOD } from "@/graphql/mutate/food/site.food.mutate";

export async function deleteSitesFood  (ids: string[] ) {
  const { deleteSitesFood } = await graphQLClient.request<{deleteSitesFood: string[]}>(DELETE_SITES_FOOD, {
    ids
  });
  return deleteSitesFood;
  
};
