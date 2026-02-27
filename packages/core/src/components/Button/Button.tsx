"use client";

import { forwardRef, type ElementType, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Button.css";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  colorScheme?: "primary" | "secondary" | "error" | "success";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  as?: ElementType;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      size = "md",
      colorScheme = "primary",
      loading,
      fullWidth,
      leftIcon,
      rightIcon,
      as: Comp = "button",
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => (
    <Comp
      ref={ref}
      className={cn(
        "ui-button",
        `ui-button--${variant}`,
        `ui-button--${size}`,
        `ui-button--${colorScheme}`,
        fullWidth && "ui-button--full-width",
        loading && "ui-button--loading",
        className,
      )}
      disabled={disabled || loading}
      data-loading={loading || undefined}
      {...props}
    >
      {loading && <span className="ui-button__spinner" aria-hidden="true" />}
      {!loading && leftIcon && <span className="ui-button__icon ui-button__icon--left">{leftIcon}</span>}
      <span className="ui-button__label">{children}</span>
      {!loading && rightIcon && <span className="ui-button__icon ui-button__icon--right">{rightIcon}</span>}
    </Comp>
  ),
);
Button.displayName = "Button";
