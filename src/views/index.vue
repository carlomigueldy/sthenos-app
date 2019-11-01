<template>
  <div>
    <Navbar />
    
    <v-content>
      <v-container fluid>
        <h1 class="text-center">Welcome to Sthenos</h1>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar,
  }
}
</script>
