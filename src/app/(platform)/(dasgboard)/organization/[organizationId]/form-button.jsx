import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

export function FormButton() {
  const { pending } = useFormStatus();
  const t = useTranslations();
  return (
    <Button disabled={pending} type="submit">
      {t("submit")}
    </Button>
  );
}
