import { App } from "vue";
import i18n from "./i18n";
import primeVue from "./primeVue";

export default (app: App) => {
    const instances = [i18n, primeVue];

    instances.forEach((instance) => {
        instance(app);
    });
};
