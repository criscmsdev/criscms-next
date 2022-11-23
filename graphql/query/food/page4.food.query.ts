import { gql } from "graphql-request";

export const FIND_PAGES_4_FOOD_BY_PARENT_ID = gql`
  query FindPages4FoodByParentId($parentId: String!) {
    findPages4FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_4_FOOD = gql`
  query FindPages4Food {
    findPages4Food {
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
export const FIND_PAGE_4_FOOD = gql`
  query FindPage4Food($id:String!) {
    findPage4Food(id:$id) {
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