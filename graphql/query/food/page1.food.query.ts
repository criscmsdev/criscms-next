import { gql } from "graphql-request";

export const FIND_PAGES_1_FOOD_BY_PARENT_ID = gql`
  query FindPages1FoodByParentId($parentId: String!) {
    findPages1FoodByParentId(parentId: $parentId) {
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
export const FIND_PAGES_1_FOOD = gql`
  query FindPages1Food {
    findPages1Food {
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
export const FIND_PAGE_1_FOOD = gql`
  query FindPage1Food($id:String!) {
    findPage1Food(id:$id) {
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
export const FIND_PAGES1_FOOD_WITH_CURSOR = gql`
  query ListPages1FoodWithCursor($args: ConnectionArgs!, $parentId: String!) {
    listPages1FoodWithCursor(args: $args, parentId: $parentId) {
      pageData {
        count
        limit
        offset
      }
      page {
        edges {
          node {
            _id

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
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;