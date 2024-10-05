import { deleteBoards } from "@/actions/board";
import { Button } from "@/components/ui/button";
import { dataBoardType } from "@/types/data-board";

export function Board({ title, id }: dataBoardType) {
  return (
    <form
      action={() => deleteBoards(id)}
      className="flex items-center gap-x-2 my-2"
    >
      <p>Board title : {title}</p>
      <Button type="submit" size="sm" variant="destructive">
        delete
      </Button>
    </form>
  );
}
