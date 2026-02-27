"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Input.css";

export interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flush";
  error?: boolean;
  helperText?: string;
  errorMessage?: string;
  label?: string;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      variant = "outline",
      error,
      helperText,
      errorMessage,
      label,
      leftAdornment,
      rightAdornment,
      fullWidth,
      className,
      id,
      disabled,
      ...props
    },
    ref,
  ) => {
    const inputId = id || (label ? `ui-input-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
    const showError = error && errorMessage;

    return (
      <div className={cn("ui-input-wrapper", fullWidth && "ui-input-wrapper--full-width", className)}>
        {label && (
          <label htmlFor={inputId} className="ui-input__label">
            {label}
          </label>
        )}
        <div
          className={cn(
            "ui-input",
            `ui-input--${variant}`,
            `ui-input--${size}`,
            error && "ui-input--error",
            disabled && "ui-input--disabled",
          )}
        >
          {leftAdornment && <span className="ui-input__adornment ui-input__adornment--left">{leftAdornment}</span>}
          <input
            ref={ref}
            id={inputId}
            className="ui-input__field"
            disabled={disabled}
            aria-invalid={error || undefined}
            aria-describedby={showError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {rightAdornment && <span className="ui-input__adornment ui-input__adornment--right">{rightAdornment}</span>}
        </div>
        {showError && (
          <p id={`${inputId}-error`} className="ui-input__message ui-input__message--error" role="alert">
            {errorMessage}
          </p>
        )}
        {!showError && helperText && (
          <p id={`${inputId}-helper`} className="ui-input__message">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
