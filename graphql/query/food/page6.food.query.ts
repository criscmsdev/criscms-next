import { gql } from "graphql-request";

export const FIND_PAGES_6_FOOD_BY_PARENT_ID = gql`
  query FindPages6FoodByParentId($parentId: String!) {
    findPages6FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_6_FOOD = gql`
  query FindPages6Food {
    findPages6Food {
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
export const FIND_PAGE_6_FOOD = gql`
  query FindPage6Food($id:String!) {
    findPage6Food(id:$id) {
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