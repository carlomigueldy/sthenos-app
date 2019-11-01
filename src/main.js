import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { mapActions } from 'vuex'

Vue.config.productionTip = false

new Vue({
  methods: {
    ...mapActions([
      'checkToken',
    ])
  },
  created() {
    this.checkToken()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
