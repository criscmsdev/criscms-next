
import { Site } from "@/interfaces/site.interface";
import { findSiteFood } from "@/lib/food/sites/findSite";
import { useQuery } from "@tanstack/react-query";

export function useFindSiteFood(id:string, siteFood: Site) {
  return useQuery(["find-site-food", id],  () =>  findSiteFood(id), {initialData: siteFood});
}
