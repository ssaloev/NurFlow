import { App } from "vue";
import i18n from "@/plugins/i18n";
import primeVue from "@/plugins/primeVue";
import router from "@/plugins/router";

export default (app: App) => {
    const instances = [router, i18n, primeVue];

    instances.forEach((instance) => {
        instance(app);
    });
};
