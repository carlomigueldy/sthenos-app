<template>
    <v-app-bar
        dark
        color="primary">
        <v-toolbar-title> 
            Sthenos Shop
        </v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-btn 
            v-if="!loggedIn"
            @click="login()"
            text>
            Login
        </v-btn>
        <div v-else>
            <span>Welcome {{ getUser.name }}</span>
            <v-btn 
                :loading="loading"
                @click="logout()"
                text>
                Logout
            </v-btn>
        </div>

    </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    computed: mapGetters([
        'loggedIn', 
        'loading',
        'getUser',
    ]),
    
    methods: {
        /**
         * Redirect to login view.
         */
        login() {
            this.$router.push('/login')
        },

        logout() {
            this.destroyToken()
        },

        ...mapActions([
            'destroyToken',
        ])
    },
}
</script>