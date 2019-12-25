<template>
  <nav class="nav">
    <div class="logo">
      <div class="logo text-lg">
        Nuxt Fundamentals
      </div>
      <span class="subheader">A Vue School course</span>
    </div>
    <div @click="$store.commit('toggleDark')" class="button--default">
      aaaa
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      dark: this.$store.state.dark
    }
  },

}
</script>

<style scoped lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
    font-weight: lighter;
    letter-spacing: 0.5px;
    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .subheader {
        opacity: 0.70;
        font-size: 0.9rem;       
      }
    }
    .nav-content {
      font-size: 1rem;
      ul {
        display: flex;
        list-style: none;
        li {
          padding: 2px 10px;
          &:not(:first-of-type) {
            border-left: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
        
      }    
    } 
  } 
</style>