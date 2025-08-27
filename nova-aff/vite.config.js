import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Production optimizations
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          utils: ["axios"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  // Server configuration
  server: {
    port: 3000,
    host: true,
    cors: true,
  },

  // Preview configuration
  preview: {
    port: 3000,
    host: true,
  },

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify("1.0.0"),
  },

  // Base URL for production
  base: "/",
});
