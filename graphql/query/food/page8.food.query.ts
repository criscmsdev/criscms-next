import { gql } from "graphql-request";

export const FIND_PAGES_8_FOOD_BY_PARENT_ID = gql`
  query FindPages8FoodByParentId($parentId: String!) {
    findPages8FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_8_FOOD = gql`
  query FindPages8Food {
    findPages8Food {
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
export const FIND_PAGE_8_FOOD = gql`
  query FindPage8Food($id:String!) {
    findPage8Food(id:$id) {
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