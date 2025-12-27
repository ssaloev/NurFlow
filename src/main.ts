import "./assets/styles/index.scss";
import App from "./App.vue";
import { createApp } from "vue";
import plugins from "@/plugins";

const app = createApp(App);
plugins(app);

app.mount("#app");
