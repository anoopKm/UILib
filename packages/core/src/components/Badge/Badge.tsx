import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Badge.css";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  variant?: "solid" | "outline" | "subtle";
  colorScheme?: "primary" | "secondary" | "error" | "warning" | "success" | "info";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  children?: ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "subtle", colorScheme = "primary", size = "md", dot, className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "ui-badge",
        `ui-badge--${variant}`,
        `ui-badge--${colorScheme}`,
        `ui-badge--${size}`,
        dot && "ui-badge--dot",
        className,
      )}
      {...props}
    >
      {dot && <span className="ui-badge__dot" />}
      {children}
    </span>
  ),
);
Badge.displayName = "Badge";
