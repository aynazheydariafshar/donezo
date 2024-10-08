"use client";

import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

//types
import { StateBoardType } from "@/types/state-board";

//actions api
import { CreateBoard, postBoards } from "@/actions/board";

// components ui
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

export default function Form() {
  const initialState = { message: null, errors: { title: [] } };
  const queryClient = useQueryClient();
  const [formErrors, setFormErrors] = useState<StateBoardType>(initialState);
  const ref = useRef<HTMLFormElement>(null);
  const t = useTranslations();
  const mutation = useMutation({
    mutationFn: postBoards,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const validateField = CreateBoard.safeParse({
      title: formData.get("title"),
    });

    if (!validateField.success) {
      setFormErrors({
        errors: validateField.error.flatten().fieldErrors,
        message: "missing-fields",
      });
      return;
    }
    try {
      mutation.mutate(formData);
      ref.current?.reset();
      setFormErrors(initialState);
    } catch (error) {
      setFormErrors({
        message: "database-error",
      });
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={ref}>
      <div className="flex flex-col space-y-1">
        <FormInput label="board-title" id="title" errors={formErrors.errors} />
        <FormSubmit>{t("submit")}</FormSubmit>
      </div>
    </form>
  );
}
