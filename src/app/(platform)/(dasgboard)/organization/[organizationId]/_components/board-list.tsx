"use client";

import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { getCookie } from "@/utils/get-cookies";
import { useOrganization } from "@clerk/nextjs";
import Link from "next/link";

//icon
import { UserRound } from "lucide-react";

// actions api
import { getBoards } from "@/actions/board";

// components ui
import FormPopover from "@/components/form/form-popover";
import { Skeleton } from "@/components/ui/skeleton";

export function BoardList() {
  const t = useTranslations();
  const { organization } = useOrganization();
  const query = useQuery({
    queryKey: ["boards", organization?.id],
    queryFn: () => getBoards(organization?.id || ""),
    enabled: !!organization?.id,
  });

  const { data, error, isLoading } = query;

  const locale = getCookie("language") || "en";

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

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
    </div>
  );
};
