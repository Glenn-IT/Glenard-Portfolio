import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Base is set to the NEW GitHub repository name: GlennPortfolio
// Live URL will be: https://glenn-it.github.io/GlennPortfolio/
export default defineConfig({
  plugins: [react()],
  base: "/GlennPortfolio/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
