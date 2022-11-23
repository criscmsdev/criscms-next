
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_PAGES1_FOOD_WITH_CURSOR } from "@/graphql/query/food/page1.food.query";
import { ListPage } from "@/interfaces/page.interface";
import { ConnectionArgs, ListSite } from "@/interfaces/site.interface";


export async function listPages1FoodWithCursor(args:ConnectionArgs, parentId: string)  {
  const { listPages1FoodWithCursor } = await graphQLClient.request<{
    listPages1FoodWithCursor: ListPage
  }>(FIND_PAGES1_FOOD_WITH_CURSOR, {args: args, parentId: parentId}, { cache: 'no-store'});
  return listPages1FoodWithCursor;
};

// export function useListSitesWithCursor(args:ConnectionArgs) {
//   return useQuery<ListResponse>(["find-sites-with-cursor", args], () => listSitesWithCursor(args));
// }
