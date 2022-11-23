import { graphQLClient } from "@/graphql/graphqlClient";
import { GET_USER_BY_EMAIL_MARKETING, GET_USER_MARKETING } from "@/graphql/query/marketing/user.marketing.query";
import { User } from "@/interfaces/user.interface";

export async function getUserMarketing (id: string) {
  const { getUserMarketing } = await graphQLClient.request<{
    getUserMarketing: User;
  }>(GET_USER_MARKETING, {id: id}, { cache: 'no-store'});
  return getUserMarketing;
};

export async function getUserByEmailMarketing (email: string) {
  const { getUserByEmailMarketing } = await graphQLClient.request<{
    getUserByEmailMarketing: User;
  }>(GET_USER_BY_EMAIL_MARKETING, {email: email}, { cache: 'no-store'});
  return getUserByEmailMarketing;
};
