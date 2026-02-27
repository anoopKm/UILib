import * as react from 'react';
import { ComponentPropsWithoutRef, ElementType, ReactNode, ReactElement, RefObject } from 'react';

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption" | "overline";
interface TypographyProps extends ComponentPropsWithoutRef<"p"> {
    variant?: TypographyVariant;
    as?: ElementType;
    color?: "primary" | "secondary" | "error" | "success" | "warning" | "muted" | "inherit";
    align?: "left" | "center" | "right";
    weight?: "normal" | "medium" | "semibold" | "bold";
    truncate?: boolean;
    children?: ReactNode;
}
declare const Typography: react.ForwardRefExoticComponent<TypographyProps & react.RefAttributes<HTMLElement>>;

interface CardProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "elevated" | "outlined" | "filled";
    padding?: "none" | "sm" | "md" | "lg";
    children?: ReactNode;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;
interface CardHeaderProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode;
}
declare const CardHeader: react.ForwardRefExoticComponent<CardHeaderProps & react.RefAttributes<HTMLDivElement>>;
interface CardBodyProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode;
}
declare const CardBody: react.ForwardRefExoticComponent<CardBodyProps & react.RefAttributes<HTMLDivElement>>;
interface CardFooterProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode;
}
declare const CardFooter: react.ForwardRefExoticComponent<CardFooterProps & react.RefAttributes<HTMLDivElement>>;

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
    variant?: "solid" | "outline" | "subtle";
    colorScheme?: "primary" | "secondary" | "error" | "warning" | "success" | "info";
    size?: "sm" | "md" | "lg";
    dot?: boolean;
    children?: ReactNode;
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

interface AvatarProps extends ComponentPropsWithoutRef<"span"> {
    src?: string;
    alt?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    name?: string;
    children?: ReactNode;
}
declare const Avatar: react.ForwardRefExoticComponent<AvatarProps & react.RefAttributes<HTMLSpanElement>>;
interface AvatarGroupProps extends ComponentPropsWithoutRef<"div"> {
    max?: number;
    size?: AvatarProps["size"];
    children?: ReactNode;
}
declare const AvatarGroup: react.ForwardRefExoticComponent<AvatarGroupProps & react.RefAttributes<HTMLDivElement>>;

interface AlertProps extends ComponentPropsWithoutRef<"div"> {
    status?: "info" | "success" | "warning" | "error";
    variant?: "subtle" | "solid" | "outline" | "left-accent";
    icon?: ReactNode;
    onClose?: () => void;
    children?: ReactNode;
}
declare const Alert: react.ForwardRefExoticComponent<AlertProps & react.RefAttributes<HTMLDivElement>>;

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?: "solid" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    colorScheme?: "primary" | "secondary" | "error" | "success";
    loading?: boolean;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    as?: ElementType;
    children?: ReactNode;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    size?: "sm" | "md" | "lg";
    variant?: "outline" | "filled" | "flush";
    error?: boolean;
    helperText?: string;
    errorMessage?: string;
    label?: string;
    leftAdornment?: ReactNode;
    rightAdornment?: ReactNode;
    fullWidth?: boolean;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface CheckboxProps extends Omit<ComponentPropsWithoutRef<"input">, "type" | "size"> {
    label?: ReactNode;
    size?: "sm" | "md" | "lg";
    indeterminate?: boolean;
    error?: boolean;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface RadioGroupProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    orientation?: "horizontal" | "vertical";
    children?: ReactNode;
}
declare const RadioGroup: react.ForwardRefExoticComponent<RadioGroupProps & react.RefAttributes<HTMLDivElement>>;
interface RadioProps extends Omit<ComponentPropsWithoutRef<"input">, "type" | "size"> {
    label?: ReactNode;
    size?: "sm" | "md" | "lg";
    value?: string;
}
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLInputElement>>;

interface SwitchProps extends Omit<ComponentPropsWithoutRef<"input">, "type" | "size"> {
    label?: ReactNode;
    size?: "sm" | "md" | "lg";
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
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
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLDivElement>>;

interface ModalProps extends Omit<ComponentPropsWithoutRef<"div">, "role"> {
    open: boolean;
    onClose: () => void;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    closeOnOverlay?: boolean;
    closeOnEscape?: boolean;
    children?: ReactNode;
}
declare const Modal: react.ForwardRefExoticComponent<ModalProps & react.RefAttributes<HTMLDivElement>>;
interface ModalHeaderProps extends ComponentPropsWithoutRef<"div"> {
    onClose?: () => void;
    children?: ReactNode;
}
declare const ModalHeader: react.ForwardRefExoticComponent<ModalHeaderProps & react.RefAttributes<HTMLDivElement>>;
interface ModalBodyProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode;
}
declare const ModalBody: react.ForwardRefExoticComponent<ModalBodyProps & react.RefAttributes<HTMLDivElement>>;
interface ModalFooterProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode;
}
declare const ModalFooter: react.ForwardRefExoticComponent<ModalFooterProps & react.RefAttributes<HTMLDivElement>>;

interface TooltipProps extends Omit<ComponentPropsWithoutRef<"div">, "content"> {
    content: ReactNode;
    placement?: "top" | "bottom" | "left" | "right";
    delay?: number;
    children: ReactElement;
}
declare const Tooltip: react.ForwardRefExoticComponent<TooltipProps & react.RefAttributes<HTMLDivElement>>;

interface TabsProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    variant?: "line" | "enclosed" | "pill";
    size?: "sm" | "md" | "lg";
    children?: ReactNode;
}
declare const Tabs: react.ForwardRefExoticComponent<TabsProps & react.RefAttributes<HTMLDivElement>>;
interface TabListProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode;
}
declare const TabList: react.ForwardRefExoticComponent<TabListProps & react.RefAttributes<HTMLDivElement>>;
interface TabProps extends ComponentPropsWithoutRef<"button"> {
    value: string;
    children?: ReactNode;
}
declare const Tab: react.ForwardRefExoticComponent<TabProps & react.RefAttributes<HTMLButtonElement>>;
interface TabPanelProps extends ComponentPropsWithoutRef<"div"> {
    value: string;
    children?: ReactNode;
}
declare const TabPanel: react.ForwardRefExoticComponent<TabPanelProps & react.RefAttributes<HTMLDivElement>>;

interface TableProps extends ComponentPropsWithoutRef<"table"> {
    variant?: "simple" | "striped";
    size?: "sm" | "md" | "lg";
    bordered?: boolean;
    hoverable?: boolean;
    children?: ReactNode;
}
declare const Table: react.ForwardRefExoticComponent<TableProps & react.RefAttributes<HTMLTableElement>>;
interface TableHeadProps extends ComponentPropsWithoutRef<"thead"> {
    children?: ReactNode;
}
declare const TableHead: react.ForwardRefExoticComponent<TableHeadProps & react.RefAttributes<HTMLTableSectionElement>>;
interface TableBodyProps extends ComponentPropsWithoutRef<"tbody"> {
    children?: ReactNode;
}
declare const TableBody: react.ForwardRefExoticComponent<TableBodyProps & react.RefAttributes<HTMLTableSectionElement>>;
interface TableRowProps extends ComponentPropsWithoutRef<"tr"> {
    children?: ReactNode;
}
declare const TableRow: react.ForwardRefExoticComponent<TableRowProps & react.RefAttributes<HTMLTableRowElement>>;
interface TableCellProps extends ComponentPropsWithoutRef<"td"> {
    children?: ReactNode;
}
declare const TableCell: react.ForwardRefExoticComponent<TableCellProps & react.RefAttributes<HTMLTableCellElement>>;
interface TableHeaderCellProps extends ComponentPropsWithoutRef<"th"> {
    sortable?: boolean;
    sortDirection?: "asc" | "desc" | "none";
    onSort?: () => void;
    children?: ReactNode;
}
declare const TableHeaderCell: react.ForwardRefExoticComponent<TableHeaderCellProps & react.RefAttributes<HTMLTableCellElement>>;

interface UseControllableStateParams<T> {
    value?: T;
    defaultValue: T;
    onChange?: (value: T) => void;
}
declare function useControllableState<T>({ value: controlledValue, defaultValue, onChange, }: UseControllableStateParams<T>): [T, (next: T) => void];

declare function useFocusTrap(active: boolean): react.RefObject<HTMLDivElement>;

declare function useClickOutside(ref: RefObject<HTMLElement | null>, handler: () => void): void;

type ClassValue = string | undefined | null | false;
declare function cn(...classes: ClassValue[]): string;

export { Alert, type AlertProps, Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, Badge, type BadgeProps, Button, type ButtonProps, Card, CardBody, type CardBodyProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, Checkbox, type CheckboxProps, Input, type InputProps, Modal, ModalBody, type ModalBodyProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Select, type SelectOption, type SelectProps, Switch, type SwitchProps, Tab, TabList, type TabListProps, TabPanel, type TabPanelProps, type TabProps, Table, TableBody, type TableBodyProps, TableCell, type TableCellProps, TableHead, type TableHeadProps, TableHeaderCell, type TableHeaderCellProps, type TableProps, TableRow, type TableRowProps, Tabs, type TabsProps, Tooltip, type TooltipProps, Typography, type TypographyProps, cn, useClickOutside, useControllableState, useFocusTrap };
