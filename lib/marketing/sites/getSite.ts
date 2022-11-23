// import { FIND_SITE_FOOD } from "@/graphql/graphql-request"
// import { Site } from "@/interfaces/site.interface"

import { graphQLClient } from "@/graphql/graphqlClient";
import { GET_SITE_MARKETING_BY_MIDDLEWARE } from "@/graphql/query/marketing/site.marketing.query";
import { Site } from "@/interfaces/site.interface";
import { gql } from "graphql-request";

export const MARKETING_GET_SITE = gql`
  query MarketingGetSite($id: String!) {
    marketingGetSite(id: $id) {
      id
      dataSite {
        name
        description
        type
        
        dbSite {
          uid
          label
          slug
        }
        infoSite{
          clientId
        }
        imageSite {
          banner {
            src
            alt
          }
          logo {
            src
            alt
          }
          icon {
            src
            alt
          }
        }
        
      }
      url
    }
  }
`;

export async function marketingGetSite (id: string) {
  const { marketingGetSite } = await graphQLClient.request<{
    marketingGetSite: Site;
  }>(MARKETING_GET_SITE, {id: id}, { cache: 'no-store'});
  return marketingGetSite;
};
export async function getSiteMarketingByMiddleware (id: string) {
  const { getSiteMarketing } = await graphQLClient.request<{
    getSiteMarketing: Site;
  }>(GET_SITE_MARKETING_BY_MIDDLEWARE, {id: id}, { cache: 'no-store'});
  return getSiteMarketing;
};

// export async function fetchSiteMarketing(siteId: string): Promise<{data: {findSiteMarketing: Site}}>{
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