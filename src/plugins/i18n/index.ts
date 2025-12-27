import { App } from "vue";
import { createI18n } from "vue-i18n";
import { config, type MessageSchema } from "./config.ts";

export default (app: App) => {
    const i18n = createI18n<[MessageSchema], "en">(config);
    app.use(i18n);
};
