<template>
  <v-app>
    <Navbar />
    
    <router-view/>
    
    <v-overlay :value="authLoading">
      <v-progress-circular 
        indeterminate size="64">
      </v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
  },
  
  computed: mapGetters([
    'authLoading'
  ]),
  
  methods: mapActions([
      'checkToken',
      'fetchProducts',
  ]),
  
  created() {
    this.checkToken()
    this.fetchProducts()
  },
}
</script>
