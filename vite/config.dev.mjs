import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                // This automatically injects your variables into every component
                additionalData: `@use "@/assets/styles/_variables.scss" as *;`,
            },
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("../src", import.meta.url)),
        },
    },
    server: {
        port: 8080,
    },
});
