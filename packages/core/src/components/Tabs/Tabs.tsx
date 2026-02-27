"use client";

import {
  forwardRef,
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type KeyboardEvent,
} from "react";
import { cn } from "../../utils/cn";
import "./Tabs.css";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
  variant: "line" | "enclosed" | "pill";
  size: "sm" | "md" | "lg";
}

const TabsContext = createContext<TabsContextValue>({
  activeTab: "",
  setActiveTab: () => {},
  variant: "line",
  size: "md",
});

export interface TabsProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: "line" | "enclosed" | "pill";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      defaultValue = "",
      value: controlledValue,
      onChange,
      variant = "line",
      size = "md",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const activeTab = isControlled ? controlledValue : internalValue;

    const setActiveTab = useCallback(
      (id: string) => {
        if (!isControlled) setInternalValue(id);
        onChange?.(id);
      },
      [isControlled, onChange],
    );

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab, variant, size }}>
        <div ref={ref} className={cn("ui-tabs", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);
Tabs.displayName = "Tabs";

export interface TabListProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ className, children, ...props }, ref) => {
    const { variant } = useContext(TabsContext);
    const listRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      const list = listRef.current;
      if (!list) return;

      const tabs = Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])'));
      const currentIndex = tabs.indexOf(document.activeElement as HTMLElement);

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

    return (
      <div
        ref={(node) => {
          (listRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        role="tablist"
        className={cn("ui-tab-list", `ui-tab-list--${variant}`, className)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TabList.displayName = "TabList";

export interface TabProps extends ComponentPropsWithoutRef<"button"> {
  value: string;
  children?: ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value, className, children, disabled, ...props }, ref) => {
    const { activeTab, setActiveTab, variant, size } = useContext(TabsContext);
    const isActive = activeTab === value;

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isActive}
        aria-controls={`ui-tabpanel-${value}`}
        id={`ui-tab-${value}`}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        className={cn(
          "ui-tab",
          `ui-tab--${variant}`,
          `ui-tab--${size}`,
          isActive && "ui-tab--active",
          className,
        )}
        onClick={() => setActiveTab(value)}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Tab.displayName = "Tab";

export interface TabPanelProps extends ComponentPropsWithoutRef<"div"> {
  value: string;
  children?: ReactNode;
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, className, children, ...props }, ref) => {
    const { activeTab } = useContext(TabsContext);
    if (activeTab !== value) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`ui-tabpanel-${value}`}
        aria-labelledby={`ui-tab-${value}`}
        tabIndex={0}
        className={cn("ui-tab-panel", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TabPanel.displayName = "TabPanel";
