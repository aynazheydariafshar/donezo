"use client";

import { FormPopoverType } from "@/types/form-popover-props";
import { Popover, PopoverClose, PopoverTrigger } from "@radix-ui/react-popover";
import { PopoverContent } from "../ui/popover";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export default function FormPopover({
  children,
  side = "bottom",
  align = "start",
  sideOffset = 0,
}: FormPopoverType) {
  const t = useTranslations();
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        className="w-80 pt-3"
      >
        <div className="text-sm text-center text-black dark:text-white pb-4">
          {t("create-board")}
        </div>
        <PopoverClose asChild>
          <Button variant="ghost" className="top-1 absolute">
            <X className="w-4 h-4" />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
