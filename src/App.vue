<template>
<div id="app">
  <div class="theme-container" :class="[dark ? 'theme--dark' : 'theme--light']">
    <div class="screen-container">
      <div class="container">
        <TheNavbar class="header"/>
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import '@/styles/main.scss'
import { mapState } from 'vuex'

export default {
  name: 'app',   
  components: {
    TheNavbar
  },
  computed: mapState({
    dark: state => state.dark
  }),
}
</script>

<style >
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100vh;
}
</style>
