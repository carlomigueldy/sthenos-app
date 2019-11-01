<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <input 
        placeholder="Email"
        type="email" 
        v-model="email">
      </div>
      <div>
        <input 
        placeholder="Password"
        type="password" 
        v-model="password">
      </div>
      <div v-if="loggedIn">
        <button
        @click="logout">
          Logout
        </button>
        <div>
          You are logged in.
        </div>
      </div>
      <div v-else>
        <button 
        type="submit">
          Login
        </button>
        <div>
          Please log in.
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      this.retrieveToken({
        email: this.email,
        password: this.password,
      })
    },

    logout() {
      this.destroyToken()
    },

    ...mapActions([
      'retrieveToken',
      'destroyToken',
    ])
  },

  computed: mapGetters(['loggedIn']),
}
</script>