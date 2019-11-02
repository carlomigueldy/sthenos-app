<template>
    <v-app>
        <v-container 
            fill-height 
            grid-list-md 
            text-xs-center 
            bg> 
            <v-row>
                <v-col cols="12">
                    <v-layout 
                    align-center
                    row 
                    wrap> 
                        <v-flex>
                            <div>
                                <Register />
                            </div>
                        </v-flex>
                    </v-layout>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import Register from '../../components/Register'

export default {
    name: 'register',

    components: {
        Register,
    },
}
</script>