import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// actions api
import { deleteBoards } from "@/actions/board";

//components ui
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// types
import { dataBoardType } from "@/types/data-board";

// icons
import { Trash2 } from "lucide-react";

export function DeleteBoardDialog({ data }: { data: dataBoardType }) {
  const t = useTranslations();
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: deleteBoards,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
      });
      toast({
        description: t("your-board-has-been-deleted-successfully"),
      });
      router.push(`/organization/${data.orgId}`);
    },
    onError: (error) => {
      toast({
        description: t("failed-to-delete-board"),
        variant: "destructive",
      });
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          {t("delete-board")}
          <Trash2 className="mx-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col justify-start items-start mx-4">
          <DialogTitle> {t("delete-board")}</DialogTitle>
          <DialogDescription>
            {t(
              "are-you-sure-you-want-delete-this-board-action-cannot-be-undone"
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start flex gap-1">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {t("close")}
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            className="mx-2"
            onClick={() => mutation.mutate(data.id)}
          >
            {t("confirm-delete")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
