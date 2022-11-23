import { gql } from "graphql-request";

export const FIND_PAGES_5_FOOD_BY_PARENT_ID = gql`
  query FindPages5FoodByParentId($parentId: String!) {
    findPages5FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_5_FOOD = gql`
  query FindPages5Food {
    findPages5Food {
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
export const FIND_PAGE_5_FOOD = gql`
  query FindPage5Food($id:String!) {
    findPage5Food(id:$id) {
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