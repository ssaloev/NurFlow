import { App } from "vue";
import PrimeVue from "primevue/config";
import { config } from "./config.ts";

export default (app: App) => {
    app.use(PrimeVue, config);
};
