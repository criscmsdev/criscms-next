
import { graphQLClient } from "@/graphql/graphqlClient";
import { CREATE_PAGE_1_FOOD } from "@/graphql/mutate/food/page.food.mutate";
import { CreatePage, Page } from "@/interfaces/page.interface";

export async function createPage1Food(inputCreate: CreatePage) {
  const { createPage1Food } = await graphQLClient.request<{ createPage1Food: Page }>(CREATE_PAGE_1_FOOD, {
    inputCreate,
  });
  return createPage1Food;
  
}

