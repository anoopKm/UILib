"use client";

import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type ReactElement,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";
import "./Tooltip.css";

export interface TooltipProps extends Omit<ComponentPropsWithoutRef<"div">, "content"> {
  content: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  delay?: number;
  children: ReactElement;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, placement = "top", delay = 200, children, className, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const updatePosition = useCallback(() => {
      if (!triggerRef.current || !tooltipRef.current) return;
      const trigger = triggerRef.current.getBoundingClientRect();
      const tooltip = tooltipRef.current.getBoundingClientRect();
      const gap = 8;
      let top = 0;
      let left = 0;

      switch (placement) {
        case "top":
          top = trigger.top - tooltip.height - gap + window.scrollY;
          left = trigger.left + (trigger.width - tooltip.width) / 2 + window.scrollX;
          break;
        case "bottom":
          top = trigger.bottom + gap + window.scrollY;
          left = trigger.left + (trigger.width - tooltip.width) / 2 + window.scrollX;
          break;
        case "left":
          top = trigger.top + (trigger.height - tooltip.height) / 2 + window.scrollY;
          left = trigger.left - tooltip.width - gap + window.scrollX;
          break;
        case "right":
          top = trigger.top + (trigger.height - tooltip.height) / 2 + window.scrollY;
          left = trigger.right + gap + window.scrollX;
          break;
      }

      setPosition({ top, left });
    }, [placement]);

    useEffect(() => {
      if (visible) updatePosition();
    }, [visible, updatePosition]);

    const show = () => {
      timeoutRef.current = setTimeout(() => setVisible(true), delay);
    };

    const hide = () => {
      clearTimeout(timeoutRef.current);
      setVisible(false);
    };

    useEffect(() => {
      return () => clearTimeout(timeoutRef.current);
    }, []);

    if (typeof document === "undefined") return children;

    return (
      <>
        <span
          ref={triggerRef as React.RefObject<HTMLSpanElement>}
          onMouseEnter={show}
          onMouseLeave={hide}
          onFocus={show}
          onBlur={hide}
          className="ui-tooltip__trigger"
        >
          {children}
        </span>
        {visible &&
          createPortal(
            <div
              ref={(node) => {
                (tooltipRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
                if (typeof ref === "function") ref(node);
                else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
              }}
              role="tooltip"
              className={cn("ui-tooltip", `ui-tooltip--${placement}`, className)}
              style={{ top: position.top, left: position.left }}
              {...props}
            >
              {content}
              <span className="ui-tooltip__arrow" />
            </div>,
            document.body,
          )}
      </>
    );
  },
);
Tooltip.displayName = "Tooltip";
