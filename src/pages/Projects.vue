<template>
  <div>
    <div class="pitch-text">
      <div class="text-xs pitch-phrase">
        Olá, eu sou um <span class="blue-developer">desenvolvedor</span> que também trabalha com <span class="red-designer">design</span>.    
      </div>
      <div class="text-xs pitch-phrase">
        Tenho interesse em Desenvolvimento Web, de Jogos, Mobile, UX/UI e em ilustração.    
      </div>
      <div class="text-xs pitch-phrase">
        Dá uma olhada nos meus projetos!
      </div>
    </div>
    <div class="projects-container">
      <div class="tags-container">
        Filtros: 
        <span 
          v-for="(tag, position) in tags" 
          :key="position" 
          :class="{'selected-tag': tag == selectedTag}"
          class="tag button--default"
          @click="activateTag(tag)"
        >
          {{ tag }}
        </span>
      </div>
      <div class="project-cards-container">
        <div 
          v-for="(project, position) in selectedProjects"
          :key="position"
          class="project-card-container"
        >
          <div class="project-card">
            <img
              class="project-card-img" 
              :src="project.img"
            >
            <div class="title-card">
              {{ project.title }}
            </div>
            <div class="description-card">
              {{ project.shortDescription }}
            </div>
            <div class="sub-tag-container">
              <span>
                Tags: 
                <span 
                  v-for="(tag, position) in project.tags" 
                  :key="position" 
                  class="tag sub-tag"
                >
                  {{ tag }} 
                  <span v-if="position < project.tags.length - 1 ">, </span>
                </span>                
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selectedProjects: [],
      selectedTag: null,
    }
  },
  computed: mapState({    
    tags: state => state.tags,
    projectCards: state => state.projectCards
  }),
  created () {
    this.projectCards.forEach(project => {
      this.selectedProjects.push(project)
    });
  }, 
  methods: {
    activateTag(tag){
      if(this.selectedTag == tag){
        this.selectedTag = null;
        this.selectedProjects = this.projectCards;
      } else {
        this.selectedTag = tag;
        this.selectedProjects = this.projectCards.filter((project) => this.checkTag(this.selectedTag, project)); 
      }
    },
    checkTag(tag, project){
      if((project.tags.indexOf(tag) === -1) && (project.functions.indexOf(tag) === -1)){                
        return false;
      }
      return true;
    }
  }
}
</script>

<style lang="scss">
  
</style>