import { BoardCardType } from "@/types/board-card-props";
import { ListHeader } from "./list-header";
import { ListWrapper } from "./list-form";
import { ElementRef, useRef, useState } from "react";
import { CardForm } from "./card-form";

export function ListItem({
  data,
  index,
}: {
  data: BoardCardType;
  index: number;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<ElementRef<"textarea">>(null);
  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
      textareaRef.current?.select();
    });
  };
  const disableEditing = () => {
    setIsEditing(false);
  };
  return (
    <ListWrapper>
      <ListHeader data={data} />
      <CardForm
        ref={textareaRef}
        listId={data.id}
        enableEditing={enableEditing}
        disableEditing={disableEditing}
        isEditing={isEditing}
      />
    </ListWrapper>
  );
}
