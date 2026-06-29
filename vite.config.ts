import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { reactRouter } from "@react-router/dev/vite";
import { fileURLToPath } from "url";
import AutoImport from "unplugin-auto-import/vite";

const host = process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [
    reactRouter(),
    tailwindcss(),
    AutoImport({
      include: [/\.[tj]sx?$/],
      imports: ["react", "react-router"],
      dirs: [
        "src/composables",
        "src/components",
        "resources/js/shared/composables",
        "resources/js/shared/components",
      ],
      dts: true,
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@shared": fileURLToPath(
        new URL("./resource/js/shared", import.meta.url),
      ),
      "@svgs": fileURLToPath(new URL("./resource/svgs", import.meta.url)),
    },
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
