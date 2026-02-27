"use client";

import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  useEffect,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
} from "react";
import { cn } from "../../utils/cn";
import { useClickOutside } from "../../hooks/use-click-outside";
import "./Select.css";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = "",
      onChange,
      placeholder = "Select...",
      label,
      size = "md",
      error,
      errorMessage,
      disabled,
      fullWidth,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = isControlled ? controlledValue : internalValue;
    const [open, setOpen] = useState(false);
    const [focusIndex, setFocusIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const selectId = id || (label ? `ui-select-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    const selectedOption = options.find((o) => o.value === value);

    useClickOutside(containerRef, () => setOpen(false));

    const selectOption = useCallback(
      (opt: SelectOption) => {
        if (opt.disabled) return;
        if (!isControlled) setInternalValue(opt.value);
        onChange?.(opt.value);
        setOpen(false);
      },
      [isControlled, onChange],
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (disabled) return;

        switch (e.key) {
          case "Enter":
          case " ":
            e.preventDefault();
            if (open && focusIndex >= 0) {
              selectOption(options[focusIndex]);
            } else {
              setOpen(!open);
            }
            break;
          case "ArrowDown":
            e.preventDefault();
            if (!open) {
              setOpen(true);
              setFocusIndex(0);
            } else {
              setFocusIndex((i) => {
                let next = i + 1;
                while (next < options.length && options[next].disabled) next++;
                return next < options.length ? next : i;
              });
            }
            break;
          case "ArrowUp":
            e.preventDefault();
            if (open) {
              setFocusIndex((i) => {
                let next = i - 1;
                while (next >= 0 && options[next].disabled) next--;
                return next >= 0 ? next : i;
              });
            }
            break;
          case "Escape":
            setOpen(false);
            break;
          case "Home":
            if (open) {
              e.preventDefault();
              setFocusIndex(0);
            }
            break;
          case "End":
            if (open) {
              e.preventDefault();
              setFocusIndex(options.length - 1);
            }
            break;
        }
      },
      [disabled, open, focusIndex, options, selectOption],
    );

    useEffect(() => {
      if (open && focusIndex >= 0 && listRef.current) {
        const item = listRef.current.children[focusIndex] as HTMLElement;
        item?.scrollIntoView?.({ block: "nearest" });
      }
    }, [focusIndex, open]);

    return (
      <div
        ref={containerRef}
        className={cn("ui-select-wrapper", fullWidth && "ui-select-wrapper--full-width", className)}
      >
        {label && (
          <label htmlFor={selectId} className="ui-select__label">
            {label}
          </label>
        )}
        <div
          ref={ref}
          id={selectId}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : 0}
          className={cn(
            "ui-select",
            `ui-select--${size}`,
            open && "ui-select--open",
            error && "ui-select--error",
            disabled && "ui-select--disabled",
          )}
          onClick={() => !disabled && setOpen(!open)}
          onKeyDown={handleKeyDown}
          {...props}
        >
          <span className={cn("ui-select__value", !selectedOption && "ui-select__placeholder")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg className="ui-select__chevron" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M4.427 6.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 6H4.604a.25.25 0 00-.177.427z" />
          </svg>
        </div>
        {open && (
          <ul ref={listRef} role="listbox" className={cn("ui-select__dropdown", `ui-select__dropdown--${size}`)}>
            {options.map((opt, i) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={opt.value === value}
                aria-disabled={opt.disabled || undefined}
                className={cn(
                  "ui-select__option",
                  opt.value === value && "ui-select__option--selected",
                  opt.disabled && "ui-select__option--disabled",
                  i === focusIndex && "ui-select__option--focused",
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(opt);
                }}
                onMouseEnter={() => setFocusIndex(i)}
              >
                {opt.label}
                {opt.value === value && (
                  <svg className="ui-select__check" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2.5 6 5 8.5 9.5 3.5" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        )}
        {error && errorMessage && (
          <p className="ui-select__error" role="alert">{errorMessage}</p>
        )}
      </div>
    );
  },
);
Select.displayName = "Select";
