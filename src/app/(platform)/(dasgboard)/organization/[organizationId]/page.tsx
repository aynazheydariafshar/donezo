"use client";

import { useQuery } from "@tanstack/react-query";
// components
import { Board } from "./board";
import Form from "./form";
// types
import { dataBoardType } from "@/types/data-board";
// actions api
import { getBoards } from "@/actions/board";

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
