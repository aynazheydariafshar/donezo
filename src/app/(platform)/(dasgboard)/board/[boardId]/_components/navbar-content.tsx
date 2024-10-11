import { CreateBoard, updateBoard } from "@/actions/board";
import { FormInput } from "@/components/form/form-input";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { BoardNavbarPropsType } from "@/types/board-navbar-props";
import { dataBoardType } from "@/types/data-board";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { ElementRef, useRef, useState } from "react";

export function NavbarContent({ data }: BoardNavbarPropsType) {
  const [isEdit, setIsEditing] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
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
      toast({
        description: t("your-board-has-been-edited-successfully"),
      });
    },
    onError: () => {
      toast({
        description: t("database-error"),
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
        description: t(validateField.error?.flatten().fieldErrors?.title?.[0]),
        variant: "destructive",
      });
      return;
    }
    mutation.mutate({ title });
  };

  if (isEdit) {
    return (
      <form
        ref={formRef}
        className="gap-3 flex items-center w-full"
        onSubmit={handleSubmitEdit}
      >
        <FormInput
          ref={inputRef}
          onBlur={() => formRef.current?.requestSubmit()}
          className="focus-visible:outline-none focus-visible:ring-transparent"
          label={t("board-title")}
          id="title"
          type="text"
          defaultValue={data.title}
        />
      </form>
    );
  }

  return (
    <Button
      onClick={() => {
        setIsEditing(true);
        setTimeout(() => {
          inputRef.current?.focus();
          inputRef.current?.select();
        });
      }}
      className="text-lg"
    >
      {data.title}
    </Button>
  );
}
