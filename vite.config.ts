import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const repoName = "inkboard";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  base: mode === "production" ? `/${repoName}/` : "/",

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  server: {
    open: true,
    port: 5173,
  },

  build: {
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true,
  },
}));
