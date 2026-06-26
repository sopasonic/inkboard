import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// Change this to your GitHub repository name if needed.
const REPOSITORY_NAME = "inkboard";

export default defineConfig({
  plugins: [react()],

  base:
    process.env.NODE_ENV === "production"
      ? `/${REPOSITORY_NAME}/`
      : "/",

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
  },
});
