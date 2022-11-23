import { gql } from "graphql-request";

export const GET_USER_MARKETING = gql`
  query GetUserMarketing($id: String!) {
    getUserMarketing(id: $id) {
      _id
    }
  }
`;

export const GET_USER_BY_EMAIL_MARKETING = gql`
query GetUserByEmailMarketing($email: String!) {
  getUserByEmailMarketing(email: $email) {
    _id
    email
    siteId
    data{
      password
      username
      role
      image{
        src
        alt
      }
    }
  }
}
`