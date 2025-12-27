import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "@/plugins/router/routes.ts";

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
