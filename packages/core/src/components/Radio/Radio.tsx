"use client";

import {
  forwardRef,
  createContext,
  useContext,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "../../utils/cn";
import "./Radio.css";

interface RadioGroupContextValue {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const RadioGroupContext = createContext<RadioGroupContextValue>({});

export interface RadioGroupProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  children?: ReactNode;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, value, onChange, disabled, size = "md", orientation = "vertical", className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="radiogroup"
      className={cn("ui-radio-group", `ui-radio-group--${orientation}`, className)}
      {...props}
    >
      <RadioGroupContext.Provider value={{ name, value, onChange, disabled, size }}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  ),
);
RadioGroup.displayName = "RadioGroup";

export interface RadioProps extends Omit<ComponentPropsWithoutRef<"input">, "type" | "size"> {
  label?: ReactNode;
  size?: "sm" | "md" | "lg";
  value?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, size: sizeProp, value, className, disabled: disabledProp, name: nameProp, checked: checkedProp, onChange: onChangeProp, id, ...props }, ref) => {
    const group = useContext(RadioGroupContext);
    const size = sizeProp || group.size || "md";
    const disabled = disabledProp || group.disabled;
    const name = nameProp || group.name;
    const checked = group.value !== undefined ? group.value === value : checkedProp;
    const radioId = id || (typeof label === "string" ? `ui-radio-${(name || "")}-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    const handleChange = () => {
      if (value !== undefined) group.onChange?.(value);
    };

    return (
      <label
        className={cn("ui-radio", `ui-radio--${size}`, disabled && "ui-radio--disabled", className)}
        htmlFor={radioId}
      >
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className="ui-radio__input"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChangeProp || handleChange}
          {...props}
        />
        <span className="ui-radio__control" aria-hidden="true">
          <span className="ui-radio__dot" />
        </span>
        {label && <span className="ui-radio__label">{label}</span>}
      </label>
    );
  },
);
Radio.displayName = "Radio";
