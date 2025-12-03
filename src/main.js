import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/scss/main.scss";
// ========= bootstrap =========
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// ================AOS ===================
import AOS from "aos";
import "aos/dist/aos.css";
// =================font asowme ===========

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faMapPin,
  faPhone,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faMagnifyingGlass, faMapPin, faPhone, faEnvelope, faCheck);

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(store).use(router).mount("#app");
AOS.init();
