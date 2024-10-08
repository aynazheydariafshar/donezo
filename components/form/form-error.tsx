import { useTranslations } from "next-intl";
// types
import { FormErrorPropsType } from "@/types/form-error-props";
// icons
import { XCircle } from "lucide-react";

export function FormError({ id, errors }: FormErrorPropsType) {
  const t = useTranslations();
  if (!errors) return null;
  return (
    <div
      id={`${id}-error`}
      aria-live="polite"
      className="text-xs mt-2 text-red-500"
    >
      {errors?.title?.map((error) => (
        <div
          key={error}
          className="flex items-center font-medium p-2 border border-red-500 bg-rose-500/10 rounded-sm"
        >
          <XCircle className="h-4 w-4 mx-1" />
          {t(error)}
        </div>
      ))}
    </div>
  );
}
