<script>

import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
  data() {
    return {
        projects: [],
        api: {
            baseUrl :'http://127.0.0.1:8000/api/',
        },

        pagination: {
          next: null,
          prev: null,
        },    
      };  
    },
    methods: {
        fetchProjects(uri = this.api.baseUrl + 'projects') {
            axios
            .get(uri)
            .then((response) => {
                this.projects = response.data.data;
                
                this.pagination.prev = response.data.prev_page_url;
                this.pagination.next = response.data.next_page_url;
            });
        },
    },
    
    created() {
        this.fetchProjects();
    },
    components: {ProjectCard},
}

</script>


<template>

<div class="container">
    <h1>  Lista progetti </h1>
    <div 
    class="row row-cols-3 g-4">
        <div class="col" v-for="project in projects">
            <ProjectCard :project = "project"> </ProjectCard>
        </div>
    </div>
    <div class="next-prev-buttons m-5  d-flex justify-content-between">
    <button class="btn btn-primary" @click="fetchProjects(pagination.prev)">Previous page</button>
    <button class="btn btn-primary" @click="fetchProjects(pagination.next)">Next page</button>
    </div>
</div>


</template>



<style lang="scss">

</style>