import { graphQLClient } from "@/graphql/graphqlClient";
import { DELETE_PAGES_0_FOOD } from "@/graphql/mutate/food/page.food.mutate";


export async function deletePages0Food  (ids: string[] ) {
  const { deletePages0Food } = await graphQLClient.request<{deletePages0Food: string[]}>(DELETE_PAGES_0_FOOD, {
    ids
  });
  return deletePages0Food;
  
};
