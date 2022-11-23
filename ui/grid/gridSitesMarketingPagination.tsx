'use client';
import { ListSite } from 'interfaces';
import { useSelections } from 'ahooks';
import { Fragment, useMemo, useState } from 'react';
import { CardSitePagination } from '../card/cardSitePagination';
import { PaginationSites } from '../pagination/paginationSites';
import { HeadingDashboardOption } from '../heading/HeadingDashboardOptions';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMarketingGetSitesWithCursor } from '@/hooks/marketing/sites/useGetSitesWithCursor';
interface GridSitesMarketingPagination {
  sites: ListSite;
}

export function GridSitesMarketingPagination() {
  const [amount, setAmount] = useState(12);
  const searchParams = useSearchParams();
  let myObj:any = {};
  searchParams.forEach((value, key) => {myObj[key] = ['first', 'last'].includes(key) ? Number(value): value})
  const { data: sitesMarketing } = useMarketingGetSitesWithCursor(myObj);
  const listMarketing = useMemo(() => sitesMarketing, [sitesMarketing]);

  const {
    selected,
    allSelected,
    noneSelected,
    isSelected,
    toggle,
    toggleAll,
    unSelectAll,
  } = useSelections(listMarketing?.page.edges.map((data) => data.node.id)!);
  return (
    <Fragment>
      <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} />
      <div
        className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 py-6 sm:pt-10`}
      >
        {listMarketing?.page.edges.map((data, i) => (
          <CardSitePagination
            key={i}
            site={data}
            checked={isSelected(data.node.id)}
            toggle={() => toggle(data.node.id)}
            partiallySelected={selected.length !== 0}
          />
        ))}
      </div>
      {
        listMarketing.pageData.count > 12 &&
      <PaginationSites
        amount={amount}
        pageInfo={listMarketing?.page.pageInfo!}
        pageData={listMarketing?.pageData!}
      />
      }
    </Fragment>
  );
}
