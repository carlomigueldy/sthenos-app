import axios from 'axios'
import router from '../../router'

const state = {
    user: {},
    loading: false,
    access_token: null,
    url: 'https://sthenos.herokuapp.com'
}

const getters = {
    loading: state => state.loading,
    loggedIn: state => state.access_token !== null,
    getUser: state => state.user,
}

const actions = {
    /**
     * Register a user.
     * 
     * @return void
     */
    async registerUser({ dispatch }, form) {
        state.loading = true
        try {
            const res = await axios.post(`${state.url}/api/auth/register`, {
                name: form.name,
                email: form.email,
                password: form.password,
                password_confirmation: form.password_confirmation,
            })
    
            console.log('User registered', res)
            dispatch('retrieveToken', {
                email: form.email,
                password: form.password,
            })
        } catch (err) {
            state.loading = false
            console.log(err.response)
        }
    },
    /**
     * Checks if an access token is
     * stored in the local storage.
     * If it exists, the user remains
     * logged in.
     * 
     * @return void
     */
    checkToken({ commit, dispatch }) {
        const access_token = localStorage.getItem('access_token')
        if(access_token !== null) 
            dispatch('fetchUser', access_token)
            commit('storeToken', access_token)
    },

    /**
     * User logs in.
     * 
     * @param { email, password } credentials 
     * @return void
     */
    async retrieveToken({ commit }, credentials) {
        try {
            state.loading = true
            const res = await axios.post(`${state.url}/api/auth/login`, {
                email: credentials.email,
                password: credentials.password,
            })
            localStorage.setItem('access_token', res.data.access_token)
            console.log('You have logged in successfully!', res.data)
            commit('storeToken', res.data.access_token)
            router.push('/')
            return true
        } catch (err) {
            state.loading = false
            console.log(err)
            return false
        }
    },

    /**
     * User logs out.
     * 
     * @return void
     */
    async destroyToken({ commit }) {
        try {
            state.loading = true
            const res = await axios.post(`${state.url}/api/auth/logout`, {}, {
                headers: { 'Authorization': `Bearer ${state.access_token}` }
            })
            localStorage.removeItem('access_token')
            console.log('You have logged out.', res.data)
            commit('deleteToken')
        } catch (err) {
            console.log(err.response)
        }
    },

    /**
     * Gets the current authenticated user.
     * 
     * @return void
     */
    async fetchUser({ commit }, access_token) {
        state.loading = true
        const res = await axios.post(`${state.url}/api/auth/me`, {}, { 
            headers: { 'Authorization': `Bearer ${access_token}` } 
        })

        console.log('The authenticated user is fetched.', res.data)
        commit('storeUser', res.data)
    },
}

const mutations = {
    storeUser: (state, user) => {
        state.user = user
        state.loading = false
    },
    storeToken: (state, access_token) => {
        state.access_token = access_token
        state.loading = false
    },
    deleteToken: state => {
        state.access_token = null
        state.loading = false
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}