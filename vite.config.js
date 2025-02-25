//import { defineConfig } from "vite";
//import react from "@vitejs/plugin-react";

// https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
//});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Get the project name from package.json
import { readFileSync } from "fs";
const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));
const projectName = packageJson.name;

// Define the base URL based on whether it's a production build (gh-pages) or development
const basePath =
  process.env.NODE_ENV === "production" ? `/${projectName}/` : "/";

export default defineConfig({
  //base: basePath, // Important: Set the base path
  base: "/my-first-react/",
  //base: "/my-first-react",
  //base: "http://localhost:3000/",
  plugins: [react(), tailwindcss()],

  build: {
    outDir: "dist", // Output directory for the build
    assetsDir: "assets", // Directory for assets (js, css, images) within the output dir.  Good practice to keep this separate.
    rollupOptions: {
      output: {
        // This is particularly useful for larger projects.  It helps avoid filename collisions.
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
  },

  // Optional: If you have a lot of static assets, you might want to optimize them during build
  // esbuild: {
  //   minify: true, // Enable minification for production builds (usually on by default)
  // },

  // Optional: Configure the development server
  server: {
    open: true, // Automatically open the app in the browser
    port: 3000, // Specify the port (optional)
  },
});
