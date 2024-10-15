import { FormSubmit } from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CardFormPropsType } from "@/types/card-form-props";
import { Plus, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { forwardRef } from "react";

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormPropsType>(
  (
    { listId, enableEditing, disableEditing, isEditing }: CardFormPropsType,
    ref
  ) => {
    const t = useTranslations();

    if (isEditing) {
      return (
        <form className="m-3 space-y-4 px-1">
          <div className="space-y-2 w-full">
            <div className="space-y-1 w-full">
              <Label htmlFor="title" className="text-xs"></Label>
              <Textarea
                placeholder={t("enter-a-title-for-this-card")}
                id="title"
                ref={ref}
              />
              <input hidden id="listId" name="listId" value={listId} />
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
