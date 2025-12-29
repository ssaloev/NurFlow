import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default {
    base: "./",
    plugins: [
        vue(),
        svgLoader(),
        Components({
            resolvers: [PrimeVueResolver()],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/styles/_variables.scss" as *;`,
            },
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("../src", import.meta.url)),
            "@icons": fileURLToPath(new URL("../src/assets/icons", import.meta.url)),
            "@images": fileURLToPath(new URL("../src/assets/images", import.meta.url)),
            "@data": fileURLToPath(new URL("../src/assets/data", import.meta.url)),
        },
    },
};
