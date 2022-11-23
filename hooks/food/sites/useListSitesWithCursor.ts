import { ConnectionArgs, ListSite } from "@/interfaces/site.interface";
import { listSitesFoodWithCursor } from "@/lib/food/sites/listSitesWithCursor";
import { useQuery } from "@tanstack/react-query";

export function useListSitesFoodWithCursor(args:ConnectionArgs, sitesFood: ListSite) {
  return useQuery<ListSite>(["find-sites-food-with-cursor", args], () => listSitesFoodWithCursor(args), {initialData: sitesFood});
}
