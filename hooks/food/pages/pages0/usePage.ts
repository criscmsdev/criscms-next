
import { Page } from "@/interfaces/page.interface";
import { findPage0Food } from "@/lib/food/pages/pages0/findPage";
import { useQuery } from "@tanstack/react-query";




export function usePage0Food(id:string) {
  return useQuery(["find-page0-food", id], () => findPage0Food(id));
}
