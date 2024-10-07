import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.confing.ts",
    silent: true,
  },
  resolve: {
    alias: {
      "~bootstrap": "bootstrap/dist/css/bootstrap.css",
    },
  },

  server: { port: 3000 },
});
