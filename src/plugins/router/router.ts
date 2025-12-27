import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "@/plugins/router/routes.ts";
import { useGlobalStore } from "@/plugins/pinia/store/global";

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const userStore = useGlobalStore();
    if (to.name === "LoadingPage" && !userStore.isLoading) {
        return {
            name: from.name ?? "IndexPage",
        };
    }
    if (to.name !== "LoadingPage" && userStore.isLoading) {
        return {
            name: "LoadingPage",
        };
    }
    return true;
});
