import { UpdateSite } from "@/interfaces/site.interface";
import { updateSiteFood } from "@/lib/food/sites/updateSite";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";


export const useUpdateSiteFood = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (inputUpdate:UpdateSite) => updateSiteFood(inputUpdate),
    {
      onSuccess: async (updateSite, {id}) => {
        queryClient.setQueryData(['find-site-food', id], updateSite);
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
