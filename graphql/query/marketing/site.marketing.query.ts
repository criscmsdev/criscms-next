import { gql } from "graphql-request";
export const GET_SITES_MARKETING_WITH_CURSOR = gql`
  query GetSitesMarketingWithCursor($args: ConnectionArgs!) {
    getSitesMarketingWithCursor(args: $args) {
      pageData {
        count
        limit
        offset
      }
      page {
        edges {
          node {
            _id
            data {
              name
              type
              siteImages{
                banner{
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
export const GET_SITES_MARKETING = gql`
  query GetSitesMarketing {
    getSitesMarketing {
      _id
    }
  }
`;


export const GET_SITE_MARKETING_BY_MIDDLEWARE = gql`
  query GetSiteMarketing($id: String!) {
    getSiteMarketing(id: $id) {
      data {
        siteAdministrators{
          privilege
          sid
        }
        
      }
    }
  }
`;
export const GET_SITE_MARKETING_BY_LAYOUT = gql`
  query GetSiteMarketing($id: String!) {
    getSiteMarketing(id: $id) {
      _id
      page{
        _id
        data {
          type
          
        }
        page{
          _id
          data {
            type
            seo {
              title
              href
            }
          }
          product{
            _id
            data{
              seo{
                title
                href
                image{
                  src
                  alt
                }
              }
            }
          }
        }
      }
      data {
        name
        description
      }
      url
      
    }
  }
`;
