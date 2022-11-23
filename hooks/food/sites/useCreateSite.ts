
import { CreateSite, ListSite, Site } from "@/interfaces/site.interface";
import { createSiteFood } from "@/lib/food/sites/createSite";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
 
export function useCreateSiteFood() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  let myObj:any = {};
  searchParams.forEach((value, key) => {myObj[key] = ['first', 'last'].includes(key) ? Number(value): value})
  return useMutation(
    async (inputCreate: CreateSite) => await createSiteFood(inputCreate),
    // async (inputCreate: CreateSite) => {
    //   const { createSiteFood } = await graphQLClient.request<{createSiteFood: Site}>(CREATE_SITE_FOOD, {
    //     inputCreate,
    //   });
    //   return createSiteFood;
    // },
    {
      onSuccess: async (createSiteFood) => {
        // queryClient.setQueryData<ListSite>(["find-sites-food-with-cursor", {first:12}], old => [...old?.page.edges.map(data => data.node), createSiteFood]);
        // console.log('createSiteFood', createSiteFood)
        
        queryClient.invalidateQueries<ListSite>({queryKey: ["find-sites-food-with-cursor", myObj]});
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Site",
          showConfirmButton: false,
          timer: 1000,
        });
      },
      onError: (error: { response: { errors: [{ message: string }] } }) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.errors[0].message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    }
  );
};

