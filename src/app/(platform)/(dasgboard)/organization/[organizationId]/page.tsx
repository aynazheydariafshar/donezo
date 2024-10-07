"use client";

import { getBoards } from "@/actions/board";
import { dataBoardType } from "@/types/data-board";
import { useQuery } from "@tanstack/react-query";
import { Board } from "./board";
import Form from "./form";

export default function OrganizationId() {
  const { data, isLoading } = useQuery<any>({
    queryKey: ["boards"],
    queryFn: getBoards,
  });

  return (
    <div>
      <Form />
      {data?.map((item: dataBoardType) => (
        <Board key={item.id} title={item.title} id={item.id} />
      ))}
    </div>
  );
}
