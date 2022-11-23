import { gql } from 'graphql-request';



export const UPDATE_SITE_MARKETING_IMAGE = gql`
  mutation UpdateSiteImageMarketing(
    $inputImage: UpdateImage!
  ) {
    updateSiteImageMarketing(
      inputImage: $inputImage
    ) {
      _id
      data {
        name
        description
        type
       
        siteDB {
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

export const UPDATE_SITE_MARKETING_DB = gql`
  mutation UpdateSiteDBMarketing($inputDB: UpdateDataBase!) {
    updateSiteDBMarketing(inputDB: $inputDB) {
      _id
      data {
        name
        description
        type
        siteDB {
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
export const DELETE_SITE_MARKETING = gql`
  mutation DeleteSiteMarketing($id: String!) {
    deleteSiteMarketing(id: $id)
  }
`;
export const DELETE_SITES_MARKETING = gql`
  mutation DeleteSitesMarketing($ids: [String!]!) {
    deleteSitesMarketing(ids: $ids)
  }
`;
