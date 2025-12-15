import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// IMPORTACIÓN DE TU CSS GLOBAL
import "./assets/css/estilos.css";

createApp(App).use(router).mount("#app");
