import { App } from "vue";
import { router } from "@/plugins/router/router.ts";

export default (app: App) => {
    app.use(router);
};
