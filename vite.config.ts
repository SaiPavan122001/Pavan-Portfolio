import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // relative base so the built site works on GitHub Pages (/<repo>/) and any static host
  base: "./",
  plugins: [react()],
});