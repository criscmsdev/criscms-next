
import { CreateSite, ListSite, Site } from "@/interfaces/site.interface";
import { marketingCreateSite } from "@/lib/marketing/sites/createSite";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
 
export function useMarketingCreateSite() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  let myObj:any = {};
  searchParams.forEach((value, key) => {myObj[key] = ['first', 'last'].includes(key) ? Number(value): value})
  return useMutation(
    async (inputCreate: CreateSite) => await marketingCreateSite(inputCreate),
    {
      onSuccess: async (createSiteMarketing) => {
        queryClient.invalidateQueries<ListSite>({queryKey: ["marketing-get-sites-with-cursor", myObj]});
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

