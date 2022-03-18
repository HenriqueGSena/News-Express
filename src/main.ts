import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import NewsService from "./service/NewsService";
import Vuelidate from 'vuelidate'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  components: {
    App
  },
  render: (h) => h(App),
  provide: {
    newsService: () => new NewsService()
  }
}).$mount("#app");
