
import { listPages0FoodWithCursor } from '@/lib/food/pages/pages0/listPagesWithCursor';
import { findSiteFood } from '@/lib/food/sites/findSite';
import { findSitesFood } from '@/lib/food/sites/findSites';
import { Pages0FoodPagination } from '@/ui/grid/gridPage0Pagination';
import { HeadingDashboardFood } from '@/ui/heading/HeadingDashboardFood';
import { GlobalNav } from '@/ui/navbar/nav';
import { Fragment,  use } from 'react'

interface Page{
  params: {
    siteId: string
  }
}

export default async function Page(ctx: Page) {
  const { params } = ctx
  // const site =  await findSiteFood(params.siteId);
  // const pages0Pagination = await listPages0FoodWithCursor({first: 12}, params.siteId)
  
  return (
    <Fragment>
      {/* <HeadingDashboardFood site={site}/> */}
      {/* <div className="grid grid-cols-8 gap-6">
        <div className="col-span-2">
          <GlobalNav />
        </div>
        <div className="col-span-6 space-y-6">

        </div>
      </div> */}
          {/* <Pages0FoodPagination pages0={pages0Pagination}/> */}

    </Fragment>
  )
}
// export async function generateStaticParams() {
//   const sites = await findSitesFood();
//   return sites.map(data => ({siteId: data._id}))
  
// }