import Vue from "vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import iView from "iview";
import "iview/dist/styles/iview.css";
import App from "./App.vue";
import store from "./store/index";
// import axios from "axios";

// import Mock from "./mock/index.js";
// Vue.prototype.$ajax = axios;
Vue.use(ElementUI);
Vue.use(iView);
new Vue({
  router,
  store,
  // Mock,
  // axios,
  el: "#app",
  render: h => h(App)
});
