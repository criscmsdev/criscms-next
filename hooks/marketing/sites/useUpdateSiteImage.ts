import { UpdateSite, UpdateSiteDB, UpdateSiteImage } from "@/interfaces/site.interface";
import { updateSiteImageMarketing } from "@/lib/marketing/sites/updateSiteImage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";


export const useUpdateImageSiteMarketing = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (inputImage:UpdateSiteImage) => updateSiteImageMarketing(inputImage),
    {
      onSuccess: async (updateSiteImageMarketing, {id}) => {
        queryClient.setQueryData(['get-site-marketing', id], updateSiteImageMarketing);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Image Site",
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
