"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const FormSubmitButton = ({
  children,
  className,
  disabled,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn("w-full", className)}
      {...props}
      type="submit"
      disabled={disabled || pending}
    >
      <span className="flex items-center justify-center gap-1">
        {pending && <Loader2 size={16} className="animate-spin" />}
        {children}
      </span>
    </Button>
  );
};

export default FormSubmitButton;
