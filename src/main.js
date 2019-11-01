import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import { mapActions } from 'vuex'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: mapActions([
      'checkToken',
  ]),
  created() {
    this.checkToken()
  },
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
