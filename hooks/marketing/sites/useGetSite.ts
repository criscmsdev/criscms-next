
import { Site } from "@/interfaces/site.interface";
import { marketingGetSite } from "@/lib/marketing/sites/getSite";
import { useQuery } from "@tanstack/react-query";

export function useMarketingGetSite(id:string, siteMarketing: Site) {
  return useQuery(["marketing-get-site", id],  () =>  marketingGetSite(id), {initialData: siteMarketing});
}
