import "./assets/styles/index.scss";
import App from "./App.vue";
import { createApp } from "vue";
import PrimeVue from "primevue/config";

const app = createApp(App);
app.use(PrimeVue);

app.mount("#app");
