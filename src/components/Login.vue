<template>
  <div>
    <v-row>
      <v-col>
        <v-card :loading="loading">
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
              block
              color="primary"
              type="submit"
              @click="login">
                Login
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

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

  computed: mapGetters(['loggedIn', 'loading']),
}
</script>