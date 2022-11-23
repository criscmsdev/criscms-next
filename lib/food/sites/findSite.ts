// import { FIND_SITE_FOOD } from "@/graphql/graphql-request"
// import { Site } from "@/interfaces/site.interface"

import { graphQLClient } from "@/graphql/graphqlClient";
import { FIND_SITE_FOOD } from "@/graphql/query/food/site.food.query";
import { Site } from "@/interfaces/site.interface";

export async function findSiteFood (id: string) {
  const { findSiteFood } = await graphQLClient.request<{
    findSiteFood: Site;
  }>(FIND_SITE_FOOD, {id: id}, { cache: 'no-store'});
  return findSiteFood;
};

// export async function fetchSiteFood(siteId: string): Promise<{data: {findSiteFood: Site}}>{
//   const site = await fetch('http://localhost:6001/graphql', {
//     cache: 'force-cache',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: FIND_SITE_FOOD,
//       variables: {
//         id: siteId
//       }
      
//     })
//   })
//   return site.json() 
// }