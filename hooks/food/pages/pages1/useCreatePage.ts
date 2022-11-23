
import { CreatePage, ListPage } from "@/interfaces/page.interface";
import { createPage0Food } from "@/lib/food/pages/pages0/createPage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

export const useCreatePage0Food = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (inputCreate: CreatePage) => createPage0Food(inputCreate),
    {
      onSuccess: async (createPage0Food, parentId) => {
        queryClient.invalidateQueries<ListPage>({queryKey: ["find-pages0-with-cursor", {first:12}, createPage0Food.parentId]});

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Page",
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