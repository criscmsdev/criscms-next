import { gql } from "graphql-request";

export const FIND_PAGES_11_FOOD_BY_PARENT_ID = gql`
  query FindPages11FoodByParentId($parentId: String!) {
    findPages11FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_11_FOOD = gql`
  query FindPages11Food {
    findPages11Food {
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
export const FIND_PAGE_11_FOOD = gql`
  query FindPage11Food($id:String!) {
    findPage11Food(id:$id) {
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