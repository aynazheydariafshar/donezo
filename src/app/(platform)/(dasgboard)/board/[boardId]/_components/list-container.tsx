import { BoardCardType } from "@/types/board-card";
import { ListForm } from "./list-form";

export function ListContainer({
  boardId,
  data,
}: {
  boardId: string;
  data: BoardCardType[];
}) {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}
