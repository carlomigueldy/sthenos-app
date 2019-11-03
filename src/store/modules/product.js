import axios from 'axios'
import { url } from '../url/root'

const state = {
    products: [],
}

const getters = {
    getProducts: state => state.products,
}

const actions = {
    async fetchProducts({ commit }) {
        const res = await axios.get(`${url}/api/products`)
        console.log(res.data)
        commit('setProducts', res.data)
    }
}

const mutations = {
    setProducts: (state, products) => state.products = products, 
}

export default {
    state,
    getters,
    actions,
    mutations,
}
