"use client";

import { getBoardId } from "@/actions/board";
import { toast } from "@/components/hooks/use-toast";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function BoardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string };
}) {
  const { userId } = useAuth();
  const t = useTranslations();

  const query = useQuery({
    queryKey: ["boards", params.boardId],
    queryFn: () => getBoardId(params.boardId),
    enabled: !!params.boardId,
  });
  const { data, error, isLoading } = query;

  if (!userId) {
    toast({
      title: t("unauthorized"),
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
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
}
