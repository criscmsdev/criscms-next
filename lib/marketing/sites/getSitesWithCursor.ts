import { graphQLClient } from '@/graphql/graphqlClient';
import { ConnectionArgs, ListSite } from '@/interfaces/site.interface';
import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';

export const MARKETING_GET_SITES_WITH_CURSOR = gql`
  query MarketingGetSitesWithCursor($args: ConnectionArgs!) {
    marketingGetSitesWithCursor(args: $args) {
      page {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            dataSite {
              name
              type
            }
            url
          }
        }
      }
      pageData {
        count
        limit
        offset
      }
    }
  }
`;

export async function marketingGetSitesWithCursor(args: ConnectionArgs) {
  const { marketingGetSitesWithCursor } = await graphQLClient.request<{
    marketingGetSitesWithCursor: ListSite;
  }>(MARKETING_GET_SITES_WITH_CURSOR, { args: args }, { cache: 'no-store' });
  return marketingGetSitesWithCursor;
}


