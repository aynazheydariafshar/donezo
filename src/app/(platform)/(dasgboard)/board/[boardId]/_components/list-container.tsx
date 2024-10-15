"use client";

import { ListForm } from "./list-form";
import { ListItem } from "./list-item";
import { useQuery } from "@tanstack/react-query";
import { CreateListType, getListId } from "@/actions/list";

export function ListContainer({ boardId }: { boardId: string }) {
  const query = useQuery({
    queryKey: ["list", boardId],
    queryFn: () => getListId(boardId),
    enabled: !!boardId,
  });
  const { data, error, isLoading } = query;
  return (
    <ol className="flex gap-x-3">
      {data?.length > 0 &&
        data?.map((list: CreateListType, index: number) => (
          <ListItem key={list.id} data={list} index={index} />
        ))}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}
