import { forwardRef, createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createPortal } from 'react-dom';

// src/components/Typography/Typography.tsx

// src/utils/cn.ts
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
var variantElementMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span"
};
var Typography = forwardRef(
  ({ variant = "body1", as, color, align, weight, truncate, className, children, ...props }, ref) => {
    const Component = as || variantElementMap[variant];
    return /* @__PURE__ */ jsx(
      Component,
      {
        ref,
        className: cn(
          "ui-typography",
          `ui-typography--${variant}`,
          color && `ui-typography--color-${color}`,
          align && `ui-typography--align-${align}`,
          weight && `ui-typography--weight-${weight}`,
          truncate && "ui-typography--truncate",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Typography.displayName = "Typography";
var Card = forwardRef(
  ({ variant = "elevated", padding = "md", className, children, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("ui-card", `ui-card--${variant}`, `ui-card--padding-${padding}`, className),
      ...props,
      children
    }
  )
);
Card.displayName = "Card";
var CardHeader = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("ui-card__header", className), ...props, children })
);
CardHeader.displayName = "CardHeader";
var CardBody = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("ui-card__body", className), ...props, children })
);
CardBody.displayName = "CardBody";
var CardFooter = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("ui-card__footer", className), ...props, children })
);
CardFooter.displayName = "CardFooter";
var Badge = forwardRef(
  ({ variant = "subtle", colorScheme = "primary", size = "md", dot, className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    "span",
    {
      ref,
      className: cn(
        "ui-badge",
        `ui-badge--${variant}`,
        `ui-badge--${colorScheme}`,
        `ui-badge--${size}`,
        dot && "ui-badge--dot",
        className
      ),
      ...props,
      children: [
        dot && /* @__PURE__ */ jsx("span", { className: "ui-badge__dot" }),
        children
      ]
    }
  )
);
Badge.displayName = "Badge";
function getInitials(name) {
  return name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();
}
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 55%, 55%)`;
}
var Avatar = forwardRef(
  ({ src, alt, size = "md", name, className, children, ...props }, ref) => {
    const initials = name ? getInitials(name) : null;
    const bgColor = name ? stringToColor(name) : void 0;
    return /* @__PURE__ */ jsx(
      "span",
      {
        ref,
        className: cn("ui-avatar", `ui-avatar--${size}`, className),
        role: "img",
        "aria-label": alt || name || "avatar",
        style: !src && bgColor ? { backgroundColor: bgColor } : void 0,
        ...props,
        children: src ? /* @__PURE__ */ jsx("img", { className: "ui-avatar__image", src, alt: alt || name || "avatar" }) : children ? /* @__PURE__ */ jsx("span", { className: "ui-avatar__content", children }) : initials ? /* @__PURE__ */ jsx("span", { className: "ui-avatar__initials", children: initials }) : /* @__PURE__ */ jsx("svg", { className: "ui-avatar__fallback", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) })
      }
    );
  }
);
Avatar.displayName = "Avatar";
var AvatarGroup = forwardRef(
  ({ max, size, className, children, ...props }, ref) => {
    const childArray = Array.isArray(children) ? children : [children];
    const visible = max ? childArray.slice(0, max) : childArray;
    const overflow = max ? childArray.length - max : 0;
    return /* @__PURE__ */ jsxs("div", { ref, className: cn("ui-avatar-group", className), ...props, children: [
      visible,
      overflow > 0 && /* @__PURE__ */ jsx("span", { className: cn("ui-avatar ui-avatar--overflow", size && `ui-avatar--${size}`), children: /* @__PURE__ */ jsxs("span", { className: "ui-avatar__initials", children: [
        "+",
        overflow
      ] }) })
    ] });
  }
);
AvatarGroup.displayName = "AvatarGroup";
var statusIcons = {
  info: "\u2139",
  success: "\u2713",
  warning: "\u26A0",
  error: "\u2715"
};
var Alert = forwardRef(
  ({ status = "info", variant = "subtle", icon, onClose, className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      role: "alert",
      className: cn(
        "ui-alert",
        `ui-alert--${status}`,
        `ui-alert--${variant}`,
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "ui-alert__icon", "aria-hidden": "true", children: icon || statusIcons[status] }),
        /* @__PURE__ */ jsx("div", { className: "ui-alert__content", children }),
        onClose && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "ui-alert__close",
            onClick: onClose,
            "aria-label": "Close alert",
            children: "\u2715"
          }
        )
      ]
    }
  )
);
Alert.displayName = "Alert";
var Button = forwardRef(
  ({
    variant = "solid",
    size = "md",
    colorScheme = "primary",
    loading,
    fullWidth,
    leftIcon,
    rightIcon,
    as: Comp = "button",
    className,
    disabled,
    children,
    ...props
  }, ref) => /* @__PURE__ */ jsxs(
    Comp,
    {
      ref,
      className: cn(
        "ui-button",
        `ui-button--${variant}`,
        `ui-button--${size}`,
        `ui-button--${colorScheme}`,
        fullWidth && "ui-button--full-width",
        loading && "ui-button--loading",
        className
      ),
      disabled: disabled || loading,
      "data-loading": loading || void 0,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsx("span", { className: "ui-button__spinner", "aria-hidden": "true" }),
        !loading && leftIcon && /* @__PURE__ */ jsx("span", { className: "ui-button__icon ui-button__icon--left", children: leftIcon }),
        /* @__PURE__ */ jsx("span", { className: "ui-button__label", children }),
        !loading && rightIcon && /* @__PURE__ */ jsx("span", { className: "ui-button__icon ui-button__icon--right", children: rightIcon })
      ]
    }
  )
);
Button.displayName = "Button";
var Input = forwardRef(
  ({
    size = "md",
    variant = "outline",
    error,
    helperText,
    errorMessage,
    label,
    leftAdornment,
    rightAdornment,
    fullWidth,
    className,
    id,
    disabled,
    ...props
  }, ref) => {
    const inputId = id || (label ? `ui-input-${label.replace(/\s+/g, "-").toLowerCase()}` : void 0);
    const showError = error && errorMessage;
    return /* @__PURE__ */ jsxs("div", { className: cn("ui-input-wrapper", fullWidth && "ui-input-wrapper--full-width", className), children: [
      label && /* @__PURE__ */ jsx("label", { htmlFor: inputId, className: "ui-input__label", children: label }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "ui-input",
            `ui-input--${variant}`,
            `ui-input--${size}`,
            error && "ui-input--error",
            disabled && "ui-input--disabled"
          ),
          children: [
            leftAdornment && /* @__PURE__ */ jsx("span", { className: "ui-input__adornment ui-input__adornment--left", children: leftAdornment }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref,
                id: inputId,
                className: "ui-input__field",
                disabled,
                "aria-invalid": error || void 0,
                "aria-describedby": showError ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
                ...props
              }
            ),
            rightAdornment && /* @__PURE__ */ jsx("span", { className: "ui-input__adornment ui-input__adornment--right", children: rightAdornment })
          ]
        }
      ),
      showError && /* @__PURE__ */ jsx("p", { id: `${inputId}-error`, className: "ui-input__message ui-input__message--error", role: "alert", children: errorMessage }),
      !showError && helperText && /* @__PURE__ */ jsx("p", { id: `${inputId}-helper`, className: "ui-input__message", children: helperText })
    ] });
  }
);
Input.displayName = "Input";
var Checkbox = forwardRef(
  ({ label, size = "md", indeterminate, error, className, disabled, id, ...props }, ref) => {
    const checkboxId = id || (typeof label === "string" ? `ui-checkbox-${label.replace(/\s+/g, "-").toLowerCase()}` : void 0);
    return /* @__PURE__ */ jsxs(
      "label",
      {
        className: cn(
          "ui-checkbox",
          `ui-checkbox--${size}`,
          disabled && "ui-checkbox--disabled",
          error && "ui-checkbox--error",
          className
        ),
        htmlFor: checkboxId,
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: (node) => {
                if (node) node.indeterminate = !!indeterminate;
                if (typeof ref === "function") ref(node);
                else if (ref) ref.current = node;
              },
              type: "checkbox",
              id: checkboxId,
              className: "ui-checkbox__input",
              disabled,
              "aria-invalid": error || void 0,
              ...props
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "ui-checkbox__control", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("svg", { className: "ui-checkbox__check", viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "2.5 6 5 8.5 9.5 3.5" }) }),
            /* @__PURE__ */ jsx("svg", { className: "ui-checkbox__indeterminate", viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsx("line", { x1: "3", y1: "6", x2: "9", y2: "6" }) })
          ] }),
          label && /* @__PURE__ */ jsx("span", { className: "ui-checkbox__label", children: label })
        ]
      }
    );
  }
);
Checkbox.displayName = "Checkbox";
var RadioGroupContext = createContext({});
var RadioGroup = forwardRef(
  ({ name, value, onChange, disabled, size = "md", orientation = "vertical", className, children, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "radiogroup",
      className: cn("ui-radio-group", `ui-radio-group--${orientation}`, className),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupContext.Provider, { value: { name, value, onChange, disabled, size }, children })
    }
  )
);
RadioGroup.displayName = "RadioGroup";
var Radio = forwardRef(
  ({ label, size: sizeProp, value, className, disabled: disabledProp, name: nameProp, checked: checkedProp, onChange: onChangeProp, id, ...props }, ref) => {
    const group = useContext(RadioGroupContext);
    const size = sizeProp || group.size || "md";
    const disabled = disabledProp || group.disabled;
    const name = nameProp || group.name;
    const checked = group.value !== void 0 ? group.value === value : checkedProp;
    const radioId = id || (typeof label === "string" ? `ui-radio-${name || ""}-${label.replace(/\s+/g, "-").toLowerCase()}` : void 0);
    const handleChange = () => {
      if (value !== void 0) group.onChange?.(value);
    };
    return /* @__PURE__ */ jsxs(
      "label",
      {
        className: cn("ui-radio", `ui-radio--${size}`, disabled && "ui-radio--disabled", className),
        htmlFor: radioId,
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref,
              type: "radio",
              id: radioId,
              className: "ui-radio__input",
              name,
              value,
              checked,
              disabled,
              onChange: onChangeProp || handleChange,
              ...props
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "ui-radio__control", "aria-hidden": "true", children: /* @__PURE__ */ jsx("span", { className: "ui-radio__dot" }) }),
          label && /* @__PURE__ */ jsx("span", { className: "ui-radio__label", children: label })
        ]
      }
    );
  }
);
Radio.displayName = "Radio";
var Switch = forwardRef(
  ({ label, size = "md", className, disabled, id, ...props }, ref) => {
    const switchId = id || (typeof label === "string" ? `ui-switch-${label.replace(/\s+/g, "-").toLowerCase()}` : void 0);
    return /* @__PURE__ */ jsxs(
      "label",
      {
        className: cn("ui-switch", `ui-switch--${size}`, disabled && "ui-switch--disabled", className),
        htmlFor: switchId,
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref,
              type: "checkbox",
              role: "switch",
              id: switchId,
              className: "ui-switch__input",
              disabled,
              ...props
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "ui-switch__track", "aria-hidden": "true", children: /* @__PURE__ */ jsx("span", { className: "ui-switch__thumb" }) }),
          label && /* @__PURE__ */ jsx("span", { className: "ui-switch__label", children: label })
        ]
      }
    );
  }
);
Switch.displayName = "Switch";
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
var Select = forwardRef(
  ({
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
  }, ref) => {
    const isControlled = controlledValue !== void 0;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = isControlled ? controlledValue : internalValue;
    const [open, setOpen] = useState(false);
    const [focusIndex, setFocusIndex] = useState(-1);
    const containerRef = useRef(null);
    const listRef = useRef(null);
    const selectId = id || (label ? `ui-select-${label.replace(/\s+/g, "-").toLowerCase()}` : void 0);
    const selectedOption = options.find((o) => o.value === value);
    useClickOutside(containerRef, () => setOpen(false));
    const selectOption = useCallback(
      (opt) => {
        if (opt.disabled) return;
        if (!isControlled) setInternalValue(opt.value);
        onChange?.(opt.value);
        setOpen(false);
      },
      [isControlled, onChange]
    );
    const handleKeyDown = useCallback(
      (e) => {
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
      [disabled, open, focusIndex, options, selectOption]
    );
    useEffect(() => {
      if (open && focusIndex >= 0 && listRef.current) {
        const item = listRef.current.children[focusIndex];
        item?.scrollIntoView?.({ block: "nearest" });
      }
    }, [focusIndex, open]);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: containerRef,
        className: cn("ui-select-wrapper", fullWidth && "ui-select-wrapper--full-width", className),
        children: [
          label && /* @__PURE__ */ jsx("label", { htmlFor: selectId, className: "ui-select__label", children: label }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref,
              id: selectId,
              role: "combobox",
              "aria-expanded": open,
              "aria-haspopup": "listbox",
              "aria-disabled": disabled || void 0,
              tabIndex: disabled ? -1 : 0,
              className: cn(
                "ui-select",
                `ui-select--${size}`,
                open && "ui-select--open",
                error && "ui-select--error",
                disabled && "ui-select--disabled"
              ),
              onClick: () => !disabled && setOpen(!open),
              onKeyDown: handleKeyDown,
              ...props,
              children: [
                /* @__PURE__ */ jsx("span", { className: cn("ui-select__value", !selectedOption && "ui-select__placeholder"), children: selectedOption ? selectedOption.label : placeholder }),
                /* @__PURE__ */ jsx("svg", { className: "ui-select__chevron", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M4.427 6.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 6H4.604a.25.25 0 00-.177.427z" }) })
              ]
            }
          ),
          open && /* @__PURE__ */ jsx("ul", { ref: listRef, role: "listbox", className: cn("ui-select__dropdown", `ui-select__dropdown--${size}`), children: options.map((opt, i) => /* @__PURE__ */ jsxs(
            "li",
            {
              role: "option",
              "aria-selected": opt.value === value,
              "aria-disabled": opt.disabled || void 0,
              className: cn(
                "ui-select__option",
                opt.value === value && "ui-select__option--selected",
                opt.disabled && "ui-select__option--disabled",
                i === focusIndex && "ui-select__option--focused"
              ),
              onClick: (e) => {
                e.stopPropagation();
                selectOption(opt);
              },
              onMouseEnter: () => setFocusIndex(i),
              children: [
                opt.label,
                opt.value === value && /* @__PURE__ */ jsx("svg", { className: "ui-select__check", viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "2.5 6 5 8.5 9.5 3.5" }) })
              ]
            },
            opt.value
          )) }),
          error && errorMessage && /* @__PURE__ */ jsx("p", { className: "ui-select__error", role: "alert", children: errorMessage })
        ]
      }
    );
  }
);
Select.displayName = "Select";
var FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function useFocusTrap(active) {
  const containerRef = useRef(null);
  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];
    return Array.from(containerRef.current.querySelectorAll(FOCUSABLE_SELECTOR));
  }, []);
  useEffect(() => {
    if (!active) return;
    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const focusable2 = getFocusableElements();
      if (focusable2.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable2[0];
      const last = focusable2[focusable2.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    const focusable = getFocusableElements();
    if (focusable.length > 0) {
      focusable[0].focus();
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, getFocusableElements]);
  return containerRef;
}
var Modal = forwardRef(
  ({
    open,
    onClose,
    size = "md",
    closeOnOverlay = true,
    closeOnEscape = true,
    className,
    children,
    ...props
  }, ref) => {
    const trapRef = useFocusTrap(open);
    useEffect(() => {
      if (!open || !closeOnEscape) return;
      const handler = (e) => {
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
    const handleOverlayClick = (e) => {
      if (closeOnOverlay && e.target === e.currentTarget) onClose();
    };
    if (!open) return null;
    if (typeof document === "undefined") return null;
    return createPortal(
      /* @__PURE__ */ jsx("div", { className: "ui-modal__overlay", onClick: handleOverlayClick, children: /* @__PURE__ */ jsx(
        "div",
        {
          ref: (node) => {
            trapRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          },
          role: "dialog",
          "aria-modal": "true",
          className: cn("ui-modal", `ui-modal--${size}`, className),
          ...props,
          children
        }
      ) }),
      document.body
    );
  }
);
Modal.displayName = "Modal";
var ModalHeader = forwardRef(
  ({ onClose, className, children, ...props }, ref) => /* @__PURE__ */ jsxs("div", { ref, className: cn("ui-modal__header", className), ...props, children: [
    /* @__PURE__ */ jsx("div", { className: "ui-modal__title", children }),
    onClose && /* @__PURE__ */ jsx("button", { type: "button", className: "ui-modal__close", onClick: onClose, "aria-label": "Close", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", fill: "currentColor", width: "16", height: "16", children: /* @__PURE__ */ jsx("path", { d: "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" }) }) })
  ] })
);
ModalHeader.displayName = "ModalHeader";
var ModalBody = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("ui-modal__body", className), ...props, children })
);
ModalBody.displayName = "ModalBody";
var ModalFooter = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("ui-modal__footer", className), ...props, children })
);
ModalFooter.displayName = "ModalFooter";
var Tooltip = forwardRef(
  ({ content, placement = "top", delay = 200, children, className, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);
    const timeoutRef = useRef();
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
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          ref: triggerRef,
          onMouseEnter: show,
          onMouseLeave: hide,
          onFocus: show,
          onBlur: hide,
          className: "ui-tooltip__trigger",
          children
        }
      ),
      visible && createPortal(
        /* @__PURE__ */ jsxs(
          "div",
          {
            ref: (node) => {
              tooltipRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            },
            role: "tooltip",
            className: cn("ui-tooltip", `ui-tooltip--${placement}`, className),
            style: { top: position.top, left: position.left },
            ...props,
            children: [
              content,
              /* @__PURE__ */ jsx("span", { className: "ui-tooltip__arrow" })
            ]
          }
        ),
        document.body
      )
    ] });
  }
);
Tooltip.displayName = "Tooltip";
var TabsContext = createContext({
  activeTab: "",
  setActiveTab: () => {
  },
  variant: "line",
  size: "md"
});
var Tabs = forwardRef(
  ({
    defaultValue = "",
    value: controlledValue,
    onChange,
    variant = "line",
    size = "md",
    className,
    children,
    ...props
  }, ref) => {
    const isControlled = controlledValue !== void 0;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const activeTab = isControlled ? controlledValue : internalValue;
    const setActiveTab = useCallback(
      (id) => {
        if (!isControlled) setInternalValue(id);
        onChange?.(id);
      },
      [isControlled, onChange]
    );
    return /* @__PURE__ */ jsx(TabsContext.Provider, { value: { activeTab, setActiveTab, variant, size }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("ui-tabs", className), ...props, children }) });
  }
);
Tabs.displayName = "Tabs";
var TabList = forwardRef(
  ({ className, children, ...props }, ref) => {
    const { variant } = useContext(TabsContext);
    const listRef = useRef(null);
    const handleKeyDown = useCallback((e) => {
      const list = listRef.current;
      if (!list) return;
      const tabs = Array.from(list.querySelectorAll('[role="tab"]:not([disabled])'));
      const currentIndex = tabs.indexOf(document.activeElement);
      let nextIndex = -1;
      switch (e.key) {
        case "ArrowRight":
          nextIndex = (currentIndex + 1) % tabs.length;
          break;
        case "ArrowLeft":
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }
      e.preventDefault();
      tabs[nextIndex]?.focus();
    }, []);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref: (node) => {
          listRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        role: "tablist",
        className: cn("ui-tab-list", `ui-tab-list--${variant}`, className),
        onKeyDown: handleKeyDown,
        ...props,
        children
      }
    );
  }
);
TabList.displayName = "TabList";
var Tab = forwardRef(
  ({ value, className, children, disabled, ...props }, ref) => {
    const { activeTab, setActiveTab, variant, size } = useContext(TabsContext);
    const isActive = activeTab === value;
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        role: "tab",
        type: "button",
        "aria-selected": isActive,
        "aria-controls": `ui-tabpanel-${value}`,
        id: `ui-tab-${value}`,
        tabIndex: isActive ? 0 : -1,
        disabled,
        className: cn(
          "ui-tab",
          `ui-tab--${variant}`,
          `ui-tab--${size}`,
          isActive && "ui-tab--active",
          className
        ),
        onClick: () => setActiveTab(value),
        ...props,
        children
      }
    );
  }
);
Tab.displayName = "Tab";
var TabPanel = forwardRef(
  ({ value, className, children, ...props }, ref) => {
    const { activeTab } = useContext(TabsContext);
    if (activeTab !== value) return null;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "tabpanel",
        id: `ui-tabpanel-${value}`,
        "aria-labelledby": `ui-tab-${value}`,
        tabIndex: 0,
        className: cn("ui-tab-panel", className),
        ...props,
        children
      }
    );
  }
);
TabPanel.displayName = "TabPanel";
var Table = forwardRef(
  ({ variant = "simple", size = "md", bordered, hoverable, className, children, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "ui-table-container", children: /* @__PURE__ */ jsx(
    "table",
    {
      ref,
      className: cn(
        "ui-table",
        `ui-table--${variant}`,
        `ui-table--${size}`,
        bordered && "ui-table--bordered",
        hoverable && "ui-table--hoverable",
        className
      ),
      ...props,
      children
    }
  ) })
);
Table.displayName = "Table";
var TableHead = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("ui-table__head", className), ...props, children })
);
TableHead.displayName = "TableHead";
var TableBody = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("ui-table__body", className), ...props, children })
);
TableBody.displayName = "TableBody";
var TableRow = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("tr", { ref, className: cn("ui-table__row", className), ...props, children })
);
TableRow.displayName = "TableRow";
var TableCell = forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("td", { ref, className: cn("ui-table__cell", className), ...props, children })
);
TableCell.displayName = "TableCell";
var TableHeaderCell = forwardRef(
  ({ sortable, sortDirection = "none", onSort, className, children, ...props }, ref) => /* @__PURE__ */ jsx(
    "th",
    {
      ref,
      className: cn("ui-table__header-cell", sortable && "ui-table__header-cell--sortable", className),
      "aria-sort": sortDirection === "none" ? void 0 : sortDirection === "asc" ? "ascending" : "descending",
      onClick: sortable ? onSort : void 0,
      ...props,
      children: /* @__PURE__ */ jsxs("span", { className: "ui-table__header-content", children: [
        children,
        sortable && /* @__PURE__ */ jsx("span", { className: "ui-table__sort-icon", "aria-hidden": "true", children: sortDirection === "asc" ? "\u2191" : sortDirection === "desc" ? "\u2193" : "\u2195" })
      ] })
    }
  )
);
TableHeaderCell.displayName = "TableHeaderCell";
function useControllableState({
  value: controlledValue,
  defaultValue,
  onChange
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : uncontrolled;
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });
  const setValue = useCallback(
    (next) => {
      if (!isControlled) {
        setUncontrolled(next);
      }
      onChangeRef.current?.(next);
    },
    [isControlled]
  );
  return [value, setValue];
}

export { Alert, Avatar, AvatarGroup, Badge, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Modal, ModalBody, ModalFooter, ModalHeader, Radio, RadioGroup, Select, Switch, Tab, TabList, TabPanel, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Tabs, Tooltip, Typography, cn, useClickOutside, useControllableState, useFocusTrap };
