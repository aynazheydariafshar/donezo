"use client";

import { getBoardId } from "@/actions/board";
import { toast } from "@/components/hooks/use-toast";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import BoardNavbar from "./board-navbar";

export default function LayoutBgBoard({
  children,
  boardIdParams,
}: {
  children: React.ReactNode;
  boardIdParams: string;
}) {
  const { userId } = useAuth();
  const t = useTranslations();

  const query = useQuery({
    queryKey: ["boards", boardIdParams],
    queryFn: () => getBoardId(boardIdParams),
    enabled: !!boardIdParams,
  });
  const { data, error, isLoading } = query;

  if (!userId) {
    toast({
        description: t("unauthorized"),
    });
    return;
  }

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
