import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import postcss from "./postcss.config.js"

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "~": new URL("./src/", import.meta.url).pathname,
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
    setupFiles: ["vitest.setup.js"],
    reporters: ["default"],
  },
})
