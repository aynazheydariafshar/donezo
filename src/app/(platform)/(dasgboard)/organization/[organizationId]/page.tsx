"use client";

import { postBoards, getBoards } from "@/actions/board";
import { Button } from "@/components/ui/button";
import { dataBoardType } from "@/types/data-board";
import { useQuery } from "@tanstack/react-query";
import { Board } from "./board";

export default function OrganizationId() {
  const { data, isLoading } = useQuery<any>({
    queryKey: ["boards"],
    queryFn: getBoards,
  });

  return (
    <div>
      <form action={postBoards}>
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
        <Board key={item.id} title={item.title} id={item.id} />
      ))}
    </div>
  );
}
