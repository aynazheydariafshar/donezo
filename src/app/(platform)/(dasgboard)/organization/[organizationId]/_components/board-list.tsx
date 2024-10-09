"use client";

import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

//icon
import { UserRound } from "lucide-react";

// actions api
import { getBoards } from "@/actions/board";

// components ui
import FormPopover from "@/components/form/form-popover";
import { getCookie } from "@/utils/get-cookies";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export function BoardList() {
  const t = useTranslations();
  const { userId } = useAuth();
  const { data, isLoading } = useQuery<any>({
    queryKey: ["boards"],
    queryFn: getBoards,
  });
  const locale = getCookie("language") || "en";
  if (!userId) {
    return null; // Return null to avoid rendering
  }

  if (isLoading) return <BoardList.Skeleton />;

  return (
    <div className="space-y-4">
      <div className="flex items-center text-lg text-black dark:text-white">
        <UserRound className="h-5 w-5" />
        <p className="mx-2">{t("your-boards")}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((card: Record<string, string>) => (
          <Link
            style={{ backgroundImage: `url(${card.imageThumbUrl})` }}
            href={`/board/${card.id}`}
            key={card.id}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover h-full w-full rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition">
              <p className="relative text-lg text-white p-3">{card.title}</p>
            </div>
          </Link>
        ))}
        <FormPopover side={locale === "en" ? "right" : "left"} sideOffset={10}>
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">{t("create-new-board")}</p>
            {/* <span className="text-xs">5 remaining</span>
          <Mention description="" sideOffset={40}>
            <HelpCircle className="h-4 w-4" />
          </Mention> */}
          </div>
        </FormPopover>
      </div>
    </div>
  );
}

BoardList.Skeleton = function SkeletonBoardLiat() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
    </div>
  );
};
