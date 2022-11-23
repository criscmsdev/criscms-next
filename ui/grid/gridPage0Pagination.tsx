'use client'

import { useListPages0WithCursor } from "@/hooks/food/pages/pages0/usePagesWithCursor";
import { ListPage } from "@/interfaces/page.interface";
import { ConnectionArgs } from "@/interfaces/site.interface";
import { getQuery } from "@/src/utils";
import { useSelections } from "ahooks";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useMemo, useState } from "react";
import { CardPage0Pagination } from "../card/cardPage0Pagination";
import { HeadingDashboardOption } from "../heading/HeadingDashboardOptions";
import { PaginationPages } from "../pagination/paginationPages";


interface Pages0FoodPagination {
  pages0: ListPage
}

export  function Pages0FoodPagination({ pages0 }: Pages0FoodPagination) {
  const [amount, setAmount] = useState(12)
  // const [args, setArgs] = useState<ConnectionArgs>({
  //   first: amount,
  // })
  const searchParams = useSearchParams();
  let myObj:any = {};
  searchParams.forEach((value, key) => {myObj[key] = ['first', 'last'].includes(key) ? Number(value): value})

  const pathname = usePathname()
  const query = getQuery(pathname!)

  
  const { data: listPages0Food, } = useListPages0WithCursor(myObj, query[3], pages0)
  // console.log('listPages0Food', )
  const listPageFood = useMemo(() => listPages0Food, [listPages0Food])

  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    listPageFood?.page.edges.map(data => data.node.id)!
  );
  return (
    <Fragment>
      <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 py-6 sm:pt-10`}>
        {
          listPageFood?.page.edges.map((data, i) => <CardPage0Pagination key={i} page={data} checked={isSelected(data.node.id)} toggle={() => toggle(data.node.id)} partiallySelected={selected.length !== 0} />)
        }
      </div>
      {
        listPages0Food.pageData.count > 12 &&

        <PaginationPages amount={amount} pageInfo={listPageFood?.page.pageInfo!} pageData={listPageFood?.pageData!} />
      }

    </Fragment>

  )
}