import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(), // Enables features like Fast Refresh
    tsconfigPaths(), // If you are using paths in tsconfig.json
  ],
  test: {
    mockReset: true, // Resets mocks between tests
    clearMocks: true,
    restoreMocks: true,
    environment: "jsdom", // Needed for testing React components
    globals: true, // If you need global variables
    setupFiles: "./src/setupTests.ts", // Setup file for configurations
    transformMode: {
      web: [/\.([tj]sx)$/], // Corrected regex for transforming tsx and jsx files
    },
    include: ["**/*.{test,spec}.{ts,tsx}"], // Include pattern for test files
  },
});
