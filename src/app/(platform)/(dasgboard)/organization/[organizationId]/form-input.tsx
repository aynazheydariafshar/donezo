"use client";

import { Input } from "@/components/ui/input";
import { StateBoardType } from "@/types/state-board";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

export function FormInput({ errors }: StateBoardType) {
  const { pending } = useFormStatus();
  const t = useTranslations();

  return (
    <div>
      <Input
        className="border-black"
        id="title"
        name="title"
        required
        placeholder="please Enter"
        disabled={pending}
      />
      {errors?.title?.length ? (
        <div>
          {errors?.title.map((item: string) => (
            <p className="text-error-800" key={item}>
              {t(item)}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
