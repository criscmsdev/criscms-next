import { graphQLClient } from "@/graphql/graphqlClient";
// import { CREATE_SITE_MARKETING } from "@/graphql/mutate/marketing/site.marketing.mutate";
import { CreateUser, User } from "@/interfaces/user.interface";

const CREATE_SITE_MARKETING =""

export async function createUserMarketing  (inputCreate: CreateUser ) {
  const { createUserMarketing } = await graphQLClient.request<{createUserMarketing: User}>(CREATE_SITE_MARKETING, {
    inputCreate,
  });
  return createUserMarketing;
};