import axios from 'axios'
import { url } from '../url/root'

const state = {
    items: [],
    item: {},
    total_amount: null,
    item_count: null,
}

const getters = {
    cartGetItems: state => state.items,
    cartTotalAmount: state => state.total_amount,
    cartItemCount: state => state.item_count,
}

const actions = {
    async fetchItems({ commit }) {
        const res = await axios.get(`${url}/api/cart`)
        console.log('cart.fetchItems()', res)
        commit('setItems', res.data)
    },

    async fetchItem({ commit }, id) {
        const res = await axios.get(`${url}/api/cart/${id}`)
        console.log('cart.fetchItem()', res)
        commit('setItem', res.data)
    },
}

const mutations = {
    setItems: (state, items) => state.items = items,
    setItem: (state, item) => state.item = item,
}

export default {
    state,
    getters,
    actions,
    mutations,
}