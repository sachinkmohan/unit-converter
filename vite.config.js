import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    outDir: "dist",
    // Add proper asset handling
    assetsDir: "assets",
    // Add rollup options for proper function handling
    rollupOptions: {
      output: {
        format: "es",
      },
    },
  },
  base: "/",
});
