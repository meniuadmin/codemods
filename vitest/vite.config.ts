/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    viteTsConfigPaths({
      root: "./",
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  viteTsConfigPaths({
  //    root: '../../../',
  //  }),
  // },

  test: {
    globals: true,
    cache: {
      dir: "./node_modules/.vitest",
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      provider: "c8", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  },
});
