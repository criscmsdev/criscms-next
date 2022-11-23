
import { Site } from "@/interfaces/site.interface";
import { findSitesFood } from "@/lib/food/sites/findSites";
import { useQuery } from "@tanstack/react-query";

export function useFindSitesFood(sitesFood: Site[]) {
  return useQuery(["find-sites-food"], async () => await findSitesFood(), {initialData: sitesFood});
}


// import { FIND_SITES_FOOD } from "@/graphql/query/site/food.site.query";
// import { Site } from "@/interfaces/site.interface";


// export async function fetchSitesFood(): Promise<{data: {findSitesFood: Site[]}}>{
//   const sites = await fetch(`${process.env.API_URL}/graphql`, {
//     cache: 'force-cache',
//     next: { revalidate: 5 },
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: FIND_SITES_FOOD,
//       variables: {
//       }
      
//     })
//   })
//   return sites.json()
// }