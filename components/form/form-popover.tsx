"use client";

import { useTranslations } from "next-intl";
import { ElementRef, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// icons
import { X } from "lucide-react";

//types
import { FormPopoverType } from "@/types/form-popover-props";
import { StateBoardType } from "@/types/state-board";

// actions api
import { CreateBoard, postBoards } from "@/actions/board";

// components ui
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import FormPicker from "./form-picker";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/components/hooks/use-toast";

export default function FormPopover({
  children,
  side = "bottom",
  align = "start",
  sideOffset = 0,
}: FormPopoverType) {
  const t = useTranslations();
  const { toast } = useToast();
  const { isSignedIn } = useUser();
  const initialState = { message: null, errors: { title: [], image: [] } };
  const queryClient = useQueryClient();
  const [formErrors, setFormErrors] = useState<StateBoardType>(initialState);
  const refClose = useRef<ElementRef<"button">>(null);
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
    const formData = new FormData(e.target as HTMLFormElement);
    const validateField = CreateBoard.safeParse({
      title: formData.get("title") as string,
      image: formData.get("image") as string,
    });
    const image = (formData.get("image") as string) || "";
    const [imageId, imageThumbUrl, imageFullUrl, imageLinkHtml, imageUserName] =
      image?.split("|");
    if (
      !imageId ||
      !imageThumbUrl ||
      !imageFullUrl ||
      !imageLinkHtml ||
      !imageUserName
    ) {
      toast({
        title: t("missing-fields-failed-to-create-board"),
        variant: "destructive",
      });
      return;
    }
    if (!isSignedIn) {
      toast({
        title: t("unauthorized"),
        variant: "destructive",
      });
      return;
    }

    if (!validateField.success) {
      setFormErrors({
        errors: validateField.error.flatten().fieldErrors,
        message: "missing-fields",
      });
      return;
    }
    try {
      formData.append("imageId", imageId);
      formData.append("imageThumbUrl", imageThumbUrl);
      formData.append("imageFullUrl", imageFullUrl);
      formData.append("imageLinkHtml", imageLinkHtml);
      formData.append("imageUserName", imageUserName);
      formData.delete("image");

      mutation.mutate(formData);
      toast({
        title: t("a-new-board-has-been-created-successfully"),
      });
      refClose.current?.click();
      setFormErrors(initialState);
    } catch (error) {
      toast({
        title: t("database-error"),
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        className="w-80 pt-3"
      >
        <div className="text-sm text-center text-black dark:text-white pb-4">
          {t("create-board")}
        </div>
        <PopoverClose ref={refClose} asChild>
          <Button
            variant="outline"
            size="icon"
            className="top-3 h-auto w-auto absolute border-none"
          >
            <X className="w-4 h-4" />
          </Button>
        </PopoverClose>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-2">
            <FormPicker id="image" errors={formErrors?.errors?.image} />
            <FormInput
              errors={formErrors?.errors?.title}
              id="title"
              label={t("board-title")}
              type="text"
            />
            <FormSubmit className="w-full">{t("create")}</FormSubmit>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
