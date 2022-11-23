
import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_SITES_FOOD_WITH_CURSOR } from "@/graphql/query/food/site.food.query";
import { ConnectionArgs, ListSite } from "@/interfaces/site.interface";


export async function listSitesFoodWithCursor(args:ConnectionArgs)  {
  const { listSitesFoodWithCursor } = await graphQLClient.request<{
    listSitesFoodWithCursor: ListSite
  }>(FIND_SITES_FOOD_WITH_CURSOR, {args: args}, { cache: 'no-store'});
  return listSitesFoodWithCursor;
};

// export function useListSitesWithCursor(args:ConnectionArgs) {
//   return useQuery<ListResponse>(["find-sites-with-cursor", args], () => listSitesWithCursor(args));
// }
