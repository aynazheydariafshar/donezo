import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

//icon
import { UserRound } from "lucide-react";

// actions api
import { getBoards } from "@/actions/board";

// components ui
import FormPopover from "@/components/form/form-popover";
import { getCookie } from "@/utils/get-cookies";

export function BoardList() {
  const t = useTranslations();
  const { data, isLoading } = useQuery<any>({
    queryKey: ["boards"],
    queryFn: getBoards,
  });
  const locale = getCookie("language") || "en";
  return (
    <div className="space-y-4">
      <div className="flex items-center text-lg text-black dark:text-white">
        <UserRound className="h-5 w-5" />
        <p className="mx-2">{t("your-boards")}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
      {/* {data?.map((item: dataBoardType) => (
        <Board key={item.id} title={item.title} id={item.id} />
      ))} */}
    </div>
  );
}
