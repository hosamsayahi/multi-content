import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],
  splitting: false,
  clean: true,
  minify: true,
  dts: true,
  format: "cjs",
});
