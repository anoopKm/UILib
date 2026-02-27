"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Checkbox.css";

export interface CheckboxProps extends Omit<ComponentPropsWithoutRef<"input">, "type" | "size"> {
  label?: ReactNode;
  size?: "sm" | "md" | "lg";
  indeterminate?: boolean;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, size = "md", indeterminate, error, className, disabled, id, ...props }, ref) => {
    const checkboxId = id || (typeof label === "string" ? `ui-checkbox-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    return (
      <label
        className={cn(
          "ui-checkbox",
          `ui-checkbox--${size}`,
          disabled && "ui-checkbox--disabled",
          error && "ui-checkbox--error",
          className,
        )}
        htmlFor={checkboxId}
      >
        <input
          ref={(node) => {
            if (node) node.indeterminate = !!indeterminate;
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
          }}
          type="checkbox"
          id={checkboxId}
          className="ui-checkbox__input"
          disabled={disabled}
          aria-invalid={error || undefined}
          {...props}
        />
        <span className="ui-checkbox__control" aria-hidden="true">
          <svg className="ui-checkbox__check" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="2.5 6 5 8.5 9.5 3.5" />
          </svg>
          <svg className="ui-checkbox__indeterminate" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="9" y2="6" />
          </svg>
        </span>
        {label && <span className="ui-checkbox__label">{label}</span>}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";
