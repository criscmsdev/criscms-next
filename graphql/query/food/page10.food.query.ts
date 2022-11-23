import { gql } from "graphql-request";

export const FIND_PAGES_10_FOOD_BY_PARENT_ID = gql`
  query FindPages10FoodByParentId($parentId: String!) {
    findPages10FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_10_FOOD = gql`
  query FindPages10Food {
    findPages10Food {
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
export const FIND_PAGE_10_FOOD = gql`
  query FindPage10Food($id:String!) {
    findPage10Food(id:$id) {
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