import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// actions api
import { CreateBoardType, deleteBoards } from "@/actions/board";

//components ui
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";

// icons
import { Trash2 } from "lucide-react";
import { DeleteDialog } from "@/components/delete-dialog";

export function DeleteBoardDialog({ data }: { data: CreateBoardType }) {
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
    <DeleteDialog
      name="board"
      data={data}
      deleteClickFunc={() => mutation.mutate(data.id)}
    >
      <Button variant="destructive">
        {t("delete-board")}
        <Trash2 className="mx-2 h-5 w-5" />
      </Button>
    </DeleteDialog>
  );
}
