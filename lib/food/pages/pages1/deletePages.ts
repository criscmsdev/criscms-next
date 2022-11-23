import { graphQLClient } from "@/graphql/graphqlClient";
import { DELETE_PAGES_1_FOOD } from "@/graphql/mutate/food/page.food.mutate";


export async function deletePages1Food  (ids: string[] ) {
  const { deletePages1Food } = await graphQLClient.request<{deletePages1Food: string[]}>(DELETE_PAGES_1_FOOD, {
    ids
  });
  return deletePages1Food;
  
};
