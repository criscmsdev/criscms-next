import { graphQLClient } from "@/graphql/graphqlClient";
import { CREATE_SITE_FOOD } from "@/graphql/mutate/food/site.food.mutate";
import { CreateSite, Site } from "@/interfaces/site.interface";


export async function createSiteFood  (inputCreate: CreateSite ) {
  const { createSiteFood } = await graphQLClient.request<{createSiteFood: Site}>(CREATE_SITE_FOOD, {
    inputCreate,
  });
  return createSiteFood;
};