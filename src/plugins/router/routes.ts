import IndexPage from "@/pages/index/IndexPage.vue";
import LoadingPage from "@/pages/loading/LoadingPage.vue";
import MainLayout from "@/layouts/main/MainLayout.vue";

export const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: "/",
                component: IndexPage,
            },
            {
                path: "/loading",
                component: LoadingPage,
            },
        ],
    },
];
