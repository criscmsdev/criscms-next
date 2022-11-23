
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_PAGES_0_FOOD } from "@/graphql/query/food/page0.food.query";
import { Page } from "@/interfaces/page.interface";

export const findPages0Food = async () => {
  const { findPages0Food } = await graphQLClient.request<{findPages0Food:Page[]}>(FIND_PAGES_0_FOOD);
  return findPages0Food;
};