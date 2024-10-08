"use client";

import { Separator } from "@/components/ui/separator";
import Info from "./_components/info";
import { BoardList } from "./_components/board-list";

export default function OrganizationId() {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="bg-black dark:bg-white my-2" />
      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  );
}
