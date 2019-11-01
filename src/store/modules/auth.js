import axios from 'axios'

const state = {
    user: {},
    access_token: null,
    url: 'https://sthenos.herokuapp.com'
}

const getters = {
    loggedIn: state => state.access_token !== null,
    getUser: state => state.user,
}

const actions = {
    /**
     * Checks if an access token is
     * stored in the local storage.
     * If it exists, the user remains
     * logged in.
     * 
     * @return void
     */
    checkToken({ commit }) {
        const access_token = localStorage.getItem('access_token')
        if(access_token !== null)
            commit('storeToken', access_token)
    },

    /**
     * User logs in.
     * 
     * @param { email, password } credentials 
     * @return void
     */
    async retrieveToken({ commit }, credentials) {
        const res = await axios.post(`${state.url}/api/auth/login`, {
            email: credentials.email,
            password: credentials.password,
        })

        localStorage.setItem('access_token', res.data.access_token)
        console.log('You have logged in successfully!', res.data)
        commit('storeToken', res.data.access_token)
    },

    /**
     * User logs out.
     * 
     * @return void
     */
    async destroyToken({ commit }) {
        try {
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
    async authenticatedUser({ commit }) {
        const res = await axios.post(`${state.url}/api/auth/me`)
        console.log('The authenticated user is fetched.', res.data)
        commit('storeUser', res.data)
    },
}

const mutations = {
    storeToken: (state, access_token) => state.access_token = access_token,
    deleteToken: state => state.access_token = null,
    storeUser: (state, user) => state.user = user, 
}

export default {
    state,
    getters,
    actions,
    mutations,
}