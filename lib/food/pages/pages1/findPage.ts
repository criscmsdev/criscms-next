
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_PAGE_1_FOOD } from "@/graphql/query/food/page1.food.query";
import { Page } from "@/interfaces/page.interface";

export const findPage1Food = async (id: string) => {
  const { findPage1Food } = await graphQLClient.request<{findPage1Food: Page}>(FIND_PAGE_1_FOOD, {id: id});
  return findPage1Food;
};