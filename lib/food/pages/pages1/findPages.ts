
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_PAGES_1_FOOD } from "@/graphql/query/food/page1.food.query";
import { Page } from "@/interfaces/page.interface";

export const findPages1Food = async () => {
  const { findPages1Food } = await graphQLClient.request<{findPages1Food:Page[]}>(FIND_PAGES_1_FOOD);
  return findPages1Food;
};