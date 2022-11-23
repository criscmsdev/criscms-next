import { ConnectionArgs, ListSite } from "@/interfaces/site.interface";
import { marketingGetSitesWithCursor } from "@/lib/marketing/sites/getSitesWithCursor";
// import { getSitesMarketingWithCursor } from "@/lib/marketing/sites/getSitesWithCursor";
import { useQuery } from "@tanstack/react-query";

export function useMarketingGetSitesWithCursor(args:ConnectionArgs, sitesMarketing: ListSite) {
  return useQuery<ListSite>(["marketing-get-sites-with-cursor", args], () => marketingGetSitesWithCursor(args), {initialData: sitesMarketing});
}
