'use client'

import { useListPages0WithCursor } from "@/hooks/food/pages/pages0/usePagesWithCursor";
import { useListPages1WithCursor } from "@/hooks/food/pages/pages1/usePagesWithCursor";
import { ListPage } from "@/interfaces/page.interface";
import { ConnectionArgs } from "@/interfaces/site.interface";
import { getQuery } from "@/src/utils";
import { useSelections } from "ahooks";
import { usePathname } from "next/navigation";
import { Fragment, useMemo, useState } from "react";
import { CardPage0Pagination } from "../card/cardPage0Pagination";
import { CardPage1Pagination } from "../card/cardPage1Pagination";
import { HeadingDashboardOption } from "../heading/HeadingDashboardOptions";
import { PaginationPages } from "../pagination/paginationPages";


interface Pages1FoodPagination {
  pages1: ListPage
}

export  function Pages1FoodPagination({ pages1 }: Pages1FoodPagination) {
  const [amount, setAmount] = useState(12)
  const [args, setArgs] = useState<ConnectionArgs>({
    first: amount,
  })
  const pathname = usePathname()
  const query = getQuery(pathname!)
  const { data: listPages1Food, } = useListPages1WithCursor(args, query[5], pages1)
    // console.log('listPages1Food', listPages1Food);
    
  const listPageFood = useMemo(() => listPages1Food, [listPages1Food])

  const { selected, allSelected, noneSelected, isSelected, toggle, toggleAll, unSelectAll } = useSelections(
    listPageFood?.page.edges.map(data => data.node.id)!
  );
  return (
    <Fragment>
      <HeadingDashboardOption checked={allSelected} toggleAll={toggleAll} selected={selected} unSelectAll={unSelectAll} />
      <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 py-6 sm:pt-10`}>
        {
          listPageFood?.page.edges.map((data, i) => <CardPage1Pagination key={i} page={data} checked={isSelected(data.node.id)} toggle={() => toggle(data.node.id)} partiallySelected={selected.length !== 0} />)
        }
      </div>
      <PaginationPages amount={amount} pageInfo={listPageFood?.page.pageInfo!} pageData={listPageFood?.pageData!} />

    </Fragment>

  )
}