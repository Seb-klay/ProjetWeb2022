import router from "./router";
import axios from "axios";
import App from "./App.vue";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueIframe from "vue-iframes";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueIframe);

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
