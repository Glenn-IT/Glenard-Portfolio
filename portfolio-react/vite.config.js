import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Change base to your GitHub repository name for GitHub Pages deployment
// e.g., if your repo is https://github.com/Glenn-IT/Glenard-Portfolio
// then base should be '/Glenard-Portfolio/'
export default defineConfig({
  plugins: [react()],
  base: "/Glenard-Portfolio/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
