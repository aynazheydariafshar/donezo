import { CreateBoard, updateBoard } from "@/actions/board";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { BoardNavbarPropsType } from "@/types/board-navbar-props";
import { dataBoardType } from "@/types/data-board";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function NavbarContent({ data }: BoardNavbarPropsType) {
  const [isEdit, setIsEditing] = useState(false);
  const queryClient = useQueryClient();
  const t = useTranslations();
  const mutation = useMutation({
    mutationFn: (newPost: Partial<dataBoardType>) =>
      updateBoard(data.id, newPost),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
      });
      setIsEditing(false);
      //   toast({
      //     title: t("a-new-board-has-been-created-successfully"),
      //   });
    },
    onError: () => {
      toast({
        title: t("database-error"),
        variant: "destructive",
      });
    },
  });

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const TitleOnlySchema = CreateBoard.pick({ title: true });
    const validateField = TitleOnlySchema.safeParse({
      title,
    });
    if (!validateField.success) {
      toast({
        title: t(validateField.error?.flatten().fieldErrors?.title?.[0]),
        variant: "destructive",
      });
      return;
    }
    mutation.mutate({ title });
  };

  if (isEdit) {
    return (
      <form
        className="gap-3 flex items-center w-full"
        onSubmit={handleSubmitEdit}
      >
        <FormInput
          label={t("board-title")}
          id="title"
          type="text"
          defaultValue={data.title}
        />
        <FormSubmit>{t("edit")}</FormSubmit>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setIsEditing(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </form>
    );
  }

  return (
    <Button onClick={() => setIsEditing(true)} className="text-lg">
      {data.title}
    </Button>
  );
}
