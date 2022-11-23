import { gql } from "graphql-request";

export const FIND_PAGES_3_FOOD_BY_PARENT_ID = gql`
  query FindPages3FoodByParentId($parentId: String!) {
    findPages3FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_3_FOOD = gql`
  query FindPages3Food {
    findPages3Food {
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
export const FIND_PAGE_3_FOOD = gql`
  query FindPage3Food($id:String!) {
    findPage3Food(id:$id) {
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