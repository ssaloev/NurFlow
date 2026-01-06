import MainLayout from "@/layouts/main/MainLayout.vue";
import IndexPage from "@/pages/index/IndexPage.vue";
import DifficultiesPage from "@/pages/difficulties/DifficultiesPage.vue";
import LevelsPage from "@/pages/levels/LevelsPage.vue";
import GamePage from "@/pages/game/GamePage.vue";
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
                path: "/levels/:id",
                component: LevelsPage,
                name: "LevelsPage",
            },
            {
                path: "/levels/:difficultiesId/:levelId",
                component: GamePage,
                name: "GamePage",
            },
            {
                path: "/loading",
                component: LoadingPage,
                name: "LoadingPage",
            },
        ],
    },
];
