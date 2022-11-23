// import { Pages1FoodPagination } from '@/components/grid/gridPage1Pagination';
import { findPage0Food } from '@/lib/food/pages/pages0/findPage';
import { findPages0Food } from '@/lib/food/pages/pages0/findPages';
import { listPages1FoodWithCursor } from '@/lib/food/pages/pages1/listPagesWithCursor';
import { Pages1FoodPagination } from '@/ui/grid/gridPage1Pagination';
import { HeadingDashboardFood } from '@/ui/heading/HeadingDashboardFood';
import { Fragment, use } from 'react'

interface Page {
  params: {
    siteId: string
    page0Id: string
  }
}

export default async function Page(ctx: Page) {
  const { params } = ctx

  // const page0 = await findPage0Food(params.page0Id)
  // const pages1Pagination =  await listPages1FoodWithCursor({first: 12}, params.page0Id)

  return (
    <Fragment>
      {/* <HeadingDashboardFood page={page0!}/>
      <Pages1FoodPagination pages1={pages1Pagination}/> */}
      
    </Fragment>
  )
}

// export async function generateStaticParams() {
//   const pages = await findPages0Food();
//   return pages.map(data => ({siteId: data.siteId, page0Id: data._id}))
// }