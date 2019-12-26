<template>
  <div class="project-container">
    <h1 class="project-element">
      {{ project.title }}
    </h1>      
    <div class="project-element">
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
    <img class="project-element" :src="project.img">    
    <div 
        v-for="(section, sectionPosition) in project.sections"
        :key="sectionPosition"
        class="project-element text-sm"
    >
        <h2 class="text-base section-element">{{ section.title }} </h2>
        <span class="section-element">{{ section.description }}</span>
        <div class="masonry section-element">
            <div 
                v-for="(image, imagePosition) in section.images"
                :key="imagePosition"
                class="masonry-item"
            >
                <img :src="image">
            </div>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
    data () {
        return {
            project: this.$store.getters.getProjectByPath(this.$route.params.id)
        }
    }
}
</script>

<style>

</style>