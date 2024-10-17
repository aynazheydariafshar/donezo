"use client";

import { ListForm } from "./list-form";
import { ListItem } from "./list-item";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateListType, getListId, updateOrderList } from "@/actions/list";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { toast } from "@/components/hooks/use-toast";
import { useTranslations } from "next-intl";
import { CreateCardType } from "@/actions/card";

export function ListContainer({ boardId }: { boardId: string }) {
  const t = useTranslations();
  const query = useQuery({
    queryKey: ["list", boardId],
    queryFn: () => getListId(boardId),
    enabled: !!boardId,
  });
  const { data, error, isLoading } = query;
  const queryClient = useQueryClient();

  //put method for list
  const mutationList = useMutation({
    mutationFn: (newPost: CreateListType[]) =>
      updateOrderList(boardId, newPost),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["list"],
      });
    },
    onError: () => {
      toast({
        description: t("database-error"),
        variant: "destructive",
      });
    },
  });

  //put method for card
  // const mutationCard = useMutation({
  //   mutationFn: (newPost: CreateCardType[]) =>
  //     updateOrderList(boardId, newPost),
  //   onSuccess: (res) => {
  //     queryClient.invalidateQueries({
  //       queryKey: ["card"],
  //     });
  //   },
  //   onError: () => {
  //     toast({
  //       description: t("database-error"),
  //       variant: "destructive",
  //     });
  //   },
  // });

  function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const res = Array.from(data);
    const [removed] = res.splice(startIndex, 1);
    res.splice(endIndex, 0, removed);
    return res;
  }

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (type === "list") {
      const res = reorder(
        data,
        source.index,
        destination.index
      ) as CreateListType[];
      mutationList.mutate(res);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3"
          >
            {data?.length > 0 &&
              data?.map((list: CreateListType, index: number) => (
                <ListItem key={list.id} list={list} index={index} />
              ))}
            {provided.placeholder}
            <ListForm />
            <div className="flex-shrink-0 w-1" />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
}
