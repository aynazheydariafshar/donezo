import { useTranslations } from "next-intl";
// types
// icons
import { Trash2 } from "lucide-react";
// components ui
import { Button } from "@/components/ui/button";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateListType, deleteList } from "@/actions/list";
import { toast } from "@/components/hooks/use-toast";
import { DeleteDialog } from "@/components/delete-dialog";

export function ListDelete({ data }: { data: CreateListType }) {
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
    <DeleteDialog
      name="list"
      data={data}
      deleteClickFunc={() => mutation.mutate(data.id)}
    >
      <Button
        className="hover:text-error-500 hover:bg-transparent"
        size="sm"
        variant="ghost"
      >
        <Trash2 />
      </Button>
    </DeleteDialog>
  );
}
