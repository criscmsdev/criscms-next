import { gql } from 'graphql-request';

export const CREATE_SITE_FOOD = gql`
  mutation CreateSiteFood($inputCreate: CreateSite!) {
    createSiteFood(inputCreate: $inputCreate) {
      _id
      data {
        type
        seo {
          title
          image {
            src
            alt
          }
        }
      }
    }
  }
`;
export const UPDATE_SITE_FOOD = gql`
  mutation UpdateSiteFood($inputUpdate: UpdateSite!) {
    updateSiteFood(inputUpdate: $inputUpdate) {
      _id
      data {
        name
        description
        type
        seo {
          title
          description
        }
        dataBase {
          uid
          label
          value
        }
        siteImages {
          banner {
            src
            alt
          }
          logo {
            src
            alt
          }
          icon {
            src
            alt
          }
        }
      }
      url
    }
  }
`;
export const UPDATE_SITE_FOOD_IMAGE = gql`
  mutation UpdateSiteImageFood(
    $inputImage: UpdateImage!
  ) {
    updateSiteImageFood(
      id: $id
      inputImage: $inputImage
      type: $type
      uid: $uid
    ) {
      _id
      data {
        name
        description
        type
        seo {
          title
          description
        }
        dataBase {
          uid
          label
          value
        }
        siteImages {
          banner {
            src
            alt
          }
          logo {
            src
            alt
          }
          icon {
            src
            alt
          }
        }
      }
      url
    }
  }
`;

export const UPDATE_SITE_FOOD_DB = gql`
  mutation UpdateDataBaseFood($id: String!, $inputDB: [UpdateDataBase!]!) {
    updateDataBaseFood(id: $id, inputDB: $inputDB) {
      _id
      data {
        name
        description
        type
        seo {
          title
          description
        }
        dataBase {
          uid
          label
          value
        }
        siteImages {
          banner {
            src
            alt
          }
          logo {
            src
            alt
          }
          icon {
            src
            alt
          }
        }
      }
      url
    }
  }
`;
export const DELETE_SITE_FOOD = gql`
  mutation DeleteSiteFood($id: String!) {
    deleteSiteFood(id: $id)
  }
`;
export const DELETE_SITES_FOOD = gql`
  mutation DeleteSitesFood($ids: [String!]!) {
    deleteSitesFood(ids: $ids)
  }
`;
