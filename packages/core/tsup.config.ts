import { defineConfig } from "tsup";
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";

function collectCSSFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...collectCSSFiles(full));
    } else if (full.endsWith(".css")) {
      files.push(full);
    }
  }
  return files;
}

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  external: ["react", "react-dom"],
  onSuccess: async () => {
    const srcDir = resolve("src");
    const cssFiles = collectCSSFiles(srcDir);
    const combined = cssFiles.map((f) => readFileSync(f, "utf-8")).join("\n");
    mkdirSync("dist", { recursive: true });
    writeFileSync("dist/styles.css", combined);
  },
});
