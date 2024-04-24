import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    mockReset: true,
    clearMocks: true,
    restoreMocks: true,
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    transformMode: {
      web: [/\.([tj]sx)$/],
    },
    include: ["**/*.{test,spec}.{ts,tsx}"],
  },
});
