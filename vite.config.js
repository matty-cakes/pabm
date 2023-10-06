import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import postcss from "./postcss.config.js"

export default defineConfig({
  server: {
    hmr: true,
  },
  publicDir: "src/public",
  plugins: [svelte({})],
  css: {
    postcss,
  },
  test: {
    reporters: [["default"], ["html", { outputFile: ".html" }]],
  },
})
