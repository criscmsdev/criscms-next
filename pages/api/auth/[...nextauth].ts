// import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
//     }),
//     // Credentials({
//     //   name: "crisCRM",
//     //   credentials: {
//     //     email: { label: "email", type: "email", placeholder: " hola@hola.com" },
//     //     password: {
//     //       label: "password",
//     //       type: "password",
//     //       placeholder: " 123fgt",
//     //     },
//     //   },
//     //   async authorize(credentials) {
//     //     return null
//     //   }
//     // }),
//     // ...add more providers here
//   ],
//   // pages:{
//   //   // signIn: '/auth/login',
//   //   // newUser: '/auth/register'
//   // },
//   session: {
//     maxAge: 2592000,
//     strategy: 'jwt',
//     updateAge: 86400,
//   },
//   //Callbacks
//   callbacks: {
//     async jwt({token, account, user}) {
//       if (account) {
//         token.accessToken = account.access_token;
//         switch( account.type ){
//           case 'oauth':
//             // const data = await oAUthToDbUser(user?.email || '', user?.name || '', user?.image|| '', account?.provider|| '')
//             // token.user = data
//             // token.role = data.role
//           break
//           case 'credentials':
//             token.user = user;
//           break
//         }
//       }
//       return token
//     },
//     async session({session, token, user}) {
//       console.log({session, token, user})
//       // session.accessToken = token.accessToken;
//       // session.
//       return session
//     }
//   }
// });
import NextAuth from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import CredentialsProvider from 'next-auth/providers/credentials';
import Credentials from 'next-auth/providers/credentials';
import { getUserByEmailMarketing } from '@/lib/marketing/users/getUser';
import bcrypt from 'bcrypt';
// import GoogleProvider from "next-auth/providers/google"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    // CredentialsProvider(...),
    Credentials({
      name: 'criscms',
      credentials: {
        email: {
          label: 'email;',
          type: 'email',
          placeholder: ' correo@correo.com',
        },
        password: {
          label: 'password:',
          type: 'password',
          placeholder: ' 123fgt',
        },
      },
      async authorize(credentials) {
        // console.log('credentials', credentials);

        return await checkUserEmailPassword(
          credentials!.email,
          credentials!.password,
        ) as any;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ];

  // const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes("signin")

  // // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
  // if (isDefaultSigninPage) providers.pop()

  return await NextAuth(req, res, {
    providers,
    callbacks: {
      async jwt({ token, account, user }) {
        // console.log('jtw', {token, account, user})
        // console.log('token', token)
        if (account) {
          // token.accessToken = account.access_token;
          switch (account.type) {
            case 'credentials':
              token.username = user?.username!
              token.role = user?.role!
              token.sid = user?.sid!
              token.parentSid = user?.parentSid!
              break;
            case 'oauth':
              break;
          }
        }
        return token;
      },
      async session({ session, token, user }) {
        // console.log('session', { session, token, user });
        // Return a cookie value as part of the session
        // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
        session.user = token as any
        return session;
      },
    },
  });
}

async function checkUserEmailPassword(email: string, password: string) {
  const user = await getUserByEmailMarketing(email);
  if (!user) {
    return null;
  }
  if (!bcrypt.compareSync(password, user.data.password)) {
    return null;
  }
  return {username:user.data.username, role:user.data.role, sid: user._id, image: user.data.image, email: user.email, parentSid: user.siteId};
}
