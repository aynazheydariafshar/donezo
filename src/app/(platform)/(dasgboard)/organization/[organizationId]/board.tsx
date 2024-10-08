import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

//actions api
import { deleteBoards } from "@/actions/board";

// components ui
import { FormSubmit } from "@/components/form/form-submit";
//types
import { dataBoardType } from "@/types/data-board";

export function Board({ title, id }: dataBoardType) {
  const queryClient = useQueryClient();
  const t = useTranslations();

  const mutation = useMutation({
    mutationFn: deleteBoards,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
      });
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(id);
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-x-2 my-2">
      <p>Board title : {title}</p>
      <FormSubmit variant="destructive">{t("delete")}</FormSubmit>
    </form>
  );
}
