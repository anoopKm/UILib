"use client";

import {
  forwardRef,
  useEffect,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";
import { useFocusTrap } from "../../hooks/use-focus-trap";
import "./Modal.css";

export interface ModalProps extends Omit<ComponentPropsWithoutRef<"div">, "role"> {
  open: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
  children?: ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      size = "md",
      closeOnOverlay = true,
      closeOnEscape = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const trapRef = useFocusTrap(open);

    useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handler = (e: globalThis.KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }, [open, closeOnEscape, onClose]);

    useEffect(() => {
      if (open) {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = prev;
        };
      }
    }, [open]);

    const handleOverlayClick = (e: MouseEvent) => {
      if (closeOnOverlay && e.target === e.currentTarget) onClose();
    };

    if (!open) return null;

    if (typeof document === "undefined") return null;

    return createPortal(
      <div className="ui-modal__overlay" onClick={handleOverlayClick}>
        <div
          ref={(node) => {
            (trapRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          role="dialog"
          aria-modal="true"
          className={cn("ui-modal", `ui-modal--${size}`, className)}
          {...props}
        >
          {children}
        </div>
      </div>,
      document.body,
    );
  },
);
Modal.displayName = "Modal";

export interface ModalHeaderProps extends ComponentPropsWithoutRef<"div"> {
  onClose?: () => void;
  children?: ReactNode;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ onClose, className, children, ...props }, ref) => (
    <div ref={ref} className={cn("ui-modal__header", className)} {...props}>
      <div className="ui-modal__title">{children}</div>
      {onClose && (
        <button type="button" className="ui-modal__close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
            <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
          </svg>
        </button>
      )}
    </div>
  ),
);
ModalHeader.displayName = "ModalHeader";

export interface ModalBodyProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("ui-modal__body", className)} {...props}>
      {children}
    </div>
  ),
);
ModalBody.displayName = "ModalBody";

export interface ModalFooterProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("ui-modal__footer", className)} {...props}>
      {children}
    </div>
  ),
);
ModalFooter.displayName = "ModalFooter";
