import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import cart from './modules/cart'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        cart,
        product,
    },
})