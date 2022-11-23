
import { graphQLClient } from "@/graphql/graphqlClient";
import { CREATE_PAGE_0_FOOD } from "@/graphql/mutate/food/page.food.mutate";
import { CreatePage, Page } from "@/interfaces/page.interface";

export async function createPage0Food(inputCreate: CreatePage) {
  const { createPage0Food } = await graphQLClient.request<{ createPage0Food: Page }>(CREATE_PAGE_0_FOOD, {
    inputCreate,
  });
  return createPage0Food;
  
}

