<template>
  <div> 
    <div class="project-container">
        <h1 class="project-element">
        {{ project.title }}
        </h1>      
        <router-link 
            to="/" 
            class="return-project-btn"
          >
            Voltar para aba de projetos
          </router-link>
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
        <div class="project-element">
            <span>
                Minha(s) funções: 
                <span 
                    v-for="(func, position) in project.functions" 
                    :key="position" 
                    class="tag sub-tag"
                >
                    {{ func }} 
                    <span v-if="position < project.functions.length - 1 ">, </span>
                </span>                
            </span>
        </div> 
        <div 
            v-for="(section, sectionPosition) in project.sections"
            :key="sectionPosition"
            class="project-element text-sm"
        >
            <h2 class="text-base section-element">{{ section.title }} </h2>
            <span class="section-element section-description">{{ section.description }}</span>
            <div 
                class="section-element"
                :class="[section.images.length == 1 ? 'masonry-unique' : 'masonry' ]"
            >
                <div 
                    v-for="(image, imagePosition) in section.images"
                    :key="imagePosition"
                    class="masonry-item"
                >
                    <img :src="image" @click="activateLightbox(image)">
                </div>
            </div>
        </div>   
        <div class="project-element">
            <h2 class="text-base section-element"> Links </h2>
            <div 
                v-for="(link, linkPosition) in project.links"
                :key="linkPosition"                
            >
                <span>
                    <a :href="link.url">
                        <div class="button--default">
                            {{ link.name }}
                        </div>
                    </a>
                </span>
            </div>
        </div>
    </div>
    <div v-if="isLightbox" class="lightbox-container" @click="disableLightbox()">
        <img :src="lightboxImage">
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            project: this.$store.getters.getProjectByPath(this.$route.params.id),
            isLightbox: false,
            lightboxImage: ''
        }
    },
    methods: {
        activateLightbox (image) {
            this.lightboxImage = image;
        },
        disableLightbox () {
            this.isLightbox = false;
            this.lightboxImage = '';
        }
    },
    watch: {
        lightboxImage () {
            if(this.lightboxImage)
                this.isLightbox = true;
        }
    }
}
</script>

<style>

</style>