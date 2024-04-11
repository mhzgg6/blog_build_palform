import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "#": path.resolve("./types"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@use "@/assets/styles/common/var.scss" as *; @use "@/assets/styles/common/index.scss" as *;',
        additionalData: '@use "@/assets/styles/common/index.scss" as *;',
      },
    },
  },
})
