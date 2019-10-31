import axios from 'axios'

const state = {
    user: {},
    access_token: null,
    url: 'https://sthenos.herokuapp.com'
}

const getters = {
    loggedIn: state => state.access_token !== null
}

const actions = {
    async retrieveToken({ commit }, credentials) {
        const res = await axios.post(`${state.url}/api/auth/login`, {
            email: credentials.email,
            password: credentials.password,
        })

        console.log(res)

        commit('storeToken', res.data.access_token)
    }
}

const mutations = {
    storeToken: (state, access_token) => state.access_token = access_token 
}

export default {
    state,
    getters,
    actions,
    mutations,
}