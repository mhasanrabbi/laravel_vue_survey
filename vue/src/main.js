import { createApp } from "vue";
import "./index.css";
import store from "./stores";
import App from "./App.vue";

createApp(App).use(store).mount("#app");
