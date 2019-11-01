<template>
  <v-app>
    <router-view/>
    
    <v-overlay :value="loading">
      <v-progress-circular 
        indeterminate size="64">
      </v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'loading'
  ]),
  
  methods: mapActions([
      'checkToken',
  ]),
  
  created() {
    this.checkToken()
  },
}
</script>
