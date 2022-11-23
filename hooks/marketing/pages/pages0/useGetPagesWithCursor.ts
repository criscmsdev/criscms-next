

import { ListPage, Page } from "@/interfaces/page.interface";
import { ConnectionArgs, ListSite } from "@/interfaces/site.interface";
import { listPages0FoodWithCursor } from "@/lib/food/pages/pages0/listPagesWithCursor";
import { marketingGetPages0WithCursor } from "@/lib/marketing/pages/pages0/getPagesWithCursor";
import { useQuery } from "@tanstack/react-query";


export function useMarketingGetPages0WithCursor(args:ConnectionArgs, parentId:string, listPage: ListPage) {
  return useQuery<ListPage>(["marketing-get-pages0-with-cursor", args, parentId], () => marketingGetPages0WithCursor(args, parentId), {initialData: listPage});
}
