import { gql } from "graphql-request";

export const FIND_PAGES_9_FOOD_BY_PARENT_ID = gql`
  query FindPages9FoodByParentId($parentId: String!) {
    findPages9FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_9_FOOD = gql`
  query FindPages9Food {
    findPages9Food {
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
export const FIND_PAGE_9_FOOD = gql`
  query FindPage9Food($id:String!) {
    findPage9Food(id:$id) {
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