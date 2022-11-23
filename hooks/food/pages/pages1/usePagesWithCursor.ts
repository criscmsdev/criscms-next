

import { ListPage, Page } from "@/interfaces/page.interface";
import { ConnectionArgs, ListSite } from "@/interfaces/site.interface";
import { listPages1FoodWithCursor } from "@/lib/food/pages/pages1/listPagesWithCursor";
import { useQuery } from "@tanstack/react-query";


export function useListPages1WithCursor(args:ConnectionArgs, parentId:string, listPage: ListPage) {
  return useQuery<ListPage>(["find-pages1-with-cursor", args, parentId], () => listPages1FoodWithCursor(args, parentId), {initialData: listPage});
}
