import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Card.css";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "elevated" | "outlined" | "filled";
  padding?: "none" | "sm" | "md" | "lg";
  children?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "elevated", padding = "md", className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("ui-card", `ui-card--${variant}`, `ui-card--padding-${padding}`, className)}
      {...props}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";

export interface CardHeaderProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("ui-card__header", className)} {...props}>
      {children}
    </div>
  ),
);
CardHeader.displayName = "CardHeader";

export interface CardBodyProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("ui-card__body", className)} {...props}>
      {children}
    </div>
  ),
);
CardBody.displayName = "CardBody";

export interface CardFooterProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("ui-card__footer", className)} {...props}>
      {children}
    </div>
  ),
);
CardFooter.displayName = "CardFooter";
