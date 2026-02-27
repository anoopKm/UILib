import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Alert.css";

export interface AlertProps extends ComponentPropsWithoutRef<"div"> {
  status?: "info" | "success" | "warning" | "error";
  variant?: "subtle" | "solid" | "outline" | "left-accent";
  icon?: ReactNode;
  onClose?: () => void;
  children?: ReactNode;
}

const statusIcons: Record<string, string> = {
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕",
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ status = "info", variant = "subtle", icon, onClose, className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "ui-alert",
        `ui-alert--${status}`,
        `ui-alert--${variant}`,
        className,
      )}
      {...props}
    >
      <span className="ui-alert__icon" aria-hidden="true">
        {icon || statusIcons[status]}
      </span>
      <div className="ui-alert__content">{children}</div>
      {onClose && (
        <button
          type="button"
          className="ui-alert__close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  ),
);
Alert.displayName = "Alert";
