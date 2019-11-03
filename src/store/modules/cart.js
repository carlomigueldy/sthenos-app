import axios from 'axios'
import router from '../../router'
import { url } from '../url/root'

const state = {
    items: [],
    total_amount: null,
    item_count: null,
}

const getters = {
    cartGetItems: state => state.items,
    cartTotalAmount: state => state.total_amount,
    cartItemCount: state => state.item_count,
}

const actions = {

}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations,
}