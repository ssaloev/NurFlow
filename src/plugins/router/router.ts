import { createWebHistory, createRouter } from "vue-router";
import { routes } from "@/plugins/router/routes.ts";
import { useGlobalStore } from "@/plugins/pinia/store/global";

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const userStore = useGlobalStore();
    if (to.name === "LoadingPage" && !userStore.isLoading) {
        return {
            name: to.name ?? "IndexPage",
        };
    }
    if (to.name !== "LoadingPage" && userStore.isLoading) {
        return {
            name: "LoadingPage",
        };
    }
    return true;
});
