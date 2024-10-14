import { BoardCardType } from "@/types/board-card";
import { ListHeader } from "./list-header";
import { ListWrapper } from "./list-form";

export function ListItem({
  data,
  index,
}: {
  data: BoardCardType;
  index: number;
}) {
  return (
    <ListWrapper>
      <ListHeader data={data}/>
    </ListWrapper>
  );
}
