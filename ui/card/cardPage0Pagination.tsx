// 'use client'

import { FC, useRef } from "react";
import { useLongPress } from 'ahooks';
import Link from "next/link";
import { EdgePage } from "@/interfaces/page.interface";
import { usePathname } from "next/navigation";
import { getQuery } from "@/src/utils";

interface CardPage0Pagination {
  page?: EdgePage
  checked: boolean
  partiallySelected: boolean
  toggle: () => void
}
export  function CardPage0Pagination({ page, checked, partiallySelected,  toggle }: CardPage0Pagination) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname()
  const query = getQuery(pathname!)
  useLongPress(toggle, ref, {
    moveThreshold: { x: 5, y: 5 },
  }, );
  return (
    <div   className="card-dashboard group">
      <input
        type="checkbox"
        className={`card-dashboard-input ${partiallySelected  && "opacity-100"} `}
      onChange={toggle}  
      checked={checked}
      />
      <div ref={ref} className="">
      <img
        className="h-[12rem] w-full object-cover"
        src={page?.node.dataPage.seoPage.image?.src! || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"}
        alt={page?.node.dataPage.seoPage.image?.alt! || 'image description'}
      />
        <Link href={`/dashboard/sites/${query[2]}/${page?.node.siteId}/page0/${page?.node.id}`} className="flex items-center h-[3rem] mx-2 cursor-pointer">
          <h2 className=" text-sm tracking-wide truncate">{page?.node.dataPage.seoPage.title}</h2>
        </Link>
      </div>

    </div>
  )
}