import { NextFetchEvent, NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import {
  getSiteMarketingByMiddleware,
} from './lib/marketing/sites/getSite';
import { GET_SITE_MARKETING_BY_MIDDLEWARE } from './graphql/query/marketing/site.marketing.query';
let site;
export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // const token = await getToken({ req });
  // const site = event.waitUntil(
  //    fetch('http://localhost:6002/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: `
  //       query GetSiteMarketing($id: String!) {
  //         getSiteMarketing(id: $id) {
  //           data {
  //             siteAdministrators{
  //               privilege
  //               sid
  //             }
  //           }
  //         }
  //       }
  //     `,
  //       variables: {
  //         id: "6374d29657200958d1d8782b",
  //       },
  //     }),
  //   }),
  // );
  // console.log('site', site);
  // const site = await
  // console.log('tokenUser', token);
  // console.log('site', site);
  // if (req.nextUrl.pathname.startsWith('/dashboard/sites/marketing')) {
  //   // event.waitUntil(
  //   // );
  //   // console.log('site', site)
  //   // console.log('siteMiddleware', site)
  //   if (!['SUPER_ROL', 'ADMIN_ROL'].includes(token?.role!))
  //     return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  // }
  // if (req.nextUrl.pathname.startsWith('/dashboard')) {
  //   if (token?.role !== 'SUPER_ROL')
  //     return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  // }



  // if (!['SUPER_ROL'].includes(token?.role!))
  //   return NextResponse.redirect(new URL('/api/auth/signin', req.url));
}

export const config = {
  // matcher: '/dashboard/:path*',
};
