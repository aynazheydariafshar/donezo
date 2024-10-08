"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/utils";
import { useFormStatus } from "react-dom";

interface FormSubmitProps {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
}

export function FormSubmit({
  disabled,
  className,
  variant,
  children,
}: FormSubmitProps) {
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
