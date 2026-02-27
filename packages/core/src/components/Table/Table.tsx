import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../utils/cn";
import "./Table.css";

export interface TableProps extends ComponentPropsWithoutRef<"table"> {
  variant?: "simple" | "striped";
  size?: "sm" | "md" | "lg";
  bordered?: boolean;
  hoverable?: boolean;
  children?: ReactNode;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ variant = "simple", size = "md", bordered, hoverable, className, children, ...props }, ref) => (
    <div className="ui-table-container">
      <table
        ref={ref}
        className={cn(
          "ui-table",
          `ui-table--${variant}`,
          `ui-table--${size}`,
          bordered && "ui-table--bordered",
          hoverable && "ui-table--hoverable",
          className,
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
);
Table.displayName = "Table";

export interface TableHeadProps extends ComponentPropsWithoutRef<"thead"> {
  children?: ReactNode;
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, children, ...props }, ref) => (
    <thead ref={ref} className={cn("ui-table__head", className)} {...props}>
      {children}
    </thead>
  ),
);
TableHead.displayName = "TableHead";

export interface TableBodyProps extends ComponentPropsWithoutRef<"tbody"> {
  children?: ReactNode;
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => (
    <tbody ref={ref} className={cn("ui-table__body", className)} {...props}>
      {children}
    </tbody>
  ),
);
TableBody.displayName = "TableBody";

export interface TableRowProps extends ComponentPropsWithoutRef<"tr"> {
  children?: ReactNode;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...props }, ref) => (
    <tr ref={ref} className={cn("ui-table__row", className)} {...props}>
      {children}
    </tr>
  ),
);
TableRow.displayName = "TableRow";

export interface TableCellProps extends ComponentPropsWithoutRef<"td"> {
  children?: ReactNode;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...props }, ref) => (
    <td ref={ref} className={cn("ui-table__cell", className)} {...props}>
      {children}
    </td>
  ),
);
TableCell.displayName = "TableCell";

export interface TableHeaderCellProps extends ComponentPropsWithoutRef<"th"> {
  sortable?: boolean;
  sortDirection?: "asc" | "desc" | "none";
  onSort?: () => void;
  children?: ReactNode;
}

export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ sortable, sortDirection = "none", onSort, className, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn("ui-table__header-cell", sortable && "ui-table__header-cell--sortable", className)}
      aria-sort={sortDirection === "none" ? undefined : sortDirection === "asc" ? "ascending" : "descending"}
      onClick={sortable ? onSort : undefined}
      {...props}
    >
      <span className="ui-table__header-content">
        {children}
        {sortable && (
          <span className="ui-table__sort-icon" aria-hidden="true">
            {sortDirection === "asc" ? "↑" : sortDirection === "desc" ? "↓" : "↕"}
          </span>
        )}
      </span>
    </th>
  ),
);
TableHeaderCell.displayName = "TableHeaderCell";
