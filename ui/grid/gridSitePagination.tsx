'use client';

import { ConnectionArgs, ListSite } from 'interfaces';
import { useSelections } from 'ahooks';
import { Fragment, useMemo, useState } from 'react';
import { CardSitePagination } from '../card/cardSitePagination';
import { PaginationSites } from '../pagination/paginationSites';
import { HeadingDashboardOption } from '../heading/HeadingDashboardOptions';
import { useListSitesFoodWithCursor } from '@/hooks/food/sites/useListSitesWithCursor';
import { usePathname, useSearchParams } from 'next/navigation';

interface SitesFoodPagination {
  sites: ListSite;
}

export function SitesFoodPagination({ sites }: SitesFoodPagination) {
  const [amount, setAmount] = useState(12);
  const searchParams = useSearchParams();
  let myObj:any = {};
  searchParams.forEach((value, key) => {myObj[key] = ['first', 'last'].includes(key) ? Number(value): value})
  // console.log('myObj', myObj)
  const { data: sitesFood } = useListSitesFoodWithCursor(myObj, sites);
  const listFood = useMemo(() => sitesFood, [sitesFood]);

  const {
    selected,
    allSelected,
    noneSelected,
    isSelected,
    toggle,
    toggleAll,
    unSelectAll,
  } = useSelections(listFood?.page.edges.map((data) => data.node.id)!);
  return (
    <Fragment>
      <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} />
      <div
        className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 py-6 sm:pt-10`}
      >
        {listFood?.page.edges.map((data, i) => (
          <CardSitePagination
            key={i}
            site={data}
            checked={isSelected(data.node.id)}
            toggle={() => toggle(data.node.id)}
            partiallySelected={selected.length !== 0}
          />
        ))}
      </div>
      <PaginationSites
        // setArgs={setArgs}
        amount={amount}
        pageInfo={listFood?.page.pageInfo!}
        pageData={listFood?.pageData!}
      />
    </Fragment>
  );
}
