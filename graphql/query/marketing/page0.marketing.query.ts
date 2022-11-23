import { gql } from "graphql-request";

export const GET_PAGES_0_MARKETING_BY_PARENT_ID = gql`
  query GetPages0MarketingByParentId($parentId: String!) {
    getPages0MarketingByParentId(parentId: $parentId) {
      _id
      slug
      parentId
      siteId
      data{
        type
        seo{
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
`;
export const GET_PAGES_0_MARKETING = gql`
  query GetPages0Marketing {
    getPages0Marketing {
      _id
      siteId
      data{
        seo{
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
`;
export const GET_PAGE_0_MARKETING = gql`
  query GetPage0Marketing($id:String!) {
    getPage0Marketing(id:$id) {
      _id
      siteId
      parentId
      data{
        type
        seo{
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
`;
