import { useTranslations } from "next-intl";
// types
import { ListOptionsType } from "@/types/list-options";
// icons
import { MoreHorizontalIcon } from "lucide-react";
// components ui
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteList } from "@/actions/list";
import { toast } from "@/components/hooks/use-toast";

export function ListOptions({ data, onAddCard }: ListOptionsType) {
  const t = useTranslations();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteList,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["list"],
      });
      toast({
        description: t("your-list-has-been-deleted-successfully"),
      });
    },
    onError: (error) => {
      toast({
        description: t("failed-to-delete-list"),
        variant: "destructive",
      });
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <MoreHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-46">
        <DropdownMenuLabel>
          <Button className="w-full" size="sm" variant="ghost">
            {t("add-card")}
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <Button
            onClick={() => mutation.mutate(data.id)}
            className="w-full"
            size="sm"
            variant="ghost"
          >
            {t("delete-card")}{" "}
          </Button>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
