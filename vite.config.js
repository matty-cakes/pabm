import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import postcss from "./postcss.config.js"

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  resolve: {
    alias: {
      "~": "./src",
    },
  },
  publicDir: "src/public",
  css: {
    postcss,
  },
  server: {
    hmr: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    reporters: [["default"], ["html", { outputFile: ".html" }]],
  },
})
