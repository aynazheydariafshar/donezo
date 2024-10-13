"use client";

import { CreateList, postList } from "@/actions/list";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { ElementRef, useRef, useState } from "react";

const ListWrapper = ({ children }: { children: React.ReactNode }) => (
  <li className="shrink-0 h-full w-[272px] select-none bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-75 p-4 rounded-md">
    {children}
  </li>
);

export function ListForm() {
  const params = useParams();
  const t = useTranslations();
  const [isEdit, setIsEdit] = useState(false);
  const queryClient = useQueryClient();

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const mutation = useMutation({
    mutationFn: (newPost: FormData) => postList(newPost),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
      });
      setIsEdit(false);
      toast({
        description: t("your-list-has-been-created-successfully"),
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
    formData.append("boardId", params.boardId as string);
    mutation.mutate(formData);
  };

  if (isEdit) {
    return (
      <ListWrapper>
        <form ref={formRef} className="w-full" onSubmit={handleSubmitEdit}>
          <FormInput
            ref={inputRef}
            // onBlur={() => formRef.current?.requestSubmit()}
            className="focus-visible:outline-none focus-visible:ring-transparent"
            placeholder={t("list-title")}
            id="title"
            type="text"
          />
          <div className="flex gap-x-2 items-center my-2">
            <FormSubmit>{t("add")}</FormSubmit>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setIsEdit(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      <Button
        onClick={() => {
          setIsEdit(true);
          setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.select();
          });
        }}
        className="w-full"
      >
        {t("add-a-list")}
        <Plus className="mx-2 h-5 w-5" />
      </Button>
    </ListWrapper>
  );
}
