import { gql } from "graphql-request";

export const FIND_PAGES_12_FOOD_BY_PARENT_ID = gql`
  query FindPages12FoodByParentId($parentId: String!) {
    findPages12FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_12_FOOD = gql`
  query FindPages12Food {
    findPages12Food {
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
export const FIND_PAGE_12_FOOD = gql`
  query FindPage12Food($id:String!) {
    findPage12Food(id:$id) {
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