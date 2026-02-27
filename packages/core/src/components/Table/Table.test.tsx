import { render, screen } from "@testing-library/react";
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from "./Table";

describe("Table", () => {
  const renderTable = () =>
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>john@test.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

  it("renders table with headers and cells", () => {
    renderTable();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("john@test.com")).toBeInTheDocument();
  });

  it("supports striped variant", () => {
    const { container } = render(
      <Table variant="striped">
        <TableBody>
          <TableRow><TableCell>Row 1</TableCell></TableRow>
        </TableBody>
      </Table>,
    );
    expect(container.querySelector(".ui-table")).toHaveClass("ui-table--striped");
  });

  it("supports sortable headers", () => {
    const onSort = vi.fn();
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell sortable sortDirection="asc" onSort={onSort}>
              Name
            </TableHeaderCell>
          </TableRow>
        </TableHead>
      </Table>,
    );
    const header = screen.getByText("Name").closest("th");
    expect(header).toHaveAttribute("aria-sort", "ascending");
  });

  it("applies bordered and hoverable classes", () => {
    const { container } = render(
      <Table bordered hoverable>
        <TableBody><TableRow><TableCell>Data</TableCell></TableRow></TableBody>
      </Table>,
    );
    const table = container.querySelector(".ui-table");
    expect(table).toHaveClass("ui-table--bordered", "ui-table--hoverable");
  });
});
