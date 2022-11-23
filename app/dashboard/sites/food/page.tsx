

import { listSitesFoodWithCursor } from '@/lib/food/sites/listSitesWithCursor';
import { SitesFoodPagination } from '@/ui/grid/gridSitePagination';
import { HeadingDashboardFood } from '@/ui/heading/HeadingDashboardFood';
import { Fragment } from 'react'




export default async function Page() {
  // const sitesFood = await listSitesFoodWithCursor({first: 12});
  return (
    <Fragment>
      <HeadingDashboardFood />
      {/* <SitesFoodPagination sites={sitesFood}/> */}

      <h1>Foods</h1>
    </Fragment>
  )
}
