import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      username:string
      email:string
      image: {
        src:string
        alt: string
      }
      role: string
      sid: string
    },

  }
  interface User {
    username: string;
    role: string;
    email:string
    sid: string
    parentSid:string


  }
}
declare module "next-auth/jwt" {
  interface JWT {
    username: string;
    role: string;
    email:string
    sid: string
    parentSid:string
  }
}
