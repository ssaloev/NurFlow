import MainLayout from "@/layouts/main/MainLayout.vue";
import IndexPage from "@/pages/index/IndexPage.vue";
import DifficultiesPage from "@/pages/difficulties/DifficultiesPage.vue";
import LoadingPage from "@/pages/loading/LoadingPage.vue";

export const routes = [
    {
        path: "/",
        component: MainLayout,
        name: "MainLayout",
        children: [
            {
                path: "/",
                component: IndexPage,
                name: "IndexPage",
            },
            {
                path: "/difficulties",
                component: DifficultiesPage,
                name: "DifficultiesPage",
            },
            {
                path: "/loading",
                component: LoadingPage,
                name: "LoadingPage",
            },
        ],
    },
];
