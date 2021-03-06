import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Plugins
import Modal from './plugins/modal'
import VCalendar from "v-calendar"
Vue.use(Modal)
Vue.use(VCalendar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
