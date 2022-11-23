
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_PAGES0_FOOD_WITH_CURSOR } from "@/graphql/query/food/page0.food.query";
import { ListPage } from "@/interfaces/page.interface";
import { ConnectionArgs, ListSite } from "@/interfaces/site.interface";


export async function listPages0FoodWithCursor(args:ConnectionArgs, parentId: string)  {
  const { listPages0FoodWithCursor } = await graphQLClient.request<{
    listPages0FoodWithCursor: ListPage
  }>(FIND_PAGES0_FOOD_WITH_CURSOR, {args: args, parentId: parentId}, { cache: 'no-store'});
  return listPages0FoodWithCursor;
};

// export function useListSitesWithCursor(args:ConnectionArgs) {
//   return useQuery<ListResponse>(["find-sites-with-cursor", args], () => listSitesWithCursor(args));
// }
