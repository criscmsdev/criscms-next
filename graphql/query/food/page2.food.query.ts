import { gql } from "graphql-request";

export const FIND_PAGES_2_FOOD_BY_PARENT_ID = gql`
  query FindPages2FoodByParentId($parentId: String!) {
    findPages2FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_2_FOOD = gql`
  query FindPages2Food {
    findPages2Food {
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
export const FIND_PAGE_2_FOOD = gql`
  query FindPage2Food($id:String!) {
    findPage2Food(id:$id) {
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