"use client";

import { createBoard, getBoards } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { dataBoardType } from "@/types/data-board";
import { useQuery } from "@tanstack/react-query";

export default function OrganizationId() {
  const { data, isLoading } = useQuery<any>({
    queryKey: ["boards"],
    queryFn: getBoards,
  });
  
  return (
    <div>
      <form action={createBoard}>
        <input
          className="border-black"
          id="title"
          name="title"
          required
          placeholder="cnter"
        />
      </form>

      <Button type="submit">test</Button>
      {data?.map((item: dataBoardType) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
