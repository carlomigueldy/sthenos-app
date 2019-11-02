<template>
    <v-app-bar
        fixed
        dark
        color="black">
        <v-toolbar-title 
            class="my-home"
            @click="home()"> 
            Sthenos Shop
        </v-toolbar-title>

        <v-spacer></v-spacer>
        
        <div v-if="!loggedIn">
            <v-btn 
                @click="register()"
                text>
                Register
            </v-btn>
            <v-btn 
                @click="login()"
                text>
                Login
            </v-btn>
        </div>
        <div v-else>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                    icon
                    v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        {{ getUser.name }}
                    </v-list-item>
                    <v-list-item
                    @click="logout()">
                        Logout
                    </v-list-item>
                </v-list>
            </v-menu>
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
         * Redirect to home/index page.
         */
        home() {
            this.$router.push('/').catch(() => {})
        },
        
        /**
         * Redirect to register view.
         */
        register() {
            this.$router.push({ name: 'register' }).catch(() => {})
        },
        /**
         * Redirect to login view.
         */
        login() {
            this.$router.push({ name: 'login' }).catch(() => {})
        },

        /**
         * Logs out the user.
         */
        logout() {
            this.destroyToken()
        },

        ...mapActions([
            'destroyToken',
        ])
    },
}
</script>

<style>
.my-home {
    cursor: pointer;
}
</style>