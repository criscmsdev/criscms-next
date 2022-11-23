import { gql } from "graphql-request";

export const FIND_PAGES_7_FOOD_BY_PARENT_ID = gql`
  query FindPages7FoodByParentId($parentId: String!) {
    findPages7FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_7_FOOD = gql`
  query FindPages7Food {
    findPages7Food {
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
export const FIND_PAGE_7_FOOD = gql`
  query FindPage7Food($id:String!) {
    findPage7Food(id:$id) {
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