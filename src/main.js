import router from "./router";
import axios from "axios";
import App from "./App.vue";
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  data: {
    currentRoute: window.location.pathname,
  },

  computed: {},
  router,
  axios,

  render(h) {
    return h(App);
  },
}).$mount("#app");
