

import { ListPage, Page } from "@/interfaces/page.interface";
import { ConnectionArgs, ListSite } from "@/interfaces/site.interface";
import { listPages0FoodWithCursor } from "@/lib/food/pages/pages0/listPagesWithCursor";
import { useQuery } from "@tanstack/react-query";


export function useListPages0WithCursor(args:ConnectionArgs, parentId:string, listPage: ListPage) {
  return useQuery<ListPage>(["find-pages0-food-with-cursor", args, parentId], () => listPages0FoodWithCursor(args, parentId), {initialData: listPage});
}
