<template>
    <div>
        <v-card>
            <v-card-title>
                Register to Sthenos Shop
            </v-card-title>
            <v-card-text>
                <v-text-field 
                label="Name"
                type="email" 
                required
                v-model="form.name">
                </v-text-field>
                <v-text-field 
                label="Email Address"
                type="email" 
                required
                v-model="form.email">
                </v-text-field>
                <v-text-field 
                label="Password"
                type="password" 
                required
                v-model="form.password">
                </v-text-field>
                <v-text-field 
                label="Confirm Password"
                type="password" 
                required
                v-model="form.password_confirmation">
                </v-text-field>
                <v-btn 
                class="font-weight-black"
                outlined
                block
                type="submit"
                @click="register">
                    Register
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data: () => ({
        form: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
    }),
    
    methods: {
        register() {
            console.log(this.form)
            this.registerUser(this.form)
        },
        
        ...mapActions(['registerUser']),
    },
}
</script>