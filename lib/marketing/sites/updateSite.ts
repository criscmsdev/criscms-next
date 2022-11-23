

import { graphQLClient } from "@/graphql/graphqlClient";
import { Site, UpdateSite } from "@/interfaces/site.interface";
import { gql } from "graphql-request";

export const MARKETING_UPDATE_SITE = gql`
  mutation MarketingUpdateSite($inputUpdate: UpdateSite!) {
    marketingUpdateSite(inputUpdate: $inputUpdate) {
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

export async function marketingUpdateSite(inputUpdate: UpdateSite) {
  const { marketingUpdateSite } = await graphQLClient.request<{marketingUpdateSite: Site}>(MARKETING_UPDATE_SITE, {
    inputUpdate
  });
 return marketingUpdateSite
}