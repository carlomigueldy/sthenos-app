<template>
  <div>
    <v-app>
      <v-content>
        <v-container fluid>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>

          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>