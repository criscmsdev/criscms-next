// 'use client'

import { useRef } from "react";
import { useLongPress } from 'ahooks';
import Link from "next/link";
import { EdgeSite } from "interfaces";

interface CardSitePagination {
  site?: EdgeSite
  checked: boolean
  partiallySelected: boolean
  toggle: () => void
}
export  function CardSitePagination({ site, checked, partiallySelected,  toggle }: CardSitePagination) {
  const ref = useRef<HTMLDivElement>(null);
  useLongPress(toggle, ref, {
    moveThreshold: { x: 5, y: 5 },
  }, );
  return (
    <div   className="card-dashboard group">
      <input
        type="checkbox"
        className={`card-dashboard-input ${partiallySelected  && "opacity-100"}`}
      onChange={toggle}  
      checked={checked}
      />
      <div ref={ref} className="">
      <img
        className="h-[12rem] w-full object-cover"
        src={site?.node.dataSite.imageSite?.banner.src! || "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg"}
        alt={site?.node.dataSite.imageSite?.banner.alt! || 'image description'}
      />
        <Link href={`/dashboard/sites/${site?.node.dataSite.type}/${site?.node.id}?first=12`} className="flex items-center h-[3rem] mx-2 cursor-pointer">
          <h2 className=" text-sm tracking-wide truncate">{site?.node.dataSite.name}</h2>
        </Link>
      </div>

    </div>
  )
}