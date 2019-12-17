import './styles.css';

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      inverted: false
    };
  },
  render: h => h(App)
}).$mount("#app");
