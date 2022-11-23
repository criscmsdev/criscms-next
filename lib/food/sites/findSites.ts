
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_SITES_FOOD } from "@/graphql/query/food/site.food.query";
import { Site } from "@/interfaces/site.interface";


export async function findSitesFood  () {
  const { findSitesFood } = await graphQLClient.request<{
    findSitesFood: Site[];
  }>(FIND_SITES_FOOD, { cache: 'force-cache'});
  return findSitesFood;
};
