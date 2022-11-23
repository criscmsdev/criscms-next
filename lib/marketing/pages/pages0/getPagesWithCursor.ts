
import { graphQLClient } from "@/graphql/graphqlClient";
import { ListPage } from "@/interfaces/page.interface";
import { ConnectionArgs,  } from "@/interfaces/site.interface";
import { gql } from "graphql-request";

export const MARKETING_GET_PAGES0_WITH_CURSOR = gql`
  query MarketingGetPages0WithCursor($args: ConnectionArgs!, $parentId: String!) {
    marketingGetPages0WithCursor(args: $args, parentId: $parentId) {
      pageData {
        count
        limit
        offset
      }
      page {
        edges {
          node {
            id
            siteId
            dataPage{
              type
              seoPage{
                title
                description
                image{
                  src
                  alt
                }
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;

export async function marketingGetPages0WithCursor(args:ConnectionArgs, parentId: string)  {
  const { marketingGetPages0WithCursor } = await graphQLClient.request<{
    marketingGetPages0WithCursor: ListPage
  }>(MARKETING_GET_PAGES0_WITH_CURSOR, {args: args, parentId: parentId}, { cache: 'no-store'});
  return marketingGetPages0WithCursor;
};

// export function useListSitesWithCursor(args:ConnectionArgs) {
//   return useQuery<ListResponse>(["find-sites-with-cursor", args], () => getSitesWithCursor(args));
// }
