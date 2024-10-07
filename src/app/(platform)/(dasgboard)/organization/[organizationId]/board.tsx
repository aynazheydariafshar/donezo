import { deleteBoards } from "@/actions/board";
import { Button } from "@/components/ui/button";
import { dataBoardType } from "@/types/data-board";
import FormDelete from "./form-delete";

export function Board({ title, id }: dataBoardType) {
  const deleteBoardId = deleteBoards.bind(null, id);

  return (
    <form action={deleteBoardId} className="flex items-center gap-x-2 my-2">
      <p>Board title : {title}</p>
      <FormDelete />
    </form>
  );
}
