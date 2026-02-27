import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Avatar.css";

export interface AvatarProps extends ComponentPropsWithoutRef<"span"> {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  name?: string;
  children?: ReactNode;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 55%, 55%)`;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, size = "md", name, className, children, ...props }, ref) => {
    const initials = name ? getInitials(name) : null;
    const bgColor = name ? stringToColor(name) : undefined;

    return (
      <span
        ref={ref}
        className={cn("ui-avatar", `ui-avatar--${size}`, className)}
        role="img"
        aria-label={alt || name || "avatar"}
        style={!src && bgColor ? { backgroundColor: bgColor } : undefined}
        {...props}
      >
        {src ? (
          <img className="ui-avatar__image" src={src} alt={alt || name || "avatar"} />
        ) : children ? (
          <span className="ui-avatar__content">{children}</span>
        ) : initials ? (
          <span className="ui-avatar__initials">{initials}</span>
        ) : (
          <svg className="ui-avatar__fallback" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </span>
    );
  },
);
Avatar.displayName = "Avatar";

export interface AvatarGroupProps extends ComponentPropsWithoutRef<"div"> {
  max?: number;
  size?: AvatarProps["size"];
  children?: ReactNode;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, size, className, children, ...props }, ref) => {
    const childArray = Array.isArray(children) ? children : [children];
    const visible = max ? childArray.slice(0, max) : childArray;
    const overflow = max ? childArray.length - max : 0;

    return (
      <div ref={ref} className={cn("ui-avatar-group", className)} {...props}>
        {visible}
        {overflow > 0 && (
          <span className={cn("ui-avatar ui-avatar--overflow", size && `ui-avatar--${size}`)}>
            <span className="ui-avatar__initials">+{overflow}</span>
          </span>
        )}
      </div>
    );
  },
);
AvatarGroup.displayName = "AvatarGroup";
