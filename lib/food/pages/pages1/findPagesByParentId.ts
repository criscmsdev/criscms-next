
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_PAGES_1_FOOD_BY_PARENT_ID } from "@/graphql/query/food/page1.food.query";
import { Page } from "@/interfaces/page.interface";



export const findPages1FoodByParentId = async (parentId: string) => {
  const { findPages1FoodByParentId } = await graphQLClient.request<{
    findPages1FoodByParentId: Page[];
  }>(FIND_PAGES_1_FOOD_BY_PARENT_ID, { parentId: parentId });
  return findPages1FoodByParentId;
};