import { createApp } from "vue";
import App from "./App.vue";
import route from "./router.js";
import "/src/assets/app.css";

createApp(App).use(route).mount("#app");
