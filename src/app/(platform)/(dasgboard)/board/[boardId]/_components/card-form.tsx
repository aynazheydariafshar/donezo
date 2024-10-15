import { CreateCard, postCard } from "@/actions/card";
import { FormError } from "@/components/form/form-error";
import { FormSubmit } from "@/components/form/form-submit";
import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CardFormPropsType } from "@/types/card-form-props";
import { StateBoardType } from "@/types/state-board";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { ElementRef, forwardRef, useRef, useState } from "react";

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormPropsType>(
  (
    { listId, enableEditing, disableEditing, isEditing }: CardFormPropsType,
    ref
  ) => {
    const t = useTranslations();
    const { isSignedIn } = useUser();
    const initialState = { message: null, errors: { title: [] } };
    const queryClient = useQueryClient();
    const [formErrors, setFormErrors] = useState<StateBoardType>(initialState);
    const refClose = useRef<ElementRef<"button">>(null);
    const params = useParams();
    const mutation = useMutation({
      mutationFn: postCard,
      onSuccess: (res) => {
        queryClient.invalidateQueries({
          queryKey: ["card"],
        });
        toast({
          description: t("a-new-board-has-been-created-successfully"),
        });
        refClose.current?.click();
      },
      onError: () => {
        toast({
          description: t("database-error"),
          variant: "destructive",
        });
      },
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("listId", listId);
      formData.append("boardId", params.boardId as string);
      const TitleOnlySchema = CreateCard.pick({
        title: true,
        boardId: true,
        listId: true,
      });
      const validateField = TitleOnlySchema.safeParse({
        title: formData.get("title"),
        listId: formData.get("listId"),
        boardId: formData.get("boardId"),
      });

      if (!isSignedIn) {
        toast({
          description: t("unauthorized"),
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

      mutation.mutate(formData);
      disableEditing();
    };

    if (isEditing) {
      return (
        <form onSubmit={handleSubmit} className="m-3 space-y-4 px-1">
          <div className="space-y-2 w-full">
            <div className="space-y-1 w-full">
              <Label htmlFor="title" className="text-xs"></Label>
              <Textarea
                placeholder={t("enter-a-title-for-this-card")}
                id="title"
                name="title"
                ref={ref}
              />
              <FormError id="title" errors={formErrors?.errors?.title} />
              <div className="flex p-1 items-center space-x-2">
                <FormSubmit>Add card</FormSubmit>
                <Button
                  onClick={disableEditing}
                  size="sm"
                  variant="destructive"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      );
    }

    return (
      <div className="pt-2 px-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={enableEditing}
          className="w-full my-1 text-sm justify-start"
        >
          <Plus className="w-4 h-4 mx-1" />
          {t("add-card")}
        </Button>

        {/* <textarea
          ref={ref}
          className="w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none focus:ring-transparent"
          placeholder="Add a card"
          onBlur={() => disableEditing()}
          onFocus={() => enableEditing()}
          disabled={!isEditing}
        /> */}
      </div>
    );
  }
);

CardForm.displayName = "CardForm";
