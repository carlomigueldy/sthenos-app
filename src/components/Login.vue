<template>
  <div>
    <v-card>
      <v-card-title>
        Sthenos Login
      </v-card-title>
      <v-card-text>
        <v-text-field 
        placeholder="Email"
        type="email" 
        v-model="email">
        </v-text-field>
        <v-text-field 
        placeholder="Password"
        type="password" 
        v-model="password">
        </v-text-field>
        <div v-if="loggedIn">
          <v-btn
          block
          color="error"
          @click="logout">
            Logout
          </v-btn>
        </div>
        <div v-else>
          <v-btn 
          class="font-weight-black"
          block
          outlined
          type="submit"
          @click="login">
            Login
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'loggedIn', 
    'loading'
  ]),

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
}
</script>