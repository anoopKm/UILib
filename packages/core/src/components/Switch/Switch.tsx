"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Switch.css";

export interface SwitchProps extends Omit<ComponentPropsWithoutRef<"input">, "type" | "size"> {
  label?: ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = "md", className, disabled, id, ...props }, ref) => {
    const switchId = id || (typeof label === "string" ? `ui-switch-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    return (
      <label
        className={cn("ui-switch", `ui-switch--${size}`, disabled && "ui-switch--disabled", className)}
        htmlFor={switchId}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={switchId}
          className="ui-switch__input"
          disabled={disabled}
          {...props}
        />
        <span className="ui-switch__track" aria-hidden="true">
          <span className="ui-switch__thumb" />
        </span>
        {label && <span className="ui-switch__label">{label}</span>}
      </label>
    );
  },
);
Switch.displayName = "Switch";
