import { UpdateSite, UpdateSiteDB } from "@/interfaces/site.interface";
import { updateSiteDBMarketing } from "@/lib/marketing/sites/updateSiteDB";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";


export const useUpdateDBSiteMarketing = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (inputDB:UpdateSiteDB) => updateSiteDBMarketing(inputDB),
    {
      onSuccess: async (updateSiteDBMarketing, {id}) => {
        queryClient.setQueryData(['get-site-marketing', id], updateSiteDBMarketing);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Site",
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
