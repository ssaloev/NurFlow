import { App } from "vue";
import i18n from "@/plugins/i18n";
import primeVue from "@/plugins/primeVue";
import router from "@/plugins/router";
import pinia from "@/plugins/pinia";

export default (app: App) => {
    const instances = [pinia, router, i18n, primeVue];

    instances.forEach((instance) => {
        instance(app);
    });
};
