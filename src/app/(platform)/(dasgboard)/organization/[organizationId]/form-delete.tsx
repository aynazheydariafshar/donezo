import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

export default function FormDelete() {
  const { pending } = useFormStatus();
  const t = useTranslations();

  return (
    <Button disabled={pending} type="submit" size="sm" variant="destructive">
      {t("delete")}
    </Button>
  );
}
