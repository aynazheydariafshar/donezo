"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/utils/utils";
// components ui
import { Button } from "@/components/ui/button";
// types
import { FormSubmitPropsType } from "@/types/form-submit-props";

export function FormSubmit({
  disabled,
  className,
  variant,
  children,
}: FormSubmitPropsType) {
  const { pending } = useFormStatus();
  return (
    <Button
      size="sm"
      className={cn(className)}
      variant={variant}
      disabled={pending || disabled}
      type="submit"
    >
      {children}
    </Button>
  );
}
