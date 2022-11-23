
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_PAGES_0_FOOD_BY_PARENT_ID } from "@/graphql/query/food/page0.food.query";
import { Page } from "@/interfaces/page.interface";



export const findPages0FoodByParentId = async (parentId: string) => {
  const { findPages0FoodByParentId } = await graphQLClient.request<{
    findPages0FoodByParentId: Page[];
  }>(FIND_PAGES_0_FOOD_BY_PARENT_ID, { parentId: parentId });
  return findPages0FoodByParentId;
};