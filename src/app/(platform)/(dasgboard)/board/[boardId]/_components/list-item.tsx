import { ListHeader } from "./list-header";
import { ListWrapper } from "./list-form";
import { ElementRef, useRef, useState } from "react";
import { CardForm } from "./card-form";
import { CreateListType } from "@/actions/list";

export function ListItem({
  data,
  index,
}: {
  data: CreateListType;
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
