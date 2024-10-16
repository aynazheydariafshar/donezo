import { ListHeader } from "./list-header";
import { ListWrapper } from "./list-form";
import { ElementRef, useRef, useState } from "react";
import { CardForm } from "./card-form";
import { CreateListType } from "@/actions/list";
import { cn } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { CreateCardType, getCardId } from "@/actions/card";
import CardItem from "./card-item";
import { Loader } from "lucide-react";

export function ListItem({
  list,
  index,
}: {
  list: CreateListType;
  index: number;
}) {
  const query = useQuery({
    queryKey: ["card", list.id],
    queryFn: () => getCardId(list.id),
    enabled: !!list.id,
  });
  const { data, error, isLoading } = query;
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
      <ListHeader data={list} />
      <ol
        className={
          (cn("mx-1 px-1 flex flex-col gap-y-2"),
          data?.length > 0 ? "mt-2" : "mt-0")
        }
      >
        {data?.map((card: CreateCardType, index: number) => (
          <CardItem key={card.id} card={card} index={index} />
        ))}
      </ol>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader className="w-5 h-5 text-secondary-400 animate-spin" />
        </div>
      ) : (
        <CardForm
          ref={textareaRef}
          listId={list.id}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
          isEditing={isEditing}
        />
      )}
    </ListWrapper>
  );
}
