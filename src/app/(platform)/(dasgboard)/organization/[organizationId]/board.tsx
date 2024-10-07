import { deleteBoards } from "@/actions/board";
import { Button } from "@/components/ui/button";
import { dataBoardType } from "@/types/data-board";
import FormDelete from "./form-delete";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function Board({ title, id }: dataBoardType) {
  const queryClient = useQueryClient();

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
      <FormDelete />
    </form>
  );
}
