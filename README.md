# @uilib/core

A lightweight, enterprise-grade React UI component library built with zero-runtime CSS. Compatible with React 18+ and Next.js (App Router, Pages Router, Server Components).

## Features

- **Zero runtime CSS** -- Pure CSS Variables + vanilla CSS, no JavaScript styling overhead
- **15 core components** -- Button, Input, Select, Checkbox, Radio, Switch, Modal, Tooltip, Card, Avatar, Badge, Alert, Tabs, Table, Typography
- **Tree-shakable** -- ESM + CJS dual output, import only what you use
- **TypeScript-first** -- Full type definitions with strict mode
- **Accessible** -- WAI-ARIA compliant with keyboard navigation and focus management
- **Themeable** -- Override CSS variables for custom themes, dark mode via `data-theme="dark"`
- **Next.js ready** -- `"use client"` only on interactive components, display components are RSC-compatible
- **~34 KB** JS (ESM, before gzip) + ~44 KB CSS (all components)

## Installation

```bash
npm install @uilib/core
# or
pnpm add @uilib/core
# or
yarn add @uilib/core
```

## Quick Start

Import the stylesheet once in your app's entry point:

```tsx
// app/layout.tsx (Next.js) or main.tsx (Vite)
import "@uilib/core/styles.css";
```

Then use components:

```tsx
import { Button, Input, Card, CardBody, Typography } from "@uilib/core";

export function LoginForm() {
  return (
    <Card variant="outlined" style={{ maxWidth: 400 }}>
      <CardBody>
        <Typography variant="h4">Sign In</Typography>
        <Input label="Email" placeholder="you@example.com" fullWidth />
        <Input label="Password" type="password" fullWidth />
        <Button fullWidth>Sign In</Button>
      </CardBody>
    </Card>
  );
}
```

## Theming

Override CSS variables to customize the design system. No JavaScript providers needed.

```css
/* Custom brand colors */
:root {
  --ui-color-primary: #8b5cf6;
  --ui-color-primary-hover: #7c3aed;
  --ui-radius-md: 8px;
}

/* Dark mode */
[data-theme="dark"] {
  --ui-color-bg: #0f172a;
  --ui-color-surface: #1e293b;
  --ui-color-text: #f1f5f9;
  --ui-color-border: #334155;
}
```

Toggle dark mode by setting the attribute on the `<html>` element:

```tsx
document.documentElement.setAttribute("data-theme", "dark");
```

## Components

### Display (RSC-compatible, no "use client")

| Component | Description |
|-----------|-------------|
| `Typography` | Polymorphic text component (h1-h6, body, caption, overline) |
| `Card` | Compound card with `CardHeader`, `CardBody`, `CardFooter` |
| `Badge` | Inline badge with solid, outline, subtle variants |
| `Avatar` | Image avatar with initials fallback and `AvatarGroup` |
| `Alert` | Status alerts with closable option |
| `Table` | Data table with sortable headers, striped, bordered variants |

### Form ("use client")

| Component | Description |
|-----------|-------------|
| `Button` | Solid, outline, ghost, link variants with loading state |
| `Input` | Text input with label, validation, adornments |
| `Checkbox` | Checkbox with indeterminate state |
| `Radio` | Radio with `RadioGroup` context |
| `Switch` | Toggle switch |

### Interactive ("use client")

| Component | Description |
|-----------|-------------|
| `Select` | Custom dropdown with keyboard navigation |
| `Modal` | Portal-based dialog with focus trap and scroll lock |
| `Tooltip` | Positioned tooltip with configurable delay |
| `Tabs` | Compound tabs with line, enclosed, pill variants |

## Next.js Setup

Add `@uilib/core` to `transpilePackages` in your Next.js config:

```js
// next.config.js
module.exports = {
  transpilePackages: ["@uilib/core"],
};
```

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Run tests
pnpm test

# Start Storybook
pnpm storybook
```

## Project Structure

```
packages/core/     # Component library source
apps/docs/         # Storybook documentation
```

## License

MIT
