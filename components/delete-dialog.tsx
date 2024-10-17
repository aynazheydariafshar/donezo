import { useTranslations } from "next-intl";

//components ui
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ElementRef, useRef } from "react";

export function DeleteDialog<T>({
  data,
  children,
  deleteClickFunc,
  name,
}: {
  data: T;
  name: string;
  children: React.ReactNode;
  deleteClickFunc: () => void;
}) {
  const t = useTranslations();
  const refClose = useRef<ElementRef<"button">>(null);

  const handleConfirm = () => {
    deleteClickFunc();
    if (refClose.current) {
      refClose.current.click();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col justify-start items-start mx-4">
          <DialogTitle> {t(`delete-${name}`)}</DialogTitle>
          <DialogDescription>
            {t(
              `are-you-sure-you-want-delete-this-${name}-action-cannot-be-undone`
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start flex gap-2">
          <DialogClose ref={refClose} asChild>
            <Button type="button" variant="secondary">
              {t("close")}
            </Button>
          </DialogClose>
          <Button type="button" variant="destructive" onClick={handleConfirm}>
            {t("confirm-delete")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
