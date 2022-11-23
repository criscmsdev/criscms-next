
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_PAGE_0_FOOD } from "@/graphql/query/food/page0.food.query";
import { Page } from "@/interfaces/page.interface";

export const findPage0Food = async (id: string) => {
  const { findPage0Food } = await graphQLClient.request<{findPage0Food: Page}>(FIND_PAGE_0_FOOD, {id: id});
  return findPage0Food;
};