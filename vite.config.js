import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative, so the build works on Netlify, Vercel,
// GitHub Pages (including sub-paths) and any static host.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
