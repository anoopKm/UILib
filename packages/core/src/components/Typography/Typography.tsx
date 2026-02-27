import { forwardRef, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";
import "./Typography.css";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption" | "overline";

const variantElementMap: Record<TypographyVariant, ElementType> = {
  h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6",
  body1: "p", body2: "p", caption: "span", overline: "span",
};

export interface TypographyProps extends ComponentPropsWithoutRef<"p"> {
  variant?: TypographyVariant;
  as?: ElementType;
  color?: "primary" | "secondary" | "error" | "success" | "warning" | "muted" | "inherit";
  align?: "left" | "center" | "right";
  weight?: "normal" | "medium" | "semibold" | "bold";
  truncate?: boolean;
  children?: ReactNode;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "body1", as, color, align, weight, truncate, className, children, ...props }, ref) => {
    const Component = as || variantElementMap[variant];
    return (
      <Component
        ref={ref}
        className={cn(
          "ui-typography",
          `ui-typography--${variant}`,
          color && `ui-typography--color-${color}`,
          align && `ui-typography--align-${align}`,
          weight && `ui-typography--weight-${weight}`,
          truncate && "ui-typography--truncate",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";
