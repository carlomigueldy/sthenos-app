<template>
  <v-app>
    <v-content>
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
                  <Login />
                </div>
              </v-flex>
            </v-layout>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Login from '../components/Login'

export default {
  components: {
    Login,
  }
}
</script>