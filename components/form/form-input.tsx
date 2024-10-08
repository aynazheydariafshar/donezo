"use client";

import { cn } from "@/utils/utils";
import { useFormStatus } from "react-dom";
import { forwardRef } from "react";

// components ui
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form/form-error";
import { Label } from "@/components/ui/label";

// types
import { FormInputPropsType } from "@/types/form-input-props";

export const FormInput = forwardRef<HTMLInputElement, FormInputPropsType>(
  (
    {
      id,
      label,
      placeholder,
      disabled,
      required,
      type,
      errors,
      className,
      defaultValue = "",
      onBlur,
    },
    ref
  ) => {
    const { pending } = useFormStatus();
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <Label
              className="text-sm font-medium text-black dark:text-white"
              htmlFor={id}
            >
              {label}
            </Label>
          ) : null}
          <Input
            onBlur={onBlur}
            name={id}
            defaultValue={defaultValue}
            id={id}
            placeholder={placeholder}
            disabled={pending || disabled}
            required={required}
            type={type}
            className={cn("text-sm px-2 py-1 h-7", className)}
            ref={ref}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormError id={id} errors={errors} />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
