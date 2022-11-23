// 'use client'

import { FC, useRef } from "react";
import { useLongPress } from 'ahooks';
import Link from "next/link";
import { EdgePage } from "@/interfaces/page.interface";
import { usePathname } from "next/navigation";
import { getQuery } from "@/src/utils";

interface CardPage1Pagination {
  page?: EdgePage
  checked: boolean
  partiallySelected: boolean
  toggle: () => void
}
export  function CardPage1Pagination({ page, checked, partiallySelected,  toggle }: CardPage1Pagination) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname()
  const query = getQuery(pathname!)
  useLongPress(toggle, ref, {
    moveThreshold: { x: 5, y: 5 },
  }, );
  return (
    <div   className="card-dashboard group">
      {/* <input
        type="checkbox"
        className={`card-dashboard-input ${partiallySelected  && "opacity-100"} `}
      onChange={toggle}  
      checked={checked}
      />
      <div ref={ref} className="">
      <img
        className="h-[12rem] w-full object-cover"
        src={page?.node.data.seo.image?.src! || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"}
        alt={page?.node.data.seo.image?.alt! || 'image description'}
      />
        <Link href={`/dashboard/sites/${query[2]}/${page?.node.siteId}/page1/${page?.node._id}`} className="flex items-center h-[3rem] mx-2 cursor-pointer">
          <h2 className=" text-sm tracking-wide truncate">{page?.node.data.seo.title}</h2>
        </Link>
      </div> */}

    </div>
  )
}