

import { marketingGetSitesWithCursor } from '@/lib/marketing/sites/getSitesWithCursor';
import { GridSitesMarketingPagination } from '@/ui/grid/gridSitesMarketingPagination';
import { HeadingDashboardFood } from '@/ui/heading/HeadingDashboardFood';
import { Fragment } from 'react'




export default async function Page() {
  // const getSitesWithCursor = await marketingGetSitesWithCursor({first: 12});
  return (
    <Fragment>
      <HeadingDashboardFood title='Sites Marketing' />
      <GridSitesMarketingPagination />
    </Fragment>
  )
}
