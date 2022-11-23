import { gql } from 'graphql-request';

export const CREATE_USER_MARKETING = gql`
  mutation CreateUserMarketing($inputCreate: CreateUser!) {
    createUserMarketing(inputCreate: $inputCreate) {
      _id
      data {
        type
        
      }
    }
  }
`;