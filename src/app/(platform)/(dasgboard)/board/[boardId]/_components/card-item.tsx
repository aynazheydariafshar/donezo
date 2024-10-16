import { CreateBoard } from "@/actions/board";
import { CreateCard, CreateCardType, updateCard } from "@/actions/card";
import { FormInput } from "@/components/form/form-input";
import { toast } from "@/components/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { ElementRef, useRef, useState } from "react";

export default function CardItem({
  card,
  index,
}: {
  card: CreateCardType;
  index: number;
}) {
  const [isEdit, setIsEditing] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const queryClient = useQueryClient();
  const t = useTranslations();
  const mutation = useMutation({
    mutationFn: (newPost: Partial<CreateCardType>) =>
      updateCard(card.id, newPost),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["card", card.listId],
      });
      setIsEditing(false);
      toast({
        description: t("your-card-has-been-edited-successfully"),
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
    const TitleOnlySchema = CreateCard.pick({ title: true });
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
    if (card.title === title.trim()) {
      setIsEditing(false);
      return;
    } else mutation.mutate({ title });
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  if (isEdit) {
    return (
      <form
        ref={formRef}
        className="flex items-center w-full"
        onSubmit={handleSubmitEdit}
      >
        <FormInput
          ref={inputRef}
          onBlur={() => formRef.current?.requestSubmit()}
          className="focus-visible:outline-none focus-visible:ring-transparent"
          label={t("card-title")}
          defaultValue={card.title}
          id="title"
          type="text"
        />
      </form>
    );
  }

  return (
    <div
      role="button"
      onClick={enableEditing}
      className="truncate my-1 bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-95 border-2 border-transparent hover:border-black dark:hover:border-white py-2 px-3 text-sm rounded-md shadow-sm"
    >
      {card.title}
    </div>
  );
}
