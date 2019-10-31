<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="email">
      <input type="password" v-model="password">
      <button type="submit">Login</button>
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

    ...mapActions(['retrieveToken'])
  },

  computed: mapGetters(['loggedIn']),
}
</script>