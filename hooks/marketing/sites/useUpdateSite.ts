import { UpdateSite } from "@/interfaces/site.interface";
import { marketingUpdateSite } from "@/lib/marketing/sites/updateSite";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";


export const useMarketingUpdateSite = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (inputUpdate:UpdateSite) => marketingUpdateSite(inputUpdate),
    {
      onSuccess: async (updateSite, {id}) => {
        queryClient.setQueryData(['marketing-get-site', id], updateSite);
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
