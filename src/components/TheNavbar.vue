<template>
  <nav class="nav">
    <div class="logo">
      <div class="logo text-lg">
        Eduardo Regis
      </div>
      <span class="subheader"><span class="blue-developer">Programador</span> & <span class="red-designer">Designer</span></span>
    </div>
    <div class="nav-content">
      <ul>
        <li
          @click="$store.commit('changePage', 'projects')"
        >
          <router-link 
            to="/" 
            :class="{'current-page' : currentPage == 'projects'}" 
          >
            PROJETOS
          </router-link>
        </li>
        <li
          @click="$store.commit('changePage', 'resume')"
        >
          <router-link 
            to="/resume" 
            :class="{'current-page' : currentPage == 'resume'}" 
          >
            CURRÍCULO
          </router-link>
        </li>
        <li
          @click="$store.commit('changePage', 'aboutme')"
        >
          <router-link 
            to="/aboutme" 
            :class="{'current-page' : currentPage == 'aboutme'}" 
          >
            SOBRE
          </router-link>
        </li> 
        <li>
          <div @click="$store.commit('toggleDark')">
            <img v-if="dark" src="@/assets/sun.png">
            <img v-else src="@/assets/moon.png">
          </div>      
        </li>        
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {  
  computed: mapState({
    currentPage: state => state.currentPage,
    dark: state => state.dark,
  }),
}
</script>

<style scoped lang="scss">
  .current-page {
    border-bottom: solid 3px;
  }
</style>