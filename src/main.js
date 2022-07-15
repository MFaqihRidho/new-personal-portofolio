import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { createApp } from "vue";
import { Store } from "./Config/Vuex.vue";

const app = createApp(App);
app.AOS = new AOS.init();

app.use(Store);
app.use(AOS).mount("#app");
