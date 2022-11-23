
import { graphQLClient } from "@/graphql/graphqlClient";
import { DELETE_SITES_MARKETING } from "@/graphql/mutate/marketing/site.marketing.mutate";
import { ListSite } from "@/interfaces/site.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";


export const useDeleteSitesMarketing = () => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  let myObj:any = {};
  searchParams.forEach((value, key) => {myObj[key] = ['first', 'last'].includes(key) ? Number(value): value})
  return useMutation(
    async (ids: string[]) => {
      const { deleteSitesMarketing } = await graphQLClient.request<{deleteSitesMarketing: string[]}>(DELETE_SITES_MARKETING, {
        ids
      });
      return deleteSitesMarketing;
    },
    {
      onSuccess:  (deleteSitesMarketing) => {
        queryClient.invalidateQueries<ListSite>({queryKey: ["get-sites-marketing-with-cursor", myObj]});

        // queryClient.setQueryData<Site[]>(["find-sites-food"],  (old) => old!.filter((site) => deleteSitesMarketing.indexOf(site._id) < 0));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        })
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

