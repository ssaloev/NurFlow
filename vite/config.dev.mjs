import { defineConfig } from "vite";
import commonConfig from './config.common.mjs';

// https://vitejs.dev/config/
export default defineConfig({
    ...commonConfig,
    server: {
        port: 8080,
    },
});
