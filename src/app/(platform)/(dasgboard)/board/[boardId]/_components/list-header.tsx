import { CreateList, CreateListType, updateList } from "@/actions/list";
import { FormInput } from "@/components/form/form-input";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { ElementRef, useRef, useState } from "react";
import { ListOptions } from "./list-options";

export function ListHeader({ data }: { data: CreateListType }) {
  const [isEdit, setIsEditing] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const queryClient = useQueryClient();
  const t = useTranslations();

  const mutation = useMutation({
    mutationFn: (newPost: Partial<CreateListType>) =>
      updateList(data.id, newPost),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["list"],
      });
      setIsEditing(false);
      toast({
        description: t("your-list-has-been-edited-successfully"),
      });
    },
    onError: () => {
      toast({
        description: t("database-error"),
        variant: "destructive",
      });
    },
  });

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const TitleOnlySchema = CreateList.pick({ title: true });
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
    if (data.title === title.trim()) {
      setIsEditing(false);
      return;
    } else mutation.mutate({ title });
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
          label={t("list-title")}
          id="title"
          type="text"
          defaultValue={data.title}
        />
      </form>
    );
  }

  return (
    <div className="px-2 text-sm flex justify-between items-center gap-x-2">
      <Button onClick={enableEditing} size="sm">
        {data.title}
      </Button>
      <ListOptions data={data} onAddCard={() => console.log("add card")} />
    </div>
  );
}
