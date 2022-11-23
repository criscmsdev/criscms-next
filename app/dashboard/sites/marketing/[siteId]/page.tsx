
import { marketingGetPages0WithCursor } from '@/lib/marketing/pages/pages0/getPagesWithCursor';
import { marketingGetSite } from '@/lib/marketing/sites/getSite';
import {  marketingGetSites } from '@/lib/marketing/sites/getSites';
import { Pages0MarketingPagination } from '@/ui/grid/gridPage0MarketingPagination';
import { HeadingDashboardMarketing } from '@/ui/heading/HeadingDashboardMarketing';
import { Fragment, use } from 'react';

interface Page {
  params: {
    siteId: string;
  };
}

export default async function Page(ctx: Page) {
  const { params } = ctx;
  const site = await marketingGetSite(params.siteId);
  // const site1 = await getSiteMarketingByMiddleware(params.siteId)
  const pages0Pagination = await marketingGetPages0WithCursor(
    { first: 12 },
    params.siteId,
  );
  return (
    <Fragment>
      <HeadingDashboardMarketing site={site} />
      <Pages0MarketingPagination pages0={pages0Pagination} />
    </Fragment>
  );
}
export async function generateStaticParams() {
  const sites = await marketingGetSites();
  return sites.map((data) => ({ siteId: data.id }));
}
