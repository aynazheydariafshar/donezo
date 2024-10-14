"use client";

import { getBoardId } from "@/actions/board";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { BoardNavbar } from "./board-navbar";

export function LayoutBgBoard({
  children,
  boardIdParams,
}: {
  children: React.ReactNode;
  boardIdParams: string;
}) {
  const query = useQuery({
    queryKey: ["boards", boardIdParams],
    queryFn: () => getBoardId(boardIdParams),
    enabled: !!boardIdParams,
  });
  const { data, error, isLoading } = query;

  if (isLoading) {
    return (
      <div className="flex h-full items-center p-6 justify-center">
        <Loader className="w-20 h-20 text-secondary-400 animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="bg-no-repeat h-full relative bg-cover bg-center"
      style={{ backgroundImage: `url(${data?.imageFullUrl})` }}
    >
      <BoardNavbar data={data} />
      <div className="absolute inset-0 bg-black/10"></div>
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
}
